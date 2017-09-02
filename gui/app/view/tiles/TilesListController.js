Ext.define('PENKNIFE.view.tiles.TilesListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TilesList',

    addCompany: function(controller) {
        let levelSecond = controller.ctrlHome.lookupReference('LevelSecond')
        levelSecond.removeAll(true)
        levelSecond.add(Ext.create('PENKNIFE.view.tiles.TileGestCreate', {
            controllerHome: controller.ctrlHome
        }))
        controller.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelSecond)
    },

    tapBACK_TilesList: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

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

    destroy: function() {
        this.getView().FAB.destroy()
    }
});
