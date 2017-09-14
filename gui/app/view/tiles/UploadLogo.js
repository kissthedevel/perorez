
Ext.define('PENKNIFE.view.tiles.UploadLogo',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.UploadLogoController'
    ],

    controller: 'tiles-UploadLogo',

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
    width: '100%',
    height: '100%',
        
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            localized: 'title',
            localizedKey: `CARICA_LOGO_AZIENDA`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'CloseIconHamburger', reference: 'CloseIconHamburger',
                    iconCls: 'close-icon',
                    listeners: {
                        tap: 'tapCloseIcon'
                    }
                }
            ]
        },
        {
            xtype: 'formpanel',
            itemId: 'Form_UploadLogo', reference: 'Form_UploadLogo',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    width: 230,
                    items: [
                        {
                            xtype: 'filefield',
                            itemId: 'FFLogo', reference: 'FFLogo',
                            name: 'logoimage',
                            accept: 'image',
                            listeners: {
                                change: 'changeFFLogo'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
