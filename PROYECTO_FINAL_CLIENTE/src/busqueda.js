let erroresFiltrarTituloGenero = document.getElementById("erroresFiltrarTituloGenero");
let erroresFiltrarGenero = document.getElementById("erroresFiltrarGenero");
let erroresFiltrarJuegosComprados = document.getElementById("erroresFiltrarJuegosComprados");
let erroresFiltrarEditorial = document.getElementById("erroresFiltrarEditorial");

function filtrarTituloGenero(){
    let inputTitulo = document.getElementById("titulo");
    let inputGenero = document.getElementById("genero");
    let titulo = inputTitulo.value;
    let genero = inputGenero.value;
    let busquedaRealizada = realizarBusqueda(titulo, genero);
   
    if(busquedaRealizada !== null){
        correcto(inputTitulo)
        mostrarJuegosHTML(busquedaRealizada);
    }else{
       erroneo(inputTitulo,erroresFiltrarTituloGenero);
    }
    
}

function realizarBusqueda(titulo, genero){
	let juegosResultantes = juegos.filter( juego => juego.contieneTitulo(titulo) && juego.contieneGenero(genero));
	return juegosResultantes;
}

function filtrarGenero(){
    let inputGenero = document.getElementById("generoId");
    let genero = inputGenero.value;
    console.log(genero);
    let juegosResultantes = similarGenero(genero);
    mostrarJuegosHTML(juegosResultantes);
}

function similarGenero(genero){
    let juegosResultantes = juegos.filter( juego => juego.contieneGenero(genero));
    return juegosResultantes;
}

function filtrarEditorial(){
    let inputEditorial = document.getElementById("editorial");
    let nombreEditorial = inputEditorial.value.trim().toUpperCase();
    let juegosEditorial = busquedaEditorial(nombreEditorial);
    mostrarJuegosHTML(juegosEditorial);
}

function busquedaEditorial(nombre){
    let editorial = listaEditoriales.find( editorial => editorial.contieneNombre(nombre));
    return editorial.juegos;
}


/* funcion para mostrar los juegos comprados del usuario */

function juegosComprados(){
    let inputUsuario = document.getElementById("usuario");
    let nombre = inputUsuario.value.trim().toUpperCase();
    let juegosComprados = [];
    let esNombreCorrecto = validarNombreUsuario(inputUsuario,erroresFiltrarJuegosComprados);

    if(esNombreCorrecto){
        juegosComprados = juegosUsuario(nombre);
            mostrarJuegosHTML(juegosComprados);
       
    }
}


/** devuelve los juegos comprados */
function juegosUsuario(nombre){
    let usuario = listaUsuarios.find( usuario => usuario.contieneNombre(nombre));
    let arrayUsuario = [];
    if(usuario !== undefined){
        return usuario.juegosComprados;
    }else{
        return arrayUsuario;
    }
    
}

let botonBuscar = document.getElementById("botonBusqueda");
let botonGenero = document.getElementById("botonGenero");
let botonEditorial = document.getElementById("botonEditorial");
let botonUsuario = document.getElementById("botonUsuario");
let inputsText = document.getElementsByClassName("inputForm");


botonBuscar.addEventListener("click", filtrarTituloGenero);
botonGenero.addEventListener("click",filtrarGenero);
botonUsuario.addEventListener("click", juegosComprados);
botonEditorial.addEventListener("click",filtrarEditorial);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}

document.addEventListener("DOMContentLoaded", function(event) {
    mostrarJuegosHTML(juegos);
   
});





