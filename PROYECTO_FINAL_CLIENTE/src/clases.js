class Tienda{

	constructor(nombre,direccion){
		this.nombre = nombre;
		this.direccion = direccion;
		this.juegos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get juegos(){
		return this._juegos;
	}

	set juegos(juegos){
		this._juegos=juegos;
	}
	añadirJuegos(juegos){
		this._juegos.push(juego);
	}

	get direccion(){
		return `${this._direccion}`;
	}

	set direccion(direccion){
		this._direccion=direccion;
	}

	incluirJuegos(juego){
		this._juegos.push(juego);
	}

}

class Usuario{

	constructor(nombre, apellidos){
		super(nombre,apellidos);
		this.juegosComprados = [];
		this.votos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}

	get juegosComprados(){
		return this._juegosComprados;
	}

	set juegosComprados(juegos){
		this._juegosComprados=juegos;
	}

	
	incluirJuegosComprados(juego){
		this._juegosComprados.push(juego);
	}

	contieneNombre(nombre){
		let contiene = false;
		let nombreEncontrado = quitarEspaciosArrays(nombre);
		if(nombreEncontrado !== null){
			contiene = this.nombre.toUpperCase().includes(nombreEncontrado);
		}
		return contiene;
	}
}

class Editorial{

	constructor(nombre){
		this.nombre = nombre;
		this.juegos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get juegos(){
		return this._juegos;
	}

	set juegos(juegos){
		this._juegos=juegos;
	}
	
	incluirJuegos(juego){
		this._juegos.push(juego);
	}

	contieneNombre(nombre){
		let contiene = false;
		let nombreEncontrado = quitarEspaciosArrays(nombre);
		if(nombreEncontrado !== null){
			contiene = this.nombre.toUpperCase().includes(nombreEncontrado);
		}
		return contiene;
	}

	toString(){
		return `${this.nombre}`;
	}
}

class Juego{

	
	constructor(titulo,creador,genero,editorial){
		this.titulo = titulo;
		this.creador = creador;
		this.genero = genero;
		this.editorial = editorial;
	}

	get titulo(){
		return this._titulo;
	}

	set titulo(titulo){
		this._titulo=titulo;
	}

	get editorial(){
		return this._editorial;
	}

	set editorial(editorial){
		this._editorial=editorial;
	}

	get creador(){
		return this._creador;
	}

	set creador(creador){
		this._creador=creador;
	}

	get genero(){
		return this._genero;
	}

	set genero(genero){
		this._genero=genero;
	}

	incluirJuegosComprados(juego){
		this._juegosComprados.push(juego);
	}

	contieneTitulo(titulo){
		let contiene = false;
		let tituloEncontrado = quitarEspaciosArrays(titulo);
		if(tituloEncontrado !== null){
			contiene = this.titulo.toUpperCase().includes(tituloEncontrado);
		}
		return contiene;
	}
	
	contieneTipo(tipo){
		let contiene = false;
		let tipoEncontrado = quitarEspaciosArrays(tipo);
		if(tipoEncontrado != null){
			contiene = this.tipo.toUpperCase().includes(tipoEncontrado);
		}
		return contiene;
	}
	
}

class Creador{

	constructor(nombre,apellidos){
		super(nombre,apellidos);
		this.juegos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}

	get juegos(){
		return this._juegos;
	}

	set juegos(juegos){
		this._juegos=juegos;
	}
	
	incluirJuegos(juego){
		this._juegos.push(juego);
	}

	toString(){
		return `${this.nombre} ${this.apellidos}`;
	}
}

mostrarEnHTML(nodoHTML){
	let bloque = document.createElement("div");
	bloque.className = "juego";
	bloque.setAttribute("data-identificador", noEspacios(this.titulo));
	let titulo = document.createElement("h2");
	titulo.innerHTML = this.titulo; 
	titulo.setAttribute("data-identificador","titulo");
	let genero = document.createElement("h3");
	genero.innerHTML = this.genero;
	genero.setAttribute("data-identificador","genero");
	let creador = document.createElement("p");
	creador.innerHTML = `${this.creador}`;
	creador.setAttribute("data-identificador","creador");
	let editorial = document.createElement("p");
	editorial.innerHTML = `${this.editorial}`;
	editorial.setAttribute("data-identificador","editorial");
	let contadorLikes = document.createElement("i");
	contadorLikes.setAttribute("data-identificador","contadorLikes");
	contadorLikes.classList.add("far");
	contadorLikes.classList.add("fa-thumbs-up");
	contadorLikes.innerHTML = `${this.likes}`;
	let contadorDislikes = document.createElement("i");
	contadorDislikes.setAttribute("data-identificador","contadorDislikes");
	contadorDislikes.classList.add("far");
	contadorDislikes.classList.add("fa-thumbs-down");
	contadorDislikes.innerHTML = `${this.dislikes}`;
	bloque.append(titulo);
	bloque.append(genero);
	bloque.append(creador);
	bloque.append(editorial);
	bloque.append(contadorLikes);
	bloque.append(contadorDislikes);
	nodoHTML.appendChild(bloque);
}



