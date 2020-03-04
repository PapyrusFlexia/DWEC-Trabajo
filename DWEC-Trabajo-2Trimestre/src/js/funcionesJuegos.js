var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/juegos/mostrarJuegos.php", true);
ajax.send();

ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dataJuegos = JSON.parse(this.responseText);
        console.log(dataJuegos);

        var html = "";
        for(var a = 0; a < dataJuegos.length; a++) {
            var id = dataJuegos[a].id;
            var nombre = dataJuegos[a].nombre;
            var creador = dataJuegos[a].creador;
            var genero = dataJuegos[a].genero;
            var precio = dataJuegos[a].precio;
            var editorial = dataJuegos[a].editorial;

            html += "<tr>";
                html += "<td>" + id + "</td>";
                html += "<td>" + nombre + "</td>";
                html += "<td>" + creador + "</td>";
                html += "<td>" + genero + "</td>";
                html += "<td>" + precio + "</td>";
                html += "<td>" + editorial + "</td>";
            html += "</tr>";
        }
        document.getElementById("dataJuegos").innerHTML = html;
    }
};

// INSERTAR //

$(document).ready(function(){
    $('#insert').click(function(event){
        event.preventDefault();
        $.ajax({
            url: "servidor/juegos/anadirJuegosConn.php",
            method: "post",
            data: $('form').serialize(),
            dataType: "text",
            success: function(strMessage){
                $('#message').text(strMessage)
            }
        })
    })
        
    })
    
    // EDITAR //

    var procesos = [];
$(function(){

    $("#formActualizar").submit(function(event){
        event.preventDefault();
        $("#btnActualizar").prop("disabled",true);
        $("#formActualizar input").prop("readOnly",true);   
        actualizar();   
    });
});


function actualizar(){
    let form = new FormData();
    form.append("id",$("#id").val());
    form.append("nombre",$("#nombre").val());
    form.append("creador",$("#creador").val());
    form.append("genero",$("#genero").val());
    form.append("precio",$("#precio").val());
    form.append("editorial",$("#editorial").val());
    fetch("servidor/juegos/editarJuegosConn.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then($("#resultadoActualizar").html("Actualizado"))
    .catch(function(err){
        console.log(err);
        alert("Error");
            $("#resultadoActualizar").html("Error");    
    });    
}

// ELIMINAR //

$(function(){
    $("button[data-accion='eliminar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEliminar(boton.attr("data-ideliminar"));
    });

    $("button[data-accion='confirmar-eliminar']").on("click",function(event){
        let boton = $(event.target);
        eliminarJuegomesa(boton.attr("data-ideliminar"));
    });
});

function mostrarModalEliminar(idEliminar){
    $("#botonConfirmarEliminar").attr("data-ideliminar",idEliminar);
    $("#modalEliminar").modal("show");
}

function eliminarJuegomesa(idEliminar){
    let form = new FormData();
    form.append("id",idEliminar);
    fetch("servidor/juegos/borrarJuegosConn.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEliminar").modal("hide");
        $("tr[data-idJuegomesa='"+idEliminar+"']").remove();
    });
}

// BÚSQUEDA //

$(document).ready(function(){
	load_data();
	
	$('#search_text').keyup(function(){
		var search = $(this).val();
		if(search != '')
		{
			load_data(search);
		}
		else
		{
			load_data();			
		}
	});
});

function load_data(query)
	{
		$.ajax({
			url:"servidor/juegos/buscarJuegosConn.php",
			method:"post",
			data:{query:query},
			success:function(data)
			{
				$('#result').html(data);
			}
		});
    }
    
// BÚSQUEDA POR RADIO BUTTON //

document.addEventListener("DOMContentLoaded",function(){
    let formularioBusqueda = document.getElementById("formularioBusqueda");
    formularioBusqueda.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaBusqueda();
    });
})

function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ 
                                     
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                crearTablaJSON(this.responseText);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function crearTablaJSON(respuesta){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados= JSON.parse(respuesta);
    let salida="<table border='1'><tr><th>ID</th><th>NOMBRE</th><th>CREADOR</th><th>GENERO</th><th>PRECIO</th><th>EDITORIAL</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.id+"</td><td>"+objeto.nombre+"</td><td>"+objeto.creador+"</td><td>"+objeto.genero +"</td><td>"+objeto.precio +"</td><td>"+objeto.editorial +"</td></tr>";
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}

function realizarPeticionAsincronaBusqueda(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";

    let genero = "";
    if(document.getElementById("rol").checked){
        genero = document.getElementById("rol").value;
    }else if(document.getElementById("misterio").checked){
        genero = document.getElementById("misterio").value;
    }else{
        genero = document.getElementById("supervivencia").value;
    }

    document.getElementById("spinner").style ="display:block";
    
    miXHR = new objetoXHR();
    /*miXHR.open("GET", "servidor/datosBusqueda.php?nombre="+nombre, true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);*/

    miXHR.open("POST", "servidor/juegos/buscarJuegosRadioConn.php", true);
    let datos = "genero="+genero;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(datos);
}

