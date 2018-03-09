Ext.define('PENKNIFE.view.projects.UploadImageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-UploadImage',

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
                controller.controllerProjectCreate.lookupReference('TileLogo').setValue(a.data[0])
                controller.getView().destroy()
            },
            failure: function (r, a) {                    
                console.log('upload image error..')
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.controllerProjectCreate = this.view.controllerProjectCreate
    }
});
