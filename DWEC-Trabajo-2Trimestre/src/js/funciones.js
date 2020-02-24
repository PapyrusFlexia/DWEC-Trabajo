var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/mostrarClientes.php", true);
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
$('#insert').click(function(event){
    event.preventDefault();
    $.ajax({
        url: "anadirClientesConn.php",
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
    fetch("editarClientesConn.php",{
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
