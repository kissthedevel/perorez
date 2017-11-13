Ext.define('PENKNIFE.view.arch.menu.TbMainMenuUnloggedTabletController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-TbMainMenuUnloggedTablet',

    tapBtnUnloggedTabletSignIn: function(th) {
        this.view = this.getView()

        let login = Ext.create('PENKNIFE.view.auth.LogIn', {
            controllerHome: this.ctrlHome,
            callbackLogin: () => {
                /**
                 * TODO da fare sul success della chiamata al login
                 */
                Ext.suspendLayouts()
        
                let ctrlHome = this.view.controllerHome
                //distruggo unlogged panel
                let cntTabOthers = ctrlHome.lookupReference('TbMainTablet_others')
                cntTabOthers.down('#CntUnlogged').destroy()
        
                //distruggo intro istituzionali
                ctrlHome.demoIntroIstitut.destroy()
                //visualizzo panel Tiles
                ctrlHome.panelTiles.setHidden(false)
        
                //TODO impostare info utente
                let cntLogged = cntTabOthers.down('#CntLogged')
                cntLogged.down('#CntTbUserInfo').add(Ext.create('PENKNIFE.view.arch.UserInfo'))
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
            }
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
