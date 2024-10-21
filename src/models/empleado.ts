export default class Empleado extends Persona{
    salario:number;

    constructor Empleado(nombre: string, apellidos: string, salario:number, edad?: number){
        super(nombre, apellidos, dni, edad)
        this.salario = salario;
    }

    toTexto(){
        super.toTexto()
        console.log(`${this.salario}`)
    }
}

let empleado1:Empleado = new Empleado ("Juan"...)

}