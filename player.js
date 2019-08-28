let player = function(game) {
    this.game = game;
    this.x = 0;
    this.y = 470;
    let self = this;
    this.visible = true;

    this.init = function() {
        this.game.canvas.addEventListener("mousemove", function(event) {
            self.proccessMouseMove(event);
        });
    }

    this.proccessMouseMove = function(event) {
        let rect = self.game.canvas.getBoundingClientRect();
        if (event.clientX > rect.left + (this.game.resource.player.img.width / 2) &&
            event.clientX < canvas.width + rect.left - (this.game.resource.player.img.width / 2)
        ) {

            this.x = event.clientX - rect.left - (this.game.resource.player.img.width / 2)
        }
    }

    this.draw = function() {
        if (game.life > 0 && this.visible) {
            this.game.context.drawImage(this.game.resource.player.img,
                this.x,
                this.y);
        } else if (this.visible) {
            this.game.context.drawImage(this.game.resource.fire2.img,
                this.x,
                this.y);

            setTimeout(function() {
                self.visible = false;
            }, 1000);
        }

    }

}