Ext.define('PENKNIFE.view.projects.ProjectsListStore', {
    extend: 'Ext.data.Store',

    alias: 'view.projects.ProjectsListStore',

    proxy: {
        type: 'ajax',
        url: `${PENKNIFEwsDomain}ws/projects/projectsList.php`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
