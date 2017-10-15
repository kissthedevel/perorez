
Ext.define('PENKNIFE.view.arch.DemoIntroIstitut',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.DemoIntroIstitutController'
    ],

    controller: 'arch-DemoIntroIstitut',
    
    layout: {
        type: 'vbox',
        align: 'stretch',
    },

    items: [
        {
            xtype: 'carousel',
            itemId: 'CarouselIstituz', reference: 'CarouselIstituz',
            direction: 'horizontal',
            height: stdPKF.isPhone() ? Ext.getBody().getSize().height - 250 : Ext.getBody().getSize().height - 64,
            items: [
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc1.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc2.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc3.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc4.jpg'
                },
                {
                    xtype: 'image',
                    src: 'resources/img/istituz/acc5.jpg'
                }
            ]
        }
    ]
});
