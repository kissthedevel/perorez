
Ext.define('PENKNIFE.view.arch.Home',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.HomeController'
    ],
    uses: [
        'PENKNIFE.view.arch.menu.TbMainMenuUnloggedTablet'
    ],

    controller: 'arch-home',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'container',
            itemId: 'ArchHome', reference: 'ArchHome',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                {
                    xtype: 'toolbar',
                    cls: 'toolbar-red',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'HamburgerIcon', reference: 'HamburgerIcon',
                            iconCls: 'hamburger-icon',
                            hidden: !PENKNIFE.std.isPhone(),
                            listeners: {
                                tap: 'tapHamburgerIcon'
                            }
                        },
                        {
                            xtype: 'image',
                            src: 'resources/img/pn-elegantt.png',
                            height: PENKNIFE.std.isPhone() ? 35 : 48,
                            margin: PENKNIFE.std.isPhone() ? null : '0 0 -5 0',
                            flex: PENKNIFE.std.isPhone() ? 1 : null,
                            minWidth: PENKNIFE.std.isPhone() ? null : PENKNIFE.globals.tabletMenuWidth - 10
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnChina', reference: 'BtnChina',
                            cls: 'btn-china-round',
                            listeners: {
                                tap: 'tapBtnChina'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnItaly', reference: 'BtnItaly',
                            cls: 'btn-italy-round',
                            margin: '0 0 0 15',
                            listeners: {
                                tap: 'tapBtnItaly'
                            }
                        },
                        {
                            xtype: 'container',
                            itemId: 'TbMainTablet_others', reference: 'TbMainTablet_others',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: 'end'
                            },
                            flex: 1,
                            hidden: PENKNIFE.std.isPhone()
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    items: [
                        /**
                         * Sezione di sinistra
                         * ONLY TABLET/DESKTOP
                         */
                        {
                            xtype: 'container',
                            itemId: 'CntMainMenu', reference: 'CntMainMenu',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            width: PENKNIFE.globals.tabletMenuWidth,
                            hidden: PENKNIFE.std.isPhone(),
                            scrollable: true,
                            style: {
                                //'background-color': '#D50000'
                                'background-color': '#fafafa',
                                'border-right': '3px solid #d50000'
                            }
                        },
                        /**
                         * qui verrà inserito il card container con i vari livelli
                         * livello principale sarà la HOME con le tiles
                         */
                        {
                            xtype: 'container',
                            itemId: 'CntMainContent', reference: 'CntMainContent',
                            layout: 'card',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'container',
                                    itemId: 'LevelHome', reference: 'LevelHome',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    scrollable: true/* ,
                                    listeners: {
                                        element: 'element',
                                        tap: function() {
                                            alert('tap')
                                        },
                                        longpress: function() {
                                            alert('longpress')
                                        }
                                    } */
                                },
                                {
                                    xtype: 'container',
                                    itemId: 'LevelFirst', reference: 'LevelFirst',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    scrollable: true
                                },
                                {
                                    xtype: 'container',
                                    itemId: 'LevelSecond', reference: 'LevelSecond',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    scrollable: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
