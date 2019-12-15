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
/**
 * Funcion que recibe un nodo y que sirve para mostrar los juegos en el HTML
 * @param {nodo} juegosMostrar el nodo para mostrar los juegos
 */
function mostrarJuegosHTML(juegosMostrar){
    let divJuegos  = document.getElementById("juegosMostrar");
    divJuegos.innerHTML = "";
    if(juegosMostrar.length === 0){
        divJuegos.innerHTML = "No se ha encontrado ningún juego";
    }else{
        juegosMostrar.forEach(juego => juego.mostrarEnHTML(divJuegos));
    }
}
/**
 * Funcion que recibe un nodo y que sirve para incluir juegos en el HTML
 * @param {nodo} juego el nodo del juego
 */
function incluirJuegoHTML(juego){
    let divJuegos  = document.getElementById("juegosMostrar"); 
    juego.mostrarEnHTML(divJuegos);
}
/**
 * Funcion que recibe dos nodos y que sirve para validar si un input contiene un titulo
 * @param {nodo} inputTituloJuego el nodo del input del titulo del juego
 * @param {nodo} divErrores el nodo de los errores
 */
function validarTituloJuego(inputTituloJuego, divErrores){
	let validado = false;
	let tituloValidado = quitarEspaciosArrays(inputTituloJuego.value); 

	if(tituloValidado === undefined || tituloValidado.length <= 1){
		erroneo(inputTituloJuego, divErrores, 'No se ha validado el titulo')
	}else{
		validado = true;
		correcto(inputTituloJuego);
	}
	return validado;
}
/**
 * Funcion que recibe dos nodos y que sirve para validar si un juego se ha cambiado
 * @param {nodo} inputJuego el nodo del input del juego
 * * @param {nodo} divErrores el nodo de los errores
 */

function validarJuegoCambiado(inputJuego, divErrores){
	let validado = false;
	let juegoValidado = quitarEspaciosArrays(inputJuego.value);

	if(juegoValidado === null || juegoValidado.length <= 1){
		erroneo(inputJuego, divErrores, 'No se ha validado el nombre de la editorial');
	}else{
		validado = true;
		correcto(inputJuego);
	}
	return validado;
}
/**
 * Funcion que recibe dos nodos y que sirve para validar las opciones seleccionadas
 * @param {nodo} inputOcion el nodo del input de las opciones
 * * @param {nodo} divErrores el nodo de los errores
 */
function validarOpcionSeleccionada(inputOpcion,divErrores){
	let validado = false;
	let opcionValidada = quitarEspaciosArrays(inputOpcion.value); 

	if(opcionValidada === null || opcionValidada.length <= 1){
		erroneo(inputOpcion,divErrores,'Debe seleccionar una opcion<br>');
	}else{
		validado = true;
		correcto(inputOpcion);
	}
	return validado;
}
/**
 * Funcion que recibe dos nodos y que sirve para validar si un input contiene el nombre de un creador
 * @param {nodo} inputNombreCreador el nodo del input del nombre del creador
 * * @param {nodo} divErrores el nodo de los errores
 */
function validarNombreCreador(inputNombreCreador, divErrores){ 
	let validado = false;
    let nombreValidado = quitarEspaciosArrays(inputNombreCreador.value);
    let regex = /^[A-Z]{2,}$/g

	if(!regex.test(nombreValidado)){
		erroneo(inputNombreCreador, divErrores, 'No se ha validado el nombre del creador');
	}else{
		validado = true;
		correcto(inputNombreCreador);
	}
	return validado;
}

/**
 * Funcion que recibe dos nodos y que sirve para validar si un input contiene el apellido de un creador
 * @param {nodo} inputApellidoCreador el nodo del input del apellido del creador
 * * @param {nodo} divErrores el nodo de los errores
 */
function validarApellidoCreador(inputApellidoCreador, divErrores){
	let validado = false;
	let apellidoValidado = quitarEspaciosArrays(inputApellidoCreador.value); 

	if(apellidoValidado === undefined || apellidoValidado.length < 1){
		erroneo(inputApellidoCreador, divErrores, 'No se ha validado el apellido del creador');
	}else{
		validado = true;
		correcto(inputApellidoCreador);
	}
	return validado;
}

/**
 * Funcion que recibe dos nodos y valida el nombre del usuario
 * @param {nodo} inputNombreUsuario es el nodo del nombre del usuario
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreUsuario(inputNombreUsuario,divErrores){
	let validado = false;
	let nombreValidado = quitarEspaciosArrays(inputNombreUsuario.value);
	let exp = /^[A-Z]{2,}$/g
	if(!exp.test(nombreValidado)){
		erroneo(inputNombreUsuario,divErrores,'El nombre del usuario es obligatorio');
	}else{
		validado = true;
		correcto(inputNombreUsuario);
	}
	return validado;
}

/**
 * Funcion que recibe dos nodos y valida el genero
 * @param {nodo} inputGenero es el nodo del genero
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarGenero(inputGenero,divErrores){
	let validado = false;
	let generoValidado = quitarEspaciosArrays(inputGenero.value); 

	if(generoValidado === null || generoValidado === ""){
		erroneo(inputGenero,divErrores,'El genero es erroneo');
	}else{
		validado = true;
		correcto(inputGenero);
	}
	return validado;
}
/**
 * Funcion que recibe dos nodos y que sirve para validar si un input contiene un nombre de una editorial
 * @param {nodo} inputNombreEditorial el nodo del input del nombre de la editorial
 * @param {nodo} divErrores el nodo de los errores
 */
function validarNombreEditorial(inputNombreEditorial, divErrores){
	let validado = false;
	let editorialValidado = quitarEspaciosArrays(inputNombreEditorial.value); 

	if(editorialValidado === null || editorialValidado.length < 2){
		erroneo(inputNombreEditorial, divErrores, 'No se ha validado el nombre de la editorial');
	}else{
		validado = true;
		correcto(inputNombreEditorial);
	}
	return validado;
}

/**
 * Funcion que recibe dos nodos y que sirve para validar si un input es correcto
 * @param {nodo} input el nodo del input
 * @param {nodo} divErrores el nodo de los errores
 */
function correcto(input, divErrores){  
	input.className  = 'correcto';
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		for (let i = 0; i < spanError.length; i++) {
			divErrores.removeChild(spanError[i]);
		}
	}
}
/**
 * Funcion que recibe tres nodos y que sirve para validar si un input es incorrecto
 * @param {nodo} input el nodo del input
 * @param {nodo} divErrores el nodo de los errores
 * @param {nodo} textoError el nodo de los del texto para indicar que la validación ha salido errónea
 
 */
function erroneo(input, divErrores, textoError){
	input.className  = 'incorrecto';
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement("span");
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = textoError;
		divErrores.appendChild(spanNuevo.cloneNode(true));
	}
}

	/**
	 * Funcion que cambia el color de fondo si el input tiene el foco (solo tipo text y textarea)
	 * @param {event} event el evento lanzado
	 */
	function focus(event){
	    let input = event.target;
	    input.style.backgroundColor = "rgba(15, 191, 219, 0.2)";
	}
	/**
	 * Funcion que elimina el color de fondo si el input no tiene el foco (solo tipo text y textarea)
	 * @param {event} event el evento lanzado
	 */
	function blur(event){
	    let input = event.target;
	    input.style.backgroundColor = "";
	}
	

/**
 * Funcion que vacia un nodo
 * @param {nodo} divErrores el nodo a vaciar
 */
function vaciarDivErrores(divErrores){
    divErrores.innerHTML = "";
}
/**
 * Funcion que recibe dos nodos y que sirve para crear las opciones de los inputs
 */
function crearOpciones(){
    let inputJuegoUsuario = document.getElementById("juegoUsuario");
    let inputJuegoEditorial = document.getElementById("juegoEditorial");
    for (let juego of juegos) {
        let opcion = document.createElement("option");
        opcion.className = "opcion";
        opcion.setAttribute("value", noEspacios(juego.titulo));
        opcion.innerHTML = `${juego.titulo}`;
        inputJuegoUsuario.appendChild(opcion);
        inputJuegoEditorial.appendChild(opcion.cloneNode(true));

    }
}

/**
	 * Funcion que en funcion de los juegos comprados de un usuario cambia el select de los juegos
	 * @param {string} nombre es el nombre de usuario
	 * @param {nodo} input es el nodo donde apareceran las opciones
	 */
	function crearOpcionesPersonalizadas(nombre,input){
		let usuario = listaUsuarios.find(usuario => usuario.nombre === nombre);
		let juegosComprados = usuario.juegosComprados;
		input.innerHTML = "";
		let opcionDefault = document.createElement("option");
			opcionDefault.className = "opcion";
			opcionDefault.setAttribute("value", "");
			opcionDefault.innerHTML = `-Seleccionar-`;
		input.appendChild(opcionDefault);
		for (const juegoComprado of juegosComprados) {
			let opcion = document.createElement("option");
			opcion.className = "opcion";
			opcion.setAttribute("value", noEspacios(juegoComprado.titulo));
			opcion.innerHTML = `${juegoComprado.titulo}`;
			input.appendChild(opcion);
		}
	}
/**
 * Funcion que recibe dos nodos y que sirve para quitar los espacios en un array
 * @param {nodo} cadena el nodo del array
 */
function noEspacios(cadena){
    let arrayPalabras = cadena.split(" ");
    let nueva = "";

    for (let i = 0; i < arrayPalabras.length; i++) {
        nueva += arrayPalabras[i];
    }
    return nueva;
}
/**
 * Funcion que recibe dos nodos y que sirve para validar la longitud
 * @param {nodo} inputLongitud el nodo del input de la longitud
 * @param {nodo} divErrores el nodo de los errores
 */
function validarLongitud(inputLongitud,divErrores){
	let valido = false;
	let longitudValidada = inputLongitud.value;

	if(longitudValidada === null || longitudValidada <= 0){
		erroneo(inputLongitud,divErrores,'La longitud no puede ser menor que 0');
	}else{
		valido = true;
		correcto(inputLongitud);
	}
	return valido;
}
/**
 * Funcion que recibe dos nodos y que sirve para validar el juego seleccionado
 * @param {nodo} inputJuego el nodo del input de los juegos
 * @param {nodo} divErrores el nodo de los errores
 */

function validarJuegoSeleccionado(inputJuego,divErrores){
	let validado = false;
	let juegoValidado = quitarEspaciosArrays(inputJuego.value);

	if(juegoValidado === null || juegoValidado.length <= 1){
		erroneo(inputJuego,divErrores,'Selecciona un juego');
	}else{
		validado = true;
		correcto(inputJuego);
	}
	return validado;
}