export default class Persona {
    private nombre: string;
    apellidos: string;
    readonly DNI:string;
    edad: number=18;

    constructor (nombre: string, apellidos: string,dni:string, edad?: number){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.DNI = dni;
        if (edad == undefined){
            this.edad = 0;
        } else{
            this.edad = edad;
        }
      
    }

    set setNombre(nombre: string){
        this.nombre = nombre;
    }

    get getNombre() {
        return this.nombre
    }

let persona1:Persona = new Persona("Pedro","Gonzalez","00000000T");

persona.getNombre();

getJSON():string{
    return JSON.stringify(new Persona(this.nombre, this.apellido, this.DNI, this.edad));
}

getJSONToObject(json:string):Persona{
    return JSON.parse(json) as Persona;
}

toTexto(){
    consoole.log(`${this.nombre} - ${this.apellidos} - ${this.DNI} - ${this.edad}`);
}
