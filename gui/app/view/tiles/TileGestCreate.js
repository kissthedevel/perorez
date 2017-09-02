Ext.define('PENKNIFE.view.tiles.TileGestCreate',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TileGestCreateController'
    ],

    controller: 'tiles-TileGestCreate',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    scrollable: true,
    cls: 'animated zoomInLeft',

    items: [
        {
            xtype: 'toolbar',
            itemId: 'ToolbarTileGestCreate', reference: 'ToolbarTileGestCreate',
            docked: 'top',
            localized: 'title',
            localizedKey: `INSERISCI_AZIENDA`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_TileGestCreate', reference: 'BACK_TileGestCreate',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_TileGestCreate'
                    }
                }
            ]
        }
    ]
});
