let pie = function(game) {
    this.game = game;
    this.x = 0;
    this.y = 140;
    this.img = null;
    this.type = 1;
    this.fired = false;
    this.visible = true;
    this.addedScore = true;
    this.addedlife = true;
    this.speed = 5;
    let self = this;

    this.init = function() {
        this.type = this.getRandomInt(1, 2);
        if (this.type == 1) {
            this.img = this.game.resource.pie1.img;
        } else {
            this.img = this.game.resource.pie2.img;
        }

        let positions = [140, 290, 460, 580];
        this.x = positions[this.getRandomInt(0, 3)];
    }

    this.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.update = function() {

        if (this.y < 550) {
            if (game.score >= 0) {
                this.y += self.speed;
            }
            if (game.score > 10) {
                this.y += self.speed + 2;
            }
            if (game.score > 20) {
                this.y += self.speed + 4;
            }
            if (game.score > 30) {
                this.y += self.speed + 6;
            }
            if (game.score > 40) {
                this.y += self.speed + 8;
            }
            if (game.score > 50) {
                this.y += self.speed + 10;
            }
            if (game.score > 60) {
                this.y += self.speed + 12;
            }
            if (game.score > 70) {
                this.y += self.speed + 15;
            }
        } else if (this.y >= 550) {
            this.fired = true;

            if (this.addedlife) {
                this.game.life -= 1;
                this.addedlife = false;
            }

        }

        if (this.fired) {
            this.img = this.game.resource.fire.img;
            setTimeout(function() {
                self.visible = false;
            }, 300);
        }

        this.checkIn();
    }

    this.checkIn = function() {
        if ((this.fired == false) &&
            (this.x > this.game.player.x) &&
            (this.x < (this.game.player.x + this.game.resource.player.img.width)) &&
            (this.y >= 420)

        ) {
            self.visible = false;

            if (this.addedScore) {
                this.game.score += 1;
                this.addedScore = false;
            }

            if (this.addedlife) {
                this.addedlife = false;
            }

        }
    }

    this.draw = function() {
        if (this.visible) {
            this.game.context.drawImage(self.img, this.x - (this.img.width / 2), this.y);
        }
    }

}