Ext.define('PENKNIFE.view.tiles.ColorPaletteController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-ColorPalette',

    tapCloseIcon: function(th) {
        this.getView().hide()
    },
    onChooseColor: function(el) {
        let color = Ext.getCmp(el.delegatedTarget.id).initialConfig.style['background-color']
        this.controllerGest.lookupReference('TileSample').setStyle({
            'background-color': color
        })
        this.controllerGest.lookupReference('TileSample_Color').setValue(color)
        this.getView().hide()
    },

    init: function() {
        this.view = this.getView()
        this.controllerGest = this.view.controllerGest
    }
});
