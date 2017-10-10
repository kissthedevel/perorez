Ext.define('PENKNIFE.view.arch.UserInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-UserInfo',

    paintedUserInfo: function(th) {
        th.el.on('click', function() {
            //alert('TODO: aprire pannello gestione utente.')
        })
    },

    init: function() {
        /* this.lookupReference('ArchHome').add(Ext.create('Ext.Button', {
            text: 'cippa'
        })) */        
    }
});
