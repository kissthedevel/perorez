/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('PENKNIFE.Application', {
    extend: 'Ext.app.Application',

    name: 'PENKNIFE',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
        PENKNIFE.lang = new langPKF()
        PENKNIFE.std = new stdPKF()
        PENKNIFE.std.initGlobals()
        PENKNIFE.std.createHomeView()        
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
