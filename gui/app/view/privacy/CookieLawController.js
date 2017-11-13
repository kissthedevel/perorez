Ext.define('PENKNIFE.view.privacy.CookieLawController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.privacy-CookieLaw',

    tapCloseIcon: function(th) {
        this.getView().hide()
    },

    init: function() {
        this.view = this.getView()
    }
});
