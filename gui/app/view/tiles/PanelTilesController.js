Ext.define('PENKNIFE.view.tiles.PanelTilesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-PanelTiles',

    init: function() {
        /* this.lookupReference('ArchHome').add(Ext.create('Ext.Button', {
            text: 'cippa'
        })) */
        if (PENKNIFE.std.isPhone()) {
            this.getView().add(Ext.create('PENKNIFE.view.tiles.SchemaSingle', {
                controllerPanelTiles: this
            }))
        }
    }
});
