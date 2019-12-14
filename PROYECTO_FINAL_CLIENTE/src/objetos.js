let usuariouno= new Usuario("Pablo","Vega", "DnD");
let usuariodos = new Usuario("Carlos", "García", "La llamada de Cthulhu");
let usuariotres= new Usuario("Dingus","Mingus", "Weegee");
let usuariocuatro = new Usuario("Lou", "Logio", "Heehee");
let usuariocinco = new Usuario("Alejandro","Capo", "Referencia Entendida");

let listaUsuarios = [usuariouno,usuariodos,usuariotres,usuariocuatro,usuariocinco];

let creador1 = new Creador("Gary","Gigax");
let creador2 = new Creador("Sandy","Petersen");
let creador3 = new Creador("Pablo","Vega");
let creador4 = new Creador("Michael","Jackson");
let creador5 = new Creador("Morgan","Freeman");
let creador6 = new Creador("Carl","Johnson");
let creador7 = new Creador("Pedro","Gil");
let creador8 = new Creador("Fred","Hicks");
let creador9 = new Creador("Alejandro","Fernández");

let listaCreadores = [creador1,creador2,creador3,creador4,creador5,creador6,creador7,creador8,creador9];

let editorial1 = new Editorial("Wizards of the Coast");
let editorial2 = new Editorial("Chaosium");
let editorial3 = new Editorial("Paninos");
let editorial4 = new Editorial("Mierdijuegos");
let editorial5 = new Editorial("Ada Its");
let editorial6 = new Editorial("Rockstar");
let editorial7 = new Editorial("Holocubierta");
let editorial8 = new Editorial("Evil Hat");
let editorial9 = new Editorial("Memeverso");

let listaEditoriales = [editorial1,editorial2,editorial3,editorial4,editorial5,editorial6,editorial7,editorial8,editorial9];



let juego1 = new Juego("DnD", "Gary Gigax", "Fantasía", "Wizards of the Coast");
let juego2 = new Juego("La llamada de Cthulhu", "Sandy Petersen", "Misterio", "Chaosium");
let juego3 = new Juego("Weegee", "Pablo Vega", "Ciencia Ficcion", "Paninos");
let juego4 = new Juego("Heehee", "Michael Jackson", "Terror", "Mierdijuegos");
let juego5 = new Juego("Referencia Entendida", "Morgan Freeman", "Sci-Fi", "Ada Its");
let juego6 = new Juego("Aw Shit Here We Go Again", "Carl Johnson", "Estrategia", "Rockstar");
let juego7 = new Juego("La Marca Del Este", "Pedro Gil", "Fantasía", "Holocubierta");
let juego8 = new Juego("El Cero", "Pablo Vega", "Misterio", "Chaosium");
let juego9 = new Juego("La Ciudad de la Locura", "Gary Gigax", "Terror", "Wizards of the Coast");
let juego10 = new Juego("Fate", "Fred Hicks", "Fantasía", "Evil Hat");
let juego11 = new Juego("Fate Acelerado", "Fred Hicks", "Estrategia", "Evil Hat");
let juego12 = new Juego("Pipo", "Alejandro Fernández", "Misterio", "Memeverso");
let juego13 = new Juego("Yeetus Deletus", "Alejandro Fernández", "Sci-Fi", "Memeverso");
let juego14 = new Juego("Age of Empires", "Sandy Petersen", "Estrategia", "Chaosium");
let juego15 = new Juego("Chainmail", "Gary Gigax", "Fantasía", "Mierdijuegos");

editorial1.incluirJuegos(juego1);
editorial1.incluirJuegos(juego9);

editorial2.incluirJuegos(juego2);
editorial2.incluirJuegos(juego8);
editorial2.incluirJuegos(juego14);

editorial3.incluirJuegos(juego3);

editorial4.incluirJuegos(juego4);
editorial4.incluirJuegos(juego15);

editorial5.incluirJuegos(juego5);

editorial6.incluirJuegos(juego6);

editorial7.incluirJuegos(juego7);

editorial8.incluirJuegos(juego10);
editorial8.incluirJuegos(juego11);

editorial9.incluirJuegos(juego12);
editorial9.incluirJuegos(juego13);


usuariouno.incluirJuegosComprados(juego1);   /** NOMBRES DE LOS JUEGOS */
usuariodos.incluirJuegosComprados(juego2);
usuariotres.incluirJuegosComprados(juego3);
usuariocuatro.incluirJuegosComprados(juego4);
usuariocinco.incluirJuegosComprados(juego5);

let juegos= [];

juegos.push(juego1);
juegos.push(juego2);
juegos.push(juego3);
juegos.push(juego4);
juegos.push(juego5);
juegos.push(juego6);
juegos.push(juego7);
juegos.push(juego8);
juegos.push(juego9);
juegos.push(juego10);
juegos.push(juego11);
juegos.push(juego12);
juegos.push(juego13);
juegos.push(juego14);
juegos.push(juego15);

//Declarar tienda
let tienda = new Tienda("Tienda","Calle de la Tienda");
tienda.incluirJuegos(juego1);
tienda.incluirJuegos(juego2);
tienda.incluirJuegos(juego3);
tienda.incluirJuegos(juego4);
tienda.incluirJuegos(juego5);
tienda.incluirJuegos(juego6);
tienda.incluirJuegos(juego7);
tienda.incluirJuegos(juego8);
tienda.incluirJuegos(juego9);
tienda.incluirJuegos(juego10);
tienda.incluirJuegos(juego11);
tienda.incluirJuegos(juego12);
tienda.incluirJuegos(juego13);
tienda.incluirJuegos(juego14);
tienda.incluirJuegos(juego15);

//Añadir juegos comprados a los usuarios
usuariouno.incluirJuegosComprados(juego1);
usuariodos.incluirJuegosComprados(juego2);
usuariotres.incluirJuegosComprados(juego3);
usuariocuatro.incluirJuegosComprados(juego4);
usuariocinco.incluirJuegosComprados(juego5);

//Añadiendo juegos a los creadores

creador1.incluirJuegos(juego1);
creador1.incluirJuegos(juego9);
creador1.incluirJuegos(juego15);

creador2.incluirJuegos(juego2);
creador2.incluirJuegos(juego14);

creador3.incluirJuegos(juego3);
creador3.incluirJuegos(juego8);

creador4.incluirJuegos(juego4);

creador5.incluirJuegos(juego5);

creador6.incluirJuegos(juego6);

creador7.incluirJuegos(juego7);

creador8.incluirJuegos(juego10);
creador8.incluirJuegos(juego11);

creador9.incluirJuegos(juego12);
creador9.incluirJuegos(juego13);