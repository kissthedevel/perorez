Ext.define('PENKNIFE.view.arch.menu.MainMenuItemsOtherController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-MainMenuItemsOther',

    tapBtnListMyCompanies: function(th) {
        let administrator = PENKNIFE.globals.storeUserSimple.getData().items[0].data['administrator'],
            isUser = PENKNIFE.globals.storeUserSimple.getCount() > 0
        
        if (isUser) {
            if (this.ctrlHam) {
                this.ctrlHam.tapCloseIconHamburger()
            }

            let levelFirst = this.ctrlHome.lookupReference('LevelFirst')
            levelFirst.removeAll(true)
            levelFirst.add(Ext.create('PENKNIFE.view.tiles.TilesList', {
                controllerHome: this.ctrlHome
            }))
            this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
        } else {
            /**
             * TODO:
             * cambiare messaggio in:
             * Iscriviti per inserire la tua azienda!
             */
            let title = langPKF._translate('VUOI_SAPERNE_PIU'),
                message = langPKF._translate('CONTATTACI_INSERIRE_TUA_AZIENDA')
            Ext.Msg.alert( title, message)
        }
        
    },

    init: function() {
        //this.lookupReference('BtnAdvertiseTbMain').hide()
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
        this.ctrlHam = this.view.controllerHamburger
    }
});
