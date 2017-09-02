'use strict';

class langPKF {
    constructor() {
        /**
         * DICTIONARY
         */
        this.dictionary = new Array()
        this.dictionary['en'] = new Array()
        this.dictionary['it'] = new Array()
        this.dictionary['zh_CN'] = new Array()

        /**
         * @description SIGN_IN
         */
        this.dictionary['en']['SIGN_IN'] = `Sign In`
        this.dictionary['it']['SIGN_IN'] = `Accedi`
        this.dictionary['zh_CN']['SIGN_IN'] = `签到`

        /**
         * @description NOSTRI_SERVIZI
         */
        this.dictionary['en']['NOSTRI_SERVIZI'] = `Our services`
        this.dictionary['it']['NOSTRI_SERVIZI'] = `I nostri Servizi`
        this.dictionary['zh_CN']['NOSTRI_SERVIZI'] = `我们的服务`

        /**
         * @description VUOI_SAPERNE_DI_PIU
         */
        this.dictionary['en']['VUOI_SAPERNE_DI_PIU'] = `Want to know more?`
        this.dictionary['it']['VUOI_SAPERNE_DI_PIU'] = `Vuoi saperne di più?`
        this.dictionary['zh_CN']['VUOI_SAPERNE_DI_PIU'] = `想了解更多？`
        
        /**
         * @description SIGN_UP
         */
        this.dictionary['en']['SIGN_UP'] = `Sign Up`
        this.dictionary['it']['SIGN_UP'] = `Iscriviti`
        this.dictionary['zh_CN']['SIGN_UP'] = `报名`

        /**
         * @description CONTACT_US
         */
        this.dictionary['en']['CONTACT_US'] = `Contact Us`
        this.dictionary['it']['CONTACT_US'] = `Contattaci`
        this.dictionary['zh_CN']['CONTACT_US'] = `联系我们`

        /**
         * @description PUBBL_IN_ITA_SHORT
         */
        this.dictionary['en']['PUBBL_IN_ITA_SHORT'] = `Advertise your company in Italy`
        //this.dictionary['it']['PUBBL_IN_ITA_SHORT'] = `Pubblicizza l'azienda in Italia`
        this.dictionary['it']['PUBBL_IN_ITA_SHORT'] = `Pubblicizza in Italia`
        this.dictionary['zh_CN']['PUBBL_IN_ITA_SHORT'] = `广告公司在意大利`
        /**
         * @description PUBBL_IN_ITA
         */
        this.dictionary['en']['PUBBL_IN_ITA'] = `Do you want to get acquainted in Italy? Advertise your company`
        this.dictionary['it']['PUBBL_IN_ITA'] = `Vuoi farti conoscere in Italia? Pubblicizza la tua azienda`
        this.dictionary['zh_CN']['PUBBL_IN_ITA'] = `你想在意大利知道吗？贵公司`
        
        
        /**
         * @description TROVA_AZIENDA_ITA_SHORT
         */
        this.dictionary['en']['TROVA_AZIENDA_ITA_SHORT'] = `Find an Italian company`
        //this.dictionary['it']['TROVA_AZIENDA_ITA_SHORT'] = `Trova un'azienda italiana`
        this.dictionary['it']['TROVA_AZIENDA_ITA_SHORT'] = `Trova un'azienda`
        this.dictionary['zh_CN']['TROVA_AZIENDA_ITA_SHORT'] = `找到一家意大利公司`
        /**
         * @description TROVA_AZIENDA_ITA
         */
        this.dictionary['en']['TROVA_AZIENDA_ITA'] = `Find an Italian company interested in you and your products`
        this.dictionary['it']['TROVA_AZIENDA_ITA'] = `Trova un'azienda italiana interessata a te e ai tuoi prodotti`
        this.dictionary['zh_CN']['TROVA_AZIENDA_ITA'] = `找到一家意大利公司感兴趣的是你和你的产品`
        
        
        /**
         * @description PRESENTA_PRG_INNOVAT_SHORT
         */
        this.dictionary['en']['PRESENTA_PRG_INNOVAT_SHORT'] = `It presents an innovative project`
        //this.dictionary['it']['PRESENTA_PRG_INNOVAT_SHORT'] = `Presenta un progetto innovativo`
        this.dictionary['it']['PRESENTA_PRG_INNOVAT_SHORT'] = `Presenta un progetto`
        this.dictionary['zh_CN']['PRESENTA_PRG_INNOVAT_SHORT'] = `它提出了一个创新项目`
        /**
         * @description PRESENTA_PRG_INNOVAT
         */
        this.dictionary['en']['PRESENTA_PRG_INNOVAT'] = `It introduces innovative projects to Italian investors`
        this.dictionary['it']['PRESENTA_PRG_INNOVAT'] = `Presenta progetti innovativi ad investitori italiani`
        this.dictionary['zh_CN']['PRESENTA_PRG_INNOVAT'] = `它提出各种创新项目，意大利投资者`
        
        
        /**
         * @description VENDI_COMPRA_IMMOB_SHORT
         */
        this.dictionary['en']['VENDI_COMPRA_IMMOB_SHORT'] = `Sell ​​/ Buy Real Estate`
        //this.dictionary['it']['VENDI_COMPRA_IMMOB_SHORT'] = `Vendi / Compra Immobili`
        this.dictionary['it']['VENDI_COMPRA_IMMOB_SHORT'] = `Mercato Immobiliare`
        this.dictionary['zh_CN']['VENDI_COMPRA_IMMOB_SHORT'] = `出售/购买属性`
        /**
         * @description VENDI_COMPRA_IMMOB
         */
        this.dictionary['en']['VENDI_COMPRA_IMMOB'] = `Sell ​​/ Buy Real Estate`
        this.dictionary['it']['VENDI_COMPRA_IMMOB'] = `Vendi / Compra Immobili`
        this.dictionary['zh_CN']['VENDI_COMPRA_IMMOB'] = `出售/购买属性`

        
        /**
         * @description INVESTI_IN_PRG_ITA_SHORT
         */
        this.dictionary['en']['INVESTI_IN_PRG_ITA_SHORT'] = `Invest in Italian projects`
        //this.dictionary['it']['INVESTI_IN_PRG_ITA_SHORT'] = `Investi in progetti italiani`
        this.dictionary['it']['INVESTI_IN_PRG_ITA_SHORT'] = `Investi in Italia`
        this.dictionary['zh_CN']['INVESTI_IN_PRG_ITA_SHORT'] = `投资意大利项目`
        /**
         * @description INVESTI_IN_PRG_ITA
         */
        this.dictionary['en']['INVESTI_IN_PRG_ITA'] = `Invest in innovative Italian projects`
        this.dictionary['it']['INVESTI_IN_PRG_ITA'] = `Investi in progetti innovativi italiani`
        this.dictionary['zh_CN']['INVESTI_IN_PRG_ITA'] = `投资于创新的意大利项目`
        
        /**
         * @description SEI_GIA_ISCRITTO
         */
        this.dictionary['en']['SEI_GIA_ISCRITTOKEY'] = `Are you already a member?`
        this.dictionary['it']['SEI_GIA_ISCRITTO'] = `sei già iscritto?`
        this.dictionary['zh_CN']['SEI_GIA_ISCRITTO'] = `你已经注册了吗？`
        
        /**
         * @description LE_MIE_AZIENDE
         */
        this.dictionary['en']['LE_MIE_AZIENDE'] = `My Companies`
        this.dictionary['it']['LE_MIE_AZIENDE'] = `Le mie Aziende`
        this.dictionary['zh_CN']['LE_MIE_AZIENDE'] = `我的公司`

        /**
         * @description INSERISCI_AZIENDA
         */
        this.dictionary['en']['INSERISCI_AZIENDA'] = `Enter Company`
        this.dictionary['it']['INSERISCI_AZIENDA'] = `Inserisci Azienda`
        this.dictionary['zh_CN']['INSERISCI_AZIENDA'] = `进入公司`



        /**
         * @description KEY
         */
        this.dictionary['en']['KEY'] = `translation`
        this.dictionary['it']['KEY'] = `traduzione`
        this.dictionary['zh_CN']['KEY'] = `翻译`
        
    }

    _translate(string) {
        return this.dictionary[PENKNIFE.globals.language][string] || string
    }

    _localize(cmps) {
        Ext.suspendLayouts()
        cmps.forEach( el => {
            if (el.localized) {
                switch (el.localized) {
                    case 'text':
                        el.setText(this._translate(el.localizedKey))
                        break;
                    case 'html':
                        el.setHtml(this._translate(el.localizedKey))
                        break;
                    case 'title':
                        el.setTitle(this._translate(el.localizedKey))
                        break;

                    default:
                        break;
                }
            }
        })
        Ext.resumeLayouts()
    }
}