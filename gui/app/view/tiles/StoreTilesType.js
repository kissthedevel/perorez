Ext.define('PENKNIFE.view.tiles.StoreTilesType', {
    extend: 'Ext.data.Store',

    alias: 'store.StoreTilesType',

    fields: [
        'id',
        'descrizione'
    ],

    data: [
        { id: 124, descrizione: '12x4' },   //OKe
        { id: 126, descrizione: '12x6' },   //OKe
        { id: 63, descrizione: '6x3' },     //OKe
        { id: 64, descrizione: '6x4' }      //OKe
    ]
});
