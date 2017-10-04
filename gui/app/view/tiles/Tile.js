Ext.define('PENKNIFE.view.tiles.Tile',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TileController'
    ],

    controller: 'tiles-Tile',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'image',
            itemId: 'ImageLogo', reference: 'ImageLogo',
            src: '',
            flex: 1
        }
    ]
});
