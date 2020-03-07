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

function validarId() {
    let inputid = $("#id").val();
    let input = $("#id");

    $.ajax({
        url: "servidor/clientes/validarClientesConn.php",
        data: { nombre: inputid },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.id);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarNombre() {
    let inputnombre = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "servidor/clientes/validarClientesConn.php",
        data: { nombre: inputnombre },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.nombre);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



function validarApellidos() {
    let inputapellidos = $("#apellidos").val();
    let inputnombre = $("#nombre").val();
    let Input = $("#apellidos");
    $.ajax({
        url: "servidor/clientes/validarClientesConn.php",
        data: { apellido: inputapellidos, nombre: inputnombre },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.apellidos);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarEmail() {
    let inputemail = $("#email").val();
    let Input = $("#email");
    $.ajax({
        url: "servidor/clientes/validarClientesConn.php",
        data: { email: inputemail },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.email);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarTelefono() {
    let inputtelefono = $("#telefono").val();
    let Input = $("#telefono");
    $.ajax({
        url: "servidor/clientes/validarClientesConn.php",
        data: { telefono: inputtelefono },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.telefono);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarDni() {
    let inputdni = $("#dni").val();
    let Input = $("#dni");
    $.ajax({
        url: "servidor/clientes/validarClientesConn.php",
        data: { dni: inputdni },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.dni);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputid = $("#id");
    let inputnombre = $("#nombre");
    let inputapellidos = $("#apellido");
    let inputemail = $("#email");
    let inputelefono = $("#telefono");
    let inpudni = $("#dni");
    
    
    $.ajax({
        url: "servidor/clientes/validarClientesConn.php",
        data: { id: inputid.val(), nombre: inputnombre.val(), apellido: inputapellidos.val(), producto: inputemail.val(), telefono: inputtelefono.val(), dni : inputdni.val() },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputid, text.id);
            gestionarErrores(inputnombre, text.nombre);
            gestionarErrores(inputapellidos, text.apellidos);
            gestionarErrores(inputemail, text.email);
            gestionarErrores(inputtelefono, text.telefono);
            gestionarErrores(inputdni, text.dni);

            if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputapellidos, text.apellidos) === false &&
                gestionarErrores(inputemail, text.email) === false &&
                gestionarErrores(inputtelefono, text.telefono) === false &&
                gestionarErrores(inputdni, text.dni) === false) {
                $.ajax({
                    url: "servidor/clientes/anadirClientesConn.php",
                    data: { id: inputid.val(), nombre: inputnombre.val(), apellidos: inputapellidos.val(), email: inputemail.val(),  telefono: inputtelefono.val(), dni: inputdni.val() },
                    method: "POST",
                    dataType: "JSON",
                });
                $("#resultado").html("Se ha creado correctamente");
            }

        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}


function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}



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
