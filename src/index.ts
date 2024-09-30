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

//operador ternario
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
        console.log("Otro estado o no tiene estado")
}

//try-catch

try {
    let numero1:number = 1;
    console.log(numero1.toString())
} catch (error) {
    console.log("Se ha producido un error al convertir un numero en string",error)
}

//Bucles

let ListaTareas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: EstadoTarea.EnProceso,
        prioridad: 15
    },
    {
        nombre: "Tarea 2",
        estado: EstadoTarea.Terminado,
        prioridad: 12
    },
    {
        nombre: "Tarea 3",
        estado: EstadoTarea.Terminal,
        prioridad: 11
    }
]

//foreach

ListaTareas.forEach((tarea0: Tarea, index: number) => {
    console.log(`${index} - ${tarea0.nombre}`);
});

//for

for (let index = 0; index < ListaTareas.length; index++) {
    const tarea = ListaTareas[index];
    console.log(`${index} - ${tarea0.nombre}`);
}

//forin suele ser para objetos

/**for (const key in tarea0) {
    if (Object.prototype.hasOwnProperty.call(tarea0, key)) {
        const element = tarea0[key];
        
    }
}*/

//While

while (tarea0.estado !== EstadoTarea.EnProceso) {
    
    if(tarea0.prioridad == 5){
        tarea0.estado = EstadoTarea.Terminado
        break;
    } else{
        tarea0.prioridad ++;
    }
}

//do while (se ejecuta al menos una vez)

do {
    tarea0.prioridad ++;
    tarea0.estado = EstadoTarea.Terminado
} while (tarea0.estado !== EstadoTarea.Terminado);


//asignacion multiple de variables

let miTarea = {
    titulo: "Mi Tarea",
    estado: EstadoTarea.Terminado,
    prioridad: 12
}
    //Declaracion en una sola linea
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miPrioridad = miTarea.prioridad;

    //Declaracion con factor de propagacion
    //En asignacion de variables

let {titulo: string, estado, prioridad} = miTarea;

    //En listas

let listaCompraLunes: string[] = ["Leche", "Patatas"];
let listaCompraMartes: String[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];

    //En objetos

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "bearer22233"
}

        //cambiar un valor por propagacion
let nuevoEstado = {
    ...estadoApp,
    session: 4
}