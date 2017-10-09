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
        /* PENKNIFE.lang = new langPKF()
        PENKNIFE.std = new stdPKF() */
        
        stdPKF.initGlobals()
        langPKF.initDictionary()
        stdPKF.overrideExtComponent()

        PENKNIFE.lang = langPKF
        PENKNIFE.std = stdPKF

        //LOADER
        Ext.Ajax.on('beforerequest', function( conn, options, eOpts ) {
            if (!options.params.disableLoadMask) {
                if( !PENKNIFE.globals.appLoader ) {
                    
                        var loader = Ext.create('Ext.Panel', {
                            floated: true,
                            modal: true,
                            centered: true,
                            html: "<div class=\"loaderAjax\">" +
                                        "<i class=\"loader__tile loader__tile__1\"></i>" +
                                        "<i class=\"loader__tile loader__tile__2\"></i>" +
                                        "<i class=\"loader__tile loader__tile__3\"></i>" +
                                        "<i class=\"loader__tile loader__tile__4\"></i>" +
                                        "<i class=\"loader__tile loader__tile__5\"></i>" +
                                        "<i class=\"loader__tile loader__tile__6\"></i>" +
                                        "<i class=\"loader__tile loader__tile__7\"></i>" +
                                        "<i class=\"loader__tile loader__tile__8\"></i>" +
                                        "<i class=\"loader__tile loader__tile__9\"></i>" +
                                    "</div>"
                        });
                        loader.show()
                        
                        PENKNIFE.globals.appLoader = loader        		
                }        	
                PENKNIFE.globals.appLoaderCount++;
            }
        });        
        Ext.Ajax.on('requestcomplete', function ( conn, response, options, eOpts ) {
            if (!options.params.disableLoadMask) {
                if( PENKNIFE.globals.appLoaderCount > 0 ) {
                    PENKNIFE.globals.appLoaderCount--;
                }
                if( PENKNIFE.globals.appLoaderCount == 0 && PENKNIFE.globals.appLoader ){
                    //PENKNIFE.globals.appLoader.hide();
                    PENKNIFE.globals.appLoader.destroy();
                    PENKNIFE.globals.appLoader = false;
                }
            }
        });
        Ext.Ajax.on('requestexception', function ( conn, response, options, eOpts ) {
            if (!options.params.disableLoadMask) {
                if( PENKNIFE.globals.appLoaderCount > 0 ) {
                    PENKNIFE.globals.appLoaderCount--;
                }
                if( PENKNIFE.globals.appLoaderCount == 0 && PENKNIFE.globals.appLoader ){
                    //PENKNIFE.globals.appLoader.hide();
                    PENKNIFE.globals.appLoader.destroy();
                    PENKNIFE.globals.appLoader = false;
                }
            }
        	//alert(response.responseText);
        });
        //END LOADER

        Ext.require('PENKNIFE.view.arch.Home')
        stdPKF.createHomeView()
        
        Ext.fly('backdrop').destroy()        
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
