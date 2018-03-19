Ext.define('PENKNIFE.view.auth.UsersListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-UsersList',

    showUser: function(idUser) {
        let levelSecond = this.ctrlHome.lookupReference('LevelSecond')
        levelSecond.removeAll(true)
        levelSecond.add(Ext.create('PENKNIFE.view.auth.UserPanel', {
            controllerHome: this.ctrlHome,
            controllerList: this,
            idUser: idUser
        }))
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelSecond)
    },

    itemtapListUsers: function( th, index, target, record, e ) {
        let idTarget = e.target.id,
            store = this.lookupReference('ListUsers').getStore(),
            admin = PENKNIFE.globals.storeUserSimple.getData().items[0].get('administrator') === 1
        
        if (idTarget.indexOf('approved') != -1) {
            
        } else if (idTarget.indexOf('waiting') != -1) {
            if (!admin) {
                return false
            }

            store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 1)
            Ext.Ajax.request({
                url: `${PENKNIFEwsDomain}ws/auth/userApprove.php`,
                method: 'GET',
                params: {
                    disableLoadMask: true,
                    id: record.get('id'),
                    approved: 1,
                    approver: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
                },
                success: response => {
                },
                failure: (conn, response, options, eOpts) => {
                    store.findRecord('id', record.get('id'), 0, false, false, true).set('approved', 0)
                }
            })
        } else if (idTarget.indexOf('delete') != -1) {
            if (!admin) {
                return false
            }

            Ext.Msg.confirm('Attenzione!', `Sei sicuro di voler eliminare "${record.get('nomeprogetto')}"?`, ( buttonId, value, opt) => {
                if( buttonId === 'yes' ) {
                    Ext.Ajax.request({
                        url: `${PENKNIFEwsDomain}ws/auth/userDelete.php`,
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
            this.showUser(record.get('id'))
        }
    },

    tapBACK_UsersList: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    updateList: function() {
        let store = this.lookupReference('ListUsers').getStore()

        store.load({
            params: {
                disableLoadMask: true,
                user: PENKNIFE.globals.storeUserSimple.getData().items[0].get('id')
            },
            callback: (records, operation, success) => {
                /* let admin = PENKNIFE.globals.storeUserSimple.getData().items[0].get('administrator') === 1
                store.each( rec => rec.set('administrator', admin ? 1 : 0)) */
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.updateList()
    },

    destroy: function() {
        //this.getView().FAB.destroy()
    }
});
