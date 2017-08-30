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
                            flex: 0.25,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: true
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 0.25,
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
                                            tilecnt: true
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: true
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
                                    tilecnt: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 0.125,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: true
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 0.375,
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
                                            tilecnt: true
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: true
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
                                            tilecnt: true
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: true
                                        }
                                    ]
                                }
                            ]
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
                            flex: 0.125,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: true
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 0.25,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    style: PENKNIFE.std.getRandomColorsMaterial(),
                                    tilecnt: true
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
                                            tilecnt: true
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: true
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
                            flex: 0.25,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: true
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 0.125,
                            style: PENKNIFE.std.getRandomColorsMaterial(),
                            tilecnt: true
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 0.25,
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
                                            tilecnt: true
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            flex: 1,
                                            style: PENKNIFE.std.getRandomColorsMaterial(),
                                            tilecnt: true
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
                                    tilecnt: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
