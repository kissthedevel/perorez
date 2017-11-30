Ext.define('PENKNIFE.view.arch.TbMainTabletOthersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-TbMainTabletOthers',

    tapBtnTbContactUs: function(th) {
        let levelFirst = this.ctrlHome.lookupReference('LevelFirst'),
            levelHome = this.ctrlHome.lookupReference('LevelHome')

        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
        levelFirst.removeAll(true)
        levelFirst.add(Ext.create('PENKNIFE.view.contacts.ContactUs', {
            controllerHome: this.ctrlHome
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    tapBtnLogout: function(th) {
        /**
         * chiedo conferma per uscita da piattaforma
         */
        Ext.Msg.confirm(langPKF._translate('ATTENZIONE'), langPKF._translate('ABBANDONARE_PENKNIFE'), ( buttonId, value, opt) => {
            if( buttonId === 'yes' ) {
                Ext.Ajax.request({
                    url: '../ws/auth/logout.php',
                    params: Ext.JSON.encode({}),
                    success: response => {
                        let result = Ext.JSON.decode(response.responseText)
        
                        if ( result.success ) {
                            window.location.reload()
                        }
                    }
                })
            }
        })
    },

    init: function() {
        //this.lookupReference('BtnAdvertiseTbMain').hide()
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
    }
});
