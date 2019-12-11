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
 * @param {string} array es la cadena a tratar
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

function realizarBusqueda(titulo, tipo){
	let juegosResultantes = juegos.filter( juego => juego.contieneTitulo(titulo) && juego.contieneTipo(tipo));
	return juegosResultantes;
}

function filtrarGenero(){
    let inputGenero = document.getElementById("genero");
    let genero  = inputGenero.value.trim().toLowerCase();
    let juegosResultantes = similarGenero(genero);
    mostrarJuegosHTML(juegosResultantes);
}

function similarGenero(genero){
    let juegosResultantes = juegos.filter( juegos => juegos.contieneGenero(genero));
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
    let esNombreCorrecto = validarNombreUsuario(inputUsuario,erroresFiltrarPF);

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


botonBuscar.addEventListener("click", filtrarTituloTipo);
botonGenero.addEventListener("click",filtrarGenero);
botonUsuario.addEventListener("click", juegosComprados);
botonEditorial.addEventListener("click",filtrarEditorial);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}




