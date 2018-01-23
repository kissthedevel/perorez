Ext.define('PENKNIFE.view.tiles.TileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-Tile',

    callNewTile: function() {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/company/companyTile.php`,
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
                    this.idTileActual = result.data[0].id
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

    getCompany: function() {
        if( !this.ctrlHome ) {
            this.ctrlHome = this.view.up('#LevelHome').lookupController()
        }

        let levelFirst = this.ctrlHome.lookupReference('LevelFirst'),
            levelHome = this.ctrlHome.lookupReference('LevelHome')

        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
        levelFirst.removeAll(true)
        levelFirst.add(Ext.create('PENKNIFE.view.tiles.TileSimpleView', {
            controllerHome: this.ctrlHome,
            idTile: this.idTileActual
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    init: function() {
        this.view = this.getView()
        this.ctrlPanelTiles = this.view.controllerPanelTiles
        this.tileSize = this.view.tileSize

        if (!this.view.disableAutoUpdate) {
            this.callNewTile()
        }
    },

    destroy: function() {
    }
});
