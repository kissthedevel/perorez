Ext.define('PENKNIFE.view.projects.ProjectSimpleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projects-ProjectSimpleView',

    tapBACK_ProjectSimpleView: function() {
        let cntMainContent = this.ctrlHome.lookupReference('CntMainContent')
        cntMainContent.setActiveItem(1)
    },

    /* tapLIKE_ProjectSimpleView(th) {
        th.setIconCls( th.getIconCls() === 'like-none' ? 'like-yeah' : 'like-none' )
        th.addCls('animated tada')
        setTimeout(() => {
            th.removeCls('animated tada')
        }, 1000)

        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/company/companyLike.php`,
            method: 'GET',
            params: {
                id_user: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id'),
                id_company: this.id_company
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                th.setIconCls( result.data.length > 0 ? 'like-yeah' : 'like-none' )
                //if (!Ext.isEmpty(result.data)) {
                //}
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	console.log(result)
            }
        })
    }, */

    loadData: function(id) {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/projects/projectGet.php`,
            method: 'GET',
            params: {
                id: id,
                lang: PENKNIFE.globals.language === 'zh_CN' ? 'zh' : PENKNIFE.globals.language
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                if (!Ext.isEmpty(result.data)) {
                    this.lookupReference('LabelNameProject').setHtml(result.data[0].nomeprogetto)
                    this.lookupReference('DescriptionProject').setHtml(result.data[0].description)
                    
                    let pref = '../imgrepo/projectsimages/',
                        empty = 'resources/img/emptyimage.svg',
                        img1 = result.data[0].image_1 ? `${pref}${result.data[0].image_1}` : empty,
                        img2 = result.data[0].image_2 ? `${pref}${result.data[0].image_2}` : empty,
                        img3 = result.data[0].image_3 ? `${pref}${result.data[0].image_3}` : empty
                    
                    this.lookupReference('CardImage1').setSrc(img1)
                    this.lookupReference('CardImage2').setSrc(img2)
                    this.lookupReference('CardImage3').setSrc(img3)

                    this.lookupReference('LabelCompany').setHtml(result.data[0].aziendaideatrice)

                    let labelSettore = this.lookupReference('LabelSettore')
                    this.lookupReference('CntSettore').setHidden(Ext.isEmpty(result.data[0].settore))
                    if (!Ext.isEmpty(result.data[0].settore)) {
                        let stSett = Ext.create('PENKNIFE.view.auth.Settori'),
                            settTransrec = stSett.getAt(stSett.findExact('codice', result.data[0].settore)),
                            settTrans = settTransrec.get(PENKNIFE.globals.language === 'it' ? 'valoreIT' :
                                            ( PENKNIFE.globals.language === 'zh_CN' ? 'valoreCN' : 'valoreEN' ) )
                        
                        labelSettore.setHtml(settTrans)
                    }

                    this.id_project = result.data[0].id
                    //this.loadLike(this.id_project)
                }
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	console.log(result)
            }
        })
    },

    /* loadLike(idProject) {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/company/companyIsLike.php`,
            method: 'GET',
            params: {
                disableLoadMask: true,
                id_company: idProject,
                id_user: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                this.lookupReference('LIKE_ProjectSimpleView').setIconCls( result.data.length > 0 ? 'like-yeah' : 'like-none' )
                //if (!Ext.isEmpty(result.data)) {
                //}
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	console.log(result)
            }
        })
    }, */

    init: function() {
        Ext.suspendLayouts()

        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        Ext.defer( () => this.lookupReference('ProjectCarousel').show(), 800)

        this.loadData(this.view.idProject)

        this.listAttach = Ext.create('PENKNIFE.view.projects.ProjectsAttachList', {
            idProject: this.view.idProject
        })
        this.lookupReference('CntAttach').add(this.listAttach)
        this.listAttach.lookupController().updateList()

        Ext.resumeLayouts()
    }
});
