Ext.define('PENKNIFE.view.auth.UsersListStore', {
    extend: 'Ext.data.Store',

    alias: 'view.auth.UsersListStore',

    proxy: {
        type: 'ajax',
        url: `${PENKNIFEwsDomain}ws/auth/usersList.php`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
