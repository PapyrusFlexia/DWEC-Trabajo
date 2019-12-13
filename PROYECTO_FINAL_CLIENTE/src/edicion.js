function añadirPelicula(){
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
            listaDirectores.push(director);
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

/** //FUNCION PARA MARCAR INPUTS CORRECTOS                           ----------------TAL VEZ HAYA QUE USARLOS
function marcarInputComoCorrecto(input,divErrores){
	input.className  = 'correcto';
	// let padre = input.parentNode;
	// debugger;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		for (let i = 0; i < spanError.length; i++) {
			divErrores.removeChild(spanError[i]);
			
		}
	}
}

//FUNCION PARA MARCAR INPUTS INCORRECTOS
function marcarInputComoErroneo(input,divErrores,textoError){
	input.className  = 'incorrecto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement("span");
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = textoError;
		divErrores.appendChild(spanNuevo.cloneNode(true));
	}
} */

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


function validarTituloJuego(cadena){
	let validado = false;
	let tituloValidado = quitarEspaciosArrays(cadena);

	if(tituloValidado === undefined || tituloValidado.length <= 1){
	}else{
		validado = true;
	}
	return validado;
}

function validarNombreCreador(cadena){
	let validado = false;
    let nombreValidado = quitarEspaciosArrays(cadena);
    let regex = /^[A-Z]{2,}$/g

	if(!regex.test(nombreValidado)){
		// marcarInputComoErroneo(inputNombreD,divErrores,'El nombre del director es erroneo<br>');
	}else{
		validado = true;
	}
	return validado;
}

function validarApellidoCreador(cadena){
	let validado = false;
	let apellidoValidado = quitarEspaciosArrays(cadena);

	if(apellidoValidado === undefined || apellidoValidado.length < 1){
	}else{
        validado = true;
        // marcarInputComoCorrecto(inputGenero);
	}
	return validado;
}

function validarGenero(cadena){
	let validado = false;
	let generoValidado = quitarEspaciosArrays(cadena);

	if(generoValidado === undefined || generoValidado.length === ""){
	}else{
		validado = true;
	}
	return validado;
}

function validarNombreEditorial(cadena){
	let validado = false;
	let editorialValidado = quitarEspaciosArrays(cadena);

	if(editorialValidado === undefined || editorialValidado.length < 2){
	}else{
		validado = true;
	}
	return validado;
}

function validarJuegoCambiado(inputJuego){
	let validado = false;
	let juegoValidado = quitarEspaciosArrays(inputJuego.value);

	if(juegoValidado === null || juegoValidado.length <= 1){
	}else{
		validado = true;
	}
	return validado;
}



function cambiarUsuarioActual(){
	let seleccionarUsuario = null;
	let inputJuego = document.getElementById("peliculaD"); /** CAMBIAR EN HTML */
	let inputNuevoNombre = document.getElementById("nombreD");
    let inputNuevoApellido = document.getElementById("apellidoD");
    

    let esPeliculaCorrecto = validarJuegoCambiado(inputJuego);      
	let validaNuevoNombre = validarNombreCreador(inputNuevoNombre);
	let validaNuevoApellido = validarApellidoCreador(inputNuevoApellido); /** ES APELLIDO Y NOMBRE CREADOR PORQUE ESTAS FUNCIONES DE VALIDAR TAMBIÉN NOS SIRVEN PARA ESTE CASO */

	if(validaNuevoNombre && validaNuevoApellido && esPeliculaCorrecto){
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



//CONSIGUIENDO BOTON DEL FORMULARIO
let botonNuevaPelicula = document.getElementById("añadirEditorial");
let botonCambiarDirector = document.getElementById("cambiarDirector");
let botonCambiarProductora = document.getElementById("cambiarProductora");
//Obtencion de input de tipo text
let inputsText = document.getElementsByClassName("inputForm");

//AÑADIENDO EL EVENTO AL BOTON

botonNuevaPelicula.addEventListener("click",añadirPelicula);    /** MODIFICAR METODOS */
botonCambiarDirector.addEventListener("click",cambiarDirectorActual);
botonCambiarProductora.addEventListener("click",cambiarProductoraActual);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}



/*document.addEventListener("DOMContentLoaded", function(event) {
	//Creando opciones formulario cambiar director
	crearOpciones();
});*/
