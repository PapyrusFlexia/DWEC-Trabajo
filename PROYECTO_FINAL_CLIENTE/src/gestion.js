let erroresJuegosFiltrados = document.getElementById("erroresJuegosDiez");
let erroresJuegoMasVotado = document.getElementById("erroresJuegoValorado");
let erroresOrdenarPor = document.getElementById("erroresOrdenarCampo");
let erroresLongitudEditorial = document.getElementById("erroresLongitudEditorial");

/**
 * Funcion que devuelve 10 juegos filtrados por título y editorial
 */
function filtrarCreadorEditorialDevolverDiez(){
    let inputCreador = document.getElementById("creadorDiez");
    
    let inputEditorial = document.getElementById("editorialDiez");
    let creador = inputCreador.value;
    let editorial = inputEditorial.value;
    let juegosResultantes = realizarBusquedaCreadoryEditorial(creador,editorial);
    juegosResultantes.slice(0,11);
    if(juegosResultantes !== null){
        correcto(inputCreador);
        correcto(inputEditorial);
        mostrarJuegosHTML(juegosResultantes);
    }else{
        erroneo(inputCreador,erroresFiltrarTD);
        erroneo(inputEditorial,erroresFiltrarTD);
    }
}

/**
 * Funcion que devuelve el juego mejor valorado de cada genero
 */
function generoMejorValorado(){
    let inputGenero = document.getElementById("generoValorado");
    let genero = inputGenero.value;
    console.log(genero);
    let juegosGenero = [];
    let juegoResultado = [];
    vaciarDivErrores(erroresJuegoMasVotado);
    let esGeneroCorrecto = validarGenero(inputGenero,erroresJuegoMasVotado);
    if(esGeneroCorrecto){
        for (let i = 0; i < juegos.length; i++) {
            if(juegos[i].genero.toUpperCase() === genero.toUpperCase()){
                if(!juegosGenero.includes(juegos[i])){
                    juegosGenero.push(juegos[i]);
                }
            }
        }
        juegosGenero = juegosGenero.sort(function(juego1,juego2){
            return juego1.likes - juego2.likes;
        });
        juegoResultado.push(juegosGenero[0]) ;
    }

    mostrarJuegosHTML(juegoResultado);
}

/**
 * Funcion que ordena los juegos dependiendo del campo que selecciones
 */
function ordenarPorCampo(){
    let inputOrdenar = document.getElementById("ordenarCampo");
    let ordenar = inputOrdenar.value;
    let juegosOrdenados = [];
    vaciarDivErrores(erroresOrdenarPor);
    //Es necesario validar la opción seleccionada
    let ordenarValido = validarOpcionSeleccionada(inputOrdenar,erroresOrdenarPor);

    if(ordenarValido){
        juegosOrdenados = juegos;
        //Los juegos se ordenan comparando un juego con el siguiente y viendo si alfabéticamente va antes o después
        if(ordenar === "titulo"){
            juegosOrdenados = juegosOrdenados.sort(function(juego1,juego2){
                if(juego1.titulo.toLowerCase() > juego2.titulo.toLowerCase()){
                    return 1;
                }else if(juego1.titulo.toLowerCase() < juego2.titulo.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(ordenar === "genero"){
            juegosOrdenados = juegosOrdenados.sort(function(juego1,juego2){
                if(juego1.genero.toLowerCase() > juego2.genero.toLowerCase()){
                    return 1;
                }else if(juego1.genero.toLowerCase() < juego2.genero.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(ordenar === "creador"){
            juegosOrdenados = juegosOrdenados.sort(function(juego1,juego2){
                if(juego1.creador.nombre.toLowerCase() > juego2.creador.nombre.toLowerCase()){
                    return 1;
                }else if(juego1.creador.nombre.toLowerCase() < juego2.creador.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(ordenar === "editorial"){
            juegosOrdenados = juegosOrdenados.sort(function(juego1,juego2){
                if(juego1.editorial.nombre.toLowerCase() > juego2.editorial.nombre.toLowerCase()){
                    return 1;
                }else if(juego1.editorial.nombre.toLowerCase() < juego2.editorial.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }
        
    }

    mostrarJuegosHTML(juegosOrdenados);
}

/**
 * Funcion que devuelve juegos cuyas editoriales tengan una longitud mayor o igual a la escrita
 */
function filtrarPorLongitudEditorial(){
    let inputLongitud = document.getElementById("longitudEditorial");
    let longitud = inputLongitud.value;
    let juegosResultado = [];
    vaciarDivErrores(erroresLongitudEditorial);
    let longitudValida = validarLongitud(inputLongitud, erroresLongitudEditorial);
    if(longitudValida){
        juegos.forEach(juego => {
            //Si el nombre de la editorial es mayor o igual a la longitud pasa el if
            if(juego.editorial.nombre.length >= longitud){
                if(!juegosResultado.includes(juego)){
                    juegosResultado.push(juego);
                }
            }
        });
        mostrarJuegosHTML(juegosResultado);
    }

}

/**
 * Funcion encargada de devolver el array de juegos y devuelven los juegos resultantes
 * @param {String} creador es el creador del juego
 * @param {String} editorial es la editorial
 */
function realizarBusquedaCreadoryEditorial(creador,editorial){
	let juegosResultantes = juegos.filter( juego => juego.contieneCreador(creador) && juego.contieneEditorial(editorial));
	return juegosResultantes;
}

//Botones
let botonJuegosDiez = document.getElementById("botonJuegosDiez");
let botonJuegoValorado = document.getElementById("botonJuegoValorado");
let botonOrdenarCampo = document.getElementById("botonOrdenarCampo");
let botonLongitudEditorial = document.getElementById("botonLongitudEditorial");

//Eventos
botonJuegosDiez.addEventListener("click", filtrarCreadorEditorialDevolverDiez);
botonJuegoValorado.addEventListener("click", generoMejorValorado);
botonOrdenarCampo.addEventListener("click", ordenarPorCampo);
botonLongitudEditorial.addEventListener("click", filtrarPorLongitudEditorial);

document.addEventListener("DOMContentLoaded", function(event) {
    mostrarJuegosHTML(juegos);
});