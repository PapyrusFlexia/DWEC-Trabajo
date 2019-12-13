function añadirJuego(){
    let inputTitulo = document.getElementById("titulo");
    let inputCreador = document.getElementById("nombre");
    let inputApellidoCreador = document.getElementById("apellido");
    let inputGenero = document.getElementById("genero");
	let inputEditorial = document.getElementById("editorial");

    let tituloValidado = validarTituloJuego(inputTitulo); 
    let nombreValidado = validarNombreCreador(inputCreador);
    let apellidoValidado= validarApellidoCreador(inputApellidoCreador);
    let generoValidado = validarGenero(inputGenero);
    let editorialValidado= validarNombreEditorial(inputEditorial);

    if(tituloValidado && nombreValidado && apellidoValidado && generoValidado && editorialValidado){
        let creador = listaCreadores.find( creador => creador.apellidos === inputApellidoCreador.value);
        let editorial = listaEditoriales.find( editorial => editorial.nombre === inputEditorial.value);
        let validaJue = juegos.find( juego => juego.titulo === inputTitulo.value);
        if(creador === undefined){
            creador = new Creador(inputCreador.value,inputApellidoCreador.value);
            listaCreadores.push(creador);
        }
        if(editorial === undefined){
            editorial = new Editorial(inputEditorial.value);
           listaEditoriales.push(editorial);
        }
        if(validaJue === undefined){
            validaJue = new Juego(inputTitulo.value ,creador ,inputGenero.value, editorial);
            juegos.push(validaJue);
            incluirJuegoHTML(validaJue);
            creador.incluirJuegos(validaJue);
            editorial.incluirJuegoHTML(validaJue);
		}
		
    }
    
}

function incluirJuegoHTML(juego){
    let divJuegos  = document.getElementById("juegosMostrar");
    juego.mostrarEnHTML(divJuegos);
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

//FUNCION PARA MARCAR INPUTS INCORRECTOS
function erroneo(input, error){
	input.className  = 'incorrecto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement("span");
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = error;
		divErrores.appendChild(spanNuevo.cloneNode(true));
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


function validarTituloJuego(inputTituloJuego){
	let validado = false;
	let tituloValidado = quitarEspaciosArrays(inputTituloJuego);

	if(tituloValidado === undefined || tituloValidado.length <= 1){
		erroneo(inputTituloJuego, 'No se ha validado el titulo')
	}else{
		validado = true;
		correcto(inputTituloJuego);
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
        // marcarInputComoCorrecto(inputGenero);
	}
	return validado;
}

function validarGenero(inputGenero){
	let validado = false;
	let generoValidado = quitarEspaciosArrays(inputGenero);

	if(generoValidado === undefined || generoValidado.length === ""){
		erroneo(inputGenero, 'No se ha validado el género');
	}else{
		validado = true;
		correcto(inputGenero);
	}
	return validado;
}

function validarNombreEditorial(inputNombreEditorial){
	let validado = false;
	let editorialValidado = quitarEspaciosArrays(inputNombreEditorial);

	if(editorialValidado === undefined || editorialValidado.length < 2){
		erroneo(inputNombreEditorial, 'No se ha validado el nombre de la editorial');
	}else{
		validado = true;
		correcto(inputNombreEditorial);
	}
	return validado;
}

function validarJuegoCambiado(inputJuego){
	let validado = false;
	let juegoValidado = quitarEspaciosArrays(inputJuego.value);

	if(juegoValidado === null || juegoValidado.length <= 1){
		erroneo(inputJuego, 'No se ha validado el nombre de la editorial'):
	}else{
		validado = true;
		correcto(inputNombreEditorial);
	}
	return validado;
}



function cambiarUsuarioActual(){
	let seleccionarUsuario = null;
	let inputJuego = document.getElementById("juegoUsuario"); /** CAMBIAR EN HTML */
	let inputNuevoNombre = document.getElementById("nombreUsuario");
    let inputNuevoApellido = document.getElementById("apellidoUsuario");
    

    let validaJuego = validarJuegoCambiado(inputJuego);      
	let validaNuevoNombre = validarNombreCreador(inputNuevoNombre);
	let validaNuevoApellido = validarApellidoCreador(inputNuevoApellido); /** ES APELLIDO Y NOMBRE CREADOR PORQUE ESTAS FUNCIONES DE VALIDAR TAMBIÉN NOS SIRVEN PARA ESTE CASO */

	if(validaNuevoNombre && validaNuevoApellido && validaJuego){
		let nuevoUsuario = new Usuario(inputNuevoNombre.value,inputNuevoApellido.value);
		if(!listaUsuarios.includes(nuevoUsuario)){
			listaUsuarios.push(nuevoUsuario);
		}
		let juego = juegos.find(juego => noEspacios(juego.titulo) === inputJuego.value);

		if(juego !== undefined){
			juego.usuario = nuevoUsuario;
			nuevoUsuario.incluirJuegos(juego);
			let htmlJuegos = document.getElementById("juegosMostrar")
			seleccionarUsuario = htmlJuegos.querySelector(`div[data-identificador = ${inputJuego.value}]`);
			let usuarioActual = seleccionarUsuario.querySelector("p[data-identificador = usuario]");
			usuarioActual.innerHTML = `${nuevoUsuario}`;
		}

		
	}
	
}

function cambiarEditorialActual(){
	let inputNuevoNombre = document.getElementById("nombreEditorial");
	let inputJuego = document.getElementById("juegoEditorial");

	let validaNuevoNombre = validarNombreP(inputNuevoNombre);
	let validaJuego = validarPeliculaSeleccionada(inputJuego);

	if(validaNuevoNombre && validaJuego){
		let nuevaEditorial = new Editorial(inputNuevoNombre.value);
		if(!listaEditoriales.includes(nuevaEditorial)){
			listaEditoriales.push(nuevaEditorial);
		}
		let juego = juegos.find(juego => noEspacios(juego.titulo) === inputJuego.value);

		if(juego !== undefined){
			juego.editorial = nuevaEditorial;
			let juegosSeleccionado = document.querySelector(`div[data-identificador = ${inputJuego.value}]`);
			let editorialActual = juegosSeleccionado.querySelector("p[data-identificador = editorial]");
			editorialActual.innerHTML = `${nuevaEditorial}`;
		}
		
	}
	
}



//CONSIGUIENDO BOTON DEL FORMULARIO
let botonNuevoJuego = document.getElementById("añadirEditorial");
let botonCambiarUsuario = document.getElementById("cambiarUsuario");
let botonCambiarEditorial = document.getElementById("cambiarEditorial");
let inputsText = document.getElementsByClassName("inputForm");

//AÑADIENDO EL EVENTO AL BOTON

botonNuevoJuego.addEventListener("click",añadirJuego);   
botonCambiarUsuario.addEventListener("click",cambiarUsuarioActual);
botonCambiarEditorial.addEventListener("click",cambiarEditorialActual);

/** for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
} */

function crearOpciones(input){
	for (let juego of juegos) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", noEspacios(juego.titulo));
		opcion.innerHTML = `${juego.titulo}`;
		input.appendChild(opcion);
		
	}
}



document.addEventListener("DOMContentLoaded", function(event) {
	crearOpciones();
});
