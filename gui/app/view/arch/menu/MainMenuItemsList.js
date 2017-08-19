
Ext.define('PENKNIFE.view.arch.menu.MainMenuItemsList',{
    extend: 'Ext.Container',
    
    requires: [
        'PENKNIFE.view.arch.menu.MainMenuItemsListController'
    ],

    controller: 'arch-menu-MainMenuItemsList',

    /**
     * TODO non funziona in modalità wide
     */
    /* plugins: 'responsive',
    responsiveConfig: {
        wide: {
            layout: 'hbox'
        },
        tall: {
            layout: 'vbox'
        }
    }, */
    
    layout: 'vbox',
    flex: 1,

    initialize: function() {
        this.setItems([
            /* {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        text: PENKNIFE.std._translate('Pubblicizzati'),
                        cls: 'toolbar-menu-minimal-buttons',
                        iconCls: 'icon-advertising toolbar-menu-minimal-button-icon',
                        iconAlign: 'top',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: PENKNIFE.std._translate('Trova un\'azienda'),
                        cls: 'toolbar-menu-minimal-buttons',
                        iconCls: 'icon-lookup toolbar-menu-minimal-button-icon',
                        iconAlign: 'top',
                        flex: 1,                    
                    },
                    {
                        xtype: 'button',
                        text: PENKNIFE.std._translate('Presenta progetto'),
                        cls: 'toolbar-menu-minimal-buttons',
                        iconCls: 'icon-light-bulb toolbar-menu-minimal-button-icon',
                        iconAlign: 'top',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        text: PENKNIFE.std._translate('Immobili'),
                        cls: 'toolbar-menu-minimal-buttons',
                        iconCls: 'icon-skyscraper toolbar-menu-minimal-button-icon',
                        iconAlign: 'top',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: PENKNIFE.std._translate('Investi'),
                        cls: 'toolbar-menu-minimal-buttons',
                        iconCls: 'icon-investment toolbar-menu-minimal-button-icon',
                        iconAlign: 'top',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: PENKNIFE.std._translate('Fai business'),
                        cls: 'toolbar-menu-minimal-buttons',
                        iconCls: 'icon-hand-shake toolbar-menu-minimal-button-icon',
                        iconAlign: 'top',
                        flex: 1
                    }
                ]
            }, */
            {
                xtype: 'container',
                layout: {
                    type: this.minimalMenu ? 'hbox' : 'vbox'
                },
                defaults: this.minimalMenu ? {
                    xtype: 'button',
                    cls: 'toolbar-menu-minimal-buttons',
                    iconAlign: 'top',
                    flex: 1,
                    localized: 'text'
                } : {
                    xtype: 'button',
                    cls: 'hamburger-menu-list-buttons button-icon-24',
                    iconAlign: 'left',
                    localized: 'text'
                },
                items: [
                    {
                        //text: PENKNIFE.lang._translate(`PUBBL_IN_ITA${this.minimalMenu ? '_SHORT' : ''}`),
                        itemId: 'BtnAdvertiseTbMain', reference: 'BtnAdvertiseTbMain',
                        iconCls: `icon-advertising ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`,
                        localizedKey: `PUBBL_IN_ITA${this.minimalMenu ? '_SHORT' : ''}`
                    },
                    {
                        //text: PENKNIFE.lang._translate(`TROVA_AZIENDA_ITA${this.minimalMenu ? '_SHORT' : ''}`),
                        localizedKey: `TROVA_AZIENDA_ITA${this.minimalMenu ? '_SHORT' : ''}`,
                        iconCls: `icon-lookup ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`,
                        listeners: {
                            tap: 'tapTrovaAziendaItaliana'
                        }
                    },
                    {
                        //text: PENKNIFE.lang._translate(`PRESENTA_PRG_INNOVAT${this.minimalMenu ? '_SHORT' : ''}`),
                        localizedKey: `PRESENTA_PRG_INNOVAT${this.minimalMenu ? '_SHORT' : ''}`,
                        iconCls: `icon-light-bulb ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`
                    },
                    {
                        //text: PENKNIFE.lang._translate(`VENDI_COMPRA_IMMOB${this.minimalMenu ? '_SHORT' : ''}`),
                        localizedKey: `VENDI_COMPRA_IMMOB${this.minimalMenu ? '_SHORT' : ''}`,
                        iconCls: `icon-skyscraper ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`
                    },
                    {
                        //text: PENKNIFE.lang._translate(`INVESTI_IN_PRG_ITA${this.minimalMenu ? '_SHORT' : ''}`),
                        localizedKey: `INVESTI_IN_PRG_ITA${this.minimalMenu ? '_SHORT' : ''}`,
                        iconCls: `icon-investment ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`
                    }
                ]
            }
        ])

        this.callParent(arguments)
    }
});
