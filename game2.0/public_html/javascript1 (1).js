//Escena inicial
class Escena extends Phaser.Scene {

    //Càrrega de recursos
    preload() {
        //Cridam a la funció que hem creat perquè l'element CANVAS ocupi tota la finestra del navegador quan la redimensionam.
        //redimensionar();
        /*
         * El mètode window.addEventListener() escolta quan es produeix l'esdeveniment passat com a primer paràmetre, en el nostre cas 'resize' i crida a la
         * funció passada com a segon paràmetre, en el nostre cas redimensionar.
         */
        //window.addEventListener('resize', redimensionar);
        /*
         * Mitjançant el mètode this.load.image definim la imatge que volem mostrar per pantalla: 
         *  - Primer paràmetre: Nom que donam a la imatge per identificar-la dins el codi, en el nostre cas el nom és "fons".
         *  - Segon paràmetre: ruta on es trova la imatge, en el nostre cas la imatge és espai.jpg i la ruta imatges/espai.jpg.
         */
        this.load.image('fons', 'imatges/espai.jpg');
    }

    //Col.locació i inicialització dels objectes
    create() {
        /*
         * Mitjançant el mètode this.add.sprite col.locam la imatge en pantalla:
         *  - Primer paràmetre: Valor de la coordenada X on col.locarem el centre de la imatge passada com a tercer paràmetre. En el nostre cas el valor és 480 (960/2).
         *  - Segon paràmetre: Valor de la coordenada y on col.locarem el centre de la imatge passada com a tercer paràmetre. En el nostre cas el valor és 320 (640/2).
         *  - Tercer paràmetre: Nom de la imatge que volem col.locar i que hem definit prevaiment en el mètode preload(). En el nostre cas és la imatge "fons".
         *En el nostre cas, el valor que hem donat a les coordenades és la meitad del valor de l'amplada i alçada de CANVAS, això ens situa l'imatge al centre
         *de la pantalla.
         */
        this.add.sprite(480, 320, 'fons');

    //Definim la zona on l'usuari pot seleccionar el camí de la nau
        
        /*
         *Mitjançant el mètode this.add.zone, definim la zona on l'origen (centre) seran les coordenades x=140 i y=10, i que tindrà una amplada de 450px i una alçada de 410px
         *i guardam la zona en la constant opcioNau. Si fem que el CANVAS es redimensioni, aquestes mesures canviaran.
         */
        const opcioNau = this.add.zone(140, 10, 440, 400);
        /*
         * El mètode setOrigin() situa l'origen de coordenades de la zona que el crida en el punt passat per paràmetre. En el nostre cas situa la zona guardad en opcioNau,
         * què és la que crida al mètode, en la seva cantonada superior esquerra (0,0). Per defecte, l'origen de coordenades sempre es troba en el centre.
         */
        opcioNau.setOrigin(0);
        /*
         * El mètode setName() assigna un nom a la zona que el crida perque es pugui accedir a ella en qualsevol lloc del script. En el nostre cas la zona guardada en la 
         * variable opcioNau, rebrà el nom "nau".
         */        
        opcioNau.setName('nau');
        /*
         * El mètode setInteractive() fa que la zona que el crida sigui interactiva, d'aquesta manera reaccionarà a qualsevol esdeveniment de l'usuari, com clicar sobre ella amb el ratolí.
         */
        opcioNau.setInteractive();
        /*
         *Vincula una zona amb un esdeveniment, en el nostre cas 'pointerdown' (clicar amb el ratolí). Un cop es produeixi l'esdeveniment s'executarà el mètode opcioPulsada() que crearem nosaltres
         *i l'indicarà al sistema el que ha de fer un cop es produeixi l'esdeveniment.
         */
        opcioNau.once('pointerdown', () => this.opcioPulsada(opcioNau));
        /*
         * El mètode this.add.graphics(), dibuixa en el CANVAS el gràfic que crida, en aquesta cas lineStyle(2, 0xff0000), és a dir, un requadre vermell (0xff0000) de 2 pixels de gruix.
         */
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcioNau);

    //Definim la zona on l'usuari pot seleccionar el camí de la terra (Afegiu a cada línia del codi un comentari amb el que fa)
        const opcioMon = this.add.zone(590, 240, 370, 410);
        opcioMon.setOrigin(0);
        opcioMon.setName('terra');
        opcioMon.setInteractive();
        opcioMon.once('pointerdown', () => this.opcioPulsada(opcioMon));
        //this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcioMon);
    }

    //Mètode que s'executa quan es produeix l'esdeveniment 'pointerdown' (clicar amb el ratolí)
    opcioPulsada(opcio) {
        if (opcio.name === 'nau') { //Zona corresponent a la nau
            /*
             * El mètode this.scene.start(), carrega l'escena corresponent a l'identificador passat per paràmetre. L'identificador ha s'ha d'indicar en el mètode constructor
             * de la classe de l'escena.
             */
            this.scene.start('nauScena'); //Carrega l'escena de la nau.
        } else { //Zona corresponent a la casa
            this.scene.start('casaScena'); //Carrega l'escena de la casa
        }
    }
}

//Escena de la nau
class EscenaNau extends Phaser.Scene {

    constructor() {
        /*
         * El mètode super construeix l'escena de l'identificador passat per paràmetre, en el nostre cas l'escena de la nau ({key: 'nauScena'}).
         */
        super({key: 'nauScena'});
    }

    preload() {
        this.load.image('nau', 'imatges/nau.jpg'); //Escena corresponent a l'imatge nau.jpg
    }

    create() {
        this.add.sprite(480, 320, 'nau'); //Col.loca la imatge al centre de la pantalla.
    }
}

//Escena de la casa
class EscenaCasa extends Phaser.Scene {

    constructor() {
        super({key: 'casaScena'}); //Construïm l'escena de la casa
    }

    preload() {
        this.load.image('casa', 'imatges/casa.jpg'); //Escena corresponent a l'imatge casa.jpg
    }

    create() {
        this.add.sprite(480, 320, 'casa'); //Col.loca la imatge al centre de la pantalla.
    }
}

//Funció que fa que la imatge ocupi el 100% de la pantalla quan redimensionam la pantalla
function redimensionar() {
    /*
     * El mètode document.querySelector() selecciona l'element HTML passat per paràmetre, en el nostre cas l'element CANVAS. Aquest element el guardam en la variable canvas
     */
    const canvas = document.querySelector("canvas");
    /*
     * El mètode window.innerWidth retorna l'ampla actual de la nostra finestra del navegador. Aquest valor el guardam en la variable windowWidth.
     */
    const windowWidth = window.innerWidth;
     /*
     * El mètode window.innerHeight retorna l'alçada actual de la nostra finestra del navegador. Aquest valor el guardam en la variable windowHeight.
     */
    const windowHeight = window.innerHeight;
    /*
     * La variable predefinida de Phaser canvas.style.width guarda l'amplada que li volem donar a l'element html que la crida, en el nostre cas l'element CANVVAS
     * guardat en la variable canvas. En el nostre cas l'amplada que guardarà ès l'amplada actual de la finestra del navegador guardada en la variable windowWidth. A aquest 
     * valor li concatenam la cadena 'px' perquè el sistema sapiga que es tracta de píxels.
     */
    canvas.style.width = windowWidth + 'px';
     /*
     * La variable predefinida de Phaser canvas.style.height guarda l'alçada que li volem donar a l'element html que la crida, en el nostre cas l'element CANVVAS
     * guardat en la variable canvas. En el nostre cas l'alçada que guardarà ès l'alçada actual de la finestra del navegador guardada en la variable windowHeight. A aquest 
     * valor li concatenam la cadena 'px' perquè el sistema sapiga que es tracta de píxels.
     */
    canvas.style.height = windowHeight + 'px';
}

//Configuració del joc
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    //Escenes del joc, en aquest cas hi ha tres escenes: Escena, EscenaNau i EscenaCasa
    scene: [Escena, EscenaNau, EscenaCasa]
};

 //Inicialització del joc
new Phaser.Game(config);
