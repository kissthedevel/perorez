Ext.define('PENKNIFE.view.arch.menu.ToolbarOthersMenu',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.menu.ToolbarOthersMenuController'
    ],

    controller: 'arch-menu-ToolbarOthersMenu',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'button',
            cls: 'button-icon-24',
            iconCls: 'icon-user-male',
            flex: 1,                    
        },
        {
            xtype: 'button',
            itemId: 'BtnSendMessage', reference: 'BtnSendMessage',
            cls: 'button-icon-24',
            iconCls: 'icon-send-message',
            flex: 1,
            listeners: {
                tap: 'tapBtnSendMessage'
            }
        },
        {
            xtype: 'button',
            cls: 'button-icon-24',
            iconCls: 'icon-logout-hamburger',
            flex: 1
        }
    ]
});
