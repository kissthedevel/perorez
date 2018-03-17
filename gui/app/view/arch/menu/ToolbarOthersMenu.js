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
            itemId: 'BtnEditUser', reference: 'BtnEditUser',
            cls: 'button-icon-24',
            iconCls: 'icon-user-male',
            flex: 1,
            listeners: {
                tap: 'tapBtnEditUser'
            }
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
            itemId: 'BtnLogout', reference: 'BtnLogout',
            cls: 'button-icon-24',
            iconCls: 'icon-logout-hamburger',
            flex: 1,
            listeners: {
                tap: 'tapBtnLogout'
            }
        }
    ]
});
