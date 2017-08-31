Ext.define('PENKNIFE.view.tiles.PanelTilesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-PanelTiles',

    init: function() {
        /* this.lookupReference('ArchHome').add(Ext.create('Ext.Button', {
            text: 'cippa'
        })) */
        /* if (PENKNIFE.std.isPhone()) {
            this.getView().add(Ext.create('PENKNIFE.view.tiles.SchemaSingle', {
                controllerPanelTiles: this
            }))
        } else {
            
        } */

        let countPanelTiles =  PENKNIFE.std.getPanelTilesSize().type,
            cntListPanels = Ext.create('Ext.Container', {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                flex: 1
            })
        
        this.getView().add(cntListPanels)

        for (var index = 0; index < countPanelTiles; index++) {
            cntListPanels.add(Ext.create('PENKNIFE.view.tiles.SchemaSingle', {
                controllerPanelTiles: this
            }))            
        }

    }
});
