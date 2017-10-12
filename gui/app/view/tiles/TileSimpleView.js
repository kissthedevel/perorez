
Ext.define('PENKNIFE.view.tiles.TileSimpleView',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TileSimpleViewController'
    ],

    controller: 'tiles-TileSimpleView',

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
            itemId: 'ToolbarTileSimpleView', reference: 'ToolbarTileSimpleView',
            docked: 'top',
            /* localized: 'title',
            localizedKey: `CONTACT_US`, */
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_TileSimpleView', reference: 'BACK_TileSimpleView',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_TileSimpleView'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'LIKE_TileSimpleView', reference: 'LIKE_TileSimpleView',
                    iconCls: 'like-none'
                },
                {
                    xtype: 'button',
                    itemId: 'MORE_TileSimpleView', reference: 'MORE_TileSimpleView',
                    iconCls: 'context-menu'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            margin: '10 0 0 0',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    width: '100%',
                    height: 90,
                    margin: '0 0 10 0',
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'CntImageLogo', reference: 'CntImageLogo',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            height: '100%',
                            width: '100%',
                            items: [
                                {
                                    xtype: 'image',
                                    itemId: 'ImageLogo', reference: 'ImageLogo',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    itemId: 'LabelNameCompany', reference: 'LabelNameCompany',
                    cls: 'label-view-company-name'
                }
            ]
        }
    ]
});
