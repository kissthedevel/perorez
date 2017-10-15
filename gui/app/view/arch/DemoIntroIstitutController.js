Ext.define('PENKNIFE.view.arch.DemoIntroIstitutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.arch-DemoIntroIstitut',

    init: function() {
        let carousel = this.lookupReference('CarouselIstituz')

        this.intvalCar = setInterval( () => {
            if (carousel.getActiveIndex() === 4) {
                carousel.setActiveItem(0)
            } else {
                carousel.setActiveItem(carousel.getActiveIndex() + 1)
            }
        }, 8000)

        carousel.on('destroy', () => clearInterval(this.intvalCar))
    }
});
