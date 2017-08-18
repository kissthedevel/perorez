/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('PENKNIFE.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    controller: 'main',

    requires: [
        'PENKNIFE.view.main.MainController'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    fullscreen: true,

    items: [
        {
            xtype: 'container',
            itemId: 'PENKNIFEMain', reference: 'PENKNIFEMain',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 1
        }
    ]
});
