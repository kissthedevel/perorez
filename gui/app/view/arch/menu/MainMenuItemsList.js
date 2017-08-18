
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
                    flex: 1
                } : {
                    xtype: 'button',
                    cls: 'hamburger-menu-list-buttons button-icon-24',
                    iconAlign: 'left'
                },
                items: [
                    {
                        text: PENKNIFE.std._translate('Pubblicizza l\'azienda in Italia'),
                        itemId: 'BtnAdvertiseTbMain', reference: 'BtnAdvertiseTbMain',
                        iconCls: `icon-advertising ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`
                    },
                    {
                        text: PENKNIFE.std._translate('Trova un\'azienda italiana'),
                        iconCls: `icon-lookup ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`,
                        listeners: {
                            tap: 'tapTrovaAziendaItaliana'
                        }
                    },
                    {
                        text: PENKNIFE.std._translate('Presenta un progetto innovativo'),
                        iconCls: `icon-light-bulb ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`
                    },
                    {
                        text: PENKNIFE.std._translate('Vendi / compra Immobili'),
                        iconCls: `icon-skyscraper ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`
                    },
                    {
                        text: PENKNIFE.std._translate('Investi in progetti italiani'),
                        iconCls: `icon-investment ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`
                    }
                ]
            }
        ])

        this.callParent(arguments)
    }
});
