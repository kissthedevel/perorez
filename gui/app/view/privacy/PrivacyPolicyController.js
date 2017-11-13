Ext.define('PENKNIFE.view.privacy.PrivacyPolicyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.privacy-PrivacyPolicy',

    tapCloseIcon: function(th) {
        this.getView().hide()
    },

    init: function() {
        this.view = this.getView()
    }
});
