Ext.define('PENKNIFE.view.tiles.TileGestCreateController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tiles-TileGestCreate',

    tapBACK_TileGestCreate: function() {
        let levelFirst = this.ctrlHome.lookupReference('LevelFirst')
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    tabBtnsFieldsetLanguages: function(th) {
        let button

        if (th.delegatedTarget && th.delegatedTarget.id) {
            button = Ext.getCmp(th.delegatedTarget.id).down('button')
        } else if (th.$className === 'Ext.Button') {
            button = th
        } else return false

        let lang = button.getItemId().replace('BtnDescrLang', ''),
            cntFieldsets = this.lookupReference('FieldsetDescrLanguages'),
            cntChina = this.lookupReference('FieldsetDescrChina'),
            cntIta = this.lookupReference('FieldsetDescrItaly'),
            cntEng = this.lookupReference('FieldsetDescrEnglish'),
            arrCnts = [cntChina, cntIta, cntEng]

        if (button.getId() === cntFieldsets.linguaggioDescrAttivo) {
            return false
        }

        arrCnts.forEach( el => {
            el.setMaxWidth(32)
            el.down('textareafield').setReadOnly(true)
        });

        let actual = button.up('[cntlang]')
        actual.setMaxWidth(3000)
        actual.down('textareafield').setReadOnly(false)
    },

    setLinguaggioAttivo: function(country) {
        switch (country) {
            case 'china':
                this.tabBtnsFieldsetLanguages(this.lookupReference('BtnDescrLangChina'))
                break;

            case 'italy':
                this.tabBtnsFieldsetLanguages(this.lookupReference('BtnDescrLangItaly'))
                break;

            case 'english':
                this.tabBtnsFieldsetLanguages(this.lookupReference('BtnDescrLangEnglish'))
                break;
        
            default:
                break;
        }
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome

        this.setLinguaggioAttivo('china')

        let ts = this.lookupReference('TileSample')
        ts.setHeight(PENKNIFE.globals.dimensionTiles['6x3'][1])
        ts.setWidth(PENKNIFE.globals.dimensionTiles['6x3'][0])
    }
});
