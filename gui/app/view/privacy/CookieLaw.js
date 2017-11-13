
Ext.define('PENKNIFE.view.privacy.CookieLaw',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.privacy.CookieLawController'
    ],

    controller: 'privacy-CookieLaw',

    floated: true,
    modal: true,
    hideOnMaskTap: true,
    left: 0,
    top: stdPKF.isPhone() ? Ext.getBody().getSize().height - 200 : Ext.getBody().getSize().height - 100,
    width: '100%',
    height: stdPKF.isPhone() ? 200 : 100,
        
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    cls: 'container-transparent',

    items: [
        {
            xtype: 'container',
            layout: {
                type: stdPKF.isPhone() ? 'vbox' : 'hbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    flex: 1,
                    scrollable: true,
                    items: [
                        {
                            xtype: 'label',
                            style: {
                                'text-align': 'center',
                                padding: '15px',
                                'font-weight': '600'
                            },
                            localized: 'html',
                            localizedKey: `COOKIE_SHORT`
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
                            xtype: 'button',
                            itemId: 'CloseIcon', reference: 'CloseIcon',
                            iconCls: 'close-icon',
                            margin: 15,
                            listeners: {
                                tap: 'tapCloseIcon'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
