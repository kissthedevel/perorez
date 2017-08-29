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
    flex: 1,

    items: [
        
    ]
});
