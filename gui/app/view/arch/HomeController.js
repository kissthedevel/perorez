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
            this.lookupReference('ArchHome').add(Ext.create('Ext.Toolbar', {
                docked: 'top',
                cls: 'toolbar-menu-minimal',
                items: [
                    Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsList', {
                        minimalMenu: true,
                        flex: 1
                    })
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

        overlaySecret = Ext.Viewport.add(Ext.create('PENKNIFE.view.arch.Security', {}))
        overlaySecret.show()

        Ext.resumeLayouts()
    }
});
