Ext.define('PENKNIFE.view.auth.Patrimonio', {
    extend: 'Ext.data.ArrayStore',

    alias: 'view.auth.CountriesStore',
    fields: [
        {name: 'codice'},
        {name: 'valoreIT'},
        {name: 'valoreCN'},
        {name: 'valoreEN'}
    ],

    data: [
        [null, `Scegli..`, `选择..`, `Choose..`],
        [1, `<2 mln €`, `<15 百万 ¥`, `Other`],
        [2, `2-10 mln €`, `15-80 百万 ¥`, `Other`],
        [3, `10-50 mln €`, `80-390 百万 ¥`, `Other`],
        [4, `>50 mln €`, `>390 百万 ¥`, `Other`]
    ]
});
