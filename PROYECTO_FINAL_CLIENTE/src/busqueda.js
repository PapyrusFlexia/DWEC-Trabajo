function mostrarJuegosHTML(juegosMostrar){
    let divJuegos  = document.getElementById("juegosMostrar");
    divJuegos.innerHTML = "";
    if(juegosMostrar.length === 0){
        divJuegos.innerHTML = "No se ha encontrado ningún juego";
    }else{
        juegosMostrar.forEach( juego => juego.mostrarEnHTML(divJuegos));
    }
}

function noEspacios(cadena){
    let arrayPalabras = cadena.split(" ");
    let nueva = "";

    for (let i = 0; i < arrayPalabras.length; i++) {
        nueva += arrayPalabras[i];
    }
    return nueva;
}

/**
 * Funcion que recibe una cadena, le quita los espacios en blanco por delante y por detras y la pone en mayusculas
 * @param {string} cadena es la cadena a tratar
 */
function quitarEspaciosArrays(array){
    let arrayResultante = null;
    if(typeof(array) === "string"){
        let arrayRegex = array.trim().toUpperCase();
        arrayRegex = arrayRegex.replace(/\s{2,}/g," ");
        if(arrayRegex !== ""){
            arrayResultante = arrayRegex;
        }
    }
    return arrayResultante;
}

function incluirJuegoHTML(juego){
    let divJuegos  = document.getElementById("juegosMostrar");
    juego.mostrarEnHTML(divJuegos);
}


function filtrarTituloTipo(){
    let inputTitulo = document.getElementById("titulo");
    let inputTipo = document.getElementById("tipo");
    let titulo = inputTitulo.value;
    let tipo = inputTipo.value;
    let busquedaRealizada = realizarBusqueda(titulo, tipo);
   
   
   
    if(busquedaRealizada !== null){
        marcarInputComoCorrecto(inputTitulo)
        mostrarJuegosHTML(busquedaRealizada);
    }else{
        console.log("No se ha encontrado ningún juego");
    }
    
}

function realizarBusqueda(titulo, genero){
	let juegosResultantes = juegos.filter( juego => juego.contieneTitulo(titulo) && juego.contieneTipo(tipo));
	return juegosResultantes;
}

function filtrarGenero(){
    let inputGenero = document.getElementById("genero");
    let genero  = inputGenero.value.trim().toLowerCase();
    let juegosResultantes = similar(genero);
    mostrarJuegosHTML(juegosResultantes);
}

function similar(genero){
    let juegosResultantes = juegos.filter( juego => juegos.contieneGenero(juegos));
    return juegosResultantes;
}

/* funcion para mostrar los juegos comprados del usuario */

function juegosComprados(){
    let inputUsuario = document.getElementById("usuario");
    let nombre = inputUsuario.value.trim().toUpperCase();
    let peliculasFavoritas = [];
    let esNombreCorrecto = validarNombreUsuario(inputUsuario,erroresFiltrarPF);

    if(esNombreCorrecto){
        peliculasFavoritas = peliculasUsuario(nombre);
            mostrarPeliculasHTML(juegosComprados);
       
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
let inputsText = document.getElementsByClassName("inputForm");


botonBuscar.addEventListener("click", filtrarTituloTipo);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}




