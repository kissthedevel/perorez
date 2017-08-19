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
}