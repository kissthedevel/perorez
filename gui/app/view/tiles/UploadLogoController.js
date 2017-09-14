Ext.define('PENKNIFE.view.tiles.UploadLogoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-UploadLogo',

    tapCloseIcon: function(th) {
        this.getView().destroy()
    },

    changeFFLogo: function(th, newValue, oldValue) {
        let form = this.lookupReference('Form_UploadLogo')
        form.submit({    
            url: 'http://localhost',
            waitMsg: 'Uploading Please Wait...',
            method: 'POST',                    
            success: function (r, a) {
                console.log('success message here')
            },
            failure: function (r, a) {                    
                console.log('failure message here')
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.controllerGest = this.view.controllerGest
    }
});
