let erroresFiltrarTituloGenero = document.getElementById("erroresFiltrarTituloGenero");
let erroresFiltrarGenero = document.getElementById("erroresFiltrarGenero");
let erroresFiltrarJuegosComprados = document.getElementById("erroresFiltrarJuegosComprados");
let erroresFiltrarEditorial = document.getElementById("erroresFiltrarEditorial");

/**
 * Funcion que filtra la búsqueda por título y por género
 */

function filtrarTituloGenero() {
    let inputTitulo = document.getElementById("titulo");
    let inputGenero = document.getElementById("genero");
    let titulo = inputTitulo.value;
    let genero = inputGenero.value;
    let busquedaRealizada = realizarBusqueda(titulo, genero);

    if (busquedaRealizada !== null) {
        correcto(inputTitulo)
        mostrarJuegosHTML(busquedaRealizada);
    } else {
        erroneo(inputTitulo, erroresFiltrarTituloGenero);
    }

}
/**
 * Funcion que recibe dos nodos y que sirve para poder realizar las búsquedas en la página y devuelve los juegos resultantes
 * @param {nodo} titulo el nodo del genero
 * @param {nodo} genero es el nodo al que se añade el texto de error en caso de que no sea correcto
 */

function realizarBusqueda(titulo, genero) {
    let juegosResultantes = juegos.filter(juego => juego.contieneTitulo(titulo) && juego.contieneGenero(genero));
    return juegosResultantes;
}

/**
 * Funcion que filtra la búsqueda por el género
 */

function filtrarGenero() {
    let inputGenero = document.getElementById("generoId");
    let genero = inputGenero.value;
    let juegosResultantes = similarGenero(genero);
    mostrarJuegosHTML(juegosResultantes);
}

/**
 * Funcion que recibe un nodo y que sirve para poder realizar las búsquedas en la página de juegos similares, lo cuales se buscan según su género y dedvuelve los juegos resultantes
 * @param {nodo} genero el nodo del genero
 */

function similarGenero(genero) {
    let juegosResultantes = juegos.filter(juego => juego.contieneGenero(genero));
    return juegosResultantes;
}

/**
 * Funcion que filtra la búsqueda por la editorial
 */

function filtrarEditorial() {
    let inputEditorial = document.getElementById("editorial");
    let nombreEditorial = inputEditorial.value.trim().toUpperCase();
    let juegosEditorial = busquedaEditorial(nombreEditorial);
    mostrarJuegosHTML(juegosEditorial);
}

/**
 * Funcion que recibe un nodo y que sirve para poder realizar las búsquedas en la página de juegos según su editorial y devuelve la editorial de todos los juegos
 * @param {nodo} nombre el nodo del nombre
 
 */

function busquedaEditorial(nombre) {
    let editorial = listaEditoriales.find(editorial => editorial.contieneNombre(nombre));
    return editorial.juegos;
}


/* Funcion que sirve para mostrar los juegos comprados del usuario */
// Esta ha sido una de las funciones más complejas ya que se ha tenido que gestionar los juegos comprados por cada usuario los cuales afectaban a unas gran cantidad de funciones
function juegosComprados() {
    let inputUsuario = document.getElementById("usuario");
    let nombre = inputUsuario.value.trim().toUpperCase();
    let juegosComprados = [];
    let esNombreCorrecto = validarNombreUsuario(inputUsuario, erroresFiltrarJuegosComprados);

    if (esNombreCorrecto) {
        juegosComprados = juegosUsuario(nombre);
        mostrarJuegosHTML(juegosComprados);

    }
}


/** Función que devuelve los juegos comprados por los usuarios y el array de todos los usuarios
 * @param {nodo} nombre el nodo del nombre
 * Esta ha sido una de las funciones más complicadas debido a su doble funcionalidad referidas a la gestión de usuarios 
 */
function juegosUsuario(nombre) {
    let usuario = listaUsuarios.find(usuario => usuario.contieneNombre(nombre));
    let arrayUsuario = [];
    if (usuario !== undefined) {
        return usuario.juegosComprados;
    } else {
        return arrayUsuario;
    }

}

let botonBuscar = document.getElementById("botonBusqueda");
let botonGenero = document.getElementById("botonGenero");
let botonEditorial = document.getElementById("botonEditorial");
let botonUsuario = document.getElementById("botonUsuario");
let inputsText = document.getElementsByClassName("inputForm");


botonBuscar.addEventListener("click", filtrarTituloGenero);
botonGenero.addEventListener("click", filtrarGenero);
botonUsuario.addEventListener("click", juegosComprados);
botonEditorial.addEventListener("click", filtrarEditorial);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus", focus);
    inputsText[i].addEventListener("blur", blur);
}

function recogerFunciones(){
    filtrarTituloGenero();
    filtrarGenero();
    filtrarEditorial();
    juegosComprados();
    
}

document.addEventListener("DOMContentLoaded", function(event) {
    mostrarJuegosHTML(juegos);

});