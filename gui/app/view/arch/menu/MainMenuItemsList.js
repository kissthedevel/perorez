
Ext.define('PENKNIFE.view.arch.menu.MainMenuItemsList',{
    extend: 'Ext.Container',
    
    requires: [
        'PENKNIFE.view.arch.menu.MainMenuItemsListController',
        'PENKNIFE.view.findCompany.AllCompanies',
        'PENKNIFE.view.projects.ProjectsList'
    ],

    controller: 'arch-menu-MainMenuItemsList',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initialize: function() {
        if (this.minimalMenu) {
            PENKNIFE.globals.minimalMenu = this
        }

        this.setItems([
            {
                xtype: 'container',
                layout: {
                    type: this.minimalMenu ? 'hbox' : 'vbox',
                    align: 'stretch'
                },
                defaults: this.minimalMenu ? {
                    xtype: 'button',
                    cls: 'toolbar-menu-minimal-buttons',
                    iconAlign: 'top',
                    flex: 1,
                    localized: 'text',
                    margin: '10 0 10 0'
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
                        localizedKey: `PUBBL_IN_ITA${this.minimalMenu ? '_SHORT' : ''}`,
                        listeners: {
                            tap: 'tapFattiConoscere'
                        }
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
                        localizedKey: `PRESENTA_PRG_INNOVAT${this.minimalMenu ? '_SHORT' : ''}`,
                        iconCls: `icon-light-bulb ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`,
                        listeners: {
                            tap: 'tapInsertProjects'
                        }
                    },
                    {
                        //text: PENKNIFE.lang._translate(`INVESTI_IN_PRG_ITA${this.minimalMenu ? '_SHORT' : ''}`),
                        localizedKey: `INVESTI_IN_PRG_ITA${this.minimalMenu ? '_SHORT' : ''}`,
                        iconCls: `icon-investment ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`,
                        listeners: {
                            tap: 'tapInvestProjects'
                        }
                    },
                    {
                        //text: PENKNIFE.lang._translate(`VENDI_COMPRA_IMMOB${this.minimalMenu ? '_SHORT' : ''}`),
                        localizedKey: `VENDI_COMPRA_IMMOB${this.minimalMenu ? '_SHORT' : ''}`,
                        iconCls: `icon-skyscraper ${this.minimalMenu ? 'toolbar-menu-minimal-button-icon' : ''}`,
                        listeners: {
                            tap: 'tapSocialMedia'
                        }
                    }
                ]
            }
        ])

        this.callParent(arguments)
    }
});
