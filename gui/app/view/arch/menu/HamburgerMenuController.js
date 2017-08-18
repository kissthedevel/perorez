Ext.define('PENKNIFE.view.arch.menu.HamburgerMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-HamburgerMenu',

    tapCloseIconHamburger: function(th) {
        this.getView().hide()
    },

    showHamburgerMenuPanel: function(th) {
        
    },
    showLoggedHamCnt: function(th) {
        this.lookupReference('LoggedHamBottomTb').show()
    },

    tapBtnHamSignIn: function(th) {
        /**
         * TODO da fare sul success della chiamata al login
         */
        //distruggo unlogged panel
        this.lookupReference('UnloggedHamCnt').destroy()
        //distruggo cnt sign in
        this.lookupReference('CntHamSignIn').destroy()
        /**
         * TODO
         * -creo il pannello dati utente
         * -popolo il pannello dati utente
         */
        this.lookupReference('CntHamUserData').show()
        /**
         * creo e inserisco il componente lista pulsanti
         */
        let loggedHamCnt = this.lookupReference('LoggedHamCnt')
        loggedHamCnt.add(Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsList'))
        loggedHamCnt.show()
    },

    init: function() {
        
    }
});
