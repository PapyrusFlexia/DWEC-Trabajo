var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/clientes/mostrarClientes.php", true);
ajax.send();

ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);

        var html = "";
        for(var a = 0; a < data.length; a++) {
            var id = data[a].id;
            var nombre = data[a].nombre;
            var apellidos = data[a].apellidos;
            var email = data[a].email;
            var telefono = data[a].telefono;
            var dni = data[a].dni;

            html += "<tr>";
                html += "<td>" + id + "</td>";
                html += "<td>" + nombre + "</td>";
                html += "<td>" + apellidos + "</td>";
                html += "<td>" + email + "</td>";
                html += "<td>" + telefono + "</td>";
                html += "<td>" + dni + "</td>";
            html += "</tr>";

          
        }
        document.getElementById("data").innerHTML = html;
        $(document).ready(function() {
            $('#example').DataTable( {
                "lengthMenu": [[5, 10, 15, 20, -1], [5, 10, 15, 20, "Todos"]],
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
                }
                
            } );
        } );
    }
};




// INSERTAR //

$(document).ready(function(){
$('#insert').click(function(event){
    event.preventDefault();
    $.ajax({
        url: "servidor/clientes/anadirClientesConn.php",
        method: "post",
        data: $('form').serialize(),
        dataType: "text",
        success: function(strMessage){
            $('#message').text(strMessage)
            alert("Se ha añadido correctamente");
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
    form.append("telefono",$("#telefono").val());
    form.append("dni",$("#dni").val());
    fetch("servidor/clientes/editarClientesConn.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then($("#resultadoActualizar").html("Actualizado"))
    .catch(function(err){
        console.log(err);
        alert("Se ha editado correctamente");
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
    fetch("servidor/clientes/borrarClientesConn.php",{
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
			url:"servidor/clientes/buscarClientesConn.php",
			method:"post",
			data:{query:query},
			success:function(data)
			{
				$('#result').html(data);
			}
		});
    }

    
// VALIDAR //
