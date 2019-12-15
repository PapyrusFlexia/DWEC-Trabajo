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

function mostrarJuegosHTML(juegosMostrar){
    let divJuegos  = document.getElementById("juegosMostrar");
    divJuegos.innerHTML = "";
    if(juegosMostrar.length === 0){
        divJuegos.innerHTML = "No se ha encontrado ningún juego";
    }else{
        juegosMostrar.forEach(juego => juego.mostrarEnHTML(divJuegos));
    }
}

function incluirJuegoHTML(juego){
    let divJuegos  = document.getElementById("juegosMostrar"); /** TAL VEZ HALLA QUE QUITARLO */
    juego.mostrarEnHTML(divJuegos);
}

function validarTituloJuego(inputTituloJuego, divErrores){
	let validado = false;
	let tituloValidado = quitarEspaciosArrays(inputTituloJuego.value); ///////////////////////// .value cambiado

	if(tituloValidado === undefined || tituloValidado.length <= 1){
		erroneo(inputTituloJuego, divErrores, 'No se ha validado el titulo')
	}else{
		validado = true;
		correcto(inputTituloJuego);
	}
	return validado;
}

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

function validarNombreCreador(inputNombreCreador){
	let validado = false;
    let nombreValidado = quitarEspaciosArrays(inputNombreCreador);
    let regex = /^[A-Z]{2,}$/g

	if(!regex.test(nombreValidado)){
		erroneo(inputNombreCreador, 'No se ha validado el nombre');
	}else{
		validado = true;
		correcto(inputNombreCreador);
	}
	return validado;
}

function validarApellidoCreador(inputApellidoCreador){
	let validado = false;
	let apellidoValidado = quitarEspaciosArrays(inputApellidoCreador);

	if(apellidoValidado === undefined || apellidoValidado.length < 1){
		erroneo(inputApellidoCreador, 'No se ha validado el apellido');
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
	let generoValidado = quitarEspaciosArray(inputGenero.value);

	if(generoValidado === null || generoValidado === ""){
		erroneo(inputGenero,divErrores,'El genero es erroneo');
	}else{
		validado = true;
		correcto(inputGenero);
	}
	return validado;
}

function validarNombreEditorial(inputNombreEditorial, divErrores){
	let validado = false;
	let editorialValidado = quitarEspaciosArrays(inputNombreEditorial);

	if(editorialValidado === null || editorialValidado.length < 2){
		erroneo(inputNombreEditorial, divErrores, 'No se ha validado el nombre de la editorial');
	}else{
		validado = true;
		correcto(inputNombreEditorial);
	}
	return validado;
}

// FUNCION PARA MARCAR INPUTS CORRECTOS
function correcto(input){
	input.className  = 'correcto';
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		for (let i = 0; i < spanError.length; i++) {
			divErrores.removeChild(spanError[i]);
		}
	}
}

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
 * Funcion que vacia un nodo
 * @param {nodo} divErrores el nodo a vaciar
 */
function vaciarDivErrores(divErrores){
    divErrores.innerHTML = "";
}

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

function noEspacios(cadena){
    let arrayPalabras = cadena.split(" ");
    let nueva = "";

    for (let i = 0; i < arrayPalabras.length; i++) {
        nueva += arrayPalabras[i];
    }
    return nueva;
}

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