
Ext.define('PENKNIFE.view.projects.UploadImage',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.projects.UploadImageController'
    ],

    controller: 'projects-UploadImage',

    floated: true,
    modal: true,
    hideOnMaskTap: true,
    showAnimation: {
        type: 'slide',
        direction: 'right',
        duration: 250,
        easing: 'ease-in'
    },
    hideAnimation: {
        type: 'slideOut',
        duration: 250,
        easing: 'ease-out'
    },
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
        
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            localized: 'title',
            localizedKey: `LOAD_IMM_PRJ`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'CloseIconHamburger', reference: 'CloseIconHamburger',
                    iconCls: 'close-icon',
                    listeners: {
                        tap: 'tapCloseIcon'
                    }
                }
            ]
        },
        {
            xtype: 'formpanel',
            itemId: 'Form_UploadLogo', reference: 'Form_UploadLogo',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            url: `${PENKNIFEwsDomain}ws/projects/uploadImage.php`,
            fileUpload: true,
            enableSubmissionForm: false,
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    width: 230,
                    items: [
                        {
                            xtype: 'filefield',
                            itemId: 'FFLogo', reference: 'FFLogo',
                            name: 'userfile',
                            accept: 'image',
                            listeners: {
                                change: 'changeFFLogo'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
