Ext.define('PENKNIFE.view.tiles.TileGestCreateController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TileGestCreate',

    tapBACK_TileGestCreate: function() {
        let levelFirst = this.ctrlHome.lookupReference('LevelFirst')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
    }
});
