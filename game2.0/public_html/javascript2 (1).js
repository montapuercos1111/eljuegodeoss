//Escena principal
class Escena extends Phaser.Scene {

    preload() {
        resize();
        window.addEventListener('resize', resize);
        this.load.image('fons', 'imatges/espai.jpg');
    }


    create() {
        this.add.sprite(480, 320, 'fons'); 
        
        //Zona nau
        const opcioNau = this.add.zone(140, 10, 440, 400);
        opcioNau.setOrigin(0);
        opcioNau.setName('nau');
        opcioNau.setInteractive();
        opcioNau.once('pointerdown', () => this.opcioPulsada(opcioNau));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioNau);

        //Zona terra
        const opcioMon = this.add.zone(590, 240, 370, 410);
        opcioMon.setOrigin(0);
        opcioMon.setName('terra');
        opcioMon.setInteractive();
        opcioMon.once('pointerdown', () => this.opcioPulsada(opcioMon));
        //this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioMon);
    }

 
    opcioPulsada(opcio) {
        if (opcio.name === 'nau') { 
            this.scene.start('nauScene');
        } else {
            this.scene.start('casaScene');
        }
    }
}

//Escena de la nau
class EscenaNau extends Phaser.Scene {

    constructor() {
        super({key: 'nauScene'});
    }

    preload() {
        this.load.image('nau', 'imatges/nau.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'nau');

        //Definim la zona on l'usuari pot seleccionar el camí del boss
        const opcioNau = this.add.zone(150, 170, 250, 370);
        opcioNau.setOrigin(0);
        opcioNau.setName('boss');
        opcioNau.setInteractive();
        opcioNau.once('pointerdown', () => this.opcioPulsada(opcioNau));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioNau);

        //Definim la zona on l'usuari pot seleccionar el camí a casa
        const opcioMon = this.add.zone(530, 170, 250, 370);
        opcioMon.setOrigin(0);
        opcioMon.setName('casa');
        opcioMon.setInteractive();
        opcioMon.once('pointerdown', () => this.opcioPulsada(opcioMon));
        //this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioMon);
    }

    opcioPulsada(opcio) {
        if (opcio.name === 'boss') {  //Àrea corresponent al boss
            this.scene.start('bossScene'); //Mostra l'escena del boss
        } else { //Àrea corresponent a la casa
            this.scene.start('casaScene'); //Mostra l'escena de la casa
        }
    }
}

//Escena de la casa
class EscenaCasa extends Phaser.Scene {

    constructor() {
        super({key: 'casaScene'});
    }

    preload() {
        this.load.image('casa', 'imatges/casa.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'casa');
    }
}

//Escena del boss
class EscenaBoss extends Phaser.Scene {

    constructor() {
        super({key: 'bossScene'});
    }

    preload() {
        this.load.image('boss', 'imatges/boss.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'boss');//Definim la zona on l'usuari pot seleccionar el camí del boss
        
        //Zona interactiva ull
        const opcioUll = this.add.zone(270, 250, 75, 75);
        opcioUll.setOrigin(0);
        opcioUll.setName('ull');
        opcioUll.setInteractive();
        opcioUll.once('pointerdown', () => this.opcioPulsada(opcioUll));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioUll);

        //Zona interactiva boca
        const opcioBoca = this.add.zone(400, 300, 200, 225);
        opcioBoca.setOrigin(0);
        opcioBoca.setName('boca');
        opcioBoca.setInteractive();
        opcioBoca.once('pointerdown', () => this.opcioPulsada(opcioBoca));
        this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioBoca);
    }

    opcioPulsada(opcio) {
        if (opcio.name === 'ull') {  //Àrea corresponent al ull
            this.scene.start('ullScene'); //Mostra l'escena de l'ull
        } else { //Àrea corresponent a la boca
            this.scene.start('bocaScene'); //Mostra l'escena de la boca
        }
    }
}

//Escena del ull
class EscenaUll extends Phaser.Scene {

    constructor() {
        super({key: 'ullScene'});
    }

    preload() {
        this.load.image('ull', 'imatges/ull.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'ull');
    }
}

//Escena de la boca
class EscenaBoca extends Phaser.Scene {

    constructor() {
        super({key: 'bocaScene'});
    }

    preload() {
        this.load.image('boca', 'imatges/boca.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'boca');
    }
}


//Redimensionament de la imatge
function resize() {
    const canvas = document.querySelector("canvas");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    canvas.style.width = windowWidth + 'px';
    canvas.style.height = windowHeight + 'px';
}

//Configuració del joc
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    scene: [Escena, EscenaNau, EscenaCasa, EscenaBoss, EscenaUll, EscenaBoca]
};

new Phaser.Game(config);
