Ext.define('PENKNIFE.view.arch.SecurityController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-Security',

    signinTap: function(th) {
        if (this.lookupReference('SecPw').getValue() === 'f4@RAbAb') {
            this.getView().destroy()
        }
    },

    init: function() {
        
    }
});
