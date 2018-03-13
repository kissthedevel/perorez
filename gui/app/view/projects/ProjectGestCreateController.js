Ext.define('PENKNIFE.view.projects.ProjectGestCreateController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projects-ProjectGestCreate',

    tapBACK_ProjectCreate: function(update) {
        let levelFirst = this.ctrlHome.lookupReference('LevelFirst')
        if (update) {
            this.ctrlList.updateList()
        }
        this.ctrlHome.lookupReference('CntMainContent').setActiveItem(levelFirst)
    },

    tapCONFIRM_ProjectCreate: function() {
        if (!this.validateFields()) {
            return false
        }

        let values = this.lookupReference('Form_ProjectCreate').getValues(),
            record = values
        
        Ext.apply(record, {
        	creator: 1,	//TODO da getsire login
        	elite: record.elite ? 1 : 0
        })
                
        Ext.Ajax.request({
            url: `${PENKNIFEwsDomain}ws/projects/projectSave.php`,
            params: Ext.JSON.encode(record),
            success: response => {
                var result = Ext.JSON.decode(response.responseText)
                this.tapBACK_ProjectCreate(true)
            },
            failure: (conn, response, options, eOpts) => {
            	var result = Ext.JSON.decode(response.responseText)
            	alert(result.message)
            }
        });
    },
    validateFields: function() {
        let validForm = false
        //TODO gestire
        validForm = true

        return validForm
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

    tapBtnUploadImm: function(th) {
        Ext.Viewport.add(Ext.create('PENKNIFE.view.projects.UploadImage', {
            controllerProjectCreate: this,
            imageNumber: th.getItemId().replace('BtnUploadImm', '')
        })).show()
    },

    changePrjImage: function( th, newValue ) {
        let nImage = th.getItemId().replace('PrjImage', ''),
            imgLogo = this.lookupReference(`CardImage${nImage}`)

        imgLogo.setSrc(`../imgrepo/projectsimages/${newValue}`)
    },

    init: function() {
        this.view = this.getView()
        this.ctrlHome = this.view.controllerHome
        this.ctrlList = this.view.controllerList

        this.setLinguaggioAttivo('china')

        Ext.defer( () => this.lookupReference('ProjectCarousel').show(), 1000)
        
    }
});
