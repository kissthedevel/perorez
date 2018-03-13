Ext.define('PENKNIFE.view.projects.UploadImageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projects-UploadImage',

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
                let nImage = controller.view.imageNumber
                controller.controllerProjectCreate.lookupReference(`PrjImage${nImage}`).setValue(a.data[0])
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
