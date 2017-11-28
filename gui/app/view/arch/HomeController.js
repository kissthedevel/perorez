Ext.define('PENKNIFE.view.arch.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-home',

    tapHamburgerIcon: function(th) {
        if (!this.overlayHamburger) {
            this.overlayHamburger = Ext.Viewport.add(Ext.create('PENKNIFE.view.arch.menu.HamburgerMenu', {
                controllerHome: this
            }))
        }
        this.overlayHamburger.show()
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
        /**
         * Se si passa da un livello piu' basso,
         * si eliminare contenuto livello di provenienza
         */
        if (value.livelloNavigazione < oldValue.livelloNavigazione) {
            /**
             * nascondo eventuale FAB videata di provenienza
             */
            if (oldValue.down().FAB) {
                Ext.Viewport.remove(Ext.ComponentQuery.query('button[FAB_id=FAB_tilesList]')[0])
            }
            oldValue.removeAll(true)
        }

        /**
         * nascondo eventuale FAB videata di provenienza
         */
        if (oldValue.down() && oldValue.down().FAB) {
            Ext.ComponentQuery.query('button[FAB_id=FAB_tilesList]')[0].el.dom.style.display = 'none'
        }

        if (value.down().FAB) {
            Ext.ComponentQuery.query('button[FAB_id=FAB_tilesList]')[0].el.dom.style.display = ''
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
        }

        /**
         * GESTIONE HOME PAGE
         */
        //creazione panel tiles
        let panelTiles = Ext.create('PENKNIFE.view.tiles.PanelTiles', {
            controllerHome: this
        })
        this.lookupReference('LevelHome').add(panelTiles)
        panelTiles.setHidden(true)
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
         * verifica sessione
         */
        Ext.Ajax.request({
            url: '../ws/auth/verifysession.php',
            params: {},
            success: response => {
                let result = Ext.JSON.decode(response.responseText)
                //TODO tradurre messaggio
                if ( result.success && result.data.length > 0 ) {
                    
                } else {
                    Ext.Msg.alert(langPKF._translate('ATTENZIONE'), langPKF._translate(result.message))
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
