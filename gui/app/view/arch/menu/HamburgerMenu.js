
Ext.define('PENKNIFE.view.arch.menu.HamburgerMenu',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.menu.HamburgerMenuController'
    ],

    controller: 'arch-menu-HamburgerMenu',

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
    width: '80%',
    height: '100%',
    scrollable: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'CloseIconHamburger', reference: 'CloseIconHamburger',
                    iconCls: 'close-icon',
                    listeners: {
                        tap: 'tapCloseIconHamburger'
                    }
                },
                {
                    xtype: 'container',
                    itemId: 'CntHamSignIn', reference: 'CntHamSignIn',
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'BtnHamSignIn', reference: 'BtnHamSignIn',
                            cls: 'button-text-red',
                            listeners: {
                                tap: 'tapBtnHamSignIn'
                            },
                            localized: 'text',
                            localizedKey: `SIGN_IN`
                        }
                    ]
                },
                {
                    xtype: 'container',
                    itemId: 'CntHamUserData', reference: 'CntHamUserData',
                    hidden: true,
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    flex: 1,
                    cls: 'no-margin-top-bottom-user'
                }
            ]
        },
        {
            xtype: 'toolbar',
            itemId: 'LoggedHamBottomTb', reference: 'LoggedHamBottomTb',
            docked: 'bottom',
            hidden: true
        },
        {
            xtype: 'container',
            itemId: 'UnloggedHamCnt', reference: 'UnloggedHamCnt',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                /* {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    margin: '0 0 10 0',
                    items: [
                        {
                            xtype: 'video',
                            width: '100%',
                            height: '100%',
                            url: "resources/img/do-bigger-things.mp4",
                            posterUrl: 'resources/img/play-button-silhouette.svg'
                        }
                    ]
                }, */
                {
                    xtype: 'container',
                    itemId: 'ContainerSloganHamburger', reference: 'ContainerSloganHamburger',
                    layout: {
                        type: 'vbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    flex: 1,
                    margin: '0 0 10 0',
                    style: {
                        'background-color': '#B71D1D'
                    },
                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/img/logo_penknife.png',
                            height: 80,
                            width: 80
                        },
                        {
                            xtype: 'image',
                            src: 'resources/img/pn-elegantt.png',
                            height: 54,
                            width: 150,
                            margin: '20 0 0 0'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    itemId: 'ContainerNostriServizi', reference: 'ContainerNostriServizi',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    scrollable: true,
                    hidden: true
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'BtnHamServizi', reference: 'BtnHamServizi',
                            ui: 'action',
                            cls: 'button-red',
                            margin: '0 10 10 10',
                            localized: 'text',
                            localizedKey: `NOSTRI_SERVIZI`,
                            listeners: {
                                tap: 'tapNostriServizi'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnHamContattaci', reference: 'BtnHamContattaci',
                            ui: 'action',
                            cls: 'button-red',
                            margin: '0 10 10 10',
                            localized: 'text',
                            localizedKey: `VUOI_SAPERNE_DI_PIU`,
                            listeners: {
                                tap: 'tapContattaci'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'BtnHamSignUp', reference: 'BtnHamSignUp',
                            ui: 'action',
                            cls: 'button-green button-sign-up-big',
                            height: 80,
                            margin: '0 10 10 10',
                            localized: 'text',
                            localizedKey: `SIGN_UP`,
                            listeners: {
                                tap: 'tapBtnHamSignUp'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            itemId: 'LoggedHamCnt', reference: 'LoggedHamCnt',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 1,
            hidden: true,
            listeners: {
                show: 'showLoggedHamCnt'
            }
        }
    ],
    listeners: {
        show: 'showHamburgerMenuPanel'
    }
});
