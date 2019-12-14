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

function editorialMejorValorada(){
    let inputEditorial = document.getElementById("editorialValorado");
    let editorial = inputEditorial.value;
    let juegosEditorial = [];
    let juegoResultado = [];
    vaciarDivErrores(erroresJuegoMasVotado);
    let esEditorialCorrecta = validarNombreEditorial(inputEditorial,erroresJuegoMasVotado);

    if(esEditorialCorrecta){

        for (let i = 0; i < juegos.length; i++) {
            if(juegos[i].editorial.toUpperCase() === editorial.toUpperCase()){
                if(!juegosEditorial.includes(juegos[i])){
                    juegosEditorial.push(juegos[i]);
                }
            }
            
        }
        
        juegosEditorial = juegosEditorial.sort(function(juego1,juego2){
            return juego1.likes - juego2.likes;
        });

        juegoResultado.push(juegosEditorial[0]) ;
    }

    mostrarJuegosHTML(juegoResultado);
}

function ordenarPorCampo(){
    let inputOrdenar = document.getElementById("ordenarCampo");
    let ordenar = inputOrdenar.value;
    let juegosOrdenados = [];
    vaciarDivErrores(erroresOrdenarPor);
    let ordenarValido = validarOpcionSeleccionada(inputOrdenar,erroresOrdenarPor);

    if(ordenarValido){
        juegosOrdenados = juegos;
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

function filtrarPorLongitudEditorial(){
    let inputLongitud = document.getElementById("longitudEditorial");
    let longitud = inputLongitud.value;
    let juegosResultado = [];
    vaciarDivErrores(erroresLongitudEditorial);
    let longitudValida = validarLongitud(inputLongitud, erroresLongitudEditorial);
    if(longitudValida){
        juegos.forEach(juego => {
            if(juego.editorial.length >= longitud){
                if(!juegosResultado.includes(juego)){
                    juegosResultado.push(juego);
                }
            }
        });
        mostrarJuegosHTML(juegosResultado);
    }

}

/**
 * Funcion encargada de devolver el array de juegos
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
botonJuegoValorado.addEventListener("click", editorialMejorValorada);
botonOrdenarCampo.addEventListener("click", ordenarPorCampo);
botonLongitudEditorial.addEventListener("click", filtrarPorLongitudEditorial);

document.addEventListener("DOMContentLoaded", function(event) {
});
