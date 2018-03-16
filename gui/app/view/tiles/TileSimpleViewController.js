Ext.define('PENKNIFE.view.tiles.TileSimpleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TileSimpleView',

    tapBACK_TileSimpleView: function() {
        let cntMainContent = this.ctrlHome.lookupReference('CntMainContent'),
            livelloNavigazione = this.getView().up('[levelContainer]').livelloNavigazione
            levelTo = cntMainContent.query(`[livelloNavigazione=${livelloNavigazione-1}]`)[0]

        cntMainContent.setActiveItem(levelTo)
    },

    tapLIKE_TileSimpleView(th) {
        th.setIconCls( th.getIconCls() === 'like-none' ? 'like-yeah' : 'like-none' )

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
                /* if (!Ext.isEmpty(result.data)) {
                } */
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	console.log(result)
            }
        })
    },

    loadData: function(id) {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/company/companyGet.php`,
            method: 'GET',
            params: {
                id: id,
                lang: PENKNIFE.globals.language === 'zh_CN' ? 'zh' : PENKNIFE.globals.language
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                if (!Ext.isEmpty(result.data)) {
                    this.lookupReference('LabelNameCompany').setHtml(result.data[0].nomeazienda)
                    this.lookupReference('DescriptionCompany').setHtml(result.data[0].description)
                    
                    let img = this.lookupReference('ImageLogo')
                    img.setSrc(`../imgrepo/companylogos/${result.data[0].tilelogo}`)

                    this.id_company = result.data[0].id
                    this.loadLike(this.id_company)
                }
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	console.log(result)
            }
        })
    },

    loadLike(idTile) {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/company/companyIsLike.php`,
            method: 'GET',
            params: {
                disableLoadMask: true,
                id_company: idTile,
                id_user: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                this.lookupReference('LIKE_TileSimpleView').setIconCls( result.data.length > 0 ? 'like-yeah' : 'like-none' )
                /* if (!Ext.isEmpty(result.data)) {
                } */
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	console.log(result)
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.loadData(this.view.idTile)
    }
});
