
Ext.define('PENKNIFE.view.arch.DemoIntroIstitut',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.DemoIntroIstitutController'
    ],

    controller: 'arch-DemoIntroIstitut',
    
    layout: {
        type: 'vbox',
        align: 'stretch',
    },

    items: [
        {
            xtype: 'container',
            itemId: 'CntPartners', reference: 'CntPartners',
            layout: {
                type: stdPKF.isPhone() ? 'vbox' : 'hbox',
                align: 'stretch'
            },
            hidden: true,
            padding: 10,
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    flex: stdPKF.isPhone() ? null : 1,
                    height: 80,
                    style: {
                        'background-color': 'white',
                        'box-shadow': 'rgb(146, 0, 0) 4px 4px'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                pack: 'middle'
                            },
                            height: '100%',
                            width: '100%',
                            padding: 5,
                            items: [
                                {
                                    xtype: 'image',
                                    src: 'resources/img/istituz/yushanyue.png',
                                    listeners: {
                                        painted: th => {
                                            let height = ((th.up().getWidth() - 20) * 80) / 430
                                            th.setHeight(height)
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    flex: stdPKF.isPhone() ? null : 1,
                    height: 80,
                    margin: stdPKF.isPhone() ? '10 0 0 0' : '0 0 0 10',
                    style: {
                        'background-color': 'white',
                        'box-shadow': 'rgb(146, 0, 0) 4px 4px'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                pack: 'middle'
                            },
                            height: '100%',
                            width: '100%',
                            padding: 5,
                            items: [
                                {
                                    xtype: 'image',
                                    src: 'resources/img/istituz/qijicaijing.jpg',
                                    listeners: {
                                        painted: th => {
                                            let height = ((th.up().getWidth() - 20) * 110) / 500
                                            th.setHeight(height)
                                        }
                                    }
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
                    flex: stdPKF.isPhone() ? null : 1,
                    margin: stdPKF.isPhone() ? '10 0 0 0' : '0 0 0 10',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            flex: 1,
                            height: 80,
                            style: {
                                'background-color': 'white',
                                'box-shadow': 'rgb(146, 0, 0) 4px 4px'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'middle'
                                    },
                                    height: '100%',
                                    width: '100%',
                                    padding: 5,
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: 'resources/img/istituz/hardwin.jpg',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            height: 80,
                            flex: 1,
                            margin: '0 0 0 10',
                            style: {
                                'background-color': '#FE0000',
                                'box-shadow': 'rgb(146, 0, 0) 4px 4px'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'middle'
                                    },
                                    height: '100%',
                                    width: '100%',
                                    padding: 5,
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: 'resources/img/istituz/uspa.jpg',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'carousel',
            itemId: 'CarouselIstituz', reference: 'CarouselIstituz',
            direction: 'horizontal',
            height: stdPKF.isPhone() ? Ext.getBody().getSize().height - 250 : Ext.getBody().getSize().height - 64,
            items: [
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc1.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc2.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc3.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc4.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc5.jpg'
                }
            ]
        }
    ]
});
