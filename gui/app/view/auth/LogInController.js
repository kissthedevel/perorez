Ext.define('PENKNIFE.view.auth.LogInController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-LogIn',

    /* signinTap: function(th) {
        if (this.lookupReference('SecPw').getValue() === 'f4@RAbAb') {
            this.getView().callbackLogin()
            this.getView().destroy()
        }
    }, */

    signinTap: function(th) {
        /**
         * @param email @type string
         * @param password @type string
         */

        let record = {
            email: this.lookupReference('SecUser').getValue(),
            password: this.lookupReference('SecPw').getValue()
        }
                
        Ext.Ajax.request({
            url: '../ws/auth/signin.php',
            params: Ext.JSON.encode(record),
            success: response => {
                let result = Ext.JSON.decode(response.responseText)

                if ( result.success && result.data.length > 0 ) {
                    Ext.Msg.alert(
                        langPKF._translate('COMPLIMENTI'),
                        langPKF._translate(result.message)
                    )

                } else {
                    Ext.Msg.alert(langPKF._translate('ATTENZIONE'), langPKF._translate(result.message))
                }
            },
            failure: (conn, response, options, eOpts) => {
            	let result = Ext.JSON.decode(response.responseText)
                Ext.Msg.alert(langPKF._translate('ATTENZIONE'), langPKF._translate(result.message))
            }
        })
        
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
