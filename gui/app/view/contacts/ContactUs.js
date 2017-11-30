
Ext.define('PENKNIFE.view.contacts.ContactUs',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.contacts.ContactUsController'
    ],

    controller: 'contacts-ContactUs',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    scrollable: true,
    cls: 'animated zoomInLeft  background-gen',

    items: [
        {
            xtype: 'toolbar',
            itemId: 'ToolbarContactUs', reference: 'ToolbarContactUs',
            docked: 'top',
            localized: 'title',
            localizedKey: `CONTACT_US`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_ContactUs', reference: 'BACK_ContactUs',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_ContactUs'
                    }
                }
            ]
        },
        {
            xtype: 'formpanel',
            itemId: 'FormContactUs', reference: 'FormContactUs',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                {
                    xtype: 'container',
                    layout: stdPKF.isPhone() ? 'vbox' : 'hbox',
                    maxWidth: stdPKF.isPhone() ? null : 600,
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'textfield',
                            localized: 'label',
                            localizedKey: `NOMINATIVO`,
                            inputCls: 'input-gen-penknife',
                            flex: stdPKF.isPhone() ? null : 1,
                            name: 'nominativo'
                        },
                        {
                            xtype: 'emailfield',
                            localized: 'label',
                            localizedKey: `EMAIL`,
                            inputCls: 'input-gen-penknife',
                            margin: stdPKF.isPhone() ? '0 0 10 0' : '0 0 0 20',
                            flex: stdPKF.isPhone() ? null : 1,
                            name: 'email'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    localized: 'label',
                    localizedKey: `OGGETTO_RICHIESTA`,
                    inputCls: 'input-gen-penknife',
                    margin: '5 0 0 0',
                    maxWidth: stdPKF.isPhone() ? null : 600,
                    name: 'oggetto'
                },
                {
                    xtype: 'textareafield',
                    localized: 'label',
                    localizedKey: `MESSAGGIO`,
                    inputCls: 'input-gen-penknife',
                    margin: '5 0 0 0',
                    maxLength: 1000,
                    height: 220,
                    name: 'messaggio'
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            cls: 'toolbar-menu-minimal',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    hidden: stdPKF.isPhone()
                },
                {
                    xtype: 'button',
                    itemId: 'BtnSendMessage', reference: 'BtnSendMessage',
                    ui: 'action',
                    cls: 'button-green',
                    flex: 1,
                    maxWidth: stdPKF.isPhone() ? null : 200,
                    margin: 10,
                    localized: 'text',
                    localizedKey: `INVIA_MESSAGGIO`,
                    listeners: {
                        tap: 'tapBtnSendMessage'
                    }
                }
            ]
        }
    ]
});
