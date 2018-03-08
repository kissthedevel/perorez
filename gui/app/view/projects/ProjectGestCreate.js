Ext.define('PENKNIFE.view.projects.ProjectGestCreate',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.projects.ProjectGestCreateController'
    ],

    controller: 'projects-ProjectGestCreate',
    
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
            itemId: 'ToolbarProjectCreate', reference: 'ToolbarProjectCreate',
            docked: 'top',
            localized: 'title',
            localizedKey: `INSERISCI_PROGETTO`,
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
            xtype: 'formpanel',
            itemId: 'Form_ProjectCreate', reference: 'Form_ProjectCreate',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    localized: 'title',
                    localizedKey: `DATI_PRINCIPALI`,
                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'id',
                            hidden: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'nomeprogetto',
                            localized: 'label',
                            localizedKey: `NOME_PROGETTO`,
                            inputCls: 'input-gen-penknife',
                            flex: stdPKF.isPhone() ? null : 1,
                            margin: stdPKF.isPhone() ? null : '0 10 0 0'
                        },
                        {
                            xtype: 'textfield',
                            name: 'aziendaideatrice',
                            localized: 'label',
                            localizedKey: `AZIENDA_IDEATRICE`,
                            inputCls: 'input-gen-penknife',
                            flex: stdPKF.isPhone() ? null : 1,
                            margin: stdPKF.isPhone() ? null : '0 0 0 10'
                        },
                        {
                            xtype: 'selectfield',
                            itemId: 'Settore', reference: 'Settore',
                            localized: 'label',
                            localizedKey: `SETTORE`,
                            inputCls: 'input-gen-penknife',
                            name: 'settore',
                            store: Ext.create('PENKNIFE.view.auth.Settori'),
                            displayField: 'valoreIT',
                            valueField: 'codice',
                            flex: stdPKF.isPhone() ? null : 1,
                            margin: stdPKF.isPhone() ? null : '0 0 0 10'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    localized: 'title',
                    localizedKey: `INSER_IMM_SLIDE`,
                    margin: '10 0 0 0',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'BtnUploadImm1', reference: 'BtnUploadImm1',
                                    cls: 'hamburger-menu-list-buttons button-icon-24 color-red',
                                    iconCls: `icon-upload`,
                                    iconAlign: 'top',
                                    localized: 'text',            
                                    localizedKey: `CARICA_IMM_1`,
                                    margin: 2,
                                    flex: 1,
                                    maxWidth: !stdPKF.isPhone() ? 100 : null,
                                    listeners: {
                                        tap: 'tapBtnUploadImm1'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'BtnUploadImm2', reference: 'BtnUploadImm2',
                                    cls: 'hamburger-menu-list-buttons button-icon-24 color-red',
                                    iconCls: `icon-upload`,
                                    iconAlign: 'top',
                                    localized: 'text',            
                                    localizedKey: `CARICA_IMM_2`,
                                    margin: 2,
                                    flex: 1,
                                    maxWidth: !stdPKF.isPhone() ? 100 : null,
                                    listeners: {
                                        tap: 'tapBtnUploadImm2'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'BtnUploadImm3', reference: 'BtnUploadImm3',
                                    cls: 'hamburger-menu-list-buttons button-icon-24 color-red',
                                    iconCls: `icon-upload`,
                                    iconAlign: 'top',
                                    localized: 'text',            
                                    localizedKey: `CARICA_IMM_3`,
                                    margin: 2,
                                    flex: 1,
                                    maxWidth: !stdPKF.isPhone() ? 100 : null,
                                    listeners: {
                                        tap: 'tapBtnUploadImm3'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: stdPKF.isPhone() ? 'center' : 'left'
                            },
                            items: [
                                {
                                    xtype: 'carousel',
                                    itemId: 'ProjectCarousel', reference: 'ProjectCarousel',
                                    direction: 'horizontal',
                                    flex: 1,
                                    height: '100%',
                                    maxWidth: 450,
                                    hidden: true,
                                    style: {
                                        'background-color': 'white'
                                    },
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: 'resources/img/emptyimage.svg'
                                        },
                                        {
                                            xtype: 'image',
                                            src: 'resources/img/emptyimage.svg'
                                        },
                                        {
                                            xtype: 'image',
                                            src: 'resources/img/emptyimage.svg'
                                        }
                                    ],
                                    listeners: {
                                        /* painted: th => {
                                            let senchaEl = Ext.fly(th.el)
                                            senchaEl.config.
                                            senchaEl.hide()
                                            Ext.defer(() => {
                                                
                                                senchaEl.show()
                                            }, 100)
                                        } */
                                    }
                                }
                                /* {
                                    xtype: 'textfield',
                                    itemId: 'TileLogo', reference: 'TileLogo',
                                    name: 'tilelogo',
                                    hidden: true,
                                    listeners: {
                                        change: 'changeTileLogo'
                                    }
                                } */
                            ],
                            minHeight: !stdPKF.isPhone() ? 300 : 200
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    itemId: 'FieldsetDescrLanguages', reference: 'FieldsetDescrLanguages',
                    localized: 'title',
                    localizedKey: `DESCRIVI_PRJ`,
                    margin: '10 0 0 0',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'FieldsetDescrChina', reference: 'FieldsetDescrChina',
                            cntlang: true,
                            cls: 'stretch-animation',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            flex: 1,
                            maxWidth: 32,
                            listeners: {
                                element: 'element',
                                tap: 'tabBtnsFieldsetLanguages'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'start'
                                    },
                                    flex: 1,
                                    margin: stdPKF.isPhone() ? '0 0 15 0' : '0 0 22 0',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'BtnDescrLangChina', reference: 'BtnDescrLangChina',
                                            cls: 'btn-china-rect',
                                            listeners: {
                                                tap: 'tabBtnsFieldsetLanguages'
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    cls: stdPKF.isPhone() ? 'txtfld-descazienda-phone input-gen-penknife' :
                                                                     'txtfld-descazienda-tablet input-gen-penknife',
                                    localized: 'label',
                                    localizedKey: `DESCRIZIONE_IN_CINESE`,
                                    labelAlign: 'top',
                                    maxRows: 10,
                                    name: 'descrchina',
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            itemId: 'FieldsetDescrItaly', reference: 'FieldsetDescrItaly',
                            cntlang: true,
                            cls: 'stretch-animation',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            flex: 1,
                            maxWidth: 32,
                            margin: '0 0 0 10',
                            listeners: {
                                element: 'element',
                                tap: 'tabBtnsFieldsetLanguages'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'start'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'BtnDescrLangItaly', reference: 'BtnDescrLangItaly',
                                            cls: 'btn-italy-rect',
                                            listeners: {
                                                tap: 'tabBtnsFieldsetLanguages'
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    cls: stdPKF.isPhone() ? 'txtfld-descazienda-phone input-gen-penknife' :
                                                                    'txtfld-descazienda-tablet input-gen-penknife',
                                    localized: 'label',
                                    localizedKey: `DESCRIZIONE_IN_ITALIANO`,
                                    labelAlign: 'top',
                                    maxRows: 10,
                                    name: 'descritaly',
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            itemId: 'FieldsetDescrEnglish', reference: 'FieldsetDescrEnglish',
                            cntlang: true,
                            cls: 'stretch-animation',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            flex: 1,
                            maxWidth: 32,
                            margin: '0 0 0 10',
                            listeners: {
                                element: 'element',
                                tap: 'tabBtnsFieldsetLanguages'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'start'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'BtnDescrLangEnglish', reference: 'BtnDescrLangEnglish',
                                            cls: 'btn-eng-rect'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    cls: stdPKF.isPhone() ? 'txtfld-descazienda-phone input-gen-penknife' :
                                                                    'txtfld-descazienda-tablet input-gen-penknife',
                                    localized: 'label',
                                    localizedKey: `DESCRIZIONE_IN_INGLESE`,
                                    labelAlign: 'top',
                                    maxRows: 10,
                                    name: 'descrenglish',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
