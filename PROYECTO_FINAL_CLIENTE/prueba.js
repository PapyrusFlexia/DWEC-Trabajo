function prueba(){
	var i = 0;
	return i;
    
}
prueba();
/** 
@description Muestra nombre y apellidos 
@param {nombre} nombre de la persona
@param {apellidos} apellidos de la persona
@return {nombreCompleto} nombreCompleto de la persona

**/
function pruebaNombre(nombre,apellidos){
    let nombreCompleto = nombre + " " + apellidos;
    console.log(nombreCompleto);
    return nombreCompleto;
}