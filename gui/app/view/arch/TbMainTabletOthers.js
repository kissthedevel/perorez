
Ext.define('PENKNIFE.view.arch.TbMainTabletOthers',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.TbMainTabletOthersController'
    ],

    controller: 'arch-TbMainTabletOthers',
    
    layout: {
        type: 'hbox'
    },

    items: [
        {
            xtype: 'container',
            itemId: 'CntUnlogged', reference: 'CntUnlogged',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'button',
                    itemId: 'BtnTbPlayClip', reference: 'BtnTbPlayClip',
                    cls: 'play-clip-round'
                },
                {
                    xtype: 'button',
                    itemId: 'BtnTbContactUs', reference: 'BtnTbContactUs',
                    //text: PENKNIFE.lang._translate(`CONTACT_US`),
                    localizedKey: `CONTACT_US`,
                    localized: 'text',
                    ui: 'action',
                    cls: 'button-toolbar-light',
                    margin: '0 0 0 15'
                }
            ]
        },
        {
            xtype: 'container',
            itemId: 'CntLogged', reference: 'CntLogged',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            hidden: true,
            items: [
                {
                    xtype: 'container',
                    itemId: 'CntTbUserInfo', reference: 'CntTbUserInfo',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    height: 42,
                    margin: '0 15 0 0'
                },
                {
                    xtype: 'button',
                    cls: 'icon-logout-mini-white'
                }
            ]
        }
    ]
});
