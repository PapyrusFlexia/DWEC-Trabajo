function filtrarTituloDirector(){
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
	let peliculasResultantes = juegos.filter( juego => juego.contieneTitulo(titulo) && juego.contieneDirector(tipo));
	return peliculasResultantes;
}

let botonBuscar = document.getElementById("botonBusqueda");
let inputsText = document.getElementsByClassName("inputForm");


botonBuscar.addEventListener("click", filtrarTituloDirector);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}



