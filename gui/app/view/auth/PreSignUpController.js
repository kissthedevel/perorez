Ext.define('PENKNIFE.view.auth.PreSignUpController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-PreSignUp',

    tapCloseIcon: function(th) {
        this.getView().destroy()
    },

    tapBtnSignIn: function(th) {
        this.view = this.getView()
        
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

    init: function() {
        
    }
});
