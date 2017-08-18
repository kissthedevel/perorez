'use strict';

class stdPKF {
    constructor() {

    }

    initGlobals() {
        if (!PENKNIFE.globals) {
            PENKNIFE['globals'] = {
                menus: {
                    createMenuMinimal: false
                }
            }
        }
    }

    createHomeView() {
        PENKNIFE.PENKNIFE_main.add(Ext.create('PENKNIFE.view.arch.Home', {}))
    }

    isPhone() {
        return Ext.os.deviceType.toLowerCase() === 'phone'
    }

    _translate(string) {
        return string
    }
}