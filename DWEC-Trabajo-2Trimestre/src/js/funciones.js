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
    }
};



// INSERTAR //

$(document).ready(function(){
$('#prueba').click(function(event){
    event.preventDefault();
    $.ajax({
        url: "servidor/clientes/anadirClientesConn.php",
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

function checkForm() {
    // Fetching values from all input fields and storing them in variables.
    var idCheck = document.getElementById("id").value;
    var nombreCheck = document.getElementById("nombre").value;
    var apellidosCheck = document.getElementById("apellidos").value;
    var emailCheck = document.getElementById("email").value;
    var telefonoCheck = document.getElementById("telefono").value;
    var dniCheck = document.getElementById("dni").value;
    //Check input Fields Should not be blanks.
    if (idCheck == '' || nombreCheck == '' || apellidosCheck == '' || emailCheck == '' || telefonoCheck == '' || dniCheck == '') {
    alert("Rellena todos los campos");
    } else {
    //Notifying error fields
    var id = document.getElementById("idError");
    var nombre = document.getElementById("nombreError");
    var apellidos = document.getElementById("apellidosError");
    var email = document.getElementById("emailError");
    var telefono = document.getElementById("telefonoError");
    var dni = document.getElementById("dniError");
    //Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
    if (id.innerHTML == 'Id inválido, solo puede contener números' || nombre.innerHTML == 'Nombre inválido, solo puede contener letras' || apellidos.innerHTML == 'Apellidos inválidos, solo pueden contener letras' || email.innerHTML == 'Email inválido, debe ser como el siguiente formato: example@gmail.com' || telefono.innerHTML == 'Teléfono inválido, solo puede contener 9 números y -' || dni.innerHTML == 'DNI inválido, solo puede contener 8 números y una letra al final') {
    alert("Rellena la información válida");
    } else {
    //Submit Form When All values are valid.
    document.getElementById("myForm").submit();
    }
    }
    }
    // AJAX code to check input field values when onblur event triggerd.
    function validate(field, query) {
    var xmlhttp;
    if (window.XMLHttpRequest) { 
    xmlhttp = new XMLHttpRequest();
    } else { 
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
    document.getElementById(field).innerHTML = "Validando";
    } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    document.getElementById(field).innerHTML = xmlhttp.responseText;
    } else {
    document.getElementById(field).innerHTML = "Error Occurred. <a href='anadirClientes.php'>Reload Or Try Again</a> the page.";
    }
    }
    xmlhttp.open("GET", "servidor/clientes/validarAnadirClientes.php?field=" + field + "&query=" + query, false);
    xmlhttp.send();
    }