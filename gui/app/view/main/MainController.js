/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PENKNIFE.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    refs: {
        PENKNIFEMain: '#PENKNIFEMain'
    },

    /* control: {
        ButtonProva: {
            tap: 'onButtonProvaTap'
        }
    }, */

    /* onButtonProvaTap: function(th) {
        this
        //this.getButtonProva2().hide()
    }, */

    init: function() {
        //this.lookupReference('ButtonProva2')
        PENKNIFE.PENKNIFE_main = this.lookupReference('PENKNIFEMain')
    }
});
