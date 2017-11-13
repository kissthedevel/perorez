
Ext.define('PENKNIFE.view.arch.menu.TbMainMenuUnloggedTablet',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.menu.TbMainMenuUnloggedTabletController'
    ],

    controller: 'arch-menu-TbMainMenuUnloggedTablet',

    itemId: 'CntTbMainMenuUnloggedTablet', reference: 'CntTbMainMenuUnloggedTablet',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'button',
            itemId: 'BtnUnloggedTabletSignUp', reference: 'BtnUnloggedTabletSignUp',
            ui: 'action',
            cls: 'button-green button-sign-up-big',
            height: 80,
            margin: '0 10 10 10',
            localized: 'text',
            localizedKey: `SIGN_UP`,
            listeners: {
                tap: 'tapBtnUnloggedTabletSignUp'
            }
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'label',
                    html: 'sei già iscritto?',
                    style: {
                        'font-size': '14px'
                    },
                    margin: '10 15 0 15',
                    localized: 'html',
                    localizedKey: `SEI_GIA_ISCRITTO`
                },
                {
                    xtype: 'button',
                    itemId: 'BtnUnloggedTabletSignIn', reference: 'BtnUnloggedTabletSignIn',
                    cls: 'button-text-red',
                    /* cls: 'button-red',
                    ui: 'action', */
                    flex: 1,
                    listeners: {
                        tap: 'tapBtnUnloggedTabletSignIn'
                    },
                    margin: '5 10 5 10',
                    localized: 'text',
                    localizedKey: `SIGN_IN`
                }
            ]
        }
    ]
});
