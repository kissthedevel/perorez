Ext.define('PENKNIFE.view.tiles.TileGestCreate',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TileGestCreateController'
    ],

    controller: 'tiles-TileGestCreate',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    scrollable: true,
    cls: 'animated zoomInLeft  background-gen',
    padding: 10,

    items: [
        {
            xtype: 'toolbar',
            itemId: 'ToolbarTileGestCreate', reference: 'ToolbarTileGestCreate',
            docked: 'top',
            localized: 'title',
            localizedKey: `INSERISCI_AZIENDA`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_TileGestCreate', reference: 'BACK_TileGestCreate',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_TileGestCreate'
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            localized: 'title',
            localizedKey: `PER_COMINCIARE`,
            layout: PENKNIFE.std.isPhone() ? 'vbox' : 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    name: 'nomeazienda',
                    localized: 'label',
                    localizedKey: `NOME_AZIENDA`,
                    inputCls: 'input-gen-penknife',
                    flex: PENKNIFE.std.isPhone() ? null : 1,
                    margin: PENKNIFE.std.isPhone() ? null : '0 10 0 0'
                },
                {
                    xtype: 'textfield',
                    name: 'website',
                    localized: 'label',
                    localizedKey: `SITO_WEB`,
                    inputCls: 'input-gen-penknife',
                    flex: PENKNIFE.std.isPhone() ? null : 1,
                    margin: PENKNIFE.std.isPhone() ? null : '0 0 0 10'
                }
            ]
        },
        {
            xtype: 'fieldset',
            localized: 'title',
            localizedKey: `COME_VUOI_APPARIRE`,
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
                            itemId: 'BtnUploadLogo', reference: 'BtnUploadLogo',
                            cls: 'hamburger-menu-list-buttons button-icon-24 color-red',
                            iconCls: `icon-upload`,
                            iconAlign: 'top',
                            localized: 'text',            
                            localizedKey: `CARICA_IL_LOGO_AZIENDA`,
                            margin: 2,
                            flex: 1,
                            maxWidth: !PENKNIFE.std.isPhone() ? 100 : null,
                            listeners: {
                                //tap: 'tapBtnListMyCompanies'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnBackgroundLogo', reference: 'BtnBackgroundLogo',
                            cls: 'hamburger-menu-list-buttons button-icon-24 color-red',
                            iconCls: `icon-pantone`,
                            iconAlign: 'top',
                            localized: 'text',            
                            localizedKey: `SCEGLI_COLORE_SFONDO`,
                            margin: 2,
                            flex: 1,
                            maxWidth: !PENKNIFE.std.isPhone() ? 100 : null,
                            listeners: {
                                tap: 'tapBtnBackgroundLogo'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnDimensionsTile', reference: 'BtnDimensionsTile',
                            cls: 'hamburger-menu-list-buttons button-icon-24 color-red',
                            iconCls: `icon-dimensions`,
                            iconAlign: 'top',
                            localized: 'text',            
                            localizedKey: `SCEGLI_DIMENSIONI`,
                            margin: 2,
                            flex: 1,
                            maxWidth: !PENKNIFE.std.isPhone() ? 100 : null,
                            listeners: {
                                //tap: 'tapBtnListMyCompanies'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    itemId: 'CntTileSample', reference: 'CntTileSample',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: PENKNIFE.std.isPhone() ? 'center' : 'left'
                    },
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'TileSample', reference: 'TileSample',
                            layout: {
                                type: 'vbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    itemId: 'LabelTileSample', reference: 'LabelTileSample',
                                    localized: 'html',
                                    localizedKey: `PREMI_BTN_DIM_SCEGLIERE_DIM`,
                                    margin: 5,
                                    style: {
                                        'text-align': 'center'
                                    }
                                }
                            ],
                            margin: '10 0 0 0',
                            style: {
                                'background-color': 'white',
                                color: 'red',
                                border: '1px solid red'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    localized: 'label',
                    localizedKey: `TILE_SECOND_LATENCY`,
                    inputCls: 'input-gen-penknife',
                    value: 30,
                    minValue: 10,
                    maxValue: 60,
                    name: 'latency',
                    maxWidth: PENKNIFE.std.isPhone() ? Ext.Viewport.getSize().width - 30 : 400,
                    margin: !PENKNIFE.std.isPhone() ? '10 0 0 0' : null
                }
                
                /* {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    style: {
                        'background-color': 'white'
                    },
                    width: 230,
                    items: [
                        {
                            xtype: 'filefield',
                            localized: 'label',
                            localizedKey: `CARICA_IL_LOGO_AZIENDA`,
                            name: 'logoimage',
                            accept: 'image'
                        }
                    ]
                } */
            ]
        },
        {
            xtype: 'fieldset',
            itemId: 'FieldsetDescrLanguages', reference: 'FieldsetDescrLanguages',
            localized: 'title',
            localizedKey: `DESCRIVI_AZIENDA`,
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
                            margin: PENKNIFE.std.isPhone() ? '0 0 15 0' : '0 0 22 0',
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
                            cls: PENKNIFE.std.isPhone() ? 'txtfld-descazienda-phone input-gen-penknife' :
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
                            cls: PENKNIFE.std.isPhone() ? 'txtfld-descazienda-phone input-gen-penknife' :
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
                            cls: PENKNIFE.std.isPhone() ? 'txtfld-descazienda-phone input-gen-penknife' :
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
});
