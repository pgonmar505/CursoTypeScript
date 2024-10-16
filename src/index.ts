import Cookies from 'js-cookie'

// Sintasis básica de TypeScript


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
console.log(`¿Cuál es tu apellido ${nombre}`)
console.log ("Que tengas un buen día", nombre)
console.log (`El email de ${nombre} es ${email}`)

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

var apellido1: string = "Jose";
var edad: number = 18;
var esMayorDeEdad: boolean = true;
var curso; // Al no indicar ningún tipo TypeScript le asigna any


// Instanciación de múltiples variables;

let a:string,b:boolean,c:number;
a="A";
b=true;
c=2.5;




// Array de datos

let listaTareas : string [] = ["Tarea 1"," Tarea 2"," Tarea 3"];

let valores: (string | number | boolean)[] = [3, 2.4, true, "ABC"];

// Concatenación de arrays mediante factor de propagación

let nuevaListaTareas : string[] = [...listaTareas, "Tarea 4"];
console.log(nuevaListaTareas);


/***
 * Creación de un objeto compuesto por datos primitivos
 */


let misDatos = {
    nombre:"Jose Antonio",
    apellido:"Rodriguez",
    edad: 18 
}

Object.keys('')
//Propagación de la variable misDatos
let misDatoProfesionales = {
    ...misDatos,
    profesion: "Docente"
}
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

enum EstadoTarea { "Pendiente", "EnProceso", "Completada"};
let estado: EstadoTarea = EstadoTarea.Pendiente;
console.log(`El valor del enumerado Pendiente es: ${estado}`);

/**
 * El enumerado está actuando como una tupla Key:Value.
 * Por defecto la primera key es == a 0. Podemos también cambiar esto.
 * Podemos establecer una clave para cada valor del enumerado:
 *  */

// enum EstadoTarea { "Pendiente" ="P", "EnProceso" ="E", "Completada"="C"};
enum PosicionCarrera { "Primero" = 1, Segundo, Tercero};
console.log (`Has quedado en la posición ${PosicionCarrera.Primero}`);


/**
 * Interfaces: describen la estructura de un objeto.
 * Las interfaces contienen la definición de los métodos y propiedades
 * de un objeto, pero no su implementación.
 * Una interfaz puede extender de otra.
 */

interface Tarea {
    nombre:string,
    estado:EstadoTarea,
    prioridad:number
}

let tarea1: Tarea = { 
    nombre: "Tarea1", 
    estado: EstadoTarea.Pendiente, 
    prioridad: 1 
};

console.log (tarea1);
console.log (tarea1.nombre);


/**
 * Types: permite crear un tipo de dato personalizado a partir de tipos de datos primitivos
 * Permiten crear una estructura de datos más compleja.
 * En TypeScript podemos combiar dos tipos, como veremos a continuación.
 */

type Administrador = {
    nombre: string;
    isAdmin: boolean;
}

type Empleado = {
    nombre: string;
    salario: number;
}

let empleado1: Empleado = {nombre:"Juan",salario:1500};

/* Intersección de datos: permite combinar dos o más tipos de datos en uno solo. 
*/
let empleado2 : Empleado & Administrador;
empleado2 = {isAdmin:true,nombre:"Jose",salario:2000};


/**
 * Estructuras de control: operador ternario, if, switch
 * Operador Ternario
 * condición ? expr1 : expr2
 * Si la condición es true, el operador retorna el valor de la expr1;
 *  de lo contrario, devuelve el valor de expr2.
 */  

console.log (empleado1.salario > 1500 ? `El empleado ${empleado1.nombre} es Senior`: `El empleado ${empleado1.nombre} es Junior` )



/***
 * Operadores de comparación:
 * 
 * == -> compara el valor de la variable
 * === compara el valor de la variable + el tipo de datos
 */
let tarea3 : Tarea = {estado: EstadoTarea.EnProceso, nombre:"Tarea3", prioridad:3};


// Estructura if-else: if (){} else if (){} else{}

if (tarea3.estado == EstadoTarea.EnProceso && tarea3.prioridad === 1){
    console.log(`La tarea ${tarea3.nombre} es de máxima prioridad`);
}else if (tarea3.estado == EstadoTarea.Pendiente ){
    console.log(`La tarea ${tarea3.nombre} aún no ha comenzado`);
}else{
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
    let numero:number = 3.14;
    console.log(numero.toString());
} catch (error) {
    console.log("Se ha producido el siguiente error", error);
}


/**
 * Estructura de repetición - Bucles : 
 */

let tarea2 : Tarea = {estado: EstadoTarea.Completada, nombre: "Tarea 2", prioridad: 0}
let listadoTareas: Tarea[] = [tarea1,tarea2,tarea3]

//FOREACH
listadoTareas.forEach( 
    (elemento,indice,arreglo) => {
    console.log(indice,elemento.nombre,arreglo[indice].estado)
});

/** 
 * FOR
 * Cuando trabajamos con tipos de datos no funciona
 * for (const tarea: Tarea in listadoTareas){}
 */

// FOR CLÁSICO

for (let index = 0; index < listaTareas.length ; index++){
    const tarea = listaTareas[index];
    console.log(tarea);
}

// WHILE

while (tarea1.estado != EstadoTarea.Completada){
    console.log("Tarea no completada");
    tarea1.estado = EstadoTarea.Completada;
}

do {
    console.log (`El estado de la tarea ${tarea1.nombre} es ${tarea1.estado}`)
}while(tarea1.estado != EstadoTarea.Completada);




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
function saludar (nombre:string):void{
    console.log(`Hola ${nombre}, qué tal estas?`);
}

saludar("José Antonio");

//Funciones con parámeros por defecto

function saludarDefault (nombre:string = "Jose"){
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludarDefault();
saludarDefault("Juan");


//Funciones con parámeros opcionales

function saludarOpcional (nombre?:string){
    let nombreParam = nombre;
    if(nombreParam == undefined){
        nombreParam = "Nombre Defecto";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);

}

saludarOpcional();

// Funciones con parámetros de varios tipos
function variosTipos (a: string | number){
    if (typeof(a) == "string"){
        console.log("a es un string");
    } else{
        console.log("a es un number");
    }
}
variosTipos(1);

// Función con retorno: return
function suma (a:number,b:number): number{
    return a+b;
}

// Podemos almacenar directamente el valor devuelto de la función en una variable
var resultadoSuma:number = suma(1,2);

console.log(resultadoSuma);
console.log(suma(1,2));


// Funciones anónimas: no se especifica un nombre.
/**
 * Suma dos valores
 * @param valor1 primer valor
 * @param valor2 segundo valor
 * @returns devuelve la suma de valor1 y valor2
 */
const funcRestar = function (valor1:number, valor2:number): number {
    return valor1 - valor2;
}

/**
 * Funciones, rest parameters (parámetros rest)
 * Permite definir funciones que tomen un número indeterminado de argumentos
 */
function multiParam (...nombres: string[]):void{
    nombres.forEach((nombre)  => {
        console.log(nombre);
    })
}
// Llamada a función multiparámetros
multiParam("Alex","Martin");

// A las funciones rest también se le puede pasar una lista de elementos
let listaNombres:string[] = ["Leandro","Francisco"];
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

let getDatosTarea = (tarea:Tarea):string => {return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} `}
console.log(getDatosTarea(tarea1));


/**
 * Funciones CallBack
 * Una función callback es una función que se pasa a otra función como parámetro y dentro de la misma es llamada.
 * Hay que tener en cuenta que una función se trata como un objeto.
 */

//Ejemplo 1: 

const funcionMuestra = function (){
    console.log("CallBack desde función estándar");
}

setTimeout(funcionMuestra,100); // La función timeout llama a funciónMuestra después de 100ms

// Ejemplo 2: paso de una función anónima
setTimeout(function(){console.log("CallBack desde función anónima")},1000);

// Ejemplo 3: paso de una función flecha

setTimeout(()=>{console.log("CallBack desde función flecha")},500);


// Ejemplo 4:

let muestraDatos = function (a:string, b:number, c:string[]){
    console.log(`Ejemplo 4 - ${a}`);
}

listaTareas.forEach(muestraDatos)

listaTareas.forEach((valor:string,indice:number,datos:string[]) => {
    console.log(`${valor}, mostrado desde función CallBack fecha`)
})

// Ejemplo 5: 

let fsuma = function suma(a:number, b:number){
    return a+b;
}

let fresta = function resta(a:number,b:number){
    return a-b;
}
// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado

function opera (x:number,y:number,callbackfuntion:(a:number,b:number)=> number){
    return callbackfuntion(x,y);
}

opera(2,3,fsuma);
opera(2,3,fresta)



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
async function getUniversitiesAsync(pais:string) : Promise <JSON[]> {
    let index:number = 0;
    const apiURL:string = "http://universities.hipolabs.com/search?country=";

    //Construimos la URL de la API a consultar concatenando el pais que se quiere filtrar
    let url:string = `${apiURL}${pais}`;
    
    // Con la función fetch accedemos hacemos una petición GET y obtenemos los resultados. 
    // Usamos await para indicar que hasta que no termine esta instrucción no se ejecuta la siguiente
    let respuesta:Response = await fetch(url);
    // Convertimos la respuesta de la petición GET en un archivo JSON
    let datos:Promise<JSON[]> = await respuesta.json() as Promise<JSON[]>;
    return datos
}
 

// Llamamos a la función asincrona y mostramos el JSON de las universidades existentes en Spain
getUniversitiesAsync("Spain").then((data)=>{console.log(data[1])});

// Como curiosidad, podéis observar que esta línea se ejecuta antes aún estando después de la llamada a la API. 
// Esto ocurre porque la función getDataFromAPI es una función asíncrona y muestra los resultados en el momento que termina su ejecución.
console.log("Linea posterior a funcion async")

/**
 * FUNCIONES GENERADORAS:
 * Una función generadora es una función que se puede pausar y reanudar, y por lo tanto, nos puede devolver múltiples valores.
 * Para poder declarar una función generadora es necesario añadir el * después de la palabra reservada function. 
 * Observa que en lugar de llamar a return para devolver un valor, utilizamos yield.
 * Fuente:https://lenguajejs.com/javascript/funciones/generadores/
 */

// Ejemplo 1: Función que itera elementos de un array y los devuelve

function* fGenTareas (): Generator<Tarea>{

    let tareas: Tarea[] = [... listadoTareas]

    for(let i in tareas){
        yield tareas[i];
    }
    // No es posible usar la función foreach porque al ser una función callback no se puede usar con yield.
}

// Preparamos nuestra función generadora
const genTareas = fGenTareas();
console.log(genTareas.next()); // Accedemos al primer valor del array

// Podemos obtener todos los valores de nuestra función generadora usando el operador spread

// const getAllTareas = [...fGenTareas()];
// console.log(getAllTareas);



// EJEMPLO 2: función generadora y asíncrona que accede a una API y devuelve cada uno de los elementos del array JSON.
/**
 * Funcion generadora y asíncrona que devuelve páginas web que han sufrido alguna brecha de seguridad
 */

type Website = {
    Name:string,
    Title:string,
    Domain: string,
    Description:string
}
async function* generatorGetBreaches():AsyncGenerator<Website> {

    let respuesta:Response = await fetch("https://haveibeenpwned.com/api/v2/breaches");
    // Convertimos la respuesta de la petición GET en un archivo JSON
    let datos: Website[]= await respuesta.json() as Website[]
    
    for(let i in datos){
        yield datos[i]
    }
    
    
}

const valoresUniversidades = generatorGetBreaches();
valoresUniversidades.next().then(({value,done}) => {console.log(`${value.Name} - ${value.Description}  \n`); console.log(`Is the last element? ${done} \n`);});
valoresUniversidades.next().then(({value,done}) => {console.log(`${value.Name} - ${value.Description} \n`); console.log(`Is the last element? ${done} \n`);});

/**
 * Sobrecarga de funciones:
 * La sobrecarga de funciones permite declarar varias versiones de una función con diferentes parámetros y tipos de retorno. 
 * Cada versión de la función (o firma) se llama sobrecarga.
 * 
 * Para crear sobrecargas de funciones en TypeScript debemos hacer lo siguiente
 * 1. Definir las firmas de las funciones sobrecargadas.
 * 2. Proveer una única implementación de la función que maneje todas las combinaciones de parámetros.
 * Fuente:  https://www.luisllamas.es/typescript-sobrecarga-de-funciones/
*/

// Definición de sobrecargas
// En este ejemplo, la función miFuncion tiene dos firmas: una que acepta un string y otra que acepta un number. 
// La implementación de la función maneja ambas firmas.


function funcionSobrecarga(param: string): string;
function funcionSobrecarga(param: number): number;

// Implementación de la función
function funcionSobrecarga(param: string | number): string | number {
    // hacer cosas

    return "";
}
funcionSobrecarga(12);   // esto no da error
funcionSobrecarga("12")  // esto no da error

// Sobrecarga con diferentes tipos de parámetros.

function funcionSobrecargaDiffParam(a: string, b: string): string;
function funcionSobrecargaDiffParam(a: number, b: number): number;

// Implementación de la función
function funcionSobrecargaDiffParam(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Tipos de parámetros no coinciden");
}

console.log(funcionSobrecargaDiffParam("Hola, ", "mundo")); // "Hola, mundo"
console.log(funcionSobrecargaDiffParam(5, 10)); // 15
//console.log(funcionSobrecargaDiffParam("Hola", 10)); //ERROR

funcionSobrecarga(13)

//Sobrecarga con diferentes cantidades de parámetros
// Definición de sobrecargas
function mostrarMensaje(mensaje: string): void;
function mostrarMensaje(mensaje: string, veces: number): void;

// Implementación de la función
function mostrarMensaje(mensaje: string, veces?: number): void {
    if (veces === undefined) {
        console.log(mensaje);
    } else {
        for (let i = 0; i < veces; i++) {
            console.log(mensaje);
        }
    }
}

mostrarMensaje("Hola"); // "Hola"
mostrarMensaje("Hola", 3); // "Hola" "Hola" "Hola"



//Ejercicio2

function fEjer2(type:String = "SessionStorage", key:string, data:Tarea[]){

    console.log("Dentro")

    if(type == "session"){

        sessionStorage.setItem(key, JSON.stringify(data));
        console.log("Se ha usado el SessionStorage");

    } else if (type == "local"){

        localStorage.setItem(key, JSON.stringify(data));
        console.log("Se ha usado el LocalStorage");

    }
}



//Ejercicio3

let t1:Tarea = {
    nombre: "Tarea1",
    prioridad: 1,
    estado: EstadoTarea.EnProceso 
}

let t2:Tarea = {
    nombre: "Tarea2",
    prioridad: 2,
    estado: EstadoTarea.Pendiente
}

let t3:Tarea = {
    nombre: "Tarea3",
    prioridad: 3,
    estado: EstadoTarea.Completada
}

let listaTarea:Tarea[] = [t1, t2, t3];

fEjer2("session", "datos", listaTarea);
fEjer2("local", "datos", listaTarea);



//Ejercicio4

function recuperarDatos(type: string = "session", key: string): string | null{
    if (type == "session") {
        return sessionStorage.getItem(key);
    } else {
        return localStorage.getItem(key);
    }
}



//Ejercicio5

let datosRecuperadosSession = recuperarDatos("session", "datos"); // Recuperar de SessionStorage
console.log("Datos recuperados de SessionStorage: ", datosRecuperadosSession);

let datosRecuperadosLocal = recuperarDatos("local", "datos"); // Recuperar de LocalStorage
console.log("Datos recuperados de LocalStorage: ", datosRecuperadosLocal);



//Ejercicio6

function borrarDatos(type: string = "session", key: string) {
    if (type === "session") {
        sessionStorage.removeItem(key); // Eliminar el elemento específico de SessionStorage
        console.log(`Datos eliminados de SessionStorage con la clave: ${key}`);
    } else if (type === "local") {
        localStorage.removeItem(key); // Eliminar el elemento específico de LocalStorage
        console.log(`Datos eliminados de LocalStorage con la clave: ${key}`);
    }
}

function borrarTodosDatos(type: string = "session") {
    if (type === "session") {
        while (sessionStorage.length > 0) {
            let key = sessionStorage.key(0); // Obtiene la primera clave
            if (key) {
                sessionStorage.removeItem(key); // Elimina el primer elemento
                console.log(`Eliminado: ${key} de SessionStorage`);
            }
        }
        console.log("Todos los datos de SessionStorage han sido eliminados.");
    } else if (type === "local") {
        while (localStorage.length > 0) {
            let key = localStorage.key(0); // Obtiene la primera clave
            if (key) {
                localStorage.removeItem(key); // Elimina el primer elemento
                console.log(`Eliminado: ${key} de LocalStorage`);
            }
        }
        console.log("Todos los datos de LocalStorage han sido eliminados.");
    }
}

borrarTodosDatos("sesion");
borrarTodosDatos("local");



//Ejercicio7

Cookies.set('nombre', 'Pedro', {expires:7,path:"/",sameSite:'Strict',secure:false});

Cookies.set('apellido', 'Gonzalez', {expires:2,path:"/",sameSite:'Strict',secure:false});

Cookies.set('email', 'miCorreo@iescarrillo.es', {expires:4,path:"/",sameSite:'Strict',secure:false});

Cookies.get('nombre');
Cookies.get('apellido');
Cookies.get('email');

Cookies.remove("nombre");
Cookies.remove("apellido");
Cookies.remove("email");

console.log("----------------------------------Inicio del ejercicio ------------------------------------")

//Acesso a los elementos del DOM

let input = document.getElementById("input-contenido") as HTMLInputElement;

let btnNuevoContenido = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement 

let div = document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;

console.log(input)
console.log(btnNuevoContenido)
console.log(div)

let elementoOL = document.querySelector("#lista-contenidos") as HTMLOListElement
let elementosLI = document.getElementById("lista-contenidos")?.getElementsByTagName("li");//acceder a todos los hijos
let elementosLI2 = document.querySelectorAll("ol[id='lista-contenidos'] > li");

console.log(elementosLI)
console.log(elementosLI2)


//Creación de elementos
let nuevoElemento:HTMLLIElement = document.createElement("li"); 

nuevoElemento.innerText = "Nuevo elemento";

elementoOL.appendChild(nuevoElemento);
nuevoElemento.setAttribute("style", "color:red")

//click mouseover
btnNuevoContenido.addEventListener('click', (event)=>{
    // TODO
    console.log("Usuario hace click en el boton")
})


console.log("----------------------------------Fin del ejercicio ------------------------------------")


// Obtiene la referencia del elemento <ul> con el id "lista-de-tareas"
let listaDeTareas = document.getElementById("lista-de-tareas") as HTMLUListElement;

// Obtiene la referencia del botón con el atributo name "btn-agregar-tarea"
let botonAgregarTarea = document.getElementsByName("btn-agregar-tarea")[0] as HTMLButtonElement;

// Obtiene la referencia del campo de entrada (input) con el id "entrada-tarea"
let entradaTarea = document.getElementById("entrada-tarea") as HTMLInputElement;

botonAgregarTarea.addEventListener("click", (event) => {
    // Obtiene el texto ingresado en el campo de entrada
    const tareaTexto = entradaTarea.value;

    // Verifica si el campo de entrada no está vacío
    if (tareaTexto.trim() !== "") {
        // Crea un nuevo elemento <li> en la lista de tareas
        let nuevaTarea = document.createElement("li");

        // Asigna el texto ingresado al nuevo <li>
        nuevaTarea.innerText = tareaTexto;

        // Añade el nuevo <li> a la lista de tareas existente en el DOM
        listaDeTareas.appendChild(nuevaTarea);

        // Limpia el campo de entrada para permitir agregar nuevas tareas
        entradaTarea.value = "";
    } else {
        // Si el campo de entrada está vacío, muestra un mensaje en la consola
        console.log("Por favor, ingresa una tarea válida");
    }
});


//dos botones uno de añadir a final de la lista y el de eliminar el del final de la lista 
//o el del elemento quee  coincida con el input
//dp llamada a la funcion async  para meter datos de una api
//removeventlistener y addveventlistener
//recorrer un elemento hijos

let elementoOl = document.getElementById("lista-contenidos") as HTMLOListElement;

let primerElemento : HTMLLIElement = elementoOL.children[0] as HTMLLIElement

console.log(elementoOl.children[0]); //delvuelve array de objetos

