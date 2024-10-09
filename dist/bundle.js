/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


// Sintasis básica de TypeScript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
/**
 * En este archivo iremos añadiendo líneas de código
 * con la sintaxis básica de TypeScript para que nos
 * sirva de guia y nos ayude en el futuro.
 */
// 1. Imprimir por consola
// En TypeScript no es necesario acabar las líneas con ;
console.log("Hola Mundo");
/**
 * 2. Tipos de Variables
 *
 * var - variable global
 * let - variable local
 * const - constante
*/
var nombre = "Jose"; // Variable global
let email = "jose@gmail.com";
const PI = "3.141592";
//Formas de concatenar variables y texto
console.log("Hola " + nombre);
console.log(`¿Cuál es tu apellido ${nombre}`);
console.log("Que tengas un buen día", nombre);
console.log(`El email de ${nombre} es ${email}`);
/**
 * 3. Tipos de datos
 * En TypeScrip es muy recomendable indicar el tipo de dato
 * que almacenará cada una de las variables y constantes.
 *
 *  - string
 *  - number: incluye tanto enteros como decimales
 *  - boolean
 *  - null
 *  - undefined: variable cuyo valor no haya sido especificado.
 *  - any: el valor de la variable puede ser de cualquier tipo
 */
var apellido1 = "Jose";
var edad = 18;
var esMayorDeEdad = true;
var curso; // Al no indicar ningún tipo TypeScript le asigna any
// Instanciación de múltiples variables;
let a, b, c;
a = "A";
b = true;
c = 2.5;
// Array de datos
let listaTareas = ["Tarea 1", " Tarea 2", " Tarea 3"];
let valores = [3, 2.4, true, "ABC"];
// Concatenación de arrays mediante factor de propagación
let nuevaListaTareas = [...listaTareas, "Tarea 4"];
console.log(nuevaListaTareas);
/***
 * Creación de un objeto compuesto por datos primitivos
 */
let misDatos = {
    nombre: "Jose Antonio",
    apellido: "Rodriguez",
    edad: 18
};
Object.keys('');
//Propagación de la variable misDatos
let misDatoProfesionales = Object.assign(Object.assign({}, misDatos), { profesion: "Docente" });
// Declaración y Asignación 1 a 1
let miNombre = misDatos.nombre;
let miApellido = misDatos.apellido;
let miEdad = misDatos.edad;
/**
 * Enumerados : permite definir un conjunto de constantes bajo un identificador.
 * Si imprimimos el valor de un valor del enumerado observaremos que
 * lo que almacena es el un valor numérico.
 *
 *  */
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea[EstadoTarea["Pendiente"] = 0] = "Pendiente";
    EstadoTarea[EstadoTarea["EnProceso"] = 1] = "EnProceso";
    EstadoTarea[EstadoTarea["Completada"] = 2] = "Completada";
})(EstadoTarea || (EstadoTarea = {}));
;
let estado = EstadoTarea.Pendiente;
console.log(`El valor del enumerado Pendiente es: ${estado}`);
/**
 * El enumerado está actuando como una tupla Key:Value.
 * Por defecto la primera key es == a 0. Podemos también cambiar esto.
 * Podemos establecer una clave para cada valor del enumerado:
 *  */
// enum EstadoTarea { "Pendiente" ="P", "EnProceso" ="E", "Completada"="C"};
var PosicionCarrera;
(function (PosicionCarrera) {
    PosicionCarrera[PosicionCarrera["Primero"] = 1] = "Primero";
    PosicionCarrera[PosicionCarrera["Segundo"] = 2] = "Segundo";
    PosicionCarrera[PosicionCarrera["Tercero"] = 3] = "Tercero";
})(PosicionCarrera || (PosicionCarrera = {}));
;
console.log(`Has quedado en la posición ${PosicionCarrera.Primero}`);
let tarea1 = {
    nombre: "Tarea1",
    estado: EstadoTarea.Pendiente,
    prioridad: 1
};
console.log(tarea1);
console.log(tarea1.nombre);
let empleado1 = { nombre: "Juan", salario: 1500 };
/* Intersección de datos: permite combinar dos o más tipos de datos en uno solo.
*/
let empleado2;
empleado2 = { isAdmin: true, nombre: "Jose", salario: 2000 };
/**
 * Estructuras de control: operador ternario, if, switch
 * Operador Ternario
 * condición ? expr1 : expr2
 * Si la condición es true, el operador retorna el valor de la expr1;
 *  de lo contrario, devuelve el valor de expr2.
 */
console.log(empleado1.salario > 1500 ? `El empleado ${empleado1.nombre} es Senior` : `El empleado ${empleado1.nombre} es Junior`);
/***
 * Operadores de comparación:
 *
 * == -> compara el valor de la variable
 * === compara el valor de la variable + el tipo de datos
 */
let tarea3 = { estado: EstadoTarea.EnProceso, nombre: "Tarea3", prioridad: 3 };
// Estructura if-else: if (){} else if (){} else{}
if (tarea3.estado == EstadoTarea.EnProceso && tarea3.prioridad === 1) {
    console.log(`La tarea ${tarea3.nombre} es de máxima prioridad`);
}
else if (tarea3.estado == EstadoTarea.Pendiente) {
    console.log(`La tarea ${tarea3.nombre} aún no ha comenzado`);
}
else {
    console.log(`El estado de la tarea ${tarea3.nombre} es  ${tarea3.estado}`);
}
// Estructura Switch: switch (valor){case: break; default: break;}
switch (tarea3.estado) {
    case EstadoTarea.Completada:
        console.log("Tarea completada");
        break;
    case EstadoTarea.EnProceso:
        console.log("Tarea en proceso");
        break;
    default:
        console.log("Tarea pendiente");
        break;
}
// Estructura Try - Catch : para capturar errores
try {
    let numero = 3.14;
    console.log(numero.toString());
}
catch (error) {
    console.log("Se ha producido el siguiente error", error);
}
/**
 * Estructura de repetición - Bucles :
 */
let tarea2 = { estado: EstadoTarea.Completada, nombre: "Tarea 2", prioridad: 0 };
let listadoTareas = [tarea1, tarea2, tarea3];
//FOREACH
listadoTareas.forEach((elemento, indice, arreglo) => {
    console.log(indice, elemento.nombre, arreglo[indice].estado);
});
/**
 * FOR
 * Cuando trabajamos con tipos de datos no funciona
 * for (const tarea: Tarea in listadoTareas){}
 */
// FOR CLÁSICO
for (let index = 0; index < listaTareas.length; index++) {
    const tarea = listaTareas[index];
    console.log(tarea);
}
// WHILE
while (tarea1.estado != EstadoTarea.Completada) {
    console.log("Tarea no completada");
    tarea1.estado = EstadoTarea.Completada;
}
do {
    console.log(`El estado de la tarea ${tarea1.nombre} es ${tarea1.estado}`);
} while (tarea1.estado != EstadoTarea.Completada);
/**
 * Funciones: nos permitirá crear bloque de códigos reutilizables.
 *
 * funtion name (nameParam: type): Type return{}
 *
 */
// Funciónes clásicas y documentación del código
/**
 * Muestra un saludo por consola a una persona
 * @param nombre string nombre del usuario
 *
 */
function saludar(nombre) {
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludar("José Antonio");
//Funciones con parámeros por defecto
function saludarDefault(nombre = "Jose") {
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludarDefault();
saludarDefault("Juan");
//Funciones con parámeros opcionales
function saludarOpcional(nombre) {
    let nombreParam = nombre;
    if (nombreParam == undefined) {
        nombreParam = "Nombre Defecto";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);
}
saludarOpcional();
// Funciones con parámetros de varios tipos
function variosTipos(a) {
    if (typeof (a) == "string") {
        console.log("a es un string");
    }
    else {
        console.log("a es un number");
    }
}
variosTipos(1);
// Función con retorno: return
function suma(a, b) {
    return a + b;
}
// Podemos almacenar directamente el valor devuelto de la función en una variable
var resultadoSuma = suma(1, 2);
console.log(resultadoSuma);
console.log(suma(1, 2));
// Funciones anónimas: no se especifica un nombre.
/**
 * Suma dos valores
 * @param valor1 primer valor
 * @param valor2 segundo valor
 * @returns devuelve la suma de valor1 y valor2
 */
const funcRestar = function (valor1, valor2) {
    return valor1 - valor2;
};
/**
 * Funciones, rest parameters (parámetros rest)
 * Permite definir funciones que tomen un número indeterminado de argumentos
 */
function multiParam(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
// Llamada a función multiparámetros
multiParam("Alex", "Martin");
// A las funciones rest también se le puede pasar una lista de elementos
let listaNombres = ["Leandro", "Francisco"];
multiParam(...listaNombres);
/**
 * La diferencia entre usar una función que reciba como parámetro un array es que esta función recibe como parámetro una referencia al objeto.
 * En cambio, con una función rest param lo que recibe como parámetro es cada uno de los elementos de la lista de forma individual.
*/
/**
 * Las funciones arrow son una sintaxis compacta de definir funciones en JavaScript y TypeScript.
 * Proporcionan una forma más breve y clara de escribir funciones en comparación con la sintaxis tradicional,
 * lo que mejora la legibilidad y mantiene la seguridad de los tipos.
 *
 * (param1, param2, ..., paramN): Type return => {}
 */
let getDatosTarea = (tarea) => { return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} `; };
console.log(getDatosTarea(tarea1));
/**
 * Funciones CallBack
 * Una función callback es una función que se pasa a otra función como parámetro y dentro de la misma es llamada.
 * Hay que tener en cuenta que una función se trata como un objeto.
 */
//Ejemplo 1: 
const funcionMuestra = function () {
    console.log("CallBack desde función estándar");
};
setTimeout(funcionMuestra, 100); // La función timeout llama a funciónMuestra después de 100ms
// Ejemplo 2: paso de una función anónima
setTimeout(function () { console.log("CallBack desde función anónima"); }, 1000);
// Ejemplo 3: paso de una función flecha
setTimeout(() => { console.log("CallBack desde función flecha"); }, 500);
// Ejemplo 4:
let muestraDatos = function (a, b, c) {
    console.log(`Ejemplo 4 - ${a}`);
};
listaTareas.forEach(muestraDatos);
listaTareas.forEach((valor, indice, datos) => {
    console.log(`${valor}, mostrado desde función CallBack fecha`);
});
// Ejemplo 5: 
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado
function opera(x, y, callbackfuntion) {
    return callbackfuntion(x, y);
}
opera(2, 3, fsuma);
opera(2, 3, fresta);
/**
 * Funciones asíncronas:
 *
 * Toda función asíncrona debe devolver una promesa. ¿Qué es una promesa?
 * Una promesa es una espectativa que sucederá en algún momento particular del futuro.
 */
/**
 * En el siguiente ejemplo vamos a usar una función asíncrona para acceder a una API desde la que vamos a obtener un JSON.
 * A continuación se indican algunas API públicas que se pueden consultar.
 *
 * https://www.postman.com/cs-demo/public-rest-apis/folder/c89mnom/television
 * http://universities.hipolabs.com/search?country=spain
 * https://dog.ceo/api/breeds/image/random
 */
/**
 * Funcion asíncrona que consulta una API que contiene un directorio de universidades de todo el mundo.
 * @param pais pais sobre el que se quiere filtrar los resultados
 * @returns devuelve un JSON.
 */
function getUniversitiesAsync(pais) {
    return __awaiter(this, void 0, void 0, function* () {
        let index = 0;
        const apiURL = "http://universities.hipolabs.com/search?country=";
        //Construimos la URL de la API a consultar concatenando el pais que se quiere filtrar
        let url = `${apiURL}${pais}`;
        // Con la función fetch accedemos hacemos una petición GET y obtenemos los resultados. 
        // Usamos await para indicar que hasta que no termine esta instrucción no se ejecuta la siguiente
        let respuesta = yield fetch(url);
        // Convertimos la respuesta de la petición GET en un archivo JSON
        let datos = yield respuesta.json();
        return datos;
    });
}
// Llamamos a la función asincrona y mostramos el JSON de las universidades existentes en Spain
getUniversitiesAsync("Spain").then((data) => { console.log(data[1]); });
// Como curiosidad, podéis observar que esta línea se ejecuta antes aún estando después de la llamada a la API. 
// Esto ocurre porque la función getDataFromAPI es una función asíncrona y muestra los resultados en el momento que termina su ejecución.
console.log("Linea posterior a funcion async");
/**
 * FUNCIONES GENERADORAS:
 * Una función generadora es una función que se puede pausar y reanudar, y por lo tanto, nos puede devolver múltiples valores.
 * Para poder declarar una función generadora es necesario añadir el * después de la palabra reservada function.
 * Observa que en lugar de llamar a return para devolver un valor, utilizamos yield.
 * Fuente:https://lenguajejs.com/javascript/funciones/generadores/
 */
// Ejemplo 1: Función que itera elementos de un array y los devuelve
function* fGenTareas() {
    let tareas = [...listadoTareas];
    for (let i in tareas) {
        yield tareas[i];
    }
    // No es posible usar la función foreach porque al ser una función callback no se puede usar con yield.
}
// Preparamos nuestra función generadora
const genTareas = fGenTareas();
console.log(genTareas.next()); // Accedemos al primer valor del array
function generatorGetBreaches() {
    return __asyncGenerator(this, arguments, function* generatorGetBreaches_1() {
        let respuesta = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        // Convertimos la respuesta de la petición GET en un archivo JSON
        let datos = yield __await(respuesta.json());
        for (let i in datos) {
            yield yield __await(datos[i]);
        }
    });
}
const valoresUniversidades = generatorGetBreaches();
valoresUniversidades.next().then(({ value, done }) => { console.log(`${value.Name} - ${value.Description}  \n`); console.log(`Is the last element? ${done} \n`); });
valoresUniversidades.next().then(({ value, done }) => { console.log(`${value.Name} - ${value.Description} \n`); console.log(`Is the last element? ${done} \n`); });
// Implementación de la función
function funcionSobrecarga(param) {
    // hacer cosas
    return "";
}
funcionSobrecarga(12); // esto no da error
funcionSobrecarga("12"); // esto no da error
// Implementación de la función
function funcionSobrecargaDiffParam(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Tipos de parámetros no coinciden");
}
console.log(funcionSobrecargaDiffParam("Hola, ", "mundo")); // "Hola, mundo"
console.log(funcionSobrecargaDiffParam(5, 10)); // 15
//console.log(funcionSobrecargaDiffParam("Hola", 10)); //ERROR
funcionSobrecarga(13);
// Implementación de la función
function mostrarMensaje(mensaje, veces) {
    if (veces === undefined) {
        console.log(mensaje);
    }
    else {
        for (let i = 0; i < veces; i++) {
            console.log(mensaje);
        }
    }
}
mostrarMensaje("Hola"); // "Hola"
mostrarMensaje("Hola", 3); // "Hola" "Hola" "Hola"


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map