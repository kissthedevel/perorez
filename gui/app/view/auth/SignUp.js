
Ext.define('PENKNIFE.view.auth.SignUp',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.auth.SignUpController'
    ],

    controller: 'auth-SignUp',

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
                align: 'middle'
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
                    margin: '20 0 15 0',
                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/img/pn-elegantt-red.png',
                            height: 48
                        }
                    ]
                },
                {
                    xtype: 'formpanel',
                    itemId: 'FormSignUp', reference: 'FormSignUp',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            localized: 'title',
                            localizedKey: `ISCRIZIONE_PREMIUM`,
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'id',
                                    hidden: true
                                },
                                {
                                    xtype: 'emailfield',
                                    localized: 'label',
                                    localizedKey: `EMAIL`,
                                    inputCls: 'input-gen-penknife',
                                    margin: '0 0 10 0',
                                    name: 'email'
                                },
                                {
                                    xtype: 'container',
                                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                    items: [
                                        {
                                            xtype: 'passwordfield',
                                            name: 'password',
                                            localized: 'label',
                                            localizedKey: `SCEGLI_PASSWORD`,
                                            inputCls: 'input-gen-penknife',
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 10 0 0'
                                        },
                                        {
                                            xtype: 'passwordfield',
                                            name: 'passwordcheck',
                                            localized: 'label',
                                            localizedKey: `RIPETI_PASSWORD`,
                                            inputCls: 'input-gen-penknife',
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 0 0 10'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            localized: 'title',
                            localizedKey: `PRESENTATI`,
                            margin: '10 0 0 0',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            localized: 'label',
                                            localizedKey: `NOME`,
                                            inputCls: 'input-gen-penknife',
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 10 0 0',
                                            name: 'nome'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localized: 'label',
                                            localizedKey: `COGNOME`,
                                            inputCls: 'input-gen-penknife',
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                            name: 'cognome'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 0 0',
                                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                    items: [
                                        {
                                            xtype: 'selectfield',
                                            localized: 'label',
                                            localizedKey: `SESSO`,
                                            inputCls: 'input-gen-penknife',
                                            name: 'sesso',
                                            options: [
                                                {
                                                    text: 'Choose',
                                                    value: null
                                                },
                                                {
                                                    text: 'Male',
                                                    value: 'M'
                                                },
                                                {
                                                    text: 'Female',
                                                    value: 'F'
                                                },
                                                {
                                                    text: 'Other',
                                                    value: 'O'
                                                }
                                            ],
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 10 0 0'
                                        },
                                        {
                                            xtype: 'datepickerfield',
                                            localized: 'label',
                                            localizedKey: `DATANASCITA`,
                                            inputCls: 'input-gen-penknife',
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                            name: 'datanascita',
                                            listeners: {
                                                initialize: th => th.getPicker().setYearFrom(1920)
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    localized: 'label',
                                    localizedKey: `NTELEFONO`,
                                    inputCls: 'input-gen-penknife',
                                    margin: '10 0 0 0',
                                    name: 'telefono'
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 0 0',
                                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                    items: [
                                        {
                                            xtype: 'selectfield',
                                            itemId: 'Country', reference: 'Country',
                                            localized: 'label',
                                            localizedKey: `NAZIONE`,
                                            inputCls: 'input-gen-penknife',
                                            name: 'nazione',
                                            store: Ext.create('PENKNIFE.view.auth.CountriesStore'),
                                            displayField: 'valore',
                                            valueField: 'codice',
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 10 0 0'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localized: 'label',
                                            localizedKey: `CITTA`,
                                            inputCls: 'input-gen-penknife',
                                            flex: stdPKF.isPhone() ? null : 1,
                                            margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                            name: 'citta'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            itemId: 'PremiumFields', reference: 'PremiumFields',
                            localized: 'title',
                            localizedKey: `INFORMAZIONI_PREMIUM`,
                            margin: '15 0 0 0',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'middle'
                                    },
                                    margin: '10 0 10 0',
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: 'resources/img/star.svg',
                                            height: 24,
                                            width: 24
                                        },
                                        {
                                            xtype: 'textfield',
                                            localized: 'label',
                                            localizedKey: `AZIENDA`,
                                            labelCls: 'pkf-label-bold-13',
                                            inputCls: 'input-gen-penknife',
                                            margin: '0 0 0 10',
                                            name: 'azienda',
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 10 0',
                                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'middle'
                                            },
                                            margin: stdPKF.isPhone() ? '0 0 20 0' : '0 10 0 0',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    src: 'resources/img/star.svg',
                                                    height: 24,
                                                    width: 24
                                                },
                                                {
                                                    xtype: 'selectfield',
                                                    itemId: 'Settore', reference: 'Settore',
                                                    localized: 'label',
                                                    localizedKey: `SETTORE`,
                                                    labelCls: 'pkf-label-bold-13',
                                                    inputCls: 'input-gen-penknife',
                                                    name: 'settore',
                                                    store: Ext.create('PENKNIFE.view.auth.Settori'),
                                                    displayField: 'valoreIT',
                                                    valueField: 'codice',
                                                    flex: 1,
                                                    margin: '0 0 0 10'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'middle'
                                            },
                                            margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    src: 'resources/img/star.svg',
                                                    height: 24,
                                                    width: 24
                                                },
                                                {
                                                    xtype: 'selectfield',
                                                    itemId: 'Ruolo', reference: 'Ruolo',
                                                    localized: 'label',
                                                    localizedKey: `RUOLO`,
                                                    labelCls: 'pkf-label-bold-13',
                                                    inputCls: 'input-gen-penknife',
                                                    name: 'ruolo',
                                                    store: Ext.create('PENKNIFE.view.auth.Ruoli'),
                                                    displayField: 'valoreIT',
                                                    valueField: 'codice',
                                                    flex: 1,
                                                    margin: '0 0 0 10'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 10 0',
                                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'middle'
                                            },
                                            margin: stdPKF.isPhone() ? '0 0 20 0' : '0 10 0 0',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    src: 'resources/img/star.svg',
                                                    height: 24,
                                                    width: 24
                                                },
                                                {
                                                    xtype: 'selectfield',
                                                    itemId: 'Fatturato', reference: 'Fatturato',
                                                    localized: 'label',
                                                    localizedKey: `FATTURATO`,
                                                    labelCls: 'pkf-label-bold-13',
                                                    inputCls: 'input-gen-penknife',
                                                    name: 'fatturato',
                                                    store: Ext.create('PENKNIFE.view.auth.Fatturato'),
                                                    displayField: 'valoreIT',
                                                    valueField: 'codice',
                                                    flex: 1,
                                                    margin: '0 0 0 10'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'middle'
                                            },
                                            margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    src: 'resources/img/star.svg',
                                                    height: 24,
                                                    width: 24
                                                },
                                                {
                                                    xtype: 'selectfield',
                                                    itemId: 'Patrimonio', reference: 'Patrimonio',
                                                    localized: 'label',
                                                    localizedKey: `PATRIMONIO`,
                                                    labelCls: 'pkf-label-bold-13',
                                                    inputCls: 'input-gen-penknife',
                                                    name: 'patrimonio',
                                                    store: Ext.create('PENKNIFE.view.auth.Patrimonio'),
                                                    displayField: 'valoreIT',
                                                    valueField: 'codice',
                                                    flex: 1,
                                                    margin: '0 0 0 10'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'middle'
                                    },
                                    margin: '10 0 15 0',
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: 'resources/img/star.svg',
                                            height: 24,
                                            width: 24
                                        },
                                        {
                                            xtype: 'label',
                                            cls: 'color-red',
                                            style: {
                                                'font-weight': 'bold'
                                            },
                                            margin: '5 10 0 10',
                                            localized: 'html',            
                                            localizedKey: `DISPONIBILE_INVESTIRE`
                                        },
                                        {
                                            xtype: 'togglefield',
                                            name: 'investitore',
                                            margin: '5 0 0 0'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            cls: 'toolbar-menu-minimal',
            items: [
                {
                    xtype: 'button',
                    itemId: 'CloseSignUp', reference: 'CloseSignUp',
                    iconCls: 'close-icon',
                    listeners: {
                        tap: 'tapCloseSignUp'
                    }
                },
                {
                    xtype: 'button',
                    flex: 1,
                    ui: 'action',
                    cls: 'button-green',
                    margin: 10,
                    maxWidth: 350,
                    localized: 'text',
                    localizedKey: `CONFERMA_ISCRIZIONE`,
                    style: {
                        color: 'white'
                    },
                    listeners: {
                        tap: 'tapSignUp'
                    }
                }
            ]
        }
    ]
});
