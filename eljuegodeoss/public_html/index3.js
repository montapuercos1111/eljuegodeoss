//Escena del Tatami

class EscenaTatami extends Phaser.Scene {

    constructor() {
        super({key: 'tatamiScene'});
    }

    preload() {
        this.load.image('tatami', 'imatges/tatami.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'tatami');
    }
}


//Escena de la Playa

class EscenaPlaya extends Phaser.Scene {

    constructor() {
        super({key: 'playaScene'});
    }

    preload() {
        this.load.image('playa', 'imatges/playa.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'playa');
    }
}

//Escena del infierno

class EscenaInfierno extends Phaser.Scene {

    constructor() {
        super({key: 'infiernoScene'});
    }

    preload() {
        this.load.image('infierno', 'imatges/infierno.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'infierno');
    }
}



//MUSICA DEL MENU

this.load.audio('musicaPrincipal', 'audios/musica.mp3');

