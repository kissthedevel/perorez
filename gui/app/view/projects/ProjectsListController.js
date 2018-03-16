Ext.define('PENKNIFE.view.projects.ProjectsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projects-ProjectsList',

    addProject: function(controller) {
        let levelSecond = controller.ctrlHome.lookupReference('LevelSecond')
        levelSecond.removeAll(true)
        levelSecond.add(Ext.create('PENKNIFE.view.projects.ProjectGestCreate', {
            controllerHome: controller.ctrlHome,
            controllerList: controller
        }))
        controller.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelSecond)
    },

    updateProject( idProject ) {
        let levelSecond = this.ctrlHome.lookupReference('LevelSecond')
        levelSecond.removeAll(true)
        levelSecond.add(Ext.create('PENKNIFE.view.projects.ProjectGestCreate', {
            controllerHome: this.ctrlHome,
            controllerList: this,
            updateProject: idProject
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelSecond)
    },

    itemtapListProjects: function( th, index, target, record, e ) {
        let idTarget = e.target.id,
            store = this.lookupReference('ListProjects').getStore(),
            admin = PENKNIFE.globals.storeUserSimple.getData().items[0].get('administrator') === 1
        
        if (idTarget.indexOf('approved') != -1) {
            
        } else if (idTarget.indexOf('waiting') != -1) {
            if (!admin) {
                return false
            }

            store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 1)
            Ext.Ajax.request({
                url: `${PENKNIFEwsDomain}ws/projects/projectApprove.php`,
                method: 'GET',
                params: {
                    disableLoadMask: true,
                    id: record.get('id'),
                    approved: 1,
                    approver: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
                },
                success: response => {
                },
                failure: (conn, response, options, eOpts) => {
                    store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 0)
                }
            })
        } else if (idTarget.indexOf('edit') != -1) {
            this.updateProject(record.get('id'))
        } else if (idTarget.indexOf('delete') != -1) {
            if (!admin) {
                return false
            }

            Ext.Msg.confirm('Attenzione!', `Sei sicuro di voler eliminare "${record.get('nomeprogetto')}"?`, ( buttonId, value, opt) => {
                if( buttonId === 'yes' ) {
                    Ext.Ajax.request({
                        url: `${PENKNIFEwsDomain}ws/projects/projectDelete.php`,
                        method: 'GET',
                        params: {
                            id: record.get('id')
                        },
                        success: response => {
                            this.updateList()
                        },
                        failure: (conn, response, options, eOpts) => {
                        }
                    })
                }
            })
        } else {
            //itemtap classico
        }
    },

    tapBACK_ProjectsList: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    updateList: function() {
        let store = this.lookupReference('ListProjects').getStore()

        store.load({
            params: {
                disableLoadMask: true,
                creator: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
            },
            callback: (records, operation, success) => {
                let admin = PENKNIFE.globals.storeUserSimple.getData().items[0].get('administrator') === 1
                store.each( rec => rec.set('administrator', admin ? 1 : 0))

                if (!this.view.FAB) {
                    this.createFAB()
                }
            }
        })
    },

    createFAB: function() {
        this.view.FAB = Ext.create('PENKNIFE.customcomponents.FAB',{
            bottom: 20,
            right: 20,
            menuButtonDefault: {
                FAB_id: 'FAB_projectsList',
                icon: 'resources/img/add-white.svg',
                handler: () => {
                    this.addProject(this)
                }
            }
        })
        this.view.FAB_id = 'FAB_projectsList'
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.updateList()
    },

    destroy: function() {
        //this.getView().FAB.destroy()
    }
});
