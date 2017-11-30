Ext.define('PENKNIFE.view.arch.menu.TbMainMenuUnloggedTabletController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-TbMainMenuUnloggedTablet',

    callbackLogin: function() {
        Ext.suspendLayouts()
        
        let ctrlHome = this.view.controllerHome
        //distruggo unlogged panel
        let cntTabOthers = ctrlHome.lookupReference('TbMainTablet_others')
        cntTabOthers.down('#CntUnlogged').destroy()


        let administrator = PENKNIFE.globals.storeUserSimple.getData().items[0].data['administrator']
        if (administrator) {
            //distruggo intro istituzionali
            ctrlHome.demoIntroIstitut.destroy()
            //visualizzo panel Tiles
            ctrlHome.panelTiles.setHidden(false)
        } else {
            /**
             * TODO: rimuovere
             * visualizzo partners temporanei
             */
            ctrlHome.demoIntroIstitut.down('#CntPartners').setHidden(false)
        }        


        /**
         * -creo il pannello dati utente
         * -popolo il pannello dati utente
         */
        let cntLogged = cntTabOthers.down('#CntLogged')
            viewUserInfo = cntLogged.down('#CntTbUserInfo').add(Ext.create('PENKNIFE.view.arch.UserInfo'))
            ctrlUserInfo = viewUserInfo.lookupController(),
            recUser = PENKNIFE.globals.storeUserSimple.getData().items[0].data,
            nominativo = `${recUser.nome} ${recUser.cognome}`

        ctrlUserInfo.lookupReference('LblUserToolbar').setHtml(nominativo)
        ctrlUserInfo.lookupReference('LblUserCityToolbar').setHtml(recUser.citta)
        cntLogged.show()
        
        
        let cntMainMenu = ctrlHome.lookupReference('CntMainMenu')
        cntMainMenu.add(Ext.create('Ext.Toolbar', {
            docked: 'bottom',
            items: [
                Ext.create('PENKNIFE.view.arch.menu.ToolbarOthersMenu', {
                    controllerHome: ctrlHome
                })
            ]
        }))
        this.view.up('toolbar').destroy()

        cntMainMenu.add(Ext.create('PENKNIFE.view.arch.menu.MainMenuItemsOther', {
            controllerHome: ctrlHome
        }))

        Ext.resumeLayouts()
    },

    tapBtnUnloggedTabletSignIn: function(th) {
        this.view = this.getView()

        let login = Ext.create('PENKNIFE.view.auth.LogIn', {
            controllerHome: this.view.controllerHome,
            callbackLogin: this.callbackLogin
        })
        login.show()
    },

    tapBtnUnloggedTabletSignUp: function(th) {
        Ext.create('PENKNIFE.view.auth.PreSignUp', {
            controllerHome: this.view.controllerHome
        }).show()
    },

    init: function() {
        
    }
});
