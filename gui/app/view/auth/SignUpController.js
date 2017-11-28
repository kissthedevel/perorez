Ext.define('PENKNIFE.view.auth.SignUpController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-SignUp',

    tapCloseSignUp: function(th) {
        this.getView().destroy()
    },

    tapSignUp: function(th) {
        /**
         * @param account_type @type string
         * @param check_datipers @type boolean
         * @param check_privacy @type boolean
         * @param username @type string
         * @param email @type string
         * @param password @type string
         * @param nome @type string
         * @param cognome @type string
         * @param sesso @type string
         * @param datanascita @type string
         * @param telefono @type string
         * @param nazione @type string
         * @param citta @type string
         * @param azienda @type string
         * @param settore @type integer
         * @param ruolo @type integer
         * @param fatturato @type integer
         * @param patrimonio @type integer
         * @param investitore @type boolean
         */

        if (!this.validateFields()) {
            return false
        }

        let values = this.lookupReference('FormSignUp').getValues(),
            record = values
        
        Ext.apply(record, {
        	account_type: this.getView().signType,
            check_datipers: 1,
            check_privacy: 1,
            investitore: record.investitore ? 1 : 0
        })
        
        Ext.Ajax.request({
            url: '../ws/auth/signup.php',
            params: Ext.JSON.encode(record),
            success: response => {
                let result = Ext.JSON.decode(response.responseText)
                //TODO tradurre messaggio
                if ( result.success && result.data.length > 0 ) {
                    Ext.Msg.alert(
                        langPKF._translate('COMPLIMENTI'),
                        langPKF._translate(result.message),
                        () => window.location.reload()
                    )

                    /**
                     * distruggo pulsante per evitare script
                     * malevoli che scatenino richieste multiple.
                     */
                    th.destroy()

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

    validateFields: function() {
        let validForm = false
        //TODO gestire
        validForm = true

        return validForm
    },

    init: function() {
        this.lookupReference('Country').setValue(PENKNIFE.globals.PENPOSITION)

        let classic = this.getView().signType === 'classic'
        this.lookupReference('PremiumFields').setHidden(classic)
    }
});
