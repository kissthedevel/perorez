
Ext.define('PENKNIFE.view.tiles.TilesPalette',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TilesPaletteController'
    ],

    controller: 'tiles-TilesPalette',

    floated: true,
    modal: true,
    hideOnMaskTap: true,
    showAnimation: {
        type: 'slide',
        direction: 'right',
        duration: 250,
        easing: 'ease-in'
    },
    hideAnimation: {
        type: 'slideOut',
        duration: 250,
        easing: 'ease-out'
    },
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
        
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            localized: 'title',
            localizedKey: `SCEGLI_DIMENSIONI_TILE`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'CloseIconHamburger', reference: 'CloseIconHamburger',
                    iconCls: 'close-icon',
                    listeners: {
                        tap: 'tapCloseIcon'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            itemId: 'CntTileModels', reference: 'CntTileModels',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            scrollable: true
        }
    ]
});
