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
         * @description PER_COMINCIARE
         */
        this.dictionary['en']['PER_COMINCIARE'] = `To begin with...`
        this.dictionary['it']['PER_COMINCIARE'] = `Per cominciare...`
        this.dictionary['zh_CN']['PER_COMINCIARE'] = `开始...`
        
        /**
         * @description NOME_AZIENDA
         */
        this.dictionary['en']['NOME_AZIENDA'] = `Company name`
        this.dictionary['it']['NOME_AZIENDA'] = `Nome Azienda`
        this.dictionary['zh_CN']['NOME_AZIENDA'] = `公司名称`
        
        /**
         * @description SITO_WEB
         */
        this.dictionary['en']['SITO_WEB'] = `Website`
        this.dictionary['it']['SITO_WEB'] = `Sito Web`
        this.dictionary['zh_CN']['SITO_WEB'] = `网站`

        /**
         * @description COME_VUOI_APPARIRE
         */
        this.dictionary['en']['COME_VUOI_APPARIRE'] = `How do you want to appear?`
        this.dictionary['it']['COME_VUOI_APPARIRE'] = `Come vuoi apparire?`
        this.dictionary['zh_CN']['COME_VUOI_APPARIRE'] = `你想如何出现？`

        /**
         * @description DESCRIVI_AZIENDA
         */
        this.dictionary['en']['DESCRIVI_AZIENDA'] = `Describe the Company`
        this.dictionary['it']['DESCRIVI_AZIENDA'] = `Descrivi l'Azienda`
        this.dictionary['zh_CN']['DESCRIVI_AZIENDA'] = `描述公司`

        /**
         * @description DESCRIZIONE_IN_CINESE
         */
        this.dictionary['en']['DESCRIZIONE_IN_CINESE'] = `In Chinese`
        this.dictionary['it']['DESCRIZIONE_IN_CINESE'] = `In lingua Cinese`
        this.dictionary['zh_CN']['DESCRIZIONE_IN_CINESE'] = `用中文`
        
        /**
         * @description DESCRIZIONE_IN_ITALIANO
         */
        this.dictionary['en']['DESCRIZIONE_IN_ITALIANO'] = `In Italian language`
        this.dictionary['it']['DESCRIZIONE_IN_ITALIANO'] = `In lingua Italiana`
        this.dictionary['zh_CN']['DESCRIZIONE_IN_ITALIANO'] = `在意大利语`
        
        /**
         * @description DESCRIZIONE_IN_INGLESE
         */
        this.dictionary['en']['DESCRIZIONE_IN_INGLESE'] = `In English`
        this.dictionary['it']['DESCRIZIONE_IN_INGLESE'] = `In lingua Inglese`
        this.dictionary['zh_CN']['DESCRIZIONE_IN_INGLESE'] = `英文`

        /**
         * @description CARICA_IL_LOGO_AZIENDA
         */
        this.dictionary['en']['CARICA_IL_LOGO_AZIENDA'] = `Upload the logo`
        this.dictionary['it']['CARICA_IL_LOGO_AZIENDA'] = `Carica il logo`
        this.dictionary['zh_CN']['CARICA_IL_LOGO_AZIENDA'] = `上传徽标`

        /**
         * @description SCEGLI_COLORE_SFONDO
         */
        this.dictionary['en']['SCEGLI_COLORE_SFONDO'] = `Tile color`
        this.dictionary['it']['SCEGLI_COLORE_SFONDO'] = `Colore Tile`
        this.dictionary['zh_CN']['SCEGLI_COLORE_SFONDO'] = `彩色瓷砖`

        /**
         * @description SCEGLI_DIMENSIONI
         */
        this.dictionary['en']['SCEGLI_DIMENSIONI'] = `Choose size`
        this.dictionary['it']['SCEGLI_DIMENSIONI'] = `Dimensioni`
        this.dictionary['zh_CN']['SCEGLI_DIMENSIONI'] = `选择大小`

        /**
         * @description PREMI_BTN_DIM_SCEGLIERE_DIM
         */
        this.dictionary['en']['PREMI_BTN_DIM_SCEGLIERE_DIM'] = `Press the "Dimensions" button to choose the Tile size`
        this.dictionary['it']['PREMI_BTN_DIM_SCEGLIERE_DIM'] = `Premi il pulsante "Dimensioni" per scegliere la grandezza Tile`
        this.dictionary['zh_CN']['PREMI_BTN_DIM_SCEGLIERE_DIM'] = `按“尺寸”按钮选择“瓷砖尺寸”`

        /**
         * @description TILE_SECOND_LATENCY
         */
        this.dictionary['en']['TILE_SECOND_LATENCY'] = `How many "seconds" do you want to stay on home (min 10 - max 60)?`
        this.dictionary['it']['TILE_SECOND_LATENCY'] = `Quanti "secondi" vuoi rimanere sulla home (min 10 - max 60)?`
        this.dictionary['zh_CN']['TILE_SECOND_LATENCY'] = `你想留几个“秒”（最小10 - 最多60）？`

        /**
         * @description SCEGLI_COLORE_TILE
         */
        this.dictionary['en']['SCEGLI_COLORE_TILE'] = `Choose Tile color`
        this.dictionary['it']['SCEGLI_COLORE_TILE'] = `Scegli colore Tile`
        this.dictionary['zh_CN']['SCEGLI_COLORE_TILE'] = `选择平铺颜色`



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
                    case 'label':
                        el.setLabel(this._translate(el.localizedKey))
                        break;

                    default:
                        break;
                }
            }
        })
        Ext.resumeLayouts()
    }
}