'use strict';

class langPKF {
    constructor() {
        
    }

    static initDictionary() {
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
        this.dictionary['en']['SIGN_UP'] = `Join the Club`
        this.dictionary['it']['SIGN_UP'] = `Entra nel Club`
        this.dictionary['zh_CN']['SIGN_UP'] = `加入俱乐部`

        /**
         * @description CONTACT_US
         */
        this.dictionary['en']['CONTACT_US'] = `Contact Us`
        this.dictionary['it']['CONTACT_US'] = `Contattaci`
        this.dictionary['zh_CN']['CONTACT_US'] = `联系我们`

        /**
         * @description PUBBL_IN_ITA_SHORT
         */
        /* this.dictionary['en']['PUBBL_IN_ITA_SHORT'] = `Advertise your company in Italy`
        this.dictionary['it']['PUBBL_IN_ITA_SHORT'] = `Pubblicizza in Italia`
        this.dictionary['zh_CN']['PUBBL_IN_ITA_SHORT'] = `广告公司在意大利` */
        /**
         * @description PUBBL_IN_ITA
         */
        /* this.dictionary['en']['PUBBL_IN_ITA'] = `Do you want to get acquainted in Italy? Advertise your company`
        this.dictionary['it']['PUBBL_IN_ITA'] = `Vuoi farti conoscere in Italia? Pubblicizza la tua azienda`
        this.dictionary['zh_CN']['PUBBL_IN_ITA'] = `你想在意大利知道吗？贵公司` */

        /**
         * @description PUBBL_IN_ITA_SHORT
         */
        this.dictionary['en']['PUBBL_IN_ITA_SHORT'] = `Get to know in China`
        this.dictionary['it']['PUBBL_IN_ITA_SHORT'] = `Fatti conoscere in Cina`
        this.dictionary['zh_CN']['PUBBL_IN_ITA_SHORT'] = `在中国认识`
        /**
         * @description PUBBL_IN_ITA
         */
        this.dictionary['en']['PUBBL_IN_ITA'] = `Let your brand know in China`
        this.dictionary['it']['PUBBL_IN_ITA'] = `Fai conoscere il tuo brand in Cina`
        this.dictionary['zh_CN']['PUBBL_IN_ITA'] = `让你的品牌在中国知道`
        
        
        /**
         * @description TROVA_AZIENDA_ITA_SHORT
         */
        this.dictionary['en']['TROVA_AZIENDA_ITA_SHORT'] = `Find a business partner`
        this.dictionary['it']['TROVA_AZIENDA_ITA_SHORT'] = `Trova un business partner`
        this.dictionary['zh_CN']['TROVA_AZIENDA_ITA_SHORT'] = `找到一个商业伙伴`
        /**
         * @description TROVA_AZIENDA_ITA
         */
        this.dictionary['en']['TROVA_AZIENDA_ITA'] = `Find a potential business partner`
        this.dictionary['it']['TROVA_AZIENDA_ITA'] = `Trova un potenziale business partner`
        this.dictionary['zh_CN']['TROVA_AZIENDA_ITA'] = `找到一个潜在的商业伙伴`
        
        
        /**
         * @description PRESENTA_PRG_INNOVAT_SHORT
         */
        this.dictionary['en']['PRESENTA_PRG_INNOVAT_SHORT'] = `It presents an innovative project`
        this.dictionary['it']['PRESENTA_PRG_INNOVAT_SHORT'] = `Presenta un progetto`
        this.dictionary['zh_CN']['PRESENTA_PRG_INNOVAT_SHORT'] = `它提出了一个创新项目`
        /**
         * @description PRESENTA_PRG_INNOVAT
         */
        this.dictionary['en']['PRESENTA_PRG_INNOVAT'] = `It presents an innovative project`
        this.dictionary['it']['PRESENTA_PRG_INNOVAT'] = `Presenta un progetto innovativo`
        this.dictionary['zh_CN']['PRESENTA_PRG_INNOVAT'] = `它提出了一个创新项目`
        
        
        /**
         * @description VENDI_COMPRA_IMMOB_SHORT
         */
        this.dictionary['en']['VENDI_COMPRA_IMMOB_SHORT'] = `Chinese Social Media`
        this.dictionary['it']['VENDI_COMPRA_IMMOB_SHORT'] = `Social Media Cinesi`
        this.dictionary['zh_CN']['VENDI_COMPRA_IMMOB_SHORT'] = `中国社会媒体`
        /**
         * @description VENDI_COMPRA_IMMOB
         */
        this.dictionary['en']['VENDI_COMPRA_IMMOB'] = `Chinese Social Media`
        this.dictionary['it']['VENDI_COMPRA_IMMOB'] = `Social Media Cinesi`
        this.dictionary['zh_CN']['VENDI_COMPRA_IMMOB'] = `中国社会媒体`

        
        /**
         * @description INVESTI_IN_PRG_ITA_SHORT
         */
        this.dictionary['en']['INVESTI_IN_PRG_ITA_SHORT'] = `Invest in projects`
        this.dictionary['it']['INVESTI_IN_PRG_ITA_SHORT'] = `Investi in progetti`
        this.dictionary['zh_CN']['INVESTI_IN_PRG_ITA_SHORT'] = `投资项目`
        /**
         * @description INVESTI_IN_PRG_ITA
         */
        this.dictionary['en']['INVESTI_IN_PRG_ITA'] = `Invest in innovative projects`
        this.dictionary['it']['INVESTI_IN_PRG_ITA'] = `Investi in progetti innovativi`
        this.dictionary['zh_CN']['INVESTI_IN_PRG_ITA'] = `投资于创新项目`
        
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
         * @description SCEGLI_DIMENSIONI_TILE
         */
        this.dictionary['en']['SCEGLI_DIMENSIONI_TILE'] = `Choose Tile Size`
        this.dictionary['it']['SCEGLI_DIMENSIONI_TILE'] = `Scegli dimensione Tile`
        this.dictionary['zh_CN']['SCEGLI_DIMENSIONI_TILE'] = `选择瓷砖尺寸`

        /**
         * @description CARICA_LOGO_AZIENDA
         */
        this.dictionary['en']['CARICA_LOGO_AZIENDA'] = `Upload the Company logo`
        this.dictionary['it']['CARICA_LOGO_AZIENDA'] = `Carica il logo dell'azienda`
        this.dictionary['zh_CN']['CARICA_LOGO_AZIENDA'] = `上传公司标志`
        
        /**
         * @description VUOI_DIVENTARE_ELITE
         */
        this.dictionary['en']['VUOI_DIVENTARE_ELITE'] = `Become a Super Partner`
        this.dictionary['it']['VUOI_DIVENTARE_ELITE'] = `Diventa partner Super`
        this.dictionary['zh_CN']['VUOI_DIVENTARE_ELITE'] = `成为超级合作伙伴`

        /*INVIATO FIN QUI*/

        /**
         * @description LAB_COPYRIGHT
         */
        this.dictionary['en']['LAB_COPYRIGHT'] = `copyright © Penknife Investment srl`
        this.dictionary['it']['LAB_COPYRIGHT'] = `copyright © Penknife Investment srl`
        this.dictionary['zh_CN']['LAB_COPYRIGHT'] = `版权 © Penknife Investment srl`
        
        /**
         * @description SEDE_LEGALE
         */
        this.dictionary['en']['SEDE_LEGALE'] = `Registered office`
        this.dictionary['it']['SEDE_LEGALE'] = `Sede legale`
        this.dictionary['zh_CN']['SEDE_LEGALE'] = `法定座位`

        /**
         * @description PRIVACY_POLICY
         */
        this.dictionary['en']['PRIVACY_POLICY'] = `Privacy policy`
        this.dictionary['it']['PRIVACY_POLICY'] = `Privacy policy`
        this.dictionary['zh_CN']['PRIVACY_POLICY'] = `隐私政策`

        /**
         * @description COOKIE_POLICY
         */
        this.dictionary['en']['COOKIE_POLICY'] = `Cookie policy`
        this.dictionary['it']['COOKIE_POLICY'] = `Cookie policy`
        this.dictionary['zh_CN']['COOKIE_POLICY'] = `Cookie政策`

        /**
         * @description COOKIE_SHORT
         */
        this.dictionary['en']['COOKIE_SHORT'] = `Penknife Investment uses cookies. Continuing to surf the site, you implicitly accept our use of cookies. For details, read our cookie policy.`
        this.dictionary['it']['COOKIE_SHORT'] = `Penknife Investment usa i cookie. Continuando a navigare nel sito, accetti implicitamente il nostro uso dei cookie. Per dettagli, leggi la nostra politica sui cookie.`
        this.dictionary['zh_CN']['COOKIE_SHORT'] = `Penknife投资使用饼干。 继续浏览网站，您隐含地接受我们使用Cookie。 详情请参阅我们的Cookie政策。`
        
        /**
         * @description USERNAME
         */
        this.dictionary['en']['USERNAME'] = `Username`
        this.dictionary['it']['USERNAME'] = `Username`
        this.dictionary['zh_CN']['USERNAME'] = `用户名`

        /**
         * @description PASSWORD
         */
        this.dictionary['en']['PASSWORD'] = `Password`
        this.dictionary['it']['PASSWORD'] = `Password`
        this.dictionary['zh_CN']['PASSWORD'] = `密码`

        /**
         * @description NON_SEI_ANCORA_ISCRITTO
         */
        this.dictionary['en']['NON_SEI_ANCORA_ISCRITTO'] = `Not yet registered?`
        this.dictionary['it']['NON_SEI_ANCORA_ISCRITTO'] = `Non sei ancora iscritto?`
        this.dictionary['zh_CN']['NON_SEI_ANCORA_ISCRITTO'] = `尚未注册？`

        /**
         * @description OPPURE
         */
        this.dictionary['en']['OPPURE'] = `or`
        this.dictionary['it']['OPPURE'] = `oppure`
        this.dictionary['zh_CN']['OPPURE'] = `或`

        /**
         * @description ANNULLA
         */
        this.dictionary['en']['ANNULLA'] = `Cancel`
        this.dictionary['it']['ANNULLA'] = `Annulla`
        this.dictionary['zh_CN']['ANNULLA'] = `取消`

        /**
         * @description PREMIUM_MEMBER
         */
        this.dictionary['en']['PREMIUM_MEMBER'] = `Premium`
        this.dictionary['it']['PREMIUM_MEMBER'] = `Premium`
        this.dictionary['zh_CN']['PREMIUM_MEMBER'] = `高级会员`

        /**
         * @description CLASSIC_MEMBER
         */
        this.dictionary['en']['CLASSIC_MEMBER'] = `Classic`
        this.dictionary['it']['CLASSIC_MEMBER'] = `Classic`
        this.dictionary['zh_CN']['CLASSIC_MEMBER'] = `经典/免费`

        /**
         * @description SLOGAN_PREMIUM
         */
        this.dictionary['en']['SLOGAN_PREMIUM'] = `Get the most out of Penknife, boost your business!`
        this.dictionary['it']['SLOGAN_PREMIUM'] = `Ottieni il massimo da Penknife, potenzia il tuo Business!`
        this.dictionary['zh_CN']['SLOGAN_PREMIUM'] = `充分利用铅笔刀，提高您的业务！`

        /**
         * @description SLOGAN_CLASSIC
         */
        this.dictionary['en']['SLOGAN_CLASSIC'] = `Discover the Penknife world, simple, fast .. Free`
        this.dictionary['it']['SLOGAN_CLASSIC'] = `Scopri il mondo Penknife, semplice, rapido..Free`
        this.dictionary['zh_CN']['SLOGAN_CLASSIC'] = `发现铅笔刀世界，简单，快速..免费`

        /**
         * @description CONFERMA_ISCRIZIONE
         */
        this.dictionary['en']['CONFERMA_ISCRIZIONE'] = `Confirm registration`
        this.dictionary['it']['CONFERMA_ISCRIZIONE'] = `Conferma iscrizione`
        this.dictionary['zh_CN']['CONFERMA_ISCRIZIONE'] = `确认注册`

        /**
         * @description ISCRIZIONE_PREMIUM
         */
        this.dictionary['en']['ISCRIZIONE_PREMIUM'] = `Premium membership`
        this.dictionary['it']['ISCRIZIONE_PREMIUM'] = `Iscrizione Premium`
        this.dictionary['zh_CN']['ISCRIZIONE_PREMIUM'] = `高级会员`

        /**
         * @description ISCRIZIONE_CLASSIC
         */
        this.dictionary['en']['ISCRIZIONE_CLASSIC'] = `Classical Inscription`
        this.dictionary['it']['ISCRIZIONE_CLASSIC'] = `Iscrizione Classic`
        this.dictionary['zh_CN']['ISCRIZIONE_CLASSIC'] = `古典题字`

        /**
         * @description EMAIL
         */
        this.dictionary['en']['EMAIL'] = `Email`
        this.dictionary['it']['EMAIL'] = `Email`
        this.dictionary['zh_CN']['EMAIL'] = `电子邮件`

        /**
         * @description SCEGLI_PASSWORD
         */
        this.dictionary['en']['SCEGLI_PASSWORD'] = `Choose Password`
        this.dictionary['it']['SCEGLI_PASSWORD'] = `Scegli Password`
        this.dictionary['zh_CN']['SCEGLI_PASSWORD'] = `选择密码`

        /**
         * @description RIPETI_PASSWORD
         */
        this.dictionary['en']['RIPETI_PASSWORD'] = `Repeat the password`
        this.dictionary['it']['RIPETI_PASSWORD'] = `Ripeti Password`
        this.dictionary['zh_CN']['RIPETI_PASSWORD'] = `重复密码`

        /**
         * @description PRESENTATI
         */
        this.dictionary['en']['PRESENTATI'] = `Appear`
        this.dictionary['it']['PRESENTATI'] = `Presentati`
        this.dictionary['zh_CN']['PRESENTATI'] = `提交`

        /**
         * @description NOME
         */
        this.dictionary['en']['NOME'] = `Name`
        this.dictionary['it']['NOME'] = `Nome`
        this.dictionary['zh_CN']['NOME'] = `名`

        /**
         * @description COGNOME
         */
        this.dictionary['en']['COGNOME'] = `Surname`
        this.dictionary['it']['COGNOME'] = `Cognome`
        this.dictionary['zh_CN']['COGNOME'] = `姓`

        /**
         * @description INFORMAZIONI_PREMIUM
         */
        this.dictionary['en']['INFORMAZIONI_PREMIUM'] = `Premium Information`
        this.dictionary['it']['INFORMAZIONI_PREMIUM'] = `Informazioni Premium`
        this.dictionary['zh_CN']['INFORMAZIONI_PREMIUM'] = `优质信息`

        /**
         * @description DISPONIBILE_INVESTIRE
         */
        this.dictionary['en']['DISPONIBILE_INVESTIRE'] = `Availability to invest`
        this.dictionary['it']['DISPONIBILE_INVESTIRE'] = `Disponibilità ad investire`
        this.dictionary['zh_CN']['DISPONIBILE_INVESTIRE'] = `可用性投资`

        /**
         * @description SESSO
         */
        this.dictionary['en']['SESSO'] = `Gender`
        this.dictionary['it']['SESSO'] = `Sesso`
        this.dictionary['zh_CN']['SESSO'] = `性别`

        /**
         * @description DATANASCITA
         */
        this.dictionary['en']['DATANASCITA'] = `Date of birth`
        this.dictionary['it']['DATANASCITA'] = `Data di nascita`
        this.dictionary['zh_CN']['DATANASCITA'] = `出生日期`

        /**
         * @description NTELEFONO
         */
        this.dictionary['en']['NTELEFONO'] = `Telephone number`
        this.dictionary['it']['NTELEFONO'] = `Telefono`
        this.dictionary['zh_CN']['NTELEFONO'] = `电话号码`

        /**
         * @description NAZIONE
         */
        this.dictionary['en']['NAZIONE'] = `Country`
        this.dictionary['it']['NAZIONE'] = `Nazione`
        this.dictionary['zh_CN']['NAZIONE'] = `国家`

        /**
         * @description CITTA
         */
        this.dictionary['en']['CITTA'] = `City`
        this.dictionary['it']['CITTA'] = `Città`
        this.dictionary['zh_CN']['CITTA'] = `城市`

        /**
         * @description AZIENDA
         */
        this.dictionary['en']['AZIENDA'] = `Company`
        this.dictionary['it']['AZIENDA'] = `Azienda`
        this.dictionary['zh_CN']['AZIENDA'] = `公司`

        /**
         * @description SETTORE
         */
        this.dictionary['en']['SETTORE'] = `Scope`
        this.dictionary['it']['SETTORE'] = `Settore`
        this.dictionary['zh_CN']['SETTORE'] = `范围`

        /**
         * @description RUOLO
         */
        this.dictionary['en']['RUOLO'] = `Business role`
        this.dictionary['it']['RUOLO'] = `Ruolo aziendale`
        this.dictionary['zh_CN']['RUOLO'] = `企业角色`

        /**
         * @description FATTURATO
         */
        this.dictionary['en']['FATTURATO'] = `Revenue`
        this.dictionary['it']['FATTURATO'] = `Fatturato`
        this.dictionary['zh_CN']['FATTURATO'] = `营业额`

        /**
         * @description PATRIMONIO
         */
        this.dictionary['en']['PATRIMONIO'] = `Assets`
        this.dictionary['it']['PATRIMONIO'] = `Patrimonio`
        this.dictionary['zh_CN']['PATRIMONIO'] = `遗产`

        /**
         * @description COMPLIMENTI
         */
        this.dictionary['en']['COMPLIMENTI'] = `Congratulations!`
        this.dictionary['it']['COMPLIMENTI'] = `Complimenti!`
        this.dictionary['zh_CN']['COMPLIMENTI'] = `恭喜！`
        
        /**
         * @description ATTENZIONE
         */
        this.dictionary['en']['ATTENZIONE'] = `Warning!`
        this.dictionary['it']['ATTENZIONE'] = `Attenzione!`
        this.dictionary['zh_CN']['ATTENZIONE'] = `警告！`
        
        /**
         * @description ACCOUNT_ESISTENTE
         */
        this.dictionary['en']['ACCOUNT_ESISTENTE'] = `Existing account!`
        this.dictionary['it']['ACCOUNT_ESISTENTE'] = `Account già esistente!`
        this.dictionary['zh_CN']['ACCOUNT_ESISTENTE'] = `现有账户！`
                
        /**
         * @description REGISTRAZIONE_SUCCESSO
         */
        this.dictionary['en']['REGISTRAZIONE_SUCCESSO'] = `Successfully registered!`
        this.dictionary['it']['REGISTRAZIONE_SUCCESSO'] = `Registrazione effettuata con successo!`
        this.dictionary['zh_CN']['REGISTRAZIONE_SUCCESSO'] = `成功注册！`

        /**
         * @description EMAIL_PWD_ERRATO
         */
        this.dictionary['en']['EMAIL_PWD_ERRATO'] = `Email or Password Wrong ..`
        this.dictionary['it']['EMAIL_PWD_ERRATO'] = `Email o Password errati..`
        this.dictionary['zh_CN']['EMAIL_PWD_ERRATO'] = `电子邮件或密码错误..`

        /**
         * @description ACCESSO_EFFETTUATO
         */
        this.dictionary['en']['ACCESSO_EFFETTUATO'] = `Logged in!`
        this.dictionary['it']['ACCESSO_EFFETTUATO'] = `Accesso effettuato!`
        this.dictionary['zh_CN']['ACCESSO_EFFETTUATO'] = `登录！`

        /**
         * @description ABBANDONARE_PENKNIFE
         */
        this.dictionary['en']['ABBANDONARE_PENKNIFE'] = `Are you sure you want to leave PENKNIFE?`
        this.dictionary['it']['ABBANDONARE_PENKNIFE'] = `Sei sicuro di voler uscire da Penknife?`
        this.dictionary['zh_CN']['ABBANDONARE_PENKNIFE'] = `你确定要离开PENKNIFE吗？`
        
        /**
         * @description VUOI_SAPERNE_PIU
         */
        this.dictionary['en']['VUOI_SAPERNE_PIU'] = `Would you like to know more?`
        this.dictionary['it']['VUOI_SAPERNE_PIU'] = `Vuoi saperne di più?`
        this.dictionary['zh_CN']['VUOI_SAPERNE_PIU'] = `你想知道更多？`
        
        /**
         * @description CONTATTACI_INSERIRE_TUA_AZIENDA
         */
        this.dictionary['en']['CONTATTACI_INSERIRE_TUA_AZIENDA'] = `Contact us to enter your company!`
        this.dictionary['it']['CONTATTACI_INSERIRE_TUA_AZIENDA'] = `Contattaci per inserire la tua Azienda!`
        this.dictionary['zh_CN']['CONTATTACI_INSERIRE_TUA_AZIENDA'] = `联系我们进入你的公司！`

        /**
         * @description NOMINATIVO
         */
        this.dictionary['en']['NOMINATIVO'] = `Name and surname`
        this.dictionary['it']['NOMINATIVO'] = `Nome e Cognome`
        this.dictionary['zh_CN']['NOMINATIVO'] = `名字和姓氏`

        /**
         * @description OGGETTO_RICHIESTA
         */
        this.dictionary['en']['OGGETTO_RICHIESTA'] = `Subject Required`
        this.dictionary['it']['OGGETTO_RICHIESTA'] = `Oggetto richiesta`
        this.dictionary['zh_CN']['OGGETTO_RICHIESTA'] = `主题必需`

        /**
         * @description MESSAGGIO
         */
        this.dictionary['en']['MESSAGGIO'] = `Message`
        this.dictionary['it']['MESSAGGIO'] = `Messaggio`
        this.dictionary['zh_CN']['MESSAGGIO'] = `信息`
        
        /**
         * @description INVIA_MESSAGGIO
         */
        this.dictionary['en']['INVIA_MESSAGGIO'] = `Send Message`
        this.dictionary['it']['INVIA_MESSAGGIO'] = `Invia messaggio`
        this.dictionary['zh_CN']['INVIA_MESSAGGIO'] = `发送消息`

        /**
         * @description COMPILARE_CAMPI_ALL
         */
        this.dictionary['en']['COMPILARE_CAMPI_ALL'] = `Fill in all the fields ..`
        this.dictionary['it']['COMPILARE_CAMPI_ALL'] = `Compilare tutti i campi..`
        this.dictionary['zh_CN']['COMPILARE_CAMPI_ALL'] = `填写所有的字段..`

        /**
         * @description MESSAGGIO_INVIATO
         */
        this.dictionary['en']['MESSAGGIO_INVIATO'] = `Mail sent successfully!`
        this.dictionary['it']['MESSAGGIO_INVIATO'] = `Mail inviata correttamente!`
        this.dictionary['zh_CN']['MESSAGGIO_INVIATO'] = `邮件发送正确！`

        /**
         * @description MESSAGGIO_FALLITO
         */
        this.dictionary['en']['MESSAGGIO_FALLITO'] = `Send message failed, try again ..`
        this.dictionary['it']['MESSAGGIO_FALLITO'] = `Invio messaggio fallito, riprovare..`
        this.dictionary['zh_CN']['MESSAGGIO_FALLITO'] = `发送信息失败，请再试一次。`

        /**
         * @description NOME_OBBLIGATORIO
         */
        this.dictionary['en']['NOME_OBBLIGATORIO'] = `Field Name required`
        this.dictionary['it']['NOME_OBBLIGATORIO'] = `Campo Nome obbligatorio`
        this.dictionary['zh_CN']['NOME_OBBLIGATORIO'] = `字段名称必需`

        /**
         * @description EMAIL_OBBLIGATORIO
         */
        this.dictionary['en']['EMAIL_OBBLIGATORIO'] = `Email field required`
        this.dictionary['it']['EMAIL_OBBLIGATORIO'] = `Campo Email obbligatorio`
        this.dictionary['zh_CN']['EMAIL_OBBLIGATORIO'] = `电子邮件字段必填`

        /**
         * @description PASSWORD_OBBLIGATORIO
         */
        this.dictionary['en']['PASSWORD_OBBLIGATORIO'] = `Password field required`
        this.dictionary['it']['PASSWORD_OBBLIGATORIO'] = `Campo Password obbligatorio`
        this.dictionary['zh_CN']['PASSWORD_OBBLIGATORIO'] = `需要密码字段`

        /**
         * @description TELEFONO_OBBLIGATORIO
         */
        this.dictionary['en']['TELEFONO_OBBLIGATORIO'] = `Telephone field required`
        this.dictionary['it']['TELEFONO_OBBLIGATORIO'] = `Campo Telefono obbligatorio`
        this.dictionary['zh_CN']['TELEFONO_OBBLIGATORIO'] = `需要电话领域`

        /**
         * @description COGNOME_OBBLIGATORIO
         */
        this.dictionary['en']['COGNOME_OBBLIGATORIO'] = `Field Required last name`
        this.dictionary['it']['COGNOME_OBBLIGATORIO'] = `Campo Cognome obbligatorio`
        this.dictionary['zh_CN']['COGNOME_OBBLIGATORIO'] = `字段必填姓氏`

        /**
         * @description DIVENTA_MEMBRO
         */
        this.dictionary['en']['DIVENTA_MEMBRO'] = `Become a member !!`
        this.dictionary['it']['DIVENTA_MEMBRO'] = `Diventa Membro!!`
        this.dictionary['zh_CN']['DIVENTA_MEMBRO'] = `成为会员！`

        /**
         * @description ISCRIVITI_PER_CERCARE_AZIENDA
         */
        this.dictionary['en']['ISCRIVITI_PER_CERCARE_AZIENDA'] = `If you want to find a potential Business Partner, sign up for free. Join the club !!`
        this.dictionary['it']['ISCRIVITI_PER_CERCARE_AZIENDA'] = `Se vuoi trovare un potenziale Business Partner iscriviti gratuitamente. Entra nel club!!`
        this.dictionary['zh_CN']['ISCRIVITI_PER_CERCARE_AZIENDA'] = `如果您想找到潜在的业务合作伙伴，请免费注册。 加入俱乐部！`

        /**
         * @description I_MIEI_PROGETTI
         */
        this.dictionary['en']['I_MIEI_PROGETTI'] = `My Projects`
        this.dictionary['it']['I_MIEI_PROGETTI'] = `I miei Progetti`
        this.dictionary['zh_CN']['I_MIEI_PROGETTI'] = `我的项目`

        /**
         * @description ISCRIVITI_INSERT_PROJECT
         */
        this.dictionary['en']['ISCRIVITI_INSERT_PROJECT'] = `If you want to present an Innovative Project, sign up for free. Join the club !!`
        this.dictionary['it']['ISCRIVITI_INSERT_PROJECT'] = `Se vuoi presentare un Progetto Innovativo iscriviti gratuitamente. Entra nel club!!`
        this.dictionary['zh_CN']['ISCRIVITI_INSERT_PROJECT'] = `如果您想展示创新项目，请免费注册。 加入俱乐部！`

        /**
         * @description INSERISCI_PROGETTO
         */
        this.dictionary['en']['INSERISCI_PROGETTO'] = `Enter a project`
        this.dictionary['it']['INSERISCI_PROGETTO'] = `Inserisci un progetto`
        this.dictionary['zh_CN']['INSERISCI_PROGETTO'] = `输入一个项目`

        /**
         * @description DATI_PRINCIPALI
         */
        this.dictionary['en']['DATI_PRINCIPALI'] = `Main data...`
        this.dictionary['it']['DATI_PRINCIPALI'] = `Dati principali...`
        this.dictionary['zh_CN']['DATI_PRINCIPALI'] = `主要数据...`

        /**
         * @description NOME_PROGETTO
         */
        this.dictionary['en']['NOME_PROGETTO'] = `Project Name`
        this.dictionary['it']['NOME_PROGETTO'] = `Nome Progetto`
        this.dictionary['zh_CN']['NOME_PROGETTO'] = `项目名称`

        /**
         * @description AZIENDA_IDEATRICE
         */
        this.dictionary['en']['AZIENDA_IDEATRICE'] = `Idea Company`
        this.dictionary['it']['AZIENDA_IDEATRICE'] = `Azienda ideatrice`
        this.dictionary['zh_CN']['AZIENDA_IDEATRICE'] = `Idea公司`

        /**
         * @description INSER_IMM_SLIDE
         */
        this.dictionary['en']['INSER_IMM_SLIDE'] = `Insert images to the slides`
        this.dictionary['it']['INSER_IMM_SLIDE'] = `Inserisci immagini alle slide`
        this.dictionary['zh_CN']['INSER_IMM_SLIDE'] = `将图像插入到幻灯片中`

        /**
         * @description CARICA_IMM_1
         */
        this.dictionary['en']['CARICA_IMM_1'] = `Upload image no.1`
        this.dictionary['it']['CARICA_IMM_1'] = `Carica immagine n.1`
        this.dictionary['zh_CN']['CARICA_IMM_1'] = `上传图片1`
        
        /**
         * @description CARICA_IMM_2
         */
        this.dictionary['en']['CARICA_IMM_2'] = `Upload image no.2`
        this.dictionary['it']['CARICA_IMM_2'] = `Carica immagine n.2`
        this.dictionary['zh_CN']['CARICA_IMM_2'] = `上传图片2`

        /**
         * @description CARICA_IMM_3
         */
        this.dictionary['en']['CARICA_IMM_3'] = `Upload image no.3`
        this.dictionary['it']['CARICA_IMM_3'] = `Carica immagine n.3`
        this.dictionary['zh_CN']['CARICA_IMM_3'] = `上传图片3`
        
        /**
         * @description DESCRIVI_PRJ
         */
        this.dictionary['en']['DESCRIVI_PRJ'] = `Describe the project`
        this.dictionary['it']['DESCRIVI_PRJ'] = `Descrivi il progetto`
        this.dictionary['zh_CN']['DESCRIVI_PRJ'] = `描述该项目`

        /**
         * @description LOAD_IMM_PRJ
         */
        this.dictionary['en']['LOAD_IMM_PRJ'] = `Upload project image`
        this.dictionary['it']['LOAD_IMM_PRJ'] = `Carica immagine progetto`
        this.dictionary['zh_CN']['LOAD_IMM_PRJ'] = `上传项目图片`

        /**
         * @description RICH_VARIE
         */
        this.dictionary['en']['RICH_VARIE'] = `Other requests`
        this.dictionary['it']['RICH_VARIE'] = `Altre richieste`
        this.dictionary['zh_CN']['RICH_VARIE'] = `其他请求`

        /**
         * @description ARRICCHISCI_PRJ
         */
        this.dictionary['en']['ARRICCHISCI_PRJ'] = `Enhance your project !!`
        this.dictionary['it']['ARRICCHISCI_PRJ'] = `Arricchisci il tuo progetto!!`
        this.dictionary['zh_CN']['ARRICCHISCI_PRJ'] = `增强您的项目！`

        /**
         * @description ATTACH_AFTER_PROJECT
         */
        this.dictionary['en']['ATTACH_AFTER_PROJECT'] = `* After entering the project you can also insert attachments. <br> Ex: Business plan, project analysis, visura ...`
        this.dictionary['it']['ATTACH_AFTER_PROJECT'] = `* Dopo aver inserito il progetto potrai inserire anche degli allegati. <br> Ex: Business plan, analisi di progetto, visura...`
        this.dictionary['zh_CN']['ATTACH_AFTER_PROJECT'] = `*进入项目后，您还可以插入附件。 <br> 示例：商业计划书，项目分析...`

        /**
         * @description DATI_PERSONALI
         */
        this.dictionary['en']['DATI_PERSONALI'] = `Personal details`
        this.dictionary['it']['DATI_PERSONALI'] = `Dati personali`
        this.dictionary['zh_CN']['DATI_PERSONALI'] = `个人资料`

        /**
         * @description CONTATTI
         */
        this.dictionary['en']['CONTATTI'] = `Contacts`
        this.dictionary['it']['CONTATTI'] = `Contatti`
        this.dictionary['zh_CN']['CONTATTI'] = `往来`

        /**
         * @description RESIDENZA
         */
        this.dictionary['en']['RESIDENZA'] = `Residency`
        this.dictionary['it']['RESIDENZA'] = `Residenza`
        this.dictionary['zh_CN']['RESIDENZA'] = `住所`

        /**
         * @description INFO_PROF
         */
        this.dictionary['en']['INFO_PROF'] = `Professional data`
        this.dictionary['it']['INFO_PROF'] = `Dati professionali`
        this.dictionary['zh_CN']['INFO_PROF'] = `专业数据`

        /**
         * @description GEST_USERS
         */
        this.dictionary['en']['GEST_USERS'] = `Subscriber Management`
        this.dictionary['it']['GEST_USERS'] = `Gestione Iscritti`
        this.dictionary['zh_CN']['GEST_USERS'] = `订户管理`

        /**
         * @description EL_ATTACH
         */
        this.dictionary['en']['EL_ATTACH'] = `List of Attachments`
        this.dictionary['it']['EL_ATTACH'] = `Elenco Allegati`
        this.dictionary['zh_CN']['EL_ATTACH'] = `附件列表`
        


        


        /**
         * @description KEY
         */
        this.dictionary['en']['KEY'] = `translation`
        this.dictionary['it']['KEY'] = `traduzione`
        this.dictionary['zh_CN']['KEY'] = `翻译`
        
    }

    static _translate(string) {
        return this.dictionary[PENKNIFE.globals.language][string] || string
    }

    static _localize(cmps) {
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