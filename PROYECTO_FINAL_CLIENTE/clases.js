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