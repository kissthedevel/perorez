Ext.define('PENKNIFE.view.tiles.Tile',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.tiles.TileController'
    ],

    controller: 'tiles-Tile',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'image',
            itemId: 'ImageLogo', reference: 'ImageLogo',
            src: '',
            flex: 1
        }
    ],

    listeners: {
        element: 'element',
        tap: 'getCompany'
        /* touchstart: 'onTouchPadEvent',
        touchend: 'onTouchPadEvent',
        touchmove: 'onTouchPadEvent',
        swipe: 'onTouchPadEvent',
        dragstart: 'onTouchPadEvent',
        drag: 'onTouchPadEvent',
        dragend: 'onTouchPadEvent',
        singletap: 'onTouchPadEvent',
        doubletap: 'onTouchPadEvent',
        longpress: 'onTouchPadEvent',
        pinch: 'onTouchPadEvent',
        rotate: 'onTouchPadEvent' */
    }
});
