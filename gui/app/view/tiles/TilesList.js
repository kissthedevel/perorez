Ext.define('PENKNIFE.view.tiles.TilesList',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TilesListController'
    ],

    controller: 'tiles-TilesList',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    scrollable: true,
    cls: 'animated zoomInLeft  background-gen',

    items: [
        {
            xtype: 'toolbar',
            itemId: 'ToolbarTilesList', reference: 'ToolbarTilesList',
            docked: 'top',
            localized: 'title',
            localizedKey: `LE_MIE_AZIENDE`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_TilesList', reference: 'BACK_TilesList',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_TilesList'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'FIND_TilesList', reference: 'FIND_TilesList',
                    iconCls: 'lens-find'
                }
            ]
        }
    ]
});
