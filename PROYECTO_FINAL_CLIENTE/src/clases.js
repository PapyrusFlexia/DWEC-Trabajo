class Persona {

    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    get nombre() {
        return `${this._nombre}`;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidos() {
        return `${this._apellidos}`;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
}

class Usuario extends Persona {

    constructor(nombre, apellidos) {
        super(nombre, apellidos);
        this.juegosComprados = [];
        this.votos = [];
    }

    get nombre() {
        return `${this._nombre}`;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidos() {
        return `${this._apellidos}`;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    get juegosComprados() {
        return this._juegosComprados;
    }

    set juegosComprados(juegos) {
        this._juegosComprados = juegos;
    }

    get votos() {
        return this._votos;
    }

    set votos(votos) {
        this._votos = votos;
    }
    /**
     * Funcion que añade un juego a juegosComprados
     * @param {Juegos} juego
     */
    incluirJuegosComprados(juego) {
        this.juegosComprados.push(juego);
    }

    contieneNombre(nombre) {
        let contiene = false;
        let nombreEncontrado = quitarEspaciosArrays(nombre);
        if (nombreEncontrado !== null) {
            contiene = this.nombre.toUpperCase().includes(nombreEncontrado);
        }
        return contiene;
    }
    /**
     * Funcion que añade un voto a votos
     * @param {Voto} voto
     */
    incluirVoto(voto) {
        this._votos.push(voto);
    }
}

class Creador extends Persona {

    constructor(nombre, apellidos) {
        super(nombre, apellidos);
        this.juegos = [];
    }

    get nombre() {
        return `${this._nombre}`;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidos() {
        return `${this._apellidos}`;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    get juegos() {
        return this._juegos;
    }

    set juegos(juegos) {
        this._juegos = juegos;
    }
    /**
     * Funcion que añade un juego a juegos
     * @param {Juegos} juego 
     */
    incluirJuegos(juego) {
        this._juegos.push(juego);
    }

    toString() {
        return `${this.nombre} ${this.apellidos}`;
    }
}

class Tienda {

    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.juegos = [];
    }

    get nombre() {
        return `${this._nombre}`;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get juegos() {
        return this._juegos;
    }

    set juegos(juegos) {
        this._juegos = juegos;
    }
    añadirJuegos(juego) {
        this._juegos.push(juego);
    }

    get direccion() {
        return `${this._direccion}`;
    }

    set direccion(direccion) {
        this._direccion = direccion;
    }
    /**
     * Funcion que añade un juego a juegos
     * @param {Juego} juego 
     */
    incluirJuegos(juego) {
        this._juegos.push(juego);
    }

}

class Editorial {

    constructor(nombre) {
        this.nombre = nombre;
        this.juegos = [];
    }

    get nombre() {
        return `${this._nombre}`;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get juegos() {
        return this._juegos;
    }

    set juegos(juegos) {
        this._juegos = juegos;
    }
    /**
     * Funcion que añade un juego a juegos
     * @param {Juego} juego 
     */
    incluirJuegos(juego) {
        this._juegos.push(juego);
    }
    /**
     * Funcion que recibe un nodo y que sirve para validar si un input contiene un nombre
     * @param {nodo} nombre el nodo del nombre
     */
    contieneNombre(nombre) {
        let contiene = false;
        let nombreEncontrado = quitarEspaciosArrays(nombre);
        if (nombreEncontrado !== null) {
            contiene = this.nombre.toUpperCase().includes(nombreEncontrado);
        }
        return contiene;
    }

    toString() {
        return `${this.nombre}`;
    }
}

class Juego {

    constructor(titulo, creador, genero, editorial, comprador) {
        this.titulo = titulo;
        this.creador = creador;
        this.genero = genero;
        this.editorial = editorial;
        this.comprador = comprador;
        this.votos = [];
        this.likes = 0;
        this.dislikes = 0;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    get editorial() {
        return this._editorial;
    }

    set editorial(editorial) {
        this._editorial = editorial;
    }

    get comprador() {
        return this._comprador;
    }

    set comprador(comprador) {
        this._comprador = comprador;
    }

    get creador() {
        return this._creador;
    }

    set creador(creador) {
        this._creador = creador;
    }

    get genero() {
        return this._genero;
    }

    set genero(genero) {
        this._genero = genero;
    }
    get votos() {
        return this._votos;
    }

    set votos(votos) {
        this._votos = votos;
    }

    mostrarEnHTML(nodoHTML) {
        let bloque = document.createElement("div");
        bloque.className = "juego";
        bloque.setAttribute("data-identificador", noEspacios(this.titulo));
        let titulo = document.createElement("h2");
        titulo.innerHTML = this.titulo;
        titulo.setAttribute("data-identificador", "titulo");
        let genero = document.createElement("h3");
        genero.innerHTML = this.genero;
        genero.setAttribute("data-identificador", "genero");
        let creador = document.createElement("p");
        creador.innerHTML = `${this.creador}`;
        creador.setAttribute("data-identificador", "creador");
        let editorial = document.createElement("p");
        editorial.innerHTML = `${this.editorial}`;
        editorial.setAttribute("data-identificador", "editorial");
        let comprador = document.createElement("p");
        comprador.innerHTML = `${this.comprador}`;
        comprador.setAttribute("data-identificador", "comprador");
        let contadorLikes = document.createElement("i");
        contadorLikes.setAttribute("data-identificador", "contadorLikes");
        contadorLikes.classList.add("far");
        contadorLikes.classList.add("fa-thumbs-up");
        contadorLikes.innerHTML = `${this.likes}`;
        let contadorDislikes = document.createElement("i");
        contadorDislikes.setAttribute("data-identificador", "contadorDislikes");
        contadorDislikes.classList.add("far");
        contadorDislikes.classList.add("fa-thumbs-down");
        contadorDislikes.innerHTML = `${this.dislikes}`;
        bloque.append(titulo);
        bloque.append(genero);
        bloque.append(creador);
        bloque.append(editorial);
        bloque.append(comprador);
        bloque.append(contadorLikes);
        bloque.append(contadorDislikes);
        nodoHTML.appendChild(bloque);
    }
    /**
     * Funcion que recibe un nodo y que sirve para validar si un input contiene un titulo
     * @param {nodo} titulo el nodo del titulo
     */
    contieneTitulo(titulo) {
        let contiene = false;
        let tituloEncontrado = quitarEspaciosArrays(titulo);
        if (tituloEncontrado !== null) {
            contiene = this.titulo.toUpperCase().includes(tituloEncontrado);
        }
        return contiene;
    }
    /**
     * Funcion que recibe un nodo y que sirve para validar si un input contiene un genero
     * @param {nodo} genero el nodo del genero
     */
    contieneGenero(genero) {
        let contiene = false;
        let generoEncontrado = quitarEspaciosArrays(genero);
        if (generoEncontrado != null) {
            contiene = this.genero.toUpperCase().includes(generoEncontrado);
        }
        return contiene;
    }
    /**
     * Funcion que recibe un nodo y que sirve para validar si un input contiene un creador
     * @param {nodo} creador el nodo del creador
     */
    contieneCreador(creador) {
        let contiene = false;
        let creadorEncontrado = quitarEspaciosArrays(creador);
        if (creadorEncontrado !== null) {
            contiene = this.creador.apellidos.toUpperCase().includes(creadorEncontrado);
        }
        return contiene;
    }
    /**
     * Funcion que recibe un nodo y que sirve para validar si un input contiene una editorial
     * @param {nodo} editorial el nodo de la editorial
     */
    contieneEditorial(editorial) {
        let contiene = false;
        let editorialEncontrada = quitarEspaciosArrays(editorial);
        if (editorialEncontrada !== null) {
            contiene = this.editorial.nombre.toUpperCase().includes(editorialEncontrada);
        }
        return contiene;
    }
    /**
     * Funcion que recibe un nodo y que sirve para validar si un input contiene un nombre
     * @param {nodo} nombre el nodo del nombre
     */
    contieneNombre(nombre) {
        let contiene = false;
        let nombreEncontrado = quitarEspaciosArrays(nombre);
        if (nombreEncontrado !== null) {
            contiene = this.nombre.toUpperCase().includes(nombreEncontrado);
        }
        return contiene;
    }

    /**
     * Funcion que añade un voto a votos
     * @param {Voto} voto
     */
    incluirVoto(voto) {
        this._votos.push(voto);
        this.contarVotos();
    }
    /**
     * Funcion que cuenta los likes y dislikes de un juego
     */
    contarVotos() {
        this.likes = 0;
        this.dislikes = 0;
        for (let i = 0; i < this.votos.length; i++) {
            if (this.votos[i]._puntuacion === "like") {
                this.likes++;
            } else {
                this.dislikes++;
            }
        }
    }
}

class Votos {

    constructor(usuario, juego, puntuacion, comentario) {
        this.usuario = usuario;
        this.juego = juego;
        this.puntuacion = puntuacion;
        this.comentario = comentario;
        usuario.incluirVoto(this);
        juego.incluirVoto(this);

    }

    get puntuacion() {
        return `${this._puntuacion}`;
    }

    set puntuacion(puntuacion) {
        this._puntuacion = puntuacion;
    }

    get comentario() {
        return `${this._comentario}`;
    }

    set comentario(comentario) {
        this._comentario = comentario;
    }

    get usuario() {
        return `${this._usuario}`;
    }

    set usuario(usuario) {
        this._usuario = usuario;
    }

    get juego() {
        return `${this._juego}`;
    }

    set juego(juego) {
        this._juego = juego;
    }


}