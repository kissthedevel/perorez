
Ext.define('PENKNIFE.view.arch.Home',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.HomeController'
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
                            height: 35,
                            flex: PENKNIFE.std.isPhone() ? 1 : null,
                            minWidth: PENKNIFE.std.isPhone() ? null : 190
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
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'CntMainMenu', reference: 'CntMainMenu',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            width: 200,
                            minHeight: 1000,
                            hidden: PENKNIFE.std.isPhone(),
                            style: {
                                'background-color': '#D50000'
                            }
                        },
                        /**
                         * qui verrà inserito il card container con i vari livelli
                         * livello principale sarà la HOME con le tiles
                         */
                        {
                            xtype: 'container',
                            itemId: 'CntMainContent', reference: 'CntMainContent',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 1,
                            minHeight: 1000,
                            style: {
                                'background-color': '#607D8B'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
