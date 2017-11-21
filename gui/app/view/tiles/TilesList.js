Ext.define('PENKNIFE.view.tiles.TilesList',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TilesListController',
        'PENKNIFE.view.tiles.TilesListStore'
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
        },
        {
            xtype: 'list',
            itemId: 'ListCompanyes', reference: 'ListCompanyes',
            flex: 1,
            store: Ext.create('PENKNIFE.view.tiles.TilesListStore'),
            disableSelection: true,
            loadingText: false,
            itemTpl:   `<tpl if="approved === 1">
                            <img id='approved-${Ext.id()}' src="resources/img/approved.svg" height='24' width='24' style="float:left;">
                        <tpl else>
                            <img id='waiting-${Ext.id()}' src="resources/img/waiting-time-left.svg" height='24' width='24' style="float:left;">
                        </tpl>
                        <span style="margin-left:10px; font-size:18px;">{nomeazienda}</span>
                        <img id='delete-${Ext.id()}' src="resources/img/rubbish-bin-delete-button.svg" height='24' width='24' style="float:right;">
                        <img id='edit-${Ext.id()}' src="resources/img/edit.svg" height='24' width='24' style="float:right; margin-right:10px;">
                        <tpl if="elite === 1">
                            <img id='elite-${Ext.id()}' src="resources/img/star-yellow.svg" height='24' width='24' style="float:right; margin-right:10px;">
                        </tpl>`,
            listeners: {
                itemtap: 'itemtapListCompanyes'
            }
        }
    ]
});
