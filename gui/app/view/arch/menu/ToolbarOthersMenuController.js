Ext.define('PENKNIFE.view.arch.menu.ToolbarOthersMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-ToolbarOthersMenu',

    tapBtnSendMessage: function(th) {
        if (this.ctrlHam) {
            this.ctrlHam.tapCloseIconHamburger()
        }

        let levelFirst = this.ctrlHome.lookupReference('LevelFirst'),
            levelHome = this.ctrlHome.lookupReference('LevelHome')

        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
        levelFirst.removeAll(true)
        levelFirst.add(Ext.create('PENKNIFE.view.contacts.ContactUs', {
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
