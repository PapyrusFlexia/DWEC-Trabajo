var ajax = new XMLHttpRequest();
    ajax.open("GET", "data.php", true);
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