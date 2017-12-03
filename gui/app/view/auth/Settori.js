Ext.define('PENKNIFE.view.auth.Settori', {
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
        [1, `Hardware e strumenti informatici`, `计算机硬件和工具`, `Computer hardware and tools`],
        [2, `Green economy`, `绿色经济`, `Green economy`],
        [3, `Criptovalute`, `加密货币`, `Criptovalute`],
        [4, `Robotica`, `机器人`, `Robotics`],
        [5, `Alimentari`, `食品`, `Food`],
        [6, `Gas, petrolio`, `天然气，石油`, `Gas, oil`],
        [7, `Prodotti industriali`, `工业产品`, `Industrial products`],
        [8, `Automotive e componentistica`, `汽车和零部件`, `Automotive and components`],
        [9, `Fondo di investimento`, `投资基金`, `Investment fund`],
        [10, `Chimica`, `化学`, `Chemistry`],
        [11, `Commercio`, `商业`, `Business`],
        [12, `Edilizia, immobiliare`, `建筑，房地产`, `Construction, real estate`],
        [13, `Elettricità`, `电力`, `Electricity`],
        [14, `Farmaceutica e biotecnologia`, `制药和生物技术`, `Pharmaceutical and biotechnology`],
        [15, `Industria aereospaziale e difesa`, `航空航天和国防工业`, `Aerospace and defense industry`],
        [16, `Media`, `通信手段`, `Media`],
        [17, `Estrazione minerali`, `矿物质提取`, `Mineral extraction`],
        [18, `Moda e beauty industry`, `时尚和美容业`, `Fashion and beauty industry`],
        [19, `Servizi finanziari`, `金融服务`, `Financial services`],
        [20, `Agricoltura`, `农业`, `Agriculture`],
        [21, `Telecomunicazioni`, `电信`, `Telecommunications`],
        [22, `Turismo`, `旅游`, `Tourism`],
        [23, `Altro`, `更`, `Other`]
    ]
});
