Ext.define('PENKNIFE.view.arch.menu.MainMenuItemsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-MainMenuItemsList',

    tapFattiConoscere( th ) {
        if (PENKNIFE.globals.storeUserSimple.getCount() === 0) {
            let title = langPKF._translate('PUBBL_IN_ITA'),
            message = langPKF._translate('PUBBL_IN_ITA_SLOGAN')
            Ext.Msg.alert( title, message)
            return false
        }

        if (this.ctrlHome.overlayHamburger) {
            let ctrlHamburger = this.ctrlHome.overlayHamburger.lookupController()
            ctrlHamburger.tapCloseIconHamburger()
        }

        let levelFirst = this.ctrlHome.lookupReference('LevelFirst')
        levelFirst.removeAll(true)
        levelFirst.add(Ext.create('PENKNIFE.view.tiles.TilesList', {
            controllerHome: this.ctrlHome
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    tapTrovaAziendaItaliana: function(th) {
        if (PENKNIFE.globals.storeUserSimple.getCount() === 0) {
            let title = langPKF._translate('TROVA_AZIENDA_ITA_SHORT'),
            message = langPKF._translate('TROVA_AZIENDA_ITA_SLOGAN')
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

    tapInsertProjects(th) {
        if (PENKNIFE.globals.storeUserSimple.getCount() === 0) {
            let title = langPKF._translate('PRESENTA_PRG_INNOVAT_SHORT'),
            message = langPKF._translate('PRESENTA_PRG_INNOVAT_SLOGAN')
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
        levelFirst.add(Ext.create('PENKNIFE.view.projects.ProjectsList', {
            controllerHome: this.ctrlHome
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    tapInvestProjects( th ) {
        if (PENKNIFE.globals.storeUserSimple.getCount() === 0) {
            let title = langPKF._translate('INVESTI_IN_PRG_ITA_SHORT'),
            message = langPKF._translate('INVESTI_IN_PRG_ITA_SLOGAN')
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
        levelFirst.add(Ext.create('PENKNIFE.view.projects.AllProjects', {
            controllerHome: this.ctrlHome
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    tapSocialMedia( th ) {
        //if (PENKNIFE.globals.storeUserSimple.getCount() === 0) {
            let title = langPKF._translate('VENDI_COMPRA_IMMOB_SHORT'),
            message = langPKF._translate('SOCIAL_MEDIA_SLOGAN')
            Ext.Msg.alert( title, message)
            return false
        //}

        /* if (this.ctrlHome.overlayHamburger) {
            let ctrlHamburger = this.ctrlHome.overlayHamburger.lookupController()
            ctrlHamburger.tapCloseIconHamburger()
        }        
        
        let levelFirst = this.ctrlHome.lookupReference('LevelFirst'),
            levelHome = this.ctrlHome.lookupReference('LevelHome')

        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
        levelFirst.removeAll(true)
        levelFirst.add(Ext.create('PENKNIFE.view.projects.ProjectsList', {
            controllerHome: this.ctrlHome
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst) */
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
        //this.lookupReference('BtnAdvertiseTbMain').hide()
    }
});
