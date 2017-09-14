
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
        }
    ]
});
