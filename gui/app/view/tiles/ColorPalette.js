
Ext.define('PENKNIFE.view.tiles.ColorPalette',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.ColorPaletteController'
    ],

    controller: 'tiles-ColorPalette',

    floated: true,
    modal: true,
    hideOnMaskTap: true,
    showAnimation: {
        type: 'slide',
        direction: 'right',
        duration: 250,
        easing: 'ease-in'
    },
    hideAnimation: {
        type: 'slideOut',
        duration: 250,
        easing: 'ease-out'
    },
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
        
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            localized: 'title',
            localizedKey: `SCEGLI_COLORE_TILE`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'CloseIconHamburger', reference: 'CloseIconHamburger',
                    iconCls: 'close-icon',
                    listeners: {
                        tap: 'tapCloseIcon'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            //itemId: 'UnloggedHamCnt', reference: 'UnloggedHamCnt',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            scrollable: true,
            defaults: {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                defaults: {
                    xtype: 'container',
                    width: 32,
                    height: 32,
                    cls: 'container-round',
                    margin: 10,
                    listeners: {
                        element: 'element',
                        tap: 'onChooseColor'
                    }
                }
            },
            items: [
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#F44336'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#FFCDD2'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#EF9A9A'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#EF5350'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#E53935'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#B71C1C'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#E91E63'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#F8BBD0'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#F48FB1'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#EC407A'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#D81B60'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#880E4F'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#9C27B0'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#E1BEE7'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#CE93D8'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#AB47BC'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#8E24AA'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#4A148C'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#673AB7'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#D1C4E9'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#B39DDB'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#7E57C2'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#5E35B1'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#311B92'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#3F51B5'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#C5CAE9'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#9FA8DA'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#5C6BC0'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#3949AB'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#1A237E'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#2196F3'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#BBDEFB'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#90CAF9'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#42A5F5'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#1E88E5'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#0D47A1'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#03A9F4'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#B3E5FC'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#81D4FA'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#29B6F6'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#039BE5'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#01579B'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#00BCD4'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#B2EBF2'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#80DEEA'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#26C6DA'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#00ACC1'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#006064'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#009688'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#B2DFDB'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#80CBC4'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#26A69A'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#00897B'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#004D40'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#4CAF50'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#C8E6C9'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#A5D6A7'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#66BB6A'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#43A047'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#1B5E20'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#8BC34A'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#DCEDC8'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#C5E1A5'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#9CCC65'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#7CB342'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#33691E'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#CDDC39'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#F0F4C3'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#E6EE9C'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#D4E157'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#C0CA33'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#827717'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#FFEB3B'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#FFF9C4'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#FFF59D'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#FFEE58'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#FDD835'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#F57F17'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#FFC107'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#FFECB3'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#FFE082'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#FFCA28'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#FFB300'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#FF6F00'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#FF9800'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#FFE0B2'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#FFCC80'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#FFA726'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#FB8C00'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#E65100'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#FF5722'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#FFCCBC'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#FFAB91'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#FF7043'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#F4511E'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#BF360C'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#795548'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#D7CCC8'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#BCAAA4'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#8D6E63'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#6D4C41'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#3E2723'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#9E9E9E'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#F5F5F5'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#EEEEEE'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#BDBDBD'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#757575'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#212121'
                            }
                        }
                    ]
                },
                {
                    items: [
                        {
                            style: {    //500
                                'background-color': '#607D8B'
                            }
                        },
                        {
                            style: {    //100
                                'background-color': '#CFD8DC'
                            }
                        },
                        {
                            style: {    //200
                                'background-color': '#B0BEC5'
                            }
                        },
                        {
                            style: {    //400
                                'background-color': '#78909C'
                            }
                        },
                        {
                            style: {    //600
                                'background-color': '#546E7A'
                            }
                        },
                        {
                            style: {    //900
                                'background-color': '#263238'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
