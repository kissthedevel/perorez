Ext.define('PENKNIFE.view.contacts.ContactUsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacts-ContactUs',

    tapBACK_ContactUs: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
    }
});
