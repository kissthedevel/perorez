Ext.define('PENKNIFE.view.tiles.TileSimpleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TileSimpleView',

    tapBACK_TileSimpleView: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    loadData: function(id) {
        Ext.Ajax.request({
            url: '../ws/company/companyGet.php',
            method: 'GET',
            params: {
                id: id
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                if (!Ext.isEmpty(result.data)) {
                    this.lookupReference('LabelNameCompany').setHtml(result.data[0].nomeazienda)

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
