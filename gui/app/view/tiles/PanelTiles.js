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
    height: 50,
    style: {
        'background-color': 'red'
    },

    items: PENKNIFE.std.isPhone() ? [
        /**
         * SMARTPHONE
         */
        {
            xtype: 'container',
            height: 30
        }
    ] : [
        /**
         * TABLET / DESKTOP
         */

    ]
});
