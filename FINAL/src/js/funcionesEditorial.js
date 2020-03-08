"use strict";

var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/editorial/mostrarEditorial.php", true);
ajax.send();

ajax.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var dataEditorial = JSON.parse(this.responseText);
    console.log(dataEditorial);
    var html = "";

    for (var a = 0; a < dataEditorial.length; a++) {
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
    $(document).ready(function () {
      $('#example').DataTable({
        "lengthMenu": [[5, 10, 15, 20, -1], [5, 10, 15, 20, "Todas"]],
        "language": {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
      });
    });
  }
};

function validarId() {
  var inputid = $("#id").val();
  var input = $("#id");
  $.ajax({
    url: "servidor/editorial/validarEditorialConn.php",
    data: {
      id: inputid
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(input, text.id);
    }
  }).fail(function () {
    alert("Error");
    $("#error").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarNombre() {
  var inputnombre = $("#nombre").val();
  var input = $("#nombre");
  $.ajax({
    url: "servidor/editorial/validarEditorialConn.php",
    data: {
      nombre: inputnombre
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(input, text.nombre);
    }
  }).fail(function () {
    alert("Error");
    $("#error").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarDireccion() {
  var inputdireccion = $("#direccion").val();
  var Input = $("#direccion");
  $.ajax({
    url: "servidor/editorial/validarEditorialConn.php",
    data: {
      direccion: inputdireccion
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.direccion);
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarEmail() {
  var inputemail = $("#email").val();
  var Input = $("#email");
  $.ajax({
    url: "servidor/editorial/validarEditorialConn.php",
    data: {
      email: inputemail
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.email);
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarFormularioInsertar() {
  event.preventDefault();
  validacionFormularioInsertar();
}

function validacionFormularioInsertar() {
  var inputid = $("#id");
  var inputnombre = $("#nombre");
  var inputdireccion = $("#direccion");
  var inputemail = $("#email");
  $.ajax({
    url: "servidor/clientes/validarEditorialConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      direccion: inputdireccion.val(),
      producto: inputemail.val()
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(inputid, text.id);
      gestionarErrores(inputnombre, text.nombre);
      gestionarErrores(inputdireccion, text.direccion);
      gestionarErrores(inputemail, text.email);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputdireccion, text.direccion) === false && gestionarErrores(inputemail, text.email) === false) {
        $.ajax({
          url: "servidor/editorial/anadirEditorialConn.php",
          data: {
            id: inputid.val(),
            nombre: inputnombre.val(),
            apellidos: inputapellidos.val(),
            email: inputemail.val()
          },
          method: "POST",
          dataType: "JSON"
        });
        $("#resultado").html("Se ha insertado correctamente");
        alert("Se ha insertado correctamente");
      }
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarFormularioEditar() {
  event.preventDefault();
  validacionFormularioEditar();
}

function validacionFormularioEditar() {
  var inputid = $("#id");
  var inputnombre = $("#nombre");
  var inputdireccion = $("#direccion");
  var inputemail = $("#email");
  $.ajax({
    url: "servidor/editorial/validarEditorialConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      direccion: inputdireccion.val(),
      producto: inputemail.val()
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(inputid, text.id);
      gestionarErrores(inputnombre, text.nombre);
      gestionarErrores(inputdireccion, text.direccion);
      gestionarErrores(inputemail, text.email);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputdireccion, text.direccion) === false && gestionarErrores(inputemail, text.email) === false) {
        var form = new FormData();
        form.append("id", $("#id").val());
        form.append("nombre", $("#nombre").val());
        form.append("direccion", $("#direccion").val());
        form.append("email", $("#email").val());
        fetch("servidor/editorial/editarEditorialConn.php", {
          method: "post",
          body: form
        }).then(function (response) {
          return response.json();
        }).then($("#resultadoActualizar").html("Actualizado")).catch(function (err) {
          alert("Se ha editado correctamente");
          console.log(err);
          $("#resultadoActualizar").html("Error");
        });
      }
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function gestionarErrores(input, errores) {
  var hayErrores = false;
  var divErrores = input.next();
  divErrores.html("");
  input.removeClass("bg-success bg-danger");

  if (Object.keys(errores).length === 0) {
    input.addClass("bg-success");
  } else {
    hayErrores = true;
    input.addClass("bg-danger");

    for (var i = 0; Object.keys(errores).length > i; i++) {
      divErrores.append("<div>" + errores[i] + "</div>");
    }
  }

  input.parent().next().remove();
  return hayErrores;
}

function incluirSpinner(input) {
  if (input.parent().next().length === 0) {
    var spin = $(".spinner").first().clone(true);
    input.parent().after(spin);
    spin.show();
  }
} // ELIMINAR //


$(function () {
  $("button[data-accion='eliminar']").on("click", function (event) {
    var boton = $(event.target);
    mostrarModalEliminar(boton.attr("data-ideliminar"));
  });
  $("button[data-accion='confirmar-eliminar']").on("click", function (event) {
    var boton = $(event.target);
    eliminarJuegomesa(boton.attr("data-ideliminar"));
  });
});

function mostrarModalEliminar(idEliminar) {
  $("#botonConfirmarEliminar").attr("data-ideliminar", idEliminar);
  $("#modalEliminar").modal("show");
}

function eliminarJuegomesa(idEliminar) {
  var form = new FormData();
  form.append("id", idEliminar);
  fetch("servidor/editorial/borrarEditorialConn.php", {
    method: "POST",
    body: form
  }).then(function () {
    $("#modalEliminar").modal("hide");
    $("#spinner").css("display", "block");
    alert("Se ha eliminado correctamente!");
    $("#spinner").css("display", "none");
    $("tr[data-idJuegomesa='" + idEliminar + "']").remove();
  });
} // BÚSQUEDA //


$(document).ready(function () {
  load_data();
  $('#search_text').keyup(function () {
    var search = $(this).val();

    if (search != '') {
      load_data(search);
    } else {
      load_data();
    }
  });
});

function load_data(query) {
  $.ajax({
    url: "servidor/editorial/buscarEditorialConn.php",
    method: "post",
    data: {
      query: query
    },
    success: function success(data) {
      $('#result').html(data);
    }
  });
} // BÚSQUEDA POR RADIO BUTTON //


document.addEventListener("DOMContentLoaded", function () {
  var formularioBusqueda = document.getElementById("formularioBusqueda");
  formularioBusqueda.addEventListener("submit", function (event) {
    event.preventDefault();
    realizarPeticionAsincronaBusqueda();
  });
});

function objetoXHR() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0', 'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');

    for (var i = 0; i < versionesIE.length; i++) {
      try {
        return new ActiveXObject(versionesIE[i]);
      } catch (errorControlado) {}
    }
  }

  throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function comprobarEstadoPeticion() {
  switch (this.readyState) {
    case 4:
      if (this.status == 200) {
        crearTablaJSON(this.responseText);
      } else {
        alert("Error");
      }

      document.getElementById("spinner").style = "display:none";
      break;
  }
}

function crearTablaJSON(respuesta) {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
  var resultados = JSON.parse(respuesta);
  var salida = "<table border='1'><tr><th>ID</th><th>NOMBRE</th><th>DIRECCION</th><th>EMAIL</th></tr>";

  for (var i = 0; i < resultados.length; i++) {
    var objeto = resultados[i];
    salida += "<tr><td>" + objeto.id + "</td><td>" + objeto.nombre + "</td><td>" + objeto.direccion + "</td><td>" + objeto.email + "</td></tr>";
  }

  salida += "</table>";
  divResultado.innerHTML = salida;
}

function realizarPeticionAsincronaBusqueda() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
  var direccion = "";

  if (document.getElementById("sevilla").checked) {
    direccion = document.getElementById("sevilla").value;
  } else if (document.getElementById("madrid").checked) {
    direccion = document.getElementById("madrid").value;
  } else {
    direccion = document.getElementById("barcelona").value;
  }

  alert("Se ha mostrado correctamente");
  document.getElementById("spinner").style = "display:block";
  miXHR = new objetoXHR();
  miXHR.open("POST", "servidor/editorial/buscarEditorialRadioConn.php", true);
  var datos = "direccion=" + direccion;
  miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  miXHR.onreadystatechange = comprobarEstadoPeticion;
  miXHR.send(datos);
}