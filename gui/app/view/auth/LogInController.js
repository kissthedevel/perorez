Ext.define('PENKNIFE.view.auth.LogInController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-LogIn',

    signinTap: function(th) {
        if (this.lookupReference('SecPw').getValue() === 'f4@RAbAb') {
            /**
             * TODO da fare sul success della chiamata al login
             */
            this.getView().callbackLogin()
            this.getView().destroy()
        }
    },

    signupTap: function(th) {
        Ext.create('PENKNIFE.view.auth.PreSignUp', {
            controllerHome: this.getView().controllerHome
        }).show()
        this.tapCloseIcon()
    },

    tapCloseIcon: function(th) {
        this.getView().destroy()
    },

    init: function() {
        
    }
});
