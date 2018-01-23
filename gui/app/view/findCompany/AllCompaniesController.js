Ext.define('PENKNIFE.controller.findCompany.AllCompaniesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.findCompany-allCompaniesController',

    tapBACK_FindCompany: function() {
        let levelHome = this.ctrlHome.lookupReference('LevelHome')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelHome)
    },

    loadCompanies() {
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/company/companySearch.php`,
            params: {},
            success: response => {
                let result = Ext.JSON.decode(response.responseText)
                //result.data[0].email
                Ext.suspendLayouts()

                let cntAll = this.lookupReference('ContainerAllCompanies'),
                    tileCmp = null
                
                result.data.forEach( tile => {
                    tileCmp = cntAll.add(Ext.create('PENKNIFE.view.tiles.Tile', {
                        disableAutoUpdate: true,
                        tileSize: tile.tilesize,
                        width: PENKNIFE.globals.dimensionTiles[tile.tilesize][0],
                        height: PENKNIFE.globals.dimensionTiles[tile.tilesize][1],
                        margin: '0 0 20 0',
                        flex: null
                    }))

                    let img = tileCmp.lookup('ImageLogo'),
                        cnt = img.up('container')
                    img.setSrc(`../imgrepo/companylogos/${tile.tilelogo}`)
                    this.idTileActual = tile.id
                    cnt.setStyle({
                        'background-color': Ext.isEmpty(tile.tilecolor) ? 'white' : tile.tilecolor
                    })
                })

                Ext.resumeLayouts()
                
            },
            failure: (conn, response, options, eOpts) => {
            	let result = Ext.JSON.decode(response.responseText)
                Ext.Msg.alert(langPKF._translate('ATTENZIONE'), langPKF._translate(result.message))
            }
        })
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.loadCompanies()
    }
});
