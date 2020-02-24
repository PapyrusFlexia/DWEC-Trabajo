var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/mostrarJuegos.php", true);
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
            url: "anadirJuegosConn.php",
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