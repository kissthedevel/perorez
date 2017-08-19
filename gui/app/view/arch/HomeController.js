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
        if (PENKNIFE.std.isPhone()) {
            //PENKNIFE.globals.menus.createMenuMinimal = true
            this.lookupReference('ArchHome').add(Ext.create('Ext.Toolbar', {
                docked: 'top',
                cls: 'toolbar-menu-minimal',
                items: [
                    Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsList', {
                        minimalMenu: true
                    })
                ]
            }))
            //PENKNIFE.globals.menus.createMenuMinimal = false
        } else {
            let tbOthers = this.lookupReference('TbMainTablet_others')
            tbOthers.add(Ext.create('PENKNIFE.view.arch.TbMainTabletOthers'))
            //TODO creare menu di sinistra esploso
        }
    }
});
