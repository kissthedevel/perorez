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

        let values = this.lookupReference('FormSignUp').getValues(),
            record = values

        if (!this.validateFields(values)) {
            return false
        }
        
        Ext.apply(record, {
        	account_type: this.getView().signType,
            check_datipers: 1,
            check_privacy: 1,
            investitore: record.investitore ? 1 : 0
        })
        
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/auth/signup.php`,
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

    validateFields: function(values) {
        let validForm = true,
            message = []

        if (Ext.isEmpty(values['nome'])) {
            message.push(langPKF._translate('NOME_OBBLIGATORIO'))
        }

        if (Ext.isEmpty(values['email'])) {
            message.push(langPKF._translate('EMAIL_OBBLIGATORIO'))
        }
        
        if (Ext.isEmpty(values['password'])) {
            message.push(langPKF._translate('PASSWORD_OBBLIGATORIO'))
        }

        if (values['password'] !== values['passwordcheck']) {
            message.push(langPKF._translate('PASSWORD_CHECK_NO'))
        }
        
        if (Ext.isEmpty(values['telefono'])) {
            message.push(langPKF._translate('TELEFONO_OBBLIGATORIO'))
        }
        
        if (Ext.isEmpty(values['cognome'])) {
            message.push(langPKF._translate('COGNOME_OBBLIGATORIO'))
        }

        /**
         * TODO FIXME
         * Controllare che le due password siano identiche
         */

        if (message.length > 0) {
            validForm = false
            let msgEach = ``

            message.forEach( item => msgEach += `<br>${item}`)

            Ext.Msg.alert(langPKF._translate('ATTENZIONE'), msgEach)
        }

        return validForm
    },

    init: function() {
        let lang = PENKNIFE.globals.language,
            displayFld = lang === 'it' ? 'valoreIT' : ( lang === 'zh_CN' ? 'valoreCN' : 'valoreEN' )

        this.lookupReference('Country').setValue(PENKNIFE.globals.PENPOSITION)
        this.lookupReference('Settore').setDisplayField(displayFld)
        this.lookupReference('Ruolo').setDisplayField(displayFld)
        this.lookupReference('Fatturato').setDisplayField(displayFld)
        this.lookupReference('Patrimonio').setDisplayField(displayFld)

        let classic = this.getView().signType === 'classic'
        this.lookupReference('PremiumFields').setHidden(classic)
    }
});
