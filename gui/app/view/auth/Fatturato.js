Ext.define('PENKNIFE.view.auth.Fatturato', {
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
        [4, `50-200 mln €`, `390-1550 百万 ¥`, `Other`],
        [5, `200-500 mln €`, `1550-3900 百万 ¥`, `Other`],
        [6, `>500 mln €`, `>3900 百万 ¥`, `Other`]
    ]
});
