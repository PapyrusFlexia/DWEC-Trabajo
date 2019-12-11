function añadirPelicula(){
    let inputTitulo = document.getElementById("titulo");
    let inputCreador = document.getElementById("nombre");
    let inputApellidoCreador = document.getElementById("apellido");
    let inputGenero = document.getElementById("genero");
	let inputEditorial = document.getElementById("editorial");

    let tituloValidado = validarTituloJuego(inputTitulo); /** CAMBIAR FUNCIONES EN CLASES.JS */
    let nombreValidado = validarNombreD(inputCreador);
    let apellidoValidado= validarApellidoD(inputApellidoCreador);
    let generoValidado = validarGenero(inputGenero);
    let editorialValidado= validarNombreP(inputEditorial);

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

function validarTituloJuego(inputTitulo){
	let esCorrecto = false;
	var tituloTratado = new RegExp("^[a-zA-Z]+$");     /** VALIDAR CON REGEX */

	if(tituloTratado === null || tituloTratado.length <= 1){
		marcarInputComoErroneo(inputTitulo,'El titulo es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputTitulo);
	}
	return esCorrecto;
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
