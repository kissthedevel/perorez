Ext.define('PENKNIFE.view.tiles.TileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-Tile',

    callNewTile: function() {
        Ext.Ajax.request({
            url: '../ws/company/companyTile.php',
            method: 'GET',
            params: {
                disableLoadMask: true,
                tilesize: this.tileSize
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                if (!Ext.isEmpty(result.data)) {
                    let img = this.lookupReference('ImageLogo'),
                        cnt = img.up('container')
                    img.setSrc(`../imgrepo/companylogos/${result.data[0].tilelogo}`)
                    cnt.setStyle({
                        'background-color': result.data[0].tilecolor
                    })
                    cnt.addCls('animated flipInX')
                    setTimeout(() => {
                        cnt.removeCls('animated flipInX')
                    }, 2000);
                    setTimeout(() => {
                        this.callNewTile()
                    }, result.data[0].latency * 1000)
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
        this.ctrlPanelTiles = this.view.controllerPanelTiles
        this.tileSize = this.view.tileSize

        this.callNewTile()
    },

    destroy: function() {
    }
});
