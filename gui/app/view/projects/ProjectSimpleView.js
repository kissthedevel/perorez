
Ext.define('PENKNIFE.view.projects.ProjectSimpleView',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.projects.ProjectSimpleViewController'
    ],

    controller: 'projects-ProjectSimpleView',

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
            itemId: 'ToolbarProjectSimpleView', reference: 'ToolbarProjectSimpleView',
            docked: 'top',
            /* localized: 'title',
            localizedKey: `CONTACT_US`, */
            items: [
                {
                    xtype: 'button',
                    itemId: 'BACK_ProjectSimpleView', reference: 'BACK_ProjectSimpleView',
                    iconCls: 'left-arrow',
                    listeners: {
                        tap: 'tapBACK_ProjectSimpleView'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1
                },
                /* {
                    xtype: 'button',
                    itemId: 'LIKE_ProjectSimpleView', reference: 'LIKE_ProjectSimpleView',
                    iconCls: 'like-none',
                    listeners: {
                        tap: 'tapLIKE_ProjectSimpleView'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'MORE_ProjectSimpleView', reference: 'MORE_ProjectSimpleView',
                    iconCls: 'context-menu'
                } */
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            margin: '10 0 0 0',
            flex: 1,
            items: [
                {
                    xtype: 'label',
                    itemId: 'LabelNameProject', reference: 'LabelNameProject',
                    cls: 'label-view-company-name'
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    width: '100%',
                    height: !stdPKF.isPhone() ? 300 : 200,
                    maxWidth: 450,
                    margin: '10 5 10 5',
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'CntImages', reference: 'CntImages',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            height: '100%',
                            width: '100%',
                            items: [
                                {
                                    xtype: 'carousel',
                                    itemId: 'ProjectCarousel', reference: 'ProjectCarousel',
                                    direction: 'horizontal',
                                    flex: 1,
                                    margin: '0 10 0 10',
                                    style: {
                                        'background-color': 'white',
                                        'border-radius': '5px 5px 5px 5px'
                                    },
                                    items: [
                                        {
                                            xtype: 'image',
                                            itemId: 'CardImage1', reference: 'CardImage1',
                                            src: 'resources/img/emptyimage.svg'
                                        },
                                        {
                                            xtype: 'image',
                                            itemId: 'CardImage2', reference: 'CardImage2',
                                            src: 'resources/img/emptyimage.svg'
                                        },
                                        {
                                            xtype: 'image',
                                            itemId: 'CardImage3', reference: 'CardImage3',
                                            src: 'resources/img/emptyimage.svg'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'fit'
                    },
                    width: stdPKF.isPhone() ? '90%' : '70%',
                    flex: 1,
                    margin: '15 0 10 0',
                    scrollable: true,
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'DescriptionProject', reference: 'DescriptionProject',
                            flex: 1,
                            style: {
                                'text-align': 'justify'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
