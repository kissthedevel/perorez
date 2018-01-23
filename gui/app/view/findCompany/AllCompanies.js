
Ext.define('PENKNIFE.view.findCompany.AllCompanies',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.controller.findCompany.AllCompaniesController'
    ],

    controller: 'findCompany-allCompaniesController',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    scrollable: true,
    cls: 'animated zoomInLeft  background-gen',

    items: [
        {
            xtype: 'toolbar',
            itemId: 'ToolbarFindCompany', reference: 'ToolbarFindCompany',
            docked: 'top',
            localized: 'title',
            localizedKey: `TROVA_AZIENDA_ITA_SHORT`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_FindCompany', reference: 'BACK_FindCompany',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_FindCompany'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            itemId: 'ContainerAllCompanies', reference: 'ContainerAllCompanies',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            scrollable: true,
            padding: '15 0 0 0',
            style: {
                'background-color': 'rgb(183, 29, 29)'
            }
        }
    ]
});
