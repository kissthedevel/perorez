Ext.define('PENKNIFE.view.auth.SignUpController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-SignUp',

    tapCloseSignUp: function(th) {
        this.getView().destroy()
    },

    init: function() {
        this.lookupReference('Country').setValue(PENKNIFE.globals.PENPOSITION)

        let classic = this.getView().signType === 'classic'
        this.lookupReference('PremiumFields').setHidden(classic)
    }
});
