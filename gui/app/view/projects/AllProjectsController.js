Ext.define('PENKNIFE.controller.projects.AllProjectsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projects-allProjectsController',

    tapBACK_FindProject: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    getProject( th ) {
        let projectCmp = Ext.getCmp(Ext.fly(th.currentTarget).id),
            controller = projectCmp.lookupController()
        
        let levelSecond = controller.ctrlHome.lookupReference('LevelSecond')
        levelSecond.removeAll(true)
        levelSecond.add(Ext.create('PENKNIFE.view.projects.ProjectSimpleView', {
            controllerHome: controller.ctrlHome,
            controllerList: controller,
            idProject: projectCmp.idProject
        }))
        controller.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelSecond)
    },

    loadProjects() {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/projects/projectSearch.php`,
            params: {},
            success: response => {
                let result = Ext.JSON.decode(response.responseText)
                //result.data[0].email
                Ext.suspendLayouts()

                let cntAll = this.lookupReference('ContainerAllProjects'),
                    prjCmp = null
                
                result.data.forEach( prj => {
                    prjCmp = cntAll.add(Ext.create('Ext.Container', {
                        itemId: 'CntProjectTile',
                        cls: 'project-tile-cnt',
                        width: '100%',
                        maxWidth: 450,
                        margin: '0 0 20 0',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'label',
                                html: prj.nomeprogetto,
                                margin: '10 5 5 5',
                                cls: 'label-view-company-name',
                                style: {
                                    'text-align': 'center'
                                }
                            },
                            {
                                xtype: 'image',
                                src: `../imgrepo/projectsimages/${prj.image_1}`,
                                height: stdPKF.isPhone() ? 200 : 300,
                                margin: '0 5 5 5'
                            }
                        ],
                        idProject: prj.id,
                        listeners: {
                            element: 'element',
                            tap: 'getProject'
                        }
                    }))
                })

                Ext.resumeLayouts()
                
            },
            failure: (conn, response, options, eOpts) => {
            	let result = Ext.JSON.decode(response.responseText)
                Ext.Msg.alert(langPKF._translate('ATTENZIONE'), langPKF._translate(result.message))
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.loadProjects()
    }
});
