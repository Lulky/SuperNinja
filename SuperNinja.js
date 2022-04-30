class Ninja {
    constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;

    }

    sayName() {
        console.log("El nombre del ninja es: "+ this.nombre)
    }

    showStats() {
        console.log ("Nombre: "+ this.nombre, ", Fuerza: " +this.fuerza+ ", Velocidad: "+this.velocidad+ ", Salud: "+ this.salud)
    }

    drinkSake() {
        console.log ("La salud  luego de comer frutita es "+ (this.salud += 10))
    }
}


class Sensei extends Ninja {

    constructor(nombre, sabiduria) {
        super(nombre);
        this.sabiduria = 10
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;

    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
        super.drinkSake();
    }

    
}



const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
console.log("Sabiduria: " + superSensei.sabiduria)
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"