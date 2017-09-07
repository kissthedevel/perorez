Ext.define('PENKNIFE.view.tiles.SchemaSingleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-SchemaSingle',

    shuffleArray: function(array) {
        let i = 0,
            j = 0,
            temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    },

    init: function() {
        /* this.lookupReference('ArchHome').add(Ext.create('Ext.Button', {
            text: 'cippa'
        })) */  
        
        let modules = [
            Ext.create('Ext.Container', {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                flex: 4/24,
                style: PENKNIFE.std.getRandomColorsMaterial(),
                tilecnt: '6x4',
                html: '6x4',
                listeners: {
                    painted: th => {
                        if (Ext.Object.isEmpty(PENKNIFE.globals.dimensionTiles)) {
                            /**
                             * imposto variabile globals con le attuali misure delle tiles
                             * nalle home, solo per avere un riferimento alle dimensioni
                             */
                            th = Ext.getCmp(th.id)
                            let levelHome = th.up('#LevelHome')
                            PENKNIFE.std.setGlobalsDimensionTiles(levelHome.query('[tilecnt]'))
                        }
                    }
                }
            }),
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
        ],
        modulesRight = modules.slice(0)

        this.shuffleArray(modules)
        this.shuffleArray(modulesRight)

        modules.forEach( modLeft => this.lookupReference('LeftPanelTilesSchema').add(modLeft))
        modulesRight.forEach( modRight => this.lookupReference('RightPanelTilesSchema').add(modRight))
        
    }
});
