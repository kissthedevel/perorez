Ext.application({
    name : 'Fiddle',

    launch : function() {
        Ext.Viewport.add(Ext.create('Ext.Container', {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            scrollable: true,
        
            items: [
                {
                    xtype: 'toolbar',
                    itemId: 'ToolbarProjectCreate', reference: 'ToolbarProjectCreate',
                    docked: 'top',
                    localized: 'title',
                    localizedKey: `DATI_PERSONALI`,
                    title: 'Dati personali', //TODO
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'BACK_ProjectCreate', reference: 'BACK_ProjectCreate',
                            iconCls: 'left-arrow',
                            listeners: {
                                tap: 'tapBACK_ProjectCreate'
                            }
                        },
                        {
                            xtype: 'container',
                            flex: 1
                        },
                        {
                            xtype: 'button',
                            itemId: 'CONFIRM_ProjectCreate', reference: 'CONFIRM_ProjectCreate',
                            iconCls: 'pen-confirm',
                            listeners: {
                                tap: 'tapCONFIRM_ProjectCreate'
                            }
                        }
                    ]
                },
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
                                align: 'stretch',
                                pack: 'middle'
                            },
                            padding: 5,
                            height: 75,
                            width: 75,
                            margin: '20 0 15 0',
                            items: [
                                {
                                    xtype: 'image',
                                    src: 'https://image.flaticon.com/icons/svg/265/265674.svg',
                                    //src: 'https://image.flaticon.com/icons/svg/417/417776.svg',
                                    height: 48
                                }
                            ],
                            style: {
                                'background-color': 'white',
                                'border-radius': '200px',
                                'box-shadow': '1px 1px 2px gray',
                                'cursor': 'pointer'
                            }
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
                                    title: 'Iscrizione premium',    //TODO
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
                                            label: 'Email', //TODO
                                            inputCls: 'input-gen-penknife',
                                            margin: '0 0 10 0',
                                            name: 'email'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    localized: 'title',
                                    localizedKey: `PRESENTATI`,
                                    title: 'Presentati',    //TODO
                                    margin: '10 0 0 0',
                                    layout: 'vbox',
                                    items: [
                                        {
                                            xtype: 'container',
                                            //layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                            layout: 'vbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    localized: 'label',
                                                    localizedKey: `NOME`,
                                                    label: 'Nome', //TODO
                                                    inputCls: 'input-gen-penknife',
                                                    //flex: stdPKF.isPhone() ? null : 1,
                                                    flex: null,
                                                    //margin: stdPKF.isPhone() ? null : '0 10 0 0',
                                                    margin: null,
                                                    name: 'nome'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    localized: 'label',
                                                    localizedKey: `COGNOME`,
                                                    label: 'Cognome',   //TODO
                                                    inputCls: 'input-gen-penknife',
                                                    //flex: stdPKF.isPhone() ? null : 1,
                                                    flex: null,
                                                    //margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                                    margin: null,
                                                    name: 'cognome'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            margin: '10 0 0 0',
                                            //layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                            layout: 'vbox',
                                            items: [
                                                {
                                                    xtype: 'selectfield',
                                                    localized: 'label',
                                                    localizedKey: `SESSO`,
                                                    label: 'Sesso', //TODO
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
                                                    flex: null,
                                                    margin: null
                                                    //flex: stdPKF.isPhone() ? null : 1,
                                                    //margin: stdPKF.isPhone() ? null : '0 10 0 0'
                                                },
                                                {
                                                    xtype: 'datepickerfield',
                                                    localized: 'label',
                                                    localizedKey: `DATANASCITA`,
                                                    label: 'Data di nascita', //TODO
                                                    inputCls: 'input-gen-penknife',
                                                    //flex: stdPKF.isPhone() ? null : 1,
                                                    //margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                                    flex: null,
                                                    margin: null,
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
                                            label: 'Numero di telefono', //TODO
                                            inputCls: 'input-gen-penknife',
                                            margin: '10 0 0 0',
                                            name: 'telefono'
                                        },
                                        {
                                            xtype: 'container',
                                            margin: '10 0 0 0',
                                            layout: 'vbox',
                                            //layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                            items: [
                                                {
                                                    xtype: 'selectfield',
                                                    itemId: 'Country', reference: 'Country',
                                                    localized: 'label',
                                                    localizedKey: `NAZIONE`,
                                                    label: 'Nazione', //TODO
                                                    inputCls: 'input-gen-penknife',
                                                    name: 'nazione',
                                                    //store: Ext.create('PENKNIFE.view.auth.CountriesStore'),
                                                    displayField: 'valore',
                                                    valueField: 'codice',
                                                    flex: null,
                                                    margin: null
                                                    //flex: stdPKF.isPhone() ? null : 1,
                                                    //margin: stdPKF.isPhone() ? null : '0 10 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    localized: 'label',
                                                    localizedKey: `CITTA`,
                                                    label: 'Città', //TODO
                                                    inputCls: 'input-gen-penknife',
                                                    flex: null,
                                                    margin: null,
                                                    //flex: stdPKF.isPhone() ? null : 1,
                                                    //margin: stdPKF.isPhone() ? null : '0 0 0 10',
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
                                    title: 'Informazioni premium', //TODO
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
                                                    label: 'Azienda', //TODO
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
                                            //layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                            layout: 'vbox',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    layout: {
                                                        type: 'hbox',
                                                        align: 'middle'
                                                    },
                                                    //margin: stdPKF.isPhone() ? '0 0 20 0' : '0 10 0 0',
                                                    margin: '0 0 20 0',
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
                                                            label: 'Settore', //TODO
                                                            labelCls: 'pkf-label-bold-13',
                                                            inputCls: 'input-gen-penknife',
                                                            name: 'settore',
                                                            //store: Ext.create('PENKNIFE.view.auth.Settori'),
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
                                                    margin: null,
                                                    //margin: stdPKF.isPhone() ? null : '0 0 0 10',
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
                                                            label: 'Ruolo', //TODO
                                                            labelCls: 'pkf-label-bold-13',
                                                            inputCls: 'input-gen-penknife',
                                                            name: 'ruolo',
                                                            //store: Ext.create('PENKNIFE.view.auth.Ruoli'),
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
                                            //layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                                            layout:'vbox',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    layout: {
                                                        type: 'hbox',
                                                        align: 'middle'
                                                    },
                                                    //margin: stdPKF.isPhone() ? '0 0 20 0' : '0 10 0 0',
                                                    margin: '0 0 20 0',
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
															label: 'Fatturato', //TODO
                                                            labelCls: 'pkf-label-bold-13',
                                                            inputCls: 'input-gen-penknife',
                                                            name: 'fatturato',
                                                            //store: Ext.create('PENKNIFE.view.auth.Fatturato'),
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
                                                    //margin: stdPKF.isPhone() ? null : '0 0 0 10',
                                                    margin: null,
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
															label: 'Patrimonio', //TODO
                                                            labelCls: 'pkf-label-bold-13',
                                                            inputCls: 'input-gen-penknife',
                                                            name: 'patrimonio',
                                                            //store: Ext.create('PENKNIFE.view.auth.Patrimonio'),
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
                                                    localizedKey: `DISPONIBILE_INVESTIRE`,
													html: 'Disponibile ad investire', //TODO
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
                }
            ]
        }))
    }
});