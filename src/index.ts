console.log("Hola Mundo"); //mostrar por consola

/**var nombre:string = "hola";//definir variables
var numero:number = 1;//enteros y decimales
var bool:boolean = true;
var nulo:null //dato nulo
var undef:undefined //valor aún no especificado*/

var nombre:string = "Pedro"; //variable global
let apellido:string = "Gonzalez"; // variable local
const PI:number = 3.1415; //constantes en mayusculas; no la puedo cambiar durante el codigo

//concatenar texto
console.log("Hola Mundo" + " Pedro");
console.log(nombre + " " + apellido);
console.log(nombre, apellido);
console.log(`Hola ${nombre}`); // inyectar contenido de una variable en un string; para angular

//declarar varias variables en una linea
let a:string, b:string, c:number
a="texto";
b="texto2";
c=3;

let d:string = "hola", e:string = "pepe", f:number = 5 // inicializarla en la misma linea

//arrays

let alumnosA:string[] = ["juan","pablo","david"]; //array de string
let datos: (String | number | boolean)[] = ["hola", 2, true]; //array con varios tipos de datos

//factor de propagacion (incluir un array en otro)

let alumnos1:string[] = ["juan","pablo","david"];
let alumnos2:string[] = ["juan","pablo","david"];

let alumnos:string[] = [...alumnos1, ...alumnos2, "Pablito"];
console.log(alumnos);

//Objetos

let misDatos = {
    nombre: "Pedro",
    apellidos: "Gonzalez",
    edad: 29
}

let configuracion = {
    version: "Es6",
    versionCodigo: "1.0",
    ...misDatos
}
configuracion.version;

let propiedad1 = configuracion.version
let propiedad2 = configuracion.versionCodigo
console.log(`${propiedad1} ${propiedad2}`)

//Enumerados

enum EstadoTarea {"Terminal" = "Tl", "EnProceso" = "P", "Terminado" = "Td"}

let estadoPendiente = EstadoTarea.EnProceso

if(EstadoTarea.EnProceso == "P"){

}

//Interfaces

interface Tarea {
    nombre: string,
    prioridad: number,
    estado: EstadoTarea
}

let tarea1: Tarea = {nombre:"Tarea1", prioridad:2, estado:EstadoTarea.EnProceso}

let tarea0 = {nombre:"Tarea2", prioridad:2, estado:EstadoTarea.Terminado} //Mal hecho porque no declara 
                                                                    //que es tipo tarea y se come errores

//tipos

type Empleado ={
    nombre:string,
    edad:number,
    sueldo:number
}

let empleado1:Empleado = {nombre:"Pedro", edad:29,sueldo:1234}
console.log(empleado1.edad)

//combinar objetos

type Administrador ={
    fotocopia:number,
}

let empleado2: Empleado & Administrador;

empleado2 ={edad:18, fotocopia:14, nombre:"Juan",sueldo:14223}

let empleado3:Empleado = {nombre:"Alberto", edad:13, sueldo:23543}
console.log(empleado3.sueldo)

//oerador ternario
//condicion ? verdadero : falso

console.log(tarea1.estado == "P" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion`:`la tarea ${tarea1.nombre} aun no se ha ejecutado`)


//if-else

if(tarea1.estado == "P"){
//codigo c1
} else if (tarea1.estado == "Td"){
//codigo c2
}else{
//resto de casos
}

//Switch

switch(tarea1.estado){
    case "P":
        console.log("Tarea en proceso");
        break;
    default:
        console.log("Otro estasdo o no tiene estado")
}

try {
    let numero1:number = 1;
    console.log(numero1.toString())
} catch (error) {
    console.log("Se ha producido un error al convertir un numero en string",error)
}