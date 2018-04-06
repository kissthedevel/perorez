Ext.define('PENKNIFE.view.projects.ProjectsAttachList',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.projects.ProjectsAttachListController',
        'PENKNIFE.view.projects.ProjectsAttachListStore'
    ],

    controller: 'projects-ProjectsAttachList',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: 200,
    scrollable: true,

    items: [
        {
            xtype: 'list',
            itemId: 'ListAttachProjects', reference: 'ListAttachProjects',
            flex: 1,
            store: Ext.create('PENKNIFE.view.projects.ProjectsAttachListStore'),
            disableSelection: true,
            loadingText: false,
            itemTpl:   `<img src="resources/img/attachment.svg" height='24' width='24' style="float:left;">
                        <span style="margin-left:10px; font-size:18px;">
                            {originalfilename}
                        </span>`,
            listeners: {
                itemtap: 'itemtapListProjectsAttach'
            }
        }
    ]
});
