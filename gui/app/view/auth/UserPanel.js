
Ext.define('PENKNIFE.view.auth.UserPanel',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.auth.UserPanelController'
    ],

    controller: 'auth-UserPanel',

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
            itemId: 'ToolbarUserPanel', reference: 'ToolbarUserPanel',
            docked: 'top',
            localized: 'title',
            localizedKey: `DATI_PERSONALI`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_UserPanel', reference: 'BACK_UserPanel',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_UserPanel'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'EDIT_UserPanel', reference: 'EDIT_UserPanel',
                    iconCls: 'pen-edit',
                    listeners: {
                        tap: 'tapEDIT_ProjectCreate'
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
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                pack: 'middle'
                            },
                            padding: 5,
                            height: 85,
                            width: 85,
                            margin: '20 0 15 0',
                            items: [
                                {
                                    xtype: 'image',
                                    itemId: 'ImgSex', reference: 'ImgSex',
                                    height: 60
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
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                pack: 'end'
                            },
                            margin: '0 0 15 10',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'middle'
                                    },
                                    padding: 5,
                                    height: 40,
                                    width: 40,
                                    items: [
                                        {
                                            xtype: 'image',
                                            itemId: 'TypeSign', reference: 'TypeSign',
                                            height: 24
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
                                    xtype: 'label',
                                    itemId: 'TipoProfilo', reference: 'TipoProfilo',
                                    cls: 'color-red',
                                    style: {
                                        'font-weight': 'bold',
                                        'font-size': '13px'
                                    },
                                    margin: '5 0 0 0'
                                }
                            ]
                        }
                        
                    ]
                },
                {
                    xtype: 'label',
                    itemId: 'LabelNominativo', reference: 'LabelNominativo',
                    cls: 'label-user-toolbar-hamburger color-red'
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            localized: 'title',
                            localizedKey: `CONTATTI`,
                            layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                            margin: '15 15 5 15',
                            padding: '5 15 15 15',
                            style: {
                                'background-color': 'white',
                                'box-shadow': '1px 1px 3px gray',
                                'border-radius': '7px'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    itemId: 'LabelEmail', reference: 'LabelEmail',
                                    cls: 'label-user-toolbar-hamburger'
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'LabelTel', reference: 'LabelTel',
                                    cls: 'label-user-toolbar-hamburger',
                                    margin: stdPKF.isPhone() ? '10 0 0 0' : '0 0 0 25'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            localized: 'title',
                            localizedKey: `RESIDENZA`,
                            layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                            margin: '15 15 5 15',
                            padding: '5 15 15 15',
                            style: {
                                'background-color': 'white',
                                'box-shadow': '1px 1px 3px gray',
                                'border-radius': '7px'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    itemId: 'LabelNazione', reference: 'LabelNazione',
                                    cls: 'label-user-toolbar-hamburger'
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'LabelCitta', reference: 'LabelCitta',
                                    cls: 'label-user-toolbar-hamburger',
                                    margin: stdPKF.isPhone() ? '10 0 0 0' : '0 0 0 25'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            localized: 'title',
                            localizedKey: `INFO_PROF`,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            //layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                            margin: '15 15 15 15',
                            padding: '5 15 15 15',
                            style: {
                                'background-color': 'white',
                                'box-shadow': '1px 1px 3px gray',
                                'border-radius': '7px'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: stdPKF.isPhone() ? 'vbox' : 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            itemId: 'LabelAzienda', reference: 'LabelAzienda',
                                            cls: 'label-user-toolbar-hamburger'
                                        },
                                        {
                                            xtype: 'label',
                                            itemId: 'LabelSettore', reference: 'LabelSettore',
                                            cls: 'label-user-toolbar-hamburger',
                                            margin: stdPKF.isPhone() ? '10 0 0 0' : '0 0 0 25'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: stdPKF.isPhone() ? 'vbox' : 'hbox'
                                    },
                                    margin: '10 0 0 0',
                                    items: [
                                        {
                                            xtype: 'label',
                                            itemId: 'LabelRuolo', reference: 'LabelRuolo',
                                            cls: 'label-user-toolbar-hamburger'
                                        },
                                        {
                                            xtype: 'label',
                                            itemId: 'LabelFatturato', reference: 'LabelFatturato',
                                            cls: 'label-user-toolbar-hamburger',
                                            margin: stdPKF.isPhone() ? '10 0 0 0' : '0 0 0 25'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: stdPKF.isPhone() ? 'vbox' : 'hbox'
                                    },
                                    margin: '10 0 0 0',
                                    items: [
                                        {
                                            xtype: 'label',
                                            itemId: 'LabelPatrimonio', reference: 'LabelPatrimonio',
                                            cls: 'label-user-toolbar-hamburger'
                                        },
                                        {
                                            xtype: 'label',
                                            itemId: 'LabelDispInvest', reference: 'LabelDispInvest',
                                            cls: 'label-user-toolbar-hamburger',
                                            margin: stdPKF.isPhone() ? '10 0 0 0' : '0 0 0 25',
                                            hidden: true,
                                            localized: 'html',
                                            localizedKey: `DISPONIBILE_INVESTIRE`
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
});
