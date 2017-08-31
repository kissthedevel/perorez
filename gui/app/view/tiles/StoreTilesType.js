Ext.define('PENKNIFE.view.tiles.StoreTilesType', {
    extend: 'Ext.data.Store',

    alias: 'store.StoreTilesType',

    fields: [
        'id',
        'descrizione'
    ],

    data: [
        { id: 31, descrizione: '3x1.5' },   //OK
        { id: 32, descrizione: '3x2' },     //OK
        { id: 33, descrizione: '3x3' },     //OK
        { id: 34, descrizione: '3x4' },     //OK
        { id: 62, descrizione: '6x2' },     //OK
        { id: 63, descrizione: '6x3' },     //OK
        { id: 64, descrizione: '6x4' }      //OK
    ]
});
