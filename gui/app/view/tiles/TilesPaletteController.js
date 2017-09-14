Ext.define('PENKNIFE.view.tiles.TilesPaletteController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TilesPalette',

    tapCloseIcon: function(th) {
        this.getView().hide()
    },
    onChooseTile: function(el) {
        let container = Ext.getCmp(el.delegatedTarget.id),
            tileSize = container.tileSize
        this.controllerGest.lookupReference('TileSample_Size').setValue(tileSize)
        let tileSample = this.controllerGest.lookupReference('TileSample')
        tileSample.setWidth(container.getWidth())
        tileSample.setHeight(container.getHeight())
        tileSample.down('label').setHtml(tileSize)
        this.getView().hide()
    },

    init: function() {
        this.view = this.getView()
        this.controllerGest = this.view.controllerGest

        cntMod = this.lookupReference('CntTileModels')
        for (var key in PENKNIFE.globals.dimensionTiles) {
            cntMod.add({
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'middle',
                    pack: 'center'
                },
                width: PENKNIFE.globals.dimensionTiles[key][0],
                height: PENKNIFE.globals.dimensionTiles[key][1],
                tileSize: key,
                margin: 10,
                style: {
                    'background-color': '#c5cae9',
                    'box-shadow': '1px 1px 2px darkgrey'
                },
                items: [
                    {
                        xtype: 'label',
                        html: key,
                        style: {
                            'text-align': 'center',
                            color: 'red',
                            'font-weight': 'bold'
                        }
                    }
                ],
                listeners: {
                    element: 'element',
                    tap: 'onChooseTile'
                }
            })
        }
    }
});
