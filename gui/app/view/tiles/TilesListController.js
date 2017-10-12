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

    itemtapListCompanyes: function( th, index, target, record, e ) {
        let idTarget = e.target.id,
            store = this.lookupReference('ListCompanyes').getStore()
        
        if (idTarget.indexOf('approved') != -1) {
            
        } else if (idTarget.indexOf('waiting') != -1) {
            store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 1)
            Ext.Ajax.request({
                url: '../ws/company/companyApprove.php',
                method: 'GET',
                params: {
                    disableLoadMask: true,
                    id: record.get('id'),
                    approved: 1,
                    approver: 1
                },
                success: response => {
                },
                failure: (conn, response, options, eOpts) => {
                    store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 0)
                }
            })
        } else if (idTarget.indexOf('edit') != -1) {
            console.log('edit', record.get('nomeazienda'))
        } else if (idTarget.indexOf('delete') != -1) {
            Ext.Msg.confirm('Attenzione!', `Sei sicuro di voler eliminare "${record.get('nomeazienda')}"?`, ( buttonId, value, opt) => {
                if( buttonId === 'yes' ) {
                    Ext.Ajax.request({
                        url: '../ws/company/companyDelete.php',
                        method: 'GET',
                        params: {
                            id: record.get('id')
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
                creator: 1
            },
            callback: (records, operation, success) => {
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
