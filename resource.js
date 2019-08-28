let gameImage = function(name) {
    this.img = null;
    this.name = name;
    this.load = false;

    let self = this;

    this.load = function() {
        this.img = new Image();
        this.img.onload = function() {
            self.loaded = true;
        }
        this.img.src = 'image/' + name + '.png';
    }
}

let resource = function(game) {
    this.game = game;
    this.player = new gameImage('anh33');
    this.pie1 = new gameImage('banh22');
    this.pie2 = new gameImage('banh1');
    this.fire = new gameImage('banh11');
    this.fire2 = new gameImage('anhtu1');
    this.background = new gameImage('nen11');

    let self = this;

    this.load = function() {
        this.player.load();

        this.pie1.load();
        this.pie2.load();
        this.fire.load();
        this.fire2.load();
        this.background.load();

        setInterval(function() {
            self.checkAllImageLoaded();
        }, 500)
    }

    this.checkAllImageLoaded = function() {
        if ((this.player.loaded) &&
            (this.pie1.loaded) &&
            (this.pie2.loaded) &&
            (this.fire.loaded) &&
            (this.background.loaded)
        ) {
            this.game.resourceLoaded = true;
        }
    }

}