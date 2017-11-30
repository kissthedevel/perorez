Ext.define('PENKNIFE.view.contacts.ContactUsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacts-ContactUs',

    tapBACK_ContactUs: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    tapBtnSendMessage: function(th) {
        /**
         * @param nominativo @type string
         * @param email @type string
         * @param oggetto @type string
         * @param messaggio @type string
         */

        if (!this.validateFields()) {
            return false
        }

        let values = this.lookupReference('FormContactUs').getValues(),
            record = values
        
        Ext.apply(record, {

        })
        
        Ext.Ajax.request({
            url: '../ws/contact/contactus.php',
            params: Ext.JSON.encode(record),
            success: response => {
                let result = Ext.JSON.decode(response.responseText)
                //TODO tradurre messaggio
                if ( result.success ) {
                    Ext.Msg.alert(
                        langPKF._translate('COMPLIMENTI'),
                        langPKF._translate(result.message),
                        () => this.tapBACK_ContactUs()
                    )

                    /**
                     * distruggo pulsante per evitare script
                     * malevoli che scatenino richieste multiple..
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

        let values = this.lookupReference('FormContactUs').getValues()

        if ( Ext.isEmpty(values['nominativo']) 
                || Ext.isEmpty(values['email'])
                    || Ext.isEmpty(values['oggetto'])
                        || Ext.isEmpty(values['messaggio']) ) {
            Ext.Msg.alert(langPKF._translate('ATTENZIONE'), langPKF._translate('COMPILARE_CAMPI_ALL'))
            validForm = false
        }

        return validForm
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        if (PENKNIFE.globals.storeUserSimple.getCount() > 0) {
            let recUser = PENKNIFE.globals.storeUserSimple.getData().items[0]
            this.lookupReference('FormContactUs').setValues({
                nominativo: `${recUser.get('nome')} ${recUser.get('cognome')}`,
                email: recUser.get('email')
            })   
        }
        
    }
});
