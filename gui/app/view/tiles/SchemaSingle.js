Ext.define('PENKNIFE.view.tiles.SchemaSingle',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.SchemaSingleController'
    ],

    controller: 'tiles-SchemaSingle',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                /**
                 * pannello di sinistra
                 */
                {
                    xtype: 'container',
                    itemId: 'LeftPanelTilesSchema', reference: 'LeftPanelTilesSchema',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 1
                },
                /**
                 * pannello di destra
                 */
                {
                    xtype: 'container',
                    itemId: 'RightPanelTilesSchema', reference: 'RightPanelTilesSchema',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 1
                }
            ]
        }
    ]
});
