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
                },
                {
                    xtype: 'container',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'CONFIRM_TileGestCreate', reference: 'CONFIRM_TileGestCreate',
                    iconCls: 'pen-confirm',
                    listeners: {
                        tap: 'tapCONFIRM_TileGestCreate'
                    }
                }
            ]
        },
        {
            xtype: 'formpanel',
            itemId: 'Form_TileGestCreate', reference: 'Form_TileGestCreate',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    localized: 'title',
                    localizedKey: `PER_COMINCIARE`,
                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'id',
                            hidden: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'nomeazienda',
                            localized: 'label',
                            localizedKey: `NOME_AZIENDA`,
                            inputCls: 'input-gen-penknife',
                            flex: stdPKF.isPhone() ? null : 1,
                            margin: stdPKF.isPhone() ? null : '0 10 0 0'
                        },
                        {
                            xtype: 'textfield',
                            name: 'website',
                            localized: 'label',
                            localizedKey: `SITO_WEB`,
                            inputCls: 'input-gen-penknife',
                            flex: stdPKF.isPhone() ? null : 1,
                            margin: stdPKF.isPhone() ? null : '0 0 0 10'
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
                                align: 'middle'
                            },
                            margin: '0 0 15 0',
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
                                    localizedKey: `VUOI_DIVENTARE_ELITE`
                                },
                                {
                                    xtype: 'togglefield',
                                    name: 'elite',
                                    margin: '5 0 0 0'
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
                                    itemId: 'BtnUploadLogo', reference: 'BtnUploadLogo',
                                    cls: 'hamburger-menu-list-buttons button-icon-24 color-red',
                                    iconCls: `icon-upload`,
                                    iconAlign: 'top',
                                    localized: 'text',            
                                    localizedKey: `CARICA_IL_LOGO_AZIENDA`,
                                    margin: 2,
                                    flex: 1,
                                    maxWidth: !stdPKF.isPhone() ? 100 : null,
                                    listeners: {
                                        tap: 'tapBtnUploadLogo'
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
                                    maxWidth: !stdPKF.isPhone() ? 100 : null,
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
                                    maxWidth: !stdPKF.isPhone() ? 100 : null,
                                    listeners: {
                                        tap: 'tapBtnDimensionsTile'
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
                                pack: stdPKF.isPhone() ? 'center' : 'left'
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
                                            xtype: 'container',
                                            itemId: 'CntImageLogo', reference: 'CntImageLogo',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            height: '100%',
                                            width: '100%',
                                            hidden: true,
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    itemId: 'ImageLogo', reference: 'ImageLogo',
                                                    src: '',
                                                    flex: 1
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'label',
                                            itemId: 'LabelTileSample', reference: 'LabelTileSample',
                                            localized: 'html',
                                            localizedKey: `PREMI_BTN_DIM_SCEGLIERE_DIM`,
                                            margin: 5,
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            xtype: 'textfield',
                                            itemId: 'TileSample_Color', reference: 'TileSample_Color',
                                            name: 'tilecolor',
                                            hidden: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            itemId: 'TileSample_Size', reference: 'TileSample_Size',
                                            name: 'tilesize',
                                            hidden: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            itemId: 'TileLogo', reference: 'TileLogo',
                                            name: 'tilelogo',
                                            hidden: true,
                                            listeners: {
                                                change: 'changeTileLogo'
                                            }
                                        }
                                    ],
                                    margin: '10 0 0 0',
                                    style: {
                                        'background-color': 'white',
                                        color: 'red',
                                        'box-shadow': '1px 1px 2px darkgrey'
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
                            maxWidth: stdPKF.isPhone() ? Ext.getBody().getSize().width - 30 : 400,
                            margin: !stdPKF.isPhone() ? '10 0 0 0' : null
                        }
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
