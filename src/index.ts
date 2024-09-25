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