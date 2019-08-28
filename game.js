class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.resource = null;
        this.pie = [];
        this.player = null;
        this.resourceLoaded = false;
        this.score = 0;
        this.life = 3;
        self = this;
    }

    init() {

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.resource = new resource(this);

        this.resource.load();

        this.player = new player(this);
        this.player.init();

        this.clear = setInterval(self.creatNewpie, 800);

        self.start();
    }

    start() {
        this.loop();
    }

    loop() {
        self.update();
        self.draw();
        setTimeout(self.loop, 20);
    }

    update() {
        if (this.life > 0)
            self.updateAllpie();
    }

    draw() {
        self.context.drawImage(self.resource.background.img, 0, 0, canvas.width, canvas.height);
        if (self.resourceLoaded == false) {
            self.drawLoading();
        } else {
            self.drawAll();
        }
    }

    creatNewpie() {
        if (self.resourceLoaded) {
            let newpie = new pie(self);
            newpie.init();
            self.pie.push(newpie);
        }
    }

    drawAllpie() {
        for (let i = 0; i < this.pie.length; i++) {
            this.pie[i].draw();
        }
    }

    updateAllpie() {
        for (let i = 0; i < this.pie.length; i++) {
            this.pie[i].update();
        }
    }

    drawLoading() {
        this.context.beginPath();
        this.context.fillStyle = "#FF000B";
        this.context.font = "30px Arial";
        this.context.fillText("Loading...", 100, 100);
        this.context.closePath();
    }

    drawScore() {
        this.context.beginPath();
        this.context.fillStyle = "#f2eded";
        this.context.font = "30px Arial";
        this.context.fillText(this.score, 760, 60);
        this.context.closePath();
    }

    drawLife() {
        this.context.beginPath();
        this.context.fillStyle = "#f2eded";
        this.context.font = "30px Arial";
        this.context.fillText(this.life, 93, 33);
        this.context.closePath();
    }

    drawGameOver() {
        this.context.beginPath();
        this.context.fillStyle = "#FF000B";
        this.context.font = "50px Arial";
        this.context.fillText("Game Over!", 250, 350);
        clearInterval(this.clear)


    }

    drawWon() {
        this.context.beginPath();
        this.context.fillStyle = "#FF000B";
        this.context.font = "50px Arial";
        this.context.fillText("You Won!", 250, 350);
        clearInterval(this.clear)

    }

    drawAll() {
        self.player.draw();
        self.drawAllpie();
        self.drawScore();
        self.drawLife();
        if (self.life === 0) {
            self.drawGameOver();

        }
        if (self.score >= 80) {
            self.drawWon();
        }

    }

}