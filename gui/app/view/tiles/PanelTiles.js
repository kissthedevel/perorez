Ext.define('PENKNIFE.view.tiles.PanelTiles',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.PanelTilesController'
    ],

    controller: 'tiles-PanelTiles',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: PENKNIFE.std.getPanelTilesSize().height,
    cls: 'button-red'
});
