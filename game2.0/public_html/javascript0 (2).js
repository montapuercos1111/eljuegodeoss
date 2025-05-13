//Escena inicial y única del joc. Cada escena correspon a una class (classe). En el nostre cas només tenim una escena anomenada Escena, per tant, només hi ha la class Escena.
//Dins de la class definirem els mètodes que ens fan falta per executar l'escena.
class Escena extends Phaser.Scene {

    //Funció que s'encarregarà de precarregar els recursoso que necessita el joc: imatges, sons, fitxers json, etc.
    preload() {
        alert('preload');
    }

    //Aquesta funció només s'executa un cop, quan s'inicia el joc. S'encarrega de fer la configuració bàsica i afegir els objectes en pantalla. Punt de partida de l'escena.
    create() {
        alert('create');
    }

    //Aquesta funció s'executa diversos cops per segon. Gestiona els moviments dels personatges, les col·lisions entre ells i, en general, tot el que ha de ser avaluat de manera constant.
    update() {
        alert('update');
    }
}

//Configuració del joc
const config = {
    //Renderitzat (crear una imatge a partir d'un model) del joc. Els seus valors poden ser CANVAS, WEBGL, HEADLESS i AUTO. Auto seleciona la millor opció.
    //En el nostre cas serà CANVAS, per tant podriem utilitzar CANVAS en lloc d'AUTO.
    type: Phaser.AUTO,
    //Midas del CANVAS per defecte - Rectangle on es desenvolupa el joc. Més endavant afegirem un codi perquè la imatge ocupi tota la pantalla mantenint la proporció.
    width: 960, //Amplada
    height: 640, //Alçada
    //Escenes del joc. En el nostre cas, com només hi ha una, s'escriu directament el nom de l'escena, és a dir Escena. Si hi ha més d'una, es defineixen amb un array,
    //on la primera escena del l'array, és l'escena inicial del joc. L'ordre en el qual es defineixen, és l'ordre en el qual es carreguen.
    scene: Escena
};

new Phaser.Game(config); //Inicialització del joc amb la configuració config
