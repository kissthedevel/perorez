Ext.define('PENKNIFE.view.arch.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-home',

    tapHamburgerIcon: function(th) {
        if (!this.overlayHamburger) {
            this.createMenuHamburger()
        }
        this.overlayHamburger.show()
    },
    createMenuHamburger: function() {
        this.overlayHamburger = Ext.Viewport.add(Ext.create('PENKNIFE.view.arch.menu.HamburgerMenu', {
            controllerHome: this
        }))
    },

    tapBtnChina: function(th) {
        PENKNIFE.globals.language = 'zh_CN'
        PENKNIFE.lang._localize(Ext.Viewport.query('[localized]'))
    },
    tapBtnItaly: function(th) {
        PENKNIFE.globals.language = 'it'
        PENKNIFE.lang._localize(Ext.Viewport.query('[localized]'))
    },

    activeItemChangeCntMainContent: function(sender, value, oldValue) {
        if (PENKNIFE.globals.minimalMenu) {
            PENKNIFE.globals.minimalMenu.up('toolbar').setHidden(value.getItemId() !== 'LevelHome')
        }

        let fabsList = [
            'tilesList',
            'projectsList'
        ]

        /**
         * Se si passa da un livello piu' basso,
         * si eliminare contenuto livello di provenienza
         */
        if (value.livelloNavigazione < oldValue.livelloNavigazione) {
            /**
             * nascondo eventuale FAB videata di provenienza
             */
            if (oldValue.down().FAB) {
                let fabOldLevel = null
                fabsList.forEach( fabname => {
                    fabOldLevel = Ext.ComponentQuery.query(`button[FAB_id=FAB_${fabname}]`)
                    if (fabOldLevel.length > 0) {
                        Ext.Viewport.remove(fabOldLevel[0])
                    }
                })
            }
            oldValue.removeAll(true)
        }

        /**
         * nascondo eventuale FAB videata di provenienza
         */
        if (oldValue.down() && oldValue.down().FAB) {
            let fabOldLevel = null
            fabsList.forEach( fabname => {
                fabOldLevel = Ext.ComponentQuery.query(`button[FAB_id=FAB_${fabname}]`)
                if (fabOldLevel.length > 0) {
                    fabOldLevel[0].el.dom.style.display = 'none'
                }
            })
        }

        if (value.down().FAB) {
            let fabOldLevel = null
            fabsList.forEach( fabname => {
                fabOldLevel = Ext.ComponentQuery.query(`button[FAB_id=FAB_${fabname}]`)
                if (fabOldLevel.length > 0) {
                    fabOldLevel[0].el.dom.style.display = ''
                }
            })
        }
    },
    
    init: function() {
        Ext.suspendLayouts()

        if (stdPKF.isPhone()) {
            let archHome = this.lookupReference('ArchHome')
            archHome.add(Ext.create('Ext.Toolbar', {
                docked: 'top',
                cls: 'toolbar-menu-minimal',
                items: [
                    Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsList', {
                        controllerHome: this,
                        minimalMenu: true,
                        flex: 1
                    })
                ]
            }))

            this.barSignUpBottom = archHome.add(Ext.create('Ext.Toolbar', {
                docked: 'bottom',
                cls: 'toolbar-menu-minimal',
                items: [
                    {
                        xtype: 'button',
                        flex: 1,
                        ui: 'action',
                        cls: 'button-green button-sign-up-big',
                        margin: 10,
                        localized: 'text',
                        localizedKey: `SIGN_UP`,
                        handler: th => Ext.create('PENKNIFE.view.auth.PreSignUp', {
                            controllerHome: this
                        }).show()
                    }
                ]
            }))
        } else {
            let tbOthers = this.lookupReference('TbMainTablet_others')
            tbOthers.add(Ext.create('PENKNIFE.view.arch.TbMainTabletOthers', {
                controllerHome: this
            }))
            let leftMenu = this.lookupReference('CntMainMenu')
            leftMenu.add(Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsList', {
                controllerHome: this
            }))
            leftMenu.add(Ext.create('Ext.Toolbar', {
                docked: 'bottom',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    Ext.create('PENKNIFE.view.arch.menu.TbMainMenuUnloggedTablet', {
                        controllerHome: this
                    })
                ]
            }))

            this.leftMenuTablet = leftMenu
        }

        /**
         * GESTIONE HOME PAGE
         */
        //creazione panel tiles
        let panelTiles = Ext.create('PENKNIFE.view.tiles.PanelTiles', {
            controllerHome: this
        })
        this.lookupReference('LevelHome').add(panelTiles)
        /**
         * TODO:
         * RIMUOVERE QUANDO VERRANNO RIMOSSE LE INFO ISTITUZIONALI
         * questo viene fatto per dare il tempo di creare le tiles
         * e prelevare le dimensioni da modello
         */
        Ext.defer( () => {
            let storeUser = PENKNIFE.globals.storeUserSimple
            if ( storeUser && storeUser.getCount() > 0) {
                panelTiles.setHidden(storeUser.getData().items[0].get('administrator') !== 1)
            } else {
                panelTiles.setHidden(true)
            }
        }, 500)
        /* panelTiles.setHidden(true) */
        this.panelTiles = panelTiles

        this.demoIntroIstitut = Ext.create('PENKNIFE.view.arch.DemoIntroIstitut', {
            //height: Ext.getBody().getSize().height,
            style: {
                'background-color': '#B71D1D'
            }
        })
        this.lookupReference('LevelHome').add(this.demoIntroIstitut)

        this.lookupReference('LevelHome').add(Ext.create('PENKNIFE.view.arch.InfoLegali', {
            style: {
                'background-color': '#830000'
            },
            controllerHome: this
        }))

        cookieLaw = Ext.Viewport.add(Ext.create('PENKNIFE.view.privacy.CookieLaw', {}))
        cookieLaw.show()

        /**
         * inizializzo store user log
         */
        Ext.require('PENKNIFE.view.auth.UserSimple')
        PENKNIFE.globals.storeUserSimple = Ext.create('PENKNIFE.view.auth.UserSimple')

        /**
         * verifica sessione per log-in automatico
         */
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/auth/verifysession.php`,
            params: {},
            success: response => {
                let result = Ext.JSON.decode(response.responseText)
                
                /**
                 * se l'utente risulta in sessione si procede ad effettuare
                 * la chiamata di login
                 */
                if ( result.success && result.data.length > 0 ) {
                    Ext.Ajax.request({
                        url: `${PENKNIFEwsDomain}ws/auth/signin.php`,
                        params: Ext.JSON.encode({
                            email: result.data[0].email,
                            password: result.data[0].password
                        }),
                        success: response => {
                            let result = Ext.JSON.decode(response.responseText)
            
                            if ( result.success && result.data.length > 0 ) {
                                /**
                                 * inserisco utente loggato nello store userSimple
                                 */
                                PENKNIFE.globals.storeUserSimple.insert(0, result.data[0])

                                if (result.data[0].administrator === 1) {
                                    /**
                                     * TODO:
                                     * RIMUOVERE QUANDO VERRANNO RIMOSSE LE INFO ISTITUZIONALI
                                     * questo viene fatto per dare il tempo di creare le tiles
                                     * e prelevare le dimensioni da modello
                                     */
                                    panelTiles.setHidden(false)
                                }

                                if (stdPKF.isPhone()) {
                                    this.createMenuHamburger()
                                    let ctrlHamburger = this.overlayHamburger.lookupController()
                                    ctrlHamburger.callbackLogin()
                                } else {
                                    let menuTablet = this.leftMenuTablet.down('#CntTbMainMenuUnloggedTablet'),
                                        ctrlMenuTablet = menuTablet.lookupController()
                                    ctrlMenuTablet.callbackLogin()
                                }
                            }
                        }
                    })
                }
            },
            failure: (conn, response, options, eOpts) => {
            	let result = Ext.JSON.decode(response.responseText)
                Ext.Msg.alert(langPKF._translate('ATTENZIONE'), langPKF._translate(result.message))
            }
        })

        /* overlaySecret = Ext.Viewport.add(Ext.create('PENKNIFE.view.arch.Security', {}))
        overlaySecret.show() */

        Ext.resumeLayouts()
    }
});
