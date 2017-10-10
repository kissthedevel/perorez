
Ext.define('PENKNIFE.view.arch.UserInfo',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.UserInfoController'
    ],

    controller: 'arch-UserInfo',
    
    layout: {
        type: 'vbox',
        align: 'right'
    },
    flex: 1,

    items: [
        {
            xtype: 'label',
            itemId: 'LblUserToolbar', reference: 'LblUserToolbar',
            html: 'Rognoni Alessandro',
            cls: stdPKF.isPhone() ? 'label-user-toolbar-hamburger' : 'label-user-toolbar'
        },
        {
            xtype: 'label',
            itemId: 'LblUserCityToolbar', reference: 'LblUserCityToolbar',
            html: 'Rovereto, Italy',
            cls: stdPKF.isPhone() ? 'label-user-city-toolbar-hamburger' : 'label-user-city-toolbar'
        }
    ],
    listeners: {
        painted: 'paintedUserInfo'
    }
});
