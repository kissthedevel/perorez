Ext.define('PENKNIFE.view.auth.PreSignUpController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-PreSignUp',

    tapCloseIcon: function(th) {
        this.view.destroy()
    },

    tapBtnSignIn: function(th) {
        let login = Ext.create('PENKNIFE.view.auth.LogIn', {
            controllerHome: this.view.controllerHome,
            callbackLogin: () => {
                //TODO generalizzare callback login
            }
        })

        this.view.hide()
        login.show()
        this.view.destroy()
    },

    startSignUp: function(type) {
        let signup = Ext.create('PENKNIFE.view.auth.SignUp', {
            controllerHome: this.view.controllerHome,
            signType: type
        })

        this.view.hide()
        signup.show()
        this.view.destroy()
    },

    tapButtonPremium: function(th) {
        this.startSignUp('premium')
    },
    tapButtonClassic: function(th) {
        this.startSignUp('classic')
    },

    init: function() {
        this.view = this.getView()
    }
});
