
Ext.define('PENKNIFE.view.auth.PreSignUp',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.auth.PreSignUpController'
    ],

    controller: 'auth-PreSignUp',

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
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'button',
                            width: 100,
                            height: 100,
                            margin: '0 15 0 0',
                            cls: 'btn-member-big animated zoomInLeft',
                            iconCls: 'premium-member-big',
                            iconAlign: 'top',
                            localized: 'text',
                            localizedKey: `PREMIUM_MEMBER`
                        },
                        {
                            xtype: 'button',
                            width: 100,
                            height: 100,
                            margin: '0 0 0 15',
                            cls: 'btn-member-big animated zoomInRight',
                            iconCls: 'classic-member-big',
                            iconAlign: 'top',
                            localized: 'text',
                            localizedKey: `CLASSIC_MEMBER`
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            width: 135,
                            margin: '10 15 0 0',
                            cls: 'animated zoomInLeft',
                            style: {
                                'text-align': 'right',
                                color: '#B71C1C',
                                'font-size': '12px',
                                'font-weight': '600'
                            },
                            localized: 'html',
                            localizedKey: `SLOGAN_PREMIUM`
                        },
                        {
                            xtype: 'label',
                            width: 135,
                            margin: '10 0 0 15',
                            cls: 'animated zoomInRight',
                            style: {
                                color: '#B71C1C',
                                'font-size': '12px',
                                'font-weight': '600'
                            },
                            localized: 'html',
                            localizedKey: `SLOGAN_CLASSIC`
                        }
                    ]
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
                            localizedKey: `SEI_GIA_ISCRITTO`
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnSignIn', reference: 'BtnSignIn',
                            localized: 'text',
                            localizedKey: `SIGN_IN`,
                            listeners: {
                                tap: 'tapBtnSignIn'
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
