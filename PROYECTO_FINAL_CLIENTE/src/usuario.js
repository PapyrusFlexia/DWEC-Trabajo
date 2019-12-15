let divErroresComentarioJuego = document.getElementById("erroresComentarioJuego");
let divErroresJuegosVotados = document.getElementById("erroresJuegosVotados");
let divErroresJuegosSimilares = document.getElementById("erroresjuegosSimilares");
let divErroresDevolverJuego = document.getElementById("erroresDevolverJuego");
let inputJuegoOpinar = document.getElementById("juegoOpinar");
let inputJuegoComprado = document.getElementById("juegoComprado");

/**
 * Funcion que permite a un usuario realizar un comentario y votar un juego
 */
function realizarComentario(){
	let inputNombreUsuario = document.getElementById("nombreUsuarioOpinion");
	let inputJuegoOpinar = document.getElementById("juegoOpinar");
	let inputVoto = obtenerRadio();
	let inputComentario = document.getElementById("inputComentarioOpinar");

	vaciarDivErrores(divErroresComentarioJuego);

	let usuarioValidado = validarNombreUsuario(inputNombreUsuario,divErroresComentarioJuego);
	let juegoValidado = validarJuegoSeleccionado(inputJuegoOpinar,divErroresComentarioJuego);
	let votoValidado = validarVoto(inputVoto,divErroresComentarioJuego);
	correcto(inputComentario);

	if(usuarioValidado && juegoValidado && votoValidado){
        //Es necesario validar el usuario, juego y voto para que el usuario pueda comentar
		let usuario = listaUsuarios.find(usuario => usuario.contieneNombre(inputNombreUsuario.value));
        let juego = juegos.find(juego => quitarEspaciosArrays(juego.titulo) === inputJuegoOpinar.value);
        //Si el usuario y juego se han seleccionado (not undefined) se creará un nuevo voto que irá para el juego
		if(usuario !== undefined && juego !== undefined){
			let nuevoVoto = new Votos(usuario,juego,inputVoto,inputComentario.value);
		}
		mostrarJuegosHTML(juegos);
		console.log("Comentario realizado con exito");
	}
}

/**
 * Funcion que valida si se ha seleccionado upvote o downvote y devuelve si se ha validado
 * @param {nodo} inputVoto es el radio que se ha seleccionado
 * @param {nodo} divErrores es el nodo donde apareceran los errores
 */
function validarVoto(inputVoto,divErrores){
	let validado = false;
	
	if(inputVoto === null || inputVoto === ""){
		erroneo(inputVoto,divErrores,'El voto es obligatorio<br>');
	}else{
		validado = true;
		correcto(inputVoto);
	}
	return validado;
}

/**
 * Funcion que obtiene si se ha seleccionado alguno de los radio button a la hora de votar y devuelve el boton seleccionado
 */
function obtenerRadio(){
	let botonesRadio = document.getElementsByName("voto");
	let botonSeleccionado = null;

	for (let i = 0; i < botonesRadio.length; i++) {
		if(botonesRadio[i].checked){
			botonSeleccionado = botonesRadio[i].value;
		}
	}
	return botonSeleccionado;
}
/**
 *  Funcion que sirve para crear las opciones de los inputs
 * @param {string} input  a cambiar
 */
function crearOpciones(input){
	for (let juego of juegos) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", noEspacios(juego.titulo));
		opcion.innerHTML = `${juego.titulo}`;
		input.appendChild(opcion);
	}
}

/**
 * Funcion que muestra en la pagina los juegos votadas por un usuario
 */

 // He tenido un problema con mostrarJuegosHTML, no reconoce "juego" y es en la única función en la que ocurre

function juegosVotados(){
	let nombreUsuario = document.getElementById("nombreUsuarioVotado");
	let nombre = "";
	let votosJuegos = [];
	let juegosMostrarD = [];
	let elementosBuscados = [];

	vaciarDivErrores(divErroresJuegosVotados);

	let usarioValidado = validarNombreUsuario(nombreUsuario,divErroresJuegosVotados);
	if(nombreUsuario.value !== ""){
		nombre = nombreUsuario.value.trim().toUpperCase();
        votosJuegos = votosUsuario(nombre);
        //Es necesario crear la función votosUsuario para obtener los votos y designárselos a la variable votosJuegos.
	}

	if(usarioValidado){
		votosJuegos.forEach(votoJuego => {
			if(!elementosBuscados.includes(votoJuego.juego)){
                elementosBuscados.push(votoJuego.juego);
                //Se añade un juego buscando los que el usuario ha votado
				let juegoAnadir = juegos.find(juego => noEspacios(juego.titulo) === votoJuego.juego );
				if(juegoAnadir !== null){
					juegosMostrarD.push(juegoAnadir);
				}
			}
		} );
        mostrarJuegosHTML(juegosMostrarD);
        //Error en la función mostrarJuegosHTML, es la única vez que ocurre, juego lo reconoce como null y no debería
	}
	
}

/**
 * Funcion que obtiene los votos de un usuario y devuelve los votos de los usuarios
 * @param {string} nombre es el nombre del usuario
 */
function votosUsuario(nombre){
    let usuario = listaUsuarios.find( usuario => usuario.contieneNombre(nombre));
    return usuario.votos;
}

/**
 * Funcion que compara juegos similares dependiendo del género de los juegos
 */
function juegosCompradosSimilares(){
	let nombreUsuario = document.getElementById("usuarioJuegosSimilares");
	let nombre = "";
    console.log("funciona");
	let juegosComprados = [];
	let juegosSimilares = [];
	let listaGeneros = [];

	let usuarioValidado = validarNombreUsuario(nombreUsuario,divErroresJuegosSimilares);

	if(nombreUsuario.value !== ""){
		nombre = nombreUsuario.value;
		juegosComprados = juegosCompradosUsuario(nombre);
	}

	for (let i = 0; i < juegosComprados.length; i++) {
		let genero = juegosComprados[i].genero;
		if(!listaGeneros.includes(genero)){
			listaGeneros.push(genero);
		}

	}

	if(usuarioValidado){
		listaGeneros.forEach(genero => {
			for (let i = 0; i < juegos.length; i++) {
				if(juegos[i].genero === genero){
					let juegoAnadir = juegos[i];
					if(!juegosComprados.includes(juegoAnadir) && !juegosSimilares.includes(juegoAnadir)){
						juegosSimilares.push(juegoAnadir);
					}
				}
			}
		});
		mostrarJuegosHTML(juegosSimilares);
	}
}

/**
 *  Funcion que comprueba los juegos comprados por el usuario y devuelve los juegos comprados de los usuarios
 * @param {string} nombre nombre del usuario
 */

function juegosCompradosUsuario(nombre){
	let usuario = listaUsuarios.find( usuario => usuario.contieneNombre(nombre));
    return usuario.juegosComprados;
}


/**
 * Funcion que permite al usuario devolver un juego comprado
 */
function devolverJuegoComprado(){
	let usuario = document.getElementById("usuarioDevolverJuego");
	let nombre = usuario.value;
	let juegosComprados = juegosCompradosUsuario(usuario.value);
	let juegoSeleccionado = document.getElementById("juegoComprado");

	let usuarioValidado = validarNombreUsuario(usuario,divErroresDevolverJuego);
	let juegoCorrecto = validarJuegoSeleccionado(juegoSeleccionado,divErroresDevolverJuego);

	if(juegoCorrecto && usuarioValidado){
		let usuario = listaUsuarios.find(usuario => usuario.nombre === nombre);
		let juegoDevuelto = usuario.juegosComprados.find(juegoComprado=> noEspacios(juegoComprado.titulo) === juegoSeleccionado.value);
		eliminarElementoArray(usuario.juegosComprados, juegoDevuelto);
		crearOpcionesPersonalizadas(nombre,inputJuegoComprado);
		mostrarJuegosHTML(usuario.juegosComprados);
	}
}
/**
 * Funcion que elimina un item de un array
 * @param {array} array es el array en el que eliminar el item
 * @param {*} item es el item a eliminar
 */
function eliminarElementoArray(array, item){
	var i = array.indexOf( item );
 
    if ( i !== -1 ) {
        array.splice( i, 1 );
    }
}

function recogerFunciones(){
    realizarComentario();
    juegosVotados();
    juegosCompradosSimilares();
    devolverJuegoComprado();
}

let botonComentarioOpinar = document.getElementById("realizarComentarioOpinar");
let inputsText = document.getElementsByClassName("inputFormulario");
//let botonJuegosVotados = document.getElementById("botonJuegosVotados");
let botonJuegosSimilares = document.getElementById("botonJuegosSimilares");
let botonDevolverJuegoComprado = document.getElementById("botonDevolverJuego");
let botonMostrarJuegos = document.getElementById("botonMostrarJuego");

botonComentarioOpinar.addEventListener("click",realizarComentario);
//botonJuegosVotados.addEventListener("click",juegosVotados);
botonJuegosSimilares.addEventListener("click",juegosCompradosSimilares);
botonDevolverJuegoComprado.addEventListener("click",devolverJuegoComprado);
botonMostrarJuegos.addEventListener("click",function() {
	let inputNombre = document.getElementById("usuarioDevolverJuego");
	let usuario = listaUsuarios.find(usuario => usuario.nombre === inputNombre.value);
	crearOpcionesPersonalizadas(usuario.nombre,inputJuegoComprado);
	mostrarJuegosHTML(usuario.juegosComprados);
});
for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}
document.addEventListener("DOMContentLoaded", function(event) {
    crearOpciones(inputJuegoOpinar);
    mostrarJuegosHTML(juegos);
});