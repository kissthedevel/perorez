Ext.define('PENKNIFE.view.projects.ProjectsAttachListStore', {
    extend: 'Ext.data.Store',

    alias: 'view.projects.ProjectsAttachListStore',

    proxy: {
        type: 'ajax',
        url: `${PENKNIFEwsDomain}ws/projects/projectsAttachList.php`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
