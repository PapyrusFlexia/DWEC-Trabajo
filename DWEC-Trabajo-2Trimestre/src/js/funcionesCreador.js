var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/creador/mostrarCreador.php", true);
ajax.send();

ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dataCreador = JSON.parse(this.responseText);
        console.log(dataCreador);

        var html = "";
        for(var a = 0; a < dataCreador.length; a++) {
            var id = dataCreador[a].id;
            var nombre = dataCreador[a].nombre;
            var apellidos = dataCreador[a].apellidos;
            var email = dataCreador[a].email;

            html += "<tr>";
                html += "<td>" + id + "</td>";
                html += "<td>" + nombre + "</td>";
                html += "<td>" + apellidos + "</td>";
                html += "<td>" + email + "</td>";
            html += "</tr>";
        }
        document.getElementById("dataCreador").innerHTML = html;
    }
};

// INSERTAR //

$(document).ready(function(){
    $('#insert').click(function(event){
        event.preventDefault();
        $.ajax({
            url: "servidor/creador/anadirCreadorConn.php",
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
    form.append("apellidos",$("#apellidos").val());
    form.append("email",$("#email").val());
    fetch("servidor/creador/editarCreadorConn.php",{
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
    fetch("servidor/creador/borrarCreadorConn.php",{
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
			url:"servidor/creador/buscarCreadorConn.php",
			method:"post",
			data:{query:query},
			success:function(data)
			{
				$('#result').html(data);
			}
		});
	}
