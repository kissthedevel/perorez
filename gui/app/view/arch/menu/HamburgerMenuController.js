Ext.define('PENKNIFE.view.arch.menu.HamburgerMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-HamburgerMenu',

    tapCloseIconHamburger: function(th) {
        this.getView().hide()
    },

    showHamburgerMenuPanel: function(th) {
        
    },
    showLoggedHamCnt: function(th) {
        let loggedHamBottomTb = this.lookupReference('LoggedHamBottomTb')
        loggedHamBottomTb.add(Ext.create('PENKNIFE.view.arch.menu.ToolbarOthersMenu', {
            controllerHome: this.getView().controllerHome,
            controllerHamburger: this
        }))
        loggedHamBottomTb.show()
    },

    tapBtnHamSignIn: function(th) {
        /**
         * TODO da fare sul success della chiamata al login
         */
        Ext.suspendLayouts()

        //distruggo unlogged panel
        this.lookupReference('UnloggedHamCnt').destroy()
        //distruggo cnt sign in
        this.lookupReference('CntHamSignIn').destroy()
        /**
         * TODO
         * -creo il pannello dati utente
         * -popolo il pannello dati utente
         */
        let CntHamUser = this.lookupReference('CntHamUserData')
        CntHamUser.add(Ext.create('PENKNIFE.view.arch.UserInfo'))
        CntHamUser.show()
        /**
         * creo e inserisco il componente lista pulsanti
         */
        let loggedHamCnt = this.lookupReference('LoggedHamCnt')
        loggedHamCnt.add(Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsList'))
        loggedHamCnt.show()

        loggedHamCnt.add(Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsOther', {
            controllerHome: this.getView().controllerHome,
            controllerHamburger: this
        }))

        Ext.resumeLayouts()
    },

    init: function() {
        
    }
});
