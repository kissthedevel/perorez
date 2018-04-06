Ext.define('PENKNIFE.view.projects.ProjectsAttachListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projects-ProjectsAttachList',

    itemtapListProjectsAttach: function( th, index, target, record, e ) {

        let pathBase = '../imgrepo/projectsattachments/',
            fullPath = `${pathBase}${record.get('encrypted_name')}.${record.get('formato')}`,
            viewportWidth = Ext.getBody().getSize().width,
            viewportHeight = Ext.getBody().getSize().height - 40,
            overlay = Ext.create('Ext.Container', {
                itemId: 'CntIframe',
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
                        localizedKey: `ANTEPRIMA_ATTACH`,
                        items: [
                            {
                                xtype: 'button',
                                iconCls: 'close-icon',
                                handler: btnclose => btnclose.up('#CntIframe').destroy()
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: '100%',
                        width: '100%',
                        html: `<iframe height="${viewportHeight}" width="${viewportWidth}" src="${fullPath}"></iframe>`
                    }
                ]
            })

        overlay.show()
        
    },

    updateList: function(idProject) {
        let store = this.lookupReference('ListAttachProjects').getStore()

        store.load({
            params: {
                idProject: this.view.idProject
            },
            callback: (records, operation, success) => {

            }
        })
    },

    init: function() {
        this.view = this.getView()
    },

    destroy: function() {

    }
});
