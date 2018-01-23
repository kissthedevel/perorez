Ext.define('PENKNIFE.view.tiles.TileSimpleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TileSimpleView',

    tapBACK_TileSimpleView: function() {
        let cntMainContent = this.ctrlHome.lookupReference('CntMainContent'),
            livelloNavigazione = this.getView().up('[levelContainer]').livelloNavigazione
            levelTo = cntMainContent.query(`[livelloNavigazione=${livelloNavigazione-1}]`)[0]

        cntMainContent.setActiveItem(levelTo)
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
                }
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
