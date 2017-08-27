Ext.define('PENKNIFE.view.arch.menu.TbMainMenuUnloggedTabletController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-menu-TbMainMenuUnloggedTablet',

    tapBtnUnloggedTabletSignIn: function(th) {
        this.view = this.getView()

        /**
         * TODO da fare sul success della chiamata al login
         */
        Ext.suspendLayouts()

        let ctrlHome = this.view.controllerHome
        //distruggo unlogged panel
        let cntTabOthers = ctrlHome.lookupReference('TbMainTablet_others')
        cntTabOthers.down('#CntUnlogged').destroy()
        //TODO impostare info utente
        let cntLogged = cntTabOthers.down('#CntLogged')
        cntLogged.down('#CntTbUserInfo').add(Ext.create('PENKNIFE.view.arch.UserInfo'))
        cntLogged.show()
        
        ctrlHome.lookupReference('CntMainMenu').add(Ext.create('Ext.Toolbar', {
            docked: 'bottom',
            items: [
                Ext.create('PENKNIFE.view.arch.menu.ToolbarOthersMenu', {
                    controllerHome: ctrlHome
                })
            ]
        }))
        this.view.up('toolbar').destroy()


        Ext.resumeLayouts()
    },

    init: function() {
        
    }
});
