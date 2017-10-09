
Ext.define('PENKNIFE.view.arch.Security',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.SecurityController'
    ],

    controller: 'arch-Security',

    floated: true,
    modal: true,
    hideOnMaskTap: true,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    scrollable: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
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
                    padding: 5,
                    width: 200,
                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/img/pn-elegantt-red.png',
                            height: 48
                        }
                    ]
                },
                {
                    xtype: 'passwordfield',
                    itemId: 'SecPw', reference: 'SecPw',
                    width: 200
                },
                {
                    xtype: 'button',
                    width: 200,
                    localized: 'text',
                    localizedKey: `SIGN_IN`,
                    listeners: {
                        tap: 'signinTap'
                    }
                }
            ]
        }
    ]
});
