Ext.define('PENKNIFE.view.arch.InfoLegaliController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-InfoLegali',

    tapBtnPrivacyPolicy: function(th) {
        if (!this.overlayPrivacy) {
            this.overlayPrivacy = Ext.Viewport.add(Ext.create('PENKNIFE.view.privacy.PrivacyPolicy', {}))
        }
        this.overlayPrivacy.show()
    },

    init: function() {
        /* this.lookupReference('ArchHome').add(Ext.create('Ext.Button', {
            text: 'cippa'
        })) */        
    }
});
