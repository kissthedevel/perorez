Ext.define('PENKNIFE.view.arch.menu.MainMenuItemsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-MainMenuItemsList',

    tapTrovaAziendaItaliana: function(th) {
        if (PENKNIFE.globals.storeUserSimple.getCount() === 0) {
            let title = langPKF._translate('DIVENTA_MEMBRO'),
            message = langPKF._translate('ISCRIVITI_PER_CERCARE_AZIENDA')
            Ext.Msg.alert( title, message)
            return false
        }

        if (this.ctrlHome.overlayHamburger) {
            let ctrlHamburger = this.ctrlHome.overlayHamburger.lookupController()
            ctrlHamburger.tapCloseIconHamburger()
        }        
        
        let levelFirst = this.ctrlHome.lookupReference('LevelFirst'),
            levelHome = this.ctrlHome.lookupReference('LevelHome')

        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
        levelFirst.removeAll(true)
        levelFirst.add(Ext.create('PENKNIFE.view.findCompany.AllCompanies', {
            controllerHome: this.ctrlHome
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
        //this.lookupReference('BtnAdvertiseTbMain').hide()
    }
});
