
Ext.define('PENKNIFE.view.arch.TbMainTabletOthers',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.arch.TbMainTabletOthersController'
    ],

    controller: 'arch-TbMainTabletOthers',
    
    layout: {
        type: 'hbox'
    },

    items: [
        {
            xtype: 'container',
            itemId: 'CntUnlogged', reference: 'CntUnlogged',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'button',
                    itemId: 'BtnTbPlayClip', reference: 'BtnTbPlayClip',
                    cls: 'play-clip-round'
                },
                {
                    xtype: 'button',
                    itemId: 'BtnTbContactUs', reference: 'BtnTbContactUs',
                    text: 'Contact us',
                    ui: 'action',
                    cls: 'button-toolbar-light',
                    margin: '0 0 0 15'
                }
            ]
        }
    ]
});
