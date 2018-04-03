
Ext.define('PENKNIFE.view.projects.AllProjects',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.controller.projects.AllProjectsController'
    ],

    controller: 'projects-allProjectsController',

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
            itemId: 'ToolbarFindProjetc', reference: 'ToolbarFindProject',
            docked: 'top',
            localized: 'title',
            localizedKey: `INVESTI_IN_PRG_ITA`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_FindProject', reference: 'BACK_FindProject',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_FindProject'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            itemId: 'ContainerAllProjects', reference: 'ContainerAllProjects',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            scrollable: true,
            padding: '15 10 0 10',
            style: {
                'background-color': 'rgb(183, 29, 29)'
            }
        }
    ]
});
