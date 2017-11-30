Ext.define('PENKNIFE.view.auth.UserSimple', {
    extend: 'Ext.data.ArrayStore',

    alias: 'view.auth.UserSimple',
    fields: [
        {name: 'id'},
        {name: 'email'},
        {name: 'attivo'},
        {name: 'administrator'},
        {name: 'account_type'},
        {name: 'nome'},
        {name: 'cognome'},
        {name: 'citta'},
        {name: 'nazione'}
    ],

    data: []
});
