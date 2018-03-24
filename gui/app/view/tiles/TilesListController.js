Ext.define('PENKNIFE.view.tiles.TilesListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TilesList',

    addCompany: function(controller) {
        let levelSecond = controller.ctrlHome.lookupReference('LevelSecond')
        levelSecond.removeAll(true)
        levelSecond.add(Ext.create('PENKNIFE.view.tiles.TileGestCreate', {
            controllerHome: controller.ctrlHome,
            controllerList: controller
        }))
        controller.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelSecond)
    },

    updateCompany( idCompany ) {
        let levelSecond = this.ctrlHome.lookupReference('LevelSecond')
        levelSecond.removeAll(true)
        levelSecond.add(Ext.create('PENKNIFE.view.tiles.TileGestCreate', {
            controllerHome: this.ctrlHome,
            controllerList: this,
            updateCompany: idCompany
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelSecond)
    },

    itemtapListCompanyes: function( th, index, target, record, e ) {
        let idTarget = e.target.id,
            store = this.lookupReference('ListCompanyes').getStore(),
            admin = PENKNIFE.globals.storeUserSimple.getData().items[0].get('administrator') === 1
        
        if (idTarget.indexOf('approved') != -1) {
            
        } else if (idTarget.indexOf('waiting') != -1) {
            if (!admin) {
                return false
            }

            store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 1)
            Ext.Ajax.request({
                url: `${PENKNIFEwsDomain}ws/company/companyApprove.php`,
                method: 'GET',
                params: {
                    disableLoadMask: true,
                    id: record.get('id'),
                    approved: 1,
                    approver: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id'),
                    user: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
                },
                success: response => {
                },
                failure: (conn, response, options, eOpts) => {
                    store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 0)
                }
            })
        } else if (idTarget.indexOf('edit') != -1) {
            this.updateCompany(record.get('id'))
        } else if (idTarget.indexOf('delete') != -1) {
            if (!admin) {
                return false
            }

            Ext.Msg.confirm('Attenzione!', `Sei sicuro di voler eliminare "${record.get('nomeazienda')}"?`, ( buttonId, value, opt) => {
                if( buttonId === 'yes' ) {
                    Ext.Ajax.request({
                        url: `${PENKNIFEwsDomain}ws/company/companyDelete.php`,
                        method: 'GET',
                        params: {
                            id: record.get('id'),
                            user: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
                        },
                        success: response => {
                            this.updateList()
                        },
                        failure: (conn, response, options, eOpts) => {
                        }
                    })
                }
            })
        } else {
            //itemtap classico
        }
    },

    tapBACK_TilesList: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    updateList: function() {
        let store = this.lookupReference('ListCompanyes').getStore()

        store.load({
            params: {
                disableLoadMask: true,
                creator: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
            },
            callback: (records, operation, success) => {
                let admin = PENKNIFE.globals.storeUserSimple.getData().items[0].get('administrator') === 1
                store.each( rec => rec.set('administrator', admin ? 1 : 0))

                if (!this.view.FAB) {
                    this.createFAB()
                }
            }
        })
    },

    createFAB: function() {
        this.view.FAB = Ext.create('PENKNIFE.customcomponents.FAB',{
            bottom: 20,
            right: 20,
            menuButtonDefault: {
                FAB_id: 'FAB_tilesList',
                icon: 'resources/img/add-white.svg',
                handler: () => {
                    this.addCompany(this)
                }
            }
        })
        this.view.FAB_id = 'FAB_tilesList'
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.updateList()
    },

    destroy: function() {
        this.getView().FAB.destroy()
    }
});
