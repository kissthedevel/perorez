'use strict';

class stdPKF {
    constructor() {
        
    }

    static overrideExtComponent() {
        Ext.define('Override.Ext.Component', {
            override : 'Ext.Component',
        
            initialize : function() {
                if (this.localized) {
                    langPKF._localize([this])
                }
            }
        })
    }

    static initGlobals() {
        if (!PENKNIFE.globals) {
            PENKNIFE['globals'] = {
                menus: {
                    createMenuMinimal: false
                },
                appLoaderCount: 0,
                language: 'it',
                tabletMenuWidth: 280,
                ADM: true,
                dimensionTiles: {}
            }
        }
    }

    static createHomeView() {
        PENKNIFE.PENKNIFE_main.add(Ext.create('PENKNIFE.view.arch.Home', {}))
    }

    static isPhone() {
        return Ext.os.deviceType.toLowerCase() === 'phone'
    }

    static getPanelTilesSize() {
        /**
         * Types:
         * 1: Smartphone One column portrait 1/12 x 1/20
         * 2: Tablet Two columns landscape 1/24 x 1/20
         * 3: Tablet Three columns landscape 1/36 x 1/20
         */
        let menuWidth = this.isPhone() ? null : 280,    //PENKNIFE.globals.tabletMenuWidth,
            viewWidth = Ext.getBody().getSize().width,
            spaceWidth = menuWidth ? viewWidth - menuWidth : viewWidth,
            unitWidth = 1,
            result = {
                type: null,
                width: spaceWidth,
                height: null
            }
        
        if (this.isPhone()) {
            result.type = 1
            /* result.width = spaceWidth */

            unitWidth = spaceWidth / 12
            result.height = unitWidth * 24
        } else if (spaceWidth <= 800) {
            result.type = 2
            /* result.width = spaceWidth */

            unitWidth = spaceWidth / 24
            result.height = unitWidth * 24
        } else if (spaceWidth > 800) {
            result.type = 3
            /* result.width = spaceWidth */

            unitWidth = spaceWidth / 36
            result.height = unitWidth * 24
        }

        return result
    }

    static getRandomColorsMaterial() {
        let colors = [
            '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#9FA8DA', '#7986CB',
            '#5C6BC0', '#3F51B5', '#3949AB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3',
            '#1E88E5', '#7C4DFF', '#651FFF', '#536DFE', '#3D5AFE', '#448AFF', '#2979FF',
            '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#40C4FF', '#00B0FF',
            '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#18FFFF', '#00E5FF',
            '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#4DB6AC', '#26A69A', '#0091EA'
        ],
        randomColor = Ext.Number.randomInt(0, colors.length -1)

        return {
            'background-color': colors[randomColor],
            'box-shadow': '4px 4px #920000'
        }
    }

    static setGlobalsDimensionTiles(allTiles) {
        allTiles.forEach( el => {
            PENKNIFE.globals.dimensionTiles[el.tilecnt] = [el.element.getWidth(), el.element.getHeight()]
        })
    }

}