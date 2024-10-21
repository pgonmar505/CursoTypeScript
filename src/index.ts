/* Práctica de repaso */

/* Declaramos el tipo Perro, que representa el formato de los datos que obtenemos de la API.
   Contiene dos propiedades: 'message' (la URL de la imagen) y 'status' (el estado de la petición). */
   type Perro = {
    message: string,
    status: string
}

/* Función asincrónica que realiza una petición HTTP a la API 'dog.ceo' para obtener una imagen aleatoria de perro.
   Devuelve un objeto con la URL de la imagen y el estado de la solicitud. */
async function getDataDog(): Promise<Perro> {
    let peticion = await fetch("https://dog.ceo/api/breeds/image/random");
    /* La respuesta de la API se convierte a formato JSON, la cual devuelve un objeto de tipo Perro. */
    let datos = await peticion.json() as Promise<Perro>;
    return datos;
}

/* Ejecutamos la función asincrónica para obtener los datos del perro. 
   Cuando los datos estén disponibles, los utilizamos para crear una imagen en la página web. */
let fAsincrona = getDataDog();
fAsincrona.then((perro: Perro) => {
    console.log(perro.message);  // Imprime en consola la URL de la imagen del perro.
    
    /* Creamos un elemento <img> en el DOM y le asignamos como 'src' la URL obtenida de la API (perro.message). */
    let imagenPerro = document.createElement("img") as HTMLImageElement;
    imagenPerro.src = perro.message;

    /* Agregamos un evento 'click' a la imagen, que al ser activado genera una nueva imagen de perro obtenida de la API. */
    imagenPerro.addEventListener("click", async () => {
        /* Obtenemos una nueva imagen de perro llamando de nuevo a la API y actualizamos el 'src' de la imagen. */
        let nuevoPerro = await getDataDog();
        imagenPerro.src = nuevoPerro.message;
    });

    /* Insertamos la imagen dentro del <body> de la página. */
    let body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    body.appendChild(imagenPerro);
});

/* Gestión de la lista de contenidos de la página con funcionalidad de añadir y eliminar elementos. */

let listaOL = document.getElementById("lista-contenidos") as HTMLOListElement;  // Referencia a la lista ordenada (OL).
let btnAdd = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;  // Botón para añadir nuevo contenido.
let btnDelete = document.getElementById("btn-remove-content") as HTMLButtonElement;  // Botón para eliminar contenido.
let divMensajeError = document.getElementById("errores") as HTMLDivElement;  // Contenedor de los mensajes de error.
let input = document.getElementById("input-contenido") as HTMLInputElement;  // Input donde el usuario ingresa nuevo contenido.

/* Evento que se activa al hacer clic en el botón de añadir contenido. 
   Añade un nuevo ítem a la lista solo si el campo de texto no está vacío. */
btnAdd.addEventListener("click", (evento: Event) => {
    /* Comprobamos si el valor ingresado en el input no es vacío o solo espacios. */
    if (input.value.trim() != "") {
        /* Creamos un ícono de estrella con las clases de Bootstrap necesarias para mostrarlo correctamente. */
        let elementoStar = document.createElement("i");
        elementoStar.classList.add("bi", "bi-star");
        elementoStar.setAttribute("name", "star-li");

        /* Creamos un nuevo elemento <li> y le añadimos la estrella y el texto ingresado por el usuario. */
        let elementoLI = document.createElement("li");
        let elementoTexto = document.createTextNode(input.value);
        elementoLI.appendChild(elementoStar);
        elementoLI.appendChild(elementoTexto);

        /* Finalmente, el nuevo elemento <li> con la estrella y el texto se añade a la lista ordenada (OL). */
        listaOL.appendChild(elementoLI);
    } else {
        /* Si el campo de entrada está vacío, mostramos un mensaje de error dentro del contenedor de errores. */
        let parrafoError = document.getElementById("p-errores") as HTMLParagraphElement;
        parrafoError.textContent = "Lo sentimos, pero no ha introducido nada";
        parrafoError.style.color = "red";
        divMensajeError.appendChild(parrafoError);
    }
});

/* Evento que se activa al hacer clic en el botón para eliminar contenido.
   Elimina el último ítem de la lista si existe algún ítem, de lo contrario muestra un mensaje de error. */
btnDelete.addEventListener("click", (evento: Event) => {
    if (listaOL.lastElementChild) {
        /* Si la lista no está vacía, se elimina el último ítem. */
        listaOL.removeChild(listaOL.lastElementChild);
    } else {
        /* Si la lista está vacía, se muestra un mensaje de error informando que no hay elementos para eliminar. */
        let mensajeInfo = document.getElementById("p-errores") as HTMLParagraphElement;
        mensajeInfo.textContent = "Lo sentimos, pero no hay elementos que eliminar";
        mensajeInfo.style.color = "red";
        divMensajeError.appendChild(mensajeInfo);
    }
});

/* Gestión de las interacciones con los íconos de estrellas:
   - Cuando el cursor pasa por encima, la estrella se rellena.
   - Cuando el cursor se quita, la estrella vuelve a estar vacía, a menos que se haya hecho clic.
   - Al hacer clic, la estrella se rellena permanentemente (hasta hacer clic de nuevo). */

let listaStar = document.getElementsByName("star-li") as NodeListOf<HTMLElement>;  // Lista de todos los íconos de estrellas.

/* Recorremos cada estrella para añadir eventos que controlen el comportamiento de rellenado/vaciado al hacer hover o clic. */
listaStar.forEach(elemento => {

    /* Evento 'mouseover' que se activa al pasar el cursor por encima de la estrella. 
       Rellena la estrella quitando la clase 'bi-star' y añadiendo la clase 'bi-star-fill'. */
    elemento.addEventListener("mouseover", (evento: Event) => {
        elemento.classList.remove("bi-star");
        elemento.classList.add("bi-star-fill");
    });

    /* Evento 'mouseout' que se activa cuando el cursor se quita de la estrella. 
       Si la estrella no ha sido marcada como "clicked", se vacía de nuevo. */
    elemento.addEventListener("mouseout", (evento: Event) => {
        if (!elemento.classList.contains("clicked")) {
            elemento.classList.remove("bi-star-fill");
            elemento.classList.add("bi-star");
        }
    });

    /* Evento 'click' que se activa al hacer clic en la estrella. 
       Alterna entre el estado relleno y vacío según si la estrella ya está marcada como "clicked". */
    elemento.addEventListener("click", (evento: Event) => {
        if (elemento.classList.contains("clicked")) {
            /* Si la estrella ya está rellena (marcada), se vacía y se quita la clase 'clicked'. */
            elemento.classList.remove("clicked");
            elemento.classList.remove("bi-star-fill");
            elemento.classList.add("bi-star");
        } else {
            /* Si la estrella está vacía, se rellena y se marca con la clase 'clicked'. */
            elemento.classList.add("clicked");
            elemento.classList.remove("bi-star");
            elemento.classList.add("bi-star-fill");
        }
    });
});