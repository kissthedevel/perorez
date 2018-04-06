Ext.define('PENKNIFE.view.projects.UploadAttachmentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projects-UploadAttachment',

    tapCloseIcon: function(th) {
        this.getView().destroy()
    },

    changeFFLogo: function(th) {
        let form = this.lookupReference('Form_UploadLogo'),
            controller = this
        form.submit({    
            waitMsg: 'Upload Attachment...',
            url: `${PENKNIFEwsDomain}ws/projects/uploadAttachment.php?idProject=${this.view.idProject}`,
            method: 'POST',
            success: function (r, a) {
                Ext.Msg.alert(
                    langPKF._translate('INSERISCI_ALLEGATO'),
                    langPKF._translate(a.message),
                    () => {
                        controller.controllerProjectCreate.listAttach.lookupController().updateList()
                        controller.getView().destroy()
                    }
                )
            },
            failure: function (r, a) {                    
                console.log('upload Attachment error..')
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.controllerProjectCreate = this.view.controllerProjectCreate
    }
});
