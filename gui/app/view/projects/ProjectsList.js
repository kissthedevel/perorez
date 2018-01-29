Ext.define('PENKNIFE.view.projects.ProjectsList',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.projects.ProjectsListController',
        'PENKNIFE.view.projects.ProjectsListStore',
        'PENKNIFE.view.projects.ProjectGestCreate'
    ],

    controller: 'projects-ProjectsList',
    
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
            itemId: 'ToolbarProjectsList', reference: 'ToolbarProjectsList',
            docked: 'top',
            localized: 'title',
            localizedKey: `I_MIEI_PROGETTI`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_ProjectsList', reference: 'BACK_ProjectsList',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_ProjectsList'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'FIND_ProjectsList', reference: 'FIND_ProjectsList',
                    iconCls: 'lens-find'
                }
            ]
        },
        {
            xtype: 'list',
            itemId: 'ListProjects', reference: 'ListProjects',
            flex: 1,
            store: Ext.create('PENKNIFE.view.projects.ProjectsListStore'),
            disableSelection: true,
            loadingText: false,
            itemTpl:   `<tpl if="approved === 1">
                            <img id='approved-${Ext.id()}' src="resources/img/approved.svg" height='24' width='24' style="float:left;">
                        <tpl else>
                            <img id='waiting-${Ext.id()}' src="resources/img/waiting-time-left.svg" height='24' width='24' style="float:left;">
                        </tpl>
                        <span style="margin-left:10px; font-size:18px;">{nomeazienda}</span>
                        <img id='delete-${Ext.id()}' src="resources/img/rubbish-bin-delete-button.svg" height='24' width='24' style="float:right;">
                        <img id='edit-${Ext.id()}' src="resources/img/edit.svg" height='24' width='24' style="float:right; margin-right:10px;">
                        <tpl if="elite === 1">
                            <img id='elite-${Ext.id()}' src="resources/img/star-yellow.svg" height='24' width='24' style="float:right; margin-right:10px;">
                        </tpl>`,
            listeners: {
                //itemtap: 'itemtapListProjects'
            }
        }
    ]
});
