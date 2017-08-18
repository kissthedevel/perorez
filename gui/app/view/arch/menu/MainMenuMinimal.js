
Ext.define('PENKNIFE.view.arch.menu.MainMenuMinimal',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.menu.MainMenuMinimalController'
    ],

    controller: 'arch-menu-MainMenuMinimal',
    
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

    items: [
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
                type: this.minimal ? 'hbox' : 'vbox'
            },
            defaults: {
                xtype: 'button',
                cls: 'toolbar-menu-minimal-buttons',
                iconAlign: 'top',
                flex: 1
            },
            items: [
                {
                    text: PENKNIFE.std._translate('Pubblicizza l\'azienda in Italia'),
                    iconCls: 'icon-advertising toolbar-menu-minimal-button-icon',
                },
                {
                    text: PENKNIFE.std._translate('Trova un\'azienda italiana'),
                    iconCls: 'icon-lookup toolbar-menu-minimal-button-icon',                    
                },
                {
                    text: PENKNIFE.std._translate('Presenta un progetto innovativo'),
                    iconCls: 'icon-light-bulb toolbar-menu-minimal-button-icon',
                },
                {
                    text: PENKNIFE.std._translate('Vendi / compra Immobili'),
                    iconCls: 'icon-skyscraper toolbar-menu-minimal-button-icon',
                },
                {
                    text: PENKNIFE.std._translate('Investi in progetti italiani'),
                    iconCls: 'icon-investment toolbar-menu-minimal-button-icon',
                }
            ]
        }
    ]
});
