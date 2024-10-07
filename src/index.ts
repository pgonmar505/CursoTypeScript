import { promises } from "dns";

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

//Funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar():void{
    
    let nombre = "Pedro";

    console.log(`Hola ${nombre}`);

}

//Llamada a la funcion

saludar();

/**
 * Funcion que muestra un saludo por consola
 * @param nombre de la persona a saludar
 */
function saludo(nombre: string) {
    console.log(`Hola ${nombre}`);
}

const PERSONA = "Pacooo"
saludo("Paco");
saludo(PERSONA);

//Con parametro por defecto

function despedir(nombre: string ="Pepe") {
    console.log(`Adios ${nombre}`);
}

despedir(); //Adios Pepe
despedir("Alba"); //Adios Alba

//Con parametro opcional

function despedidaOpcional (nombre?: string | undefined){
    if (nombre) {
        console.log(`Adios ${nombre}`)
    } else{
        console.log("Adios")
    }
}

despedidaOpcional(); // Adios
despedidaOpcional("Juanjo"); //Adios Juanjo

//Funcion con multiples parametros

function variosparams(nombre: string, apellidos?: string, edad: number = 10) {
    console.log(`${nombre} ${apellidos} tiene ${edad} años`);
}

variosparams("Martin") //Martin tiene 10 años
variosparams("Martin","San Jose") //Martin san jose tiene 10 años
variosparams("Martin", undefined, 40)//Martin tiene 40 años

function ejemploVariosTipos(a: string | number) {

   if( typeof(a) == 'string'){

        console.log("A es un string")
   } else if(typeof(a)=='number'){
        console.log("A es un numero")
   }else{
     console.log("A no es un string ni un number");
     throw Error("Ano es un string ni un number")
   }
    
}

ejemploVariosTipos("hola");
ejemploVariosTipos(3);

// Función con return
function ejemploreturn (nombre: string,apellido: string){
    return `${nombre} ${apellido}`;
}

const nombreCompleto = ejemploreturn("Pedro", "Gonzalez")
console.log(nombreCompleto);
console.log(ejemploreturn("Peter", "Martin"))


// Funciones anónimas: no se especifica un nombre.

let fanonima = function () {console.log("Hola mundo")}

fanonima();

/**
 * 
 * @param nombres es una lista de nombre de string
 */
function ejemploMultiParam (...nombres: string[]){
    nombres.forEach((nombre)  => {
        console.log(nombre);
    })
}

ejemploMultiParam("Paco","Juan");

const lista = ["Alberto", "Jose", "Pepe"]
ejemploMultiParam(...lista);

function ejemploMultiLista (nombres: string[]){
    nombres.forEach((nombre)  => {
        console.log(nombre);
    })
}

ejemploMultiLista(lista);

//funciones arrow

//(valor1, valor2, valor3) => { }
// funtion operar (valor:number, valor2:number, valor3:number){}

let farrow = (tarea0:Tarea, indice:number) =>{ console.log(`${indice} - ${tarea0.nombre} `)}
listaCompraLunes.forEach(fanonima);



/**
 * La diferencia entre usar una función que reciba como parámetro un array es que esta función recibe como parámetro una referencia al objeto.
 * En cambio, con una función rest param lo que recibe como parámetro es cada uno de los elementos de la lista de forma individual.
*/

/**
 * Las funciones arrow son una sintaxis compacta de definir funciones en JavaScript y TypeScript.
 * Proporcionan una forma más breve y clara de escribir funciones en comparación con la sintaxis tradicional, 
 * lo que mejora la legibilidad y mantiene la seguridad de los tipos.
 * 
 * (param1, param2, ..., paramN) => {}
 */

let getDatosTarea = (tarea:Tarea):string => {return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} `}
console.log(getDatosTarea(tarea1));

/**
 * Funciones CALLBACK
 */

let fsuma = function suma(a:number, b:number) {
    return a+b;
}

let fresta = function resta(a:number, b:number) {
    return a-b;
}

function  opera (x:number, y:number, funcion:(a:number, b:number)=>number) {
    return funcion(x,y)
}

opera(1,2,fsuma); //suma 1 y 2 = 3
opera(1,2,fresta); //resta 1 y 2 = -1


// FUNCIONES ASINCRONAS

async function asincrona(){
    let suma: number = 0
    for (let i = 0; i<1000; i++){
        suma +=i;
    } 
    return suma;
}

asincrona().then((data:number) => {console.log(`El resultado de ejecutar async = ${data}`)});
console.log(`Linea de codigo posterior a la llamada`);

