let divErroresJuegoNuevo = document.getElementById("erroresJuegoNuevo");
let divErroresCambiarUsuario = document.getElementById("erroresCambiarUsuario");
let divErroresCambiarEditorial = document.getElementById("erroresCambiarEditorial");

function añadirJuego(){
    let inputTitulo = document.getElementById("titulo");
    let inputCreador = document.getElementById("nombre");
    let inputApellidoCreador = document.getElementById("apellido");
    let inputGenero = document.getElementById("genero");
	let inputEditorial = document.getElementById("editorial");

	vaciarDivErrores(divErroresJuegoNuevo);

    let tituloValidado = validarTituloJuego(inputTitulo, divErroresJuegoNuevo); 
    let nombreValidado = validarNombreCreador(inputCreador, divErroresJuegoNuevo);
    let apellidoValidado= validarApellidoCreador(inputApellidoCreador, divErroresJuegoNuevo);
    let generoValidado = validarGenero(inputGenero, divErroresJuegoNuevo);
    let editorialValidado= validarNombreEditorial(inputEditorial, divErroresJuegoNuevo);

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

	let validaNuevoNombre = validarNombreCreador(inputNuevoNombre);
	let validaJuego = validarJuegoSeleccionado(inputJuego);

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

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
} 

document.addEventListener("DOMContentLoaded", function(event) {
	mostrarJuegosHTML(juegos);
	crearOpciones();
	
});
