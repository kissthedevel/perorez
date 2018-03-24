Ext.define('PENKNIFE.view.auth.UsersList',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.auth.UsersListController',
        'PENKNIFE.view.auth.UsersListStore',
        'PENKNIFE.view.auth.UserPanel'
    ],

    controller: 'auth-UsersList',
    
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
            itemId: 'ToolbarUsersList', reference: 'ToolbarUsersList',
            docked: 'top',
            localized: 'title',
            localizedKey: `GEST_USERS`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_UsersList', reference: 'BACK_UsersList',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_UsersList'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'FIND_UsersList', reference: 'FIND_UsersList',
                    iconCls: 'lens-find',
                    hidden: true
                }
            ]
        },
        {
            xtype: 'list',
            itemId: 'ListUsers', reference: 'ListUsers',
            flex: 1,
            store: Ext.create('PENKNIFE.view.auth.UsersListStore'),
            disableSelection: true,
            loadingText: false,
            itemTpl:   `<tpl if="attivo === 1">
                            <img id='approved-${Ext.id()}' src="resources/img/approved.svg" height='24' width='24' style="float:left;">
                        <tpl else>
                            <img id='waiting-${Ext.id()}' src="resources/img/waiting-time-left.svg" height='24' width='24' style="float:left;">
                        </tpl>
                        <tpl if="account_type === 'p'">
                            <img id='premium-${Ext.id()}' src="resources/img/small-crown.svg" height='24' width='24' style="float:left; margin-left: 8px;">
                        </tpl>
                        <tpl if="account_type === 'i'">
                            <img id='investor-${Ext.id()}' src="resources/img/growth.svg" height='24' width='24' style="float:left; margin-left: 8px;">
                        </tpl>
                        <tpl if="account_type === 'c'">
                            <img id='classic-${Ext.id()}' src="resources/img/approved-signal.svg" height='24' width='24' style="float:left; margin-left: 8px;">
                        </tpl>
                        <span style="margin-left:10px; font-size:18px;">{nominativo}</span>
                        <img id='delete-${Ext.id()}' src="resources/img/rubbish-bin-delete-button.svg" height='24' width='24' style="float:right;">`,
            listeners: {
                itemtap: 'itemtapListUsers'
            }
        }
    ]
});
