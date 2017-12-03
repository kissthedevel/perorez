Ext.define('PENKNIFE.view.tiles.TilesListStore', {
    extend: 'Ext.data.Store',

    alias: 'view.tiles.TilesListStore',

    proxy: {
        type: 'ajax',
        url: `${PENKNIFEwsDomain}ws/company/companyList.php`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    initialize: th => {
        debugger
    }
});
