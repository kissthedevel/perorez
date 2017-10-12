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
        
        let modules = [
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                flex: 4/24,
                style: stdPKF.getRandomColorsMaterial(),
                tilecnt: '12x4',
                html: '12x4',
                listeners: {
                    painted: th => {
                        if (Ext.Object.isEmpty(PENKNIFE.globals.dimensionTiles)) {
                            /**
                             * imposto variabile globals con le attuali misure delle tiles
                             * nalle home, solo per avere un riferimento alle dimensioni
                             * E' SUFFICIENTE FARLO SOLO SU UNA TILE
                             */
                            th = Ext.getCmp(th.id)
                            let levelHome = th.up('#LevelHome')
                            stdPKF.setGlobalsDimensionTiles(levelHome.query('[tilecnt]'))
                        }
                    }
                },
                margin: 10
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
                        style: stdPKF.getRandomColorsMaterial(),
                        margin: '0 10 0 0',
                        tilecnt: '6x4',
                        html: '6x4'
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        flex: 1,
                        style: stdPKF.getRandomColorsMaterial(),
                        margin: '0 0 0 10',
                        tilecnt: '6x4',
                        html: '6x4'
                    }
                ],
                margin: 10
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 4/24,
                style: stdPKF.getRandomColorsMaterial(),
                tilecnt: '12x4',
                html: '12x4',
                margin: 10
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
                        margin: '0 10 0 0',
                        items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                flex: 1,
                                style: stdPKF.getRandomColorsMaterial(),
                                margin: '0 0 10 0',
                                tilecnt: '6x3',
                                html: '6x3'
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                flex: 1,
                                style: stdPKF.getRandomColorsMaterial(),
                                margin: '10 0 0 0',
                                tilecnt: '6x3',
                                html: '6x3'
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
                        margin: '0 0 0 10',
                        items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                flex: 1,
                                style: stdPKF.getRandomColorsMaterial(),
                                margin: '0 0 10 0',
                                tilecnt: '6x3',
                                html: '6x3'
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                flex: 1,
                                style: stdPKF.getRandomColorsMaterial(),
                                margin: '10 0 0 0',
                                tilecnt: '6x3',
                                html: '6x3'
                            }
                        ]
                    }
                ],
                margin: 10
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
                        style: stdPKF.getRandomColorsMaterial(),
                        tilecnt: '12x6',
                        html: '12x6'
                    }
                ],
                margin: 10
            }
        ]
        //modulesRight = modules.slice(0)

        this.shuffleArray(modules)
        //this.shuffleArray(modulesRight)

        modules.forEach( modLeft => this.lookupReference('LeftPanelTilesSchema').add(modLeft))
        //modulesRight.forEach( modRight => this.lookupReference('RightPanelTilesSchema').add(modRight))
        
    }
});
