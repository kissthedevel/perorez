Ext.define('PENKNIFE.view.auth.UserPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-UserPanel',

    tapBACK_UserPanel: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    loadData(id) {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/auth/UserGet.php`,
            method: 'GET',
            params: {
                id: id
            },
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                if (!Ext.isEmpty(result.data)) {
                    let rec = result.data[0]

                    let typeIcon = rec.account_type === 'p' ? 'small-crown' :
                                     ( rec.account_type === 'i' ? 'growth' : 'approved-signal' )
                    this.lookupReference('TypeSign').setSrc(`resources/img/${typeIcon}.svg`)
                    let profileType = rec.account_type === 'p' ? 'Premium' :
                                        ( rec.account_type === 'i' ? 'Investor' : 'Classic' )
                    this.lookupReference('TipoProfilo').setHtml(profileType)

                    let sex = rec.sesso === 'F' ? 'avatar-female' : 'avatar-male'
                    this.lookupReference('ImgSex').setSrc(`resources/img/${sex}.svg`)

                    this.lookupReference('LabelNominativo').setHtml(`${rec.nome} ${rec.cognome}`)
                    this.lookupReference('LabelEmail').setHtml(`${langPKF._translate('EMAIL')}: ${rec.email}`)
                    
                    let labelTel = this.lookupReference('LabelTel')
                    labelTel.setHidden(Ext.isEmpty(rec.telefono))
                    if (!Ext.isEmpty(rec.telefono)) {
                        labelTel.setHtml(`${langPKF._translate('NTELEFONO')}: ${rec.telefono}`)
                    }

                    let labelNazione = this.lookupReference('LabelNazione')
                    labelNazione.setHidden(Ext.isEmpty(rec.nazione))
                    if (!Ext.isEmpty(rec.nazione)) {
                        let stNaz = Ext.create('PENKNIFE.view.auth.CountriesStore'),
                            nazTrans = stNaz.getAt(stNaz.findExact('codice', rec.nazione)).get('valore')
                        labelNazione.setHtml(`${langPKF._translate('NAZIONE')}: ${nazTrans}`)
                    }

                    let labelCitta = this.lookupReference('LabelCitta')
                    labelCitta.setHidden(Ext.isEmpty(rec.citta))
                    if (!Ext.isEmpty(rec.citta)) {
                        labelCitta.setHtml(`${langPKF._translate('CITTA')}: ${rec.citta}`)
                    }

                    let labelAzienda = this.lookupReference('LabelAzienda')
                    labelAzienda.setHidden(Ext.isEmpty(rec.azienda))
                    if (!Ext.isEmpty(rec.azienda)) {
                        labelAzienda.setHtml(`${langPKF._translate('AZIENDA')}: ${rec.azienda}`)
                    }

                    let labelSettore = this.lookupReference('LabelSettore')
                    labelSettore.setHidden(Ext.isEmpty(rec.settore))
                    if (!Ext.isEmpty(rec.settore)) {
                        let stSett = Ext.create('PENKNIFE.view.auth.Settori'),
                            settTransrec = stSett.getAt(stSett.findExact('codice', rec.settore)),
                            settTrans = settTransrec.get(PENKNIFE.globals.language === 'it' ? 'valoreIT' :
                                            ( PENKNIFE.globals.language === 'zh_CN' ? 'valoreCN' : 'valoreEN' ) )
                        
                        labelSettore.setHtml(`${langPKF._translate('SETTORE')}: ${settTrans}`)
                    }

                    let labelRuolo = this.lookupReference('LabelRuolo')
                    labelRuolo.setHidden(Ext.isEmpty(rec.ruolo))
                    if (!Ext.isEmpty(rec.ruolo)) {
                        let stRuoli = Ext.create('PENKNIFE.view.auth.Ruoli'),
                            roleTransrec = stRuoli.getAt(stRuoli.findExact('codice', rec.ruolo)),
                            roleTrans = roleTransrec.get(PENKNIFE.globals.language === 'it' ? 'valoreIT' :
                                            ( PENKNIFE.globals.language === 'zh_CN' ? 'valoreCN' : 'valoreEN' ) )
                            
                        labelRuolo.setHtml(`${langPKF._translate('RUOLO')}: ${roleTrans}`)
                    }

                    let labelFatturato = this.lookupReference('LabelFatturato')
                    labelFatturato.setHidden(Ext.isEmpty(rec.fatturato))
                    if (!Ext.isEmpty(rec.fatturato)) {
                        let stFatt = Ext.create('PENKNIFE.view.auth.Fatturato'),
                            fattTransrec = stFatt.getAt(stFatt.findExact('codice', rec.fatturato)),
                            fattTrans = fattTransrec.get(PENKNIFE.globals.language === 'it' ? 'valoreIT' :
                                            ( PENKNIFE.globals.language === 'zh_CN' ? 'valoreCN' : 'valoreEN' ) )
                            
                        labelFatturato.setHtml(`${langPKF._translate('FATTURATO')}: ${fattTrans}`)
                    }
                    
                    let labelPatrimonio = this.lookupReference('LabelPatrimonio')
                    labelPatrimonio.setHidden(Ext.isEmpty(rec.patrimonio))
                    if (!Ext.isEmpty(rec.patrimonio)) {
                        let stPatr = Ext.create('PENKNIFE.view.auth.Patrimonio'),
                            patTransrec = stPatr.getAt(stPatr.findExact('codice', rec.patrimonio)),
                            patTrans = patTransrec.get(PENKNIFE.globals.language === 'it' ? 'valoreIT' :
                                            ( PENKNIFE.globals.language === 'zh_CN' ? 'valoreCN' : 'valoreEN' ) )
                            
                        labelPatrimonio.setHtml(`${langPKF._translate('PATRIMONIO')}: ${patTrans}`)
                    }
                    
                    this.lookupReference('LabelDispInvest').setHidden(rec.investitore !== 1)

                }
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	console.log(result)
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.loadData(PENKNIFE.globals.storeUserSimple.getData().items[0].get('id'))
        
    }
});
