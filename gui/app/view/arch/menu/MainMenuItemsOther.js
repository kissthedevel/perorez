
Ext.define('PENKNIFE.view.arch.menu.MainMenuItemsOther',{
    extend: 'Ext.Container',
    
    requires: [
        'PENKNIFE.view.arch.menu.MainMenuItemsOtherController'
    ],

    controller: 'arch-menu-MainMenuItemsOther',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'center'
            },
            margin: '10 0 10 0',
            items: [
                {
                    xtype: 'container',
                    height: 1,
                    width: '50%',
                    style: {
                        'border-top': '1px solid rgba(48, 60, 66, 0.6)',
                        'margin-left': '45px'
                    }
                }
            ]
        },
        {
            xtype: 'button',
            itemId: 'BtnListMyCompanies', reference: 'BtnListMyCompanies',
            cls: 'hamburger-menu-list-buttons button-text-dark button-icon-24',
            iconCls: `icon-list`,
            iconAlign: 'left',
            localized: 'text',            
            localizedKey: `LE_MIE_AZIENDE`,
            listeners: {
                tap: 'tapBtnListMyCompanies'
            }
        }
    ]
});
