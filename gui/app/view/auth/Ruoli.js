Ext.define('PENKNIFE.view.auth.Ruoli', {
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
        [1, `CEO`, `CEO`, `CEO`],
        [2, `General Manager`, `总经理`, `General Manager`],
        [3, `CFO`, `CFO`, `CFO`],
        [4, `CTO`, `CTO`, `CTO`],
        [5, `COO`, `COO`, `COO`],
        [6, `Presidente`, `总统`, `President`],
        [7, `Account Manager`, `客户经理`, `Account Manager`],
        [8, `Product Manager`, `产品经理`, `Product Manager`],
        [9, `Altro`, `更`, `Other`]
    ]
});
