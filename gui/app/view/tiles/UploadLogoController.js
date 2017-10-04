Ext.define('PENKNIFE.view.tiles.UploadLogoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-UploadLogo',

    tapCloseIcon: function(th) {
        this.getView().destroy()
    },

    changeFFLogo: function(th) {
        let form = this.lookupReference('Form_UploadLogo'),
            controller = this
        form.submit({    
            waitMsg: 'Upload image...',
            method: 'POST',                    
            success: function (r, a) {
                controller.controllerGestTile.lookupReference('TileLogo').setValue(a.data[0])
                controller.getView().destroy()
            },
            failure: function (r, a) {                    
                console.log('upload logo error..')
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.controllerGestTile = this.view.controllerGestTile
    }
});
