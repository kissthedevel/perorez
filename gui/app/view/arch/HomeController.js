Ext.define('PENKNIFE.view.arch.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-home',

    tapHamburgerIcon: function(th) {
        if (!this.overlayHamburger) {
            this.overlay = Ext.Viewport.add(Ext.create('PENKNIFE.view.arch.menu.HamburgerMenu'))
        }
        this.overlay.show()
    },
    tapBtnChina: function(th) {
        PENKNIFE.globals.language = 'zh_CN'
        PENKNIFE.lang._localize(Ext.Viewport.query('[localized]'))
    },
    tapBtnItaly: function(th) {
        PENKNIFE.globals.language = 'it'
        PENKNIFE.lang._localize(Ext.Viewport.query('[localized]'))
    },
    
    init: function() {
        Ext.suspendLayouts()

        if (PENKNIFE.std.isPhone()) {
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
            tbOthers.add(Ext.create('PENKNIFE.view.arch.TbMainTabletOthers'))
            let leftMenu = this.lookupReference('CntMainMenu')
            leftMenu.add(Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsList'))
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

        Ext.resumeLayouts()
    }
});
