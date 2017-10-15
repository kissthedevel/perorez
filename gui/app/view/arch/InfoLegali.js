
Ext.define('PENKNIFE.view.arch.InfoLegali',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.InfoLegaliController'
    ],

    controller: 'arch-InfoLegali',
    
    layout: {
        type: 'vbox',
        align: 'middle',
        pack: 'center'
    },
    padding: '20 0 5 0',
    
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            width: stdPKF.isPhone() ? '90%' : '95%',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'start'
                    },
                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/img/logo_penknife.png',
                            height: 30,
                            width: 30
                        },
                        {
                            xtype: 'image',
                            src: 'resources/img/pn-elegantt.png',
                            height: 30,
                            width: 82,
                            margin: '3 0 0 10'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: stdPKF.isPhone() ? 'vbox' : 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            defaults: {
                                xtype: 'label',
                                cls: 'label-info-legali',
                                localized: 'html',
                                margin: '5 0 0 0'
                            },
                            items: [
                                {
                                    localizedKey: `LAB_COPYRIGHT`
                                },
                                {
                                    localizedKey: `SEDE_LEGALE`
                                },
                                {
                                    localized: null,
                                    html: `Riva del Garda, 38066 <br> Viale Damiano Chiesa 8 - IT`
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            hidden: stdPKF.isPhone(),
                            width: 1,
                            style: {
                                'background-color': 'red'
                            },
                            margin: '0 15 0 15'
                        },
                        {
                            xtype: 'container',
                            hidden: !stdPKF.isPhone(),
                            height: 1,
                            width: '80%',
                            style: {
                                'background-color': 'red'
                            },
                            margin: '5 0 5 0'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                pack: !stdPKF.isPhone() ? 'end' : 'null'
                            },
                            defaults: {
                                xtype: 'label',
                                cls: 'label-info-legali',
                                localized: 'html',
                                margin: '5 0 0 0'
                            },
                            items: [
                                {
                                    localized: null,
                                    html: `E-mail: penknife@penknifeinvestment.com`
                                },
                                {
                                    localized: null,
                                    html: `C.F. e P.I.: 02477650226`
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox'
                    },
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'button',
                            cls: 'buttons-privacy-cookie',
                            /* listeners: {
                                tap: 'tapBtnUnloggedTabletSignIn'
                            }, */
                            flex: stdPKF.isPhone() ? 1 : null,
                            localized: 'text',
                            localizedKey: `PRIVACY_POLICY`
                        },
                        {
                            xtype: 'button',
                            cls: 'buttons-privacy-cookie',
                            /* listeners: {
                                tap: 'tapBtnUnloggedTabletSignIn'
                            }, */
                            flex: stdPKF.isPhone() ? 1 : null,
                            localized: 'text',
                            localizedKey: `COOKIE_POLICY`
                        }
                    ]
                }
            ]
        }
    ]
});
