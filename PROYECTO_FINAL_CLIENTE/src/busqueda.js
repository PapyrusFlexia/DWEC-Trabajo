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
    let juegosResultantes = similar(genero);
    mostrarPeliculasHTML(juegosResultantes);
}

function similar(genero){
    let juegosResultantes = juegos.filter( juego => juegos.contieneGenero(juegos));
    return juegosResultantes;
}



let botonBuscar = document.getElementById("botonBusqueda");
let inputsText = document.getElementsByClassName("inputForm");


botonBuscar.addEventListener("click", filtrarTituloTipo);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}




