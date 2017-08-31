Ext.define('PENKNIFE.view.tiles.SchemaSingle',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.SchemaSingleController'
    ],

    controller: 'tiles-SchemaSingle',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                /**
                 * pannello di sinistra
                 */
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 4/24,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: '6x4',
                            html: '6x4'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 4/24,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x2',
                                            html: '3x2'
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x2',
                                            html: '3x2'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: '3x4',
                                    html: '3x4'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 2/24,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: '6x2',
                            html: '6x2'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 6/24,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x3',
                                            html: '3x3'
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x3',
                                            html: '3x3'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x3',
                                            html: '3x3'
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x3',
                                            html: '3x3'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 6/24,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: '6x3',
                                    html: '6x3'
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x3',
                                            html: '3x3'
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'stretch'
                                                    },
                                                    flex: 1,
                                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                                    tilecnt: '3x1.5',
                                                    html: '3x1.5'
                                                },
                                                {
                                                    xtype: 'container',
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'stretch'
                                                    },
                                                    flex: 1,
                                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                                    tilecnt: '3x1.5',
                                                    html: '3x1.5'
                                                } 
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 2/24,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: '6x2',
                            html: '6x2'
                        }
                    ]
                },
                /**
                 * pannello di destra
                 */
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 2/24,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: '3x2',
                                    html: '3x2'
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: '3x2',
                                    html: '3x2'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 4/24,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: '6x2',
                                    html: '6x2'
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x2',
                                            html: '3x2'
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x2',
                                            html: '3x2'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 4/24,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: '6x4',
                            html: '6x4'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 2/24,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: '6x2',
                            html: '6x2'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 4/24,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x2',
                                            html: '3x2'
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: '3x2',
                                            html: '3x2'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: '3x4',
                                    html: '3x4'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
