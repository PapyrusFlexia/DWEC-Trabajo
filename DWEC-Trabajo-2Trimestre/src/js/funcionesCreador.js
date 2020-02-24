var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/mostrarCreador.php", true);
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
            url: "anadirCreadorConn.php",
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