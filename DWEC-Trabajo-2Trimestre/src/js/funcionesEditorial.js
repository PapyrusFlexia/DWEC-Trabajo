var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/mostrarEditorial.php", true);
ajax.send();

ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dataEditorial = JSON.parse(this.responseText);
        console.log(dataEditorial);

        var html = "";
        for(var a = 0; a < dataEditorial.length; a++) {
            var id = dataEditorial[a].id;
            var nombre = dataEditorial[a].nombre;
            var direccion = dataEditorial[a].direccion;
            var email = dataEditorial[a].email;

            html += "<tr>";
                html += "<td>" + id + "</td>";
                html += "<td>" + nombre + "</td>";
                html += "<td>" + direccion + "</td>";
                html += "<td>" + email + "</td>";
            html += "</tr>";
        }
        document.getElementById("dataEditorial").innerHTML = html;
    }
};

// INSERTAR //

$(document).ready(function(){
    $('#insert').click(function(event){
        event.preventDefault();
        $.ajax({
            url: "anadirEditorialConn.php",
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