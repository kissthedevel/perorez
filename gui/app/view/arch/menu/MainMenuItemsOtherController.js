Ext.define('PENKNIFE.view.arch.menu.MainMenuItemsOtherController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-MainMenuItemsOther',

    tapBtnListMyCompanies: function(th) {
        if (this.ctrlHam) {
            this.ctrlHam.tapCloseIconHamburger()
        }

        let levelFirst = this.ctrlHome.lookupReference('LevelFirst')
        levelFirst.removeAll(true)
        levelFirst.add(Ext.create('PENKNIFE.view.tiles.TilesList', {
            controllerHome: this.ctrlHome
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    init: function() {
        //this.lookupReference('BtnAdvertiseTbMain').hide()
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
        this.ctrlHam = this.view.controllerHamburger
    }
});
