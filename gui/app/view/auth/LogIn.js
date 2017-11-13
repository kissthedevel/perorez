
Ext.define('PENKNIFE.view.auth.LogIn',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.auth.LogInController'
    ],

    controller: 'auth-LogIn',

    floated: true,
    modal: true,
    hideOnMaskTap: true,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    scrollable: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    padding: 5,
                    width: 200,
                    margin: '0 0 15 0',
                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/img/pn-elegantt-red.png',
                            height: 48
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    itemId: 'SecUser', reference: 'SecUser',
                    localized: 'label',
                    localizedKey: `USERNAME`,
                    width: 200
                },
                {
                    xtype: 'passwordfield',
                    itemId: 'SecPw', reference: 'SecPw',
                    localized: 'label',
                    localizedKey: `PASSWORD`,
                    width: 200
                },
                {
                    xtype: 'button',
                    ui: 'confirm',
                    width: 200,
                    localized: 'text',
                    localizedKey: `SIGN_IN`,
                    style: {
                        'font-size': '20px'
                    },
                    listeners: {
                        tap: 'signinTap'
                    }
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    margin: '20 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            style: {
                                'font-size': '14px'
                            },
                            margin: stdPKF.isPhone() ? '10 5 0 0' : '3 5 0 0',
                            localized: 'html',
                            localizedKey: `NON_SEI_ANCORA_ISCRITTO`
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnEntraNelClub', reference: 'BtnEntraNelClub',
                            localized: 'text',
                            localizedKey: `SIGN_UP`,
                            listeners: {
                                tap: 'signupTap'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    margin: '5 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            style: {
                                'font-size': '14px'
                            },
                            margin: stdPKF.isPhone() ? '10 5 0 0' : '3 5 0 0',
                            localized: 'html',
                            localizedKey: `OPPURE`
                        },
                        {
                            xtype: 'button',
                            ui: 'decline',
                            flex: 1,
                            localized: 'text',
                            localizedKey: `ANNULLA`,
                            listeners: {
                                tap: 'tapCloseIcon'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
