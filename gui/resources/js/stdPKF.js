'use strict';

class stdPKF {
    constructor() {
        Ext.define('Override.Ext.Component', {
            override : 'Ext.Component',
        
            initialize : function() {
                if (this.localized) {
                    PENKNIFE.lang._localize([this])
                }
            }
        })
    }

    initGlobals() {
        if (!PENKNIFE.globals) {
            PENKNIFE['globals'] = {
                menus: {
                    createMenuMinimal: false
                },
                language: 'it'
            }
        }
    }

    createHomeView() {
        PENKNIFE.PENKNIFE_main.add(Ext.create('PENKNIFE.view.arch.Home', {}))
    }

    isPhone() {
        return Ext.os.deviceType.toLowerCase() === 'phone'
    }

    getPanelTilesSize(menuWidth) {
        /**
         * Types:
         * 1: Smartphone One column portrait 1/12 x 1/8
         * 2: Tablet Two columns landscape 1/24 x 1/8
         * 3: Tablet Three columns landscape 1/36 x 1/8
         */
        let result = {
            type: null,
            width: null,
            height: null
        }

        let viewWidth = Ext.Viewport.getSize().width,
            spaceWidth = menuWidth ? viewWidth - menuWidth : viewWidth,
            unitWidth = 1
        
        if (this.isPhone()) {
            result.type = 1
            result.width = spaceWidth

            unitWidth = spaceWidth / 12
            result.height = unitWidth * 16
        }

        return result
    }

    getRandomColorsMaterial() {
        let colors = [
            '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#8C9EFF', '#536DFE',
            '#3D5AFE', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#448AFF',
            '#2979FF', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#546E7A'
        ],
        randomColor = Ext.Number.randomInt(0, colors.length -1)

        return {
            'background-color': colors[randomColor]
        }
    }
}