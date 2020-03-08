"use strict";

var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/juegos/mostrarJuegos.php", true);
ajax.send();

ajax.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var dataJuegos = JSON.parse(this.responseText);
    console.log(dataJuegos);
    var html = "";

    for (var a = 0; a < dataJuegos.length; a++) {
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
    url: "servidor/juegos/validarJuegosConn.php",
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
    url: "servidor/juegos/validarJuegosConn.php",
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

function validarCreador() {
  var inputcreador = $("#creador").val();
  var Input = $("#creador");
  $.ajax({
    url: "servidor/juegos/validarJuegosConn.php",
    data: {
      creador: inputcreador
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.creador);
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarPrecio() {
  var inputprecio = $("#precio").val();
  var Input = $("#precio");
  $.ajax({
    url: "servidor/juegos/validarJuegosConn.php",
    data: {
      precio: inputprecio
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.precio);
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarGenero() {
  var inputgenero = $("#genero").val();
  var Input = $("#genero");
  $.ajax({
    url: "servidor/juegos/validarJuegosConn.php",
    data: {
      genero: inputgenero
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.genero);
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarEditorial() {
  var inputeditorial = $("#editorial").val();
  var Input = $("#editorial");
  $.ajax({
    url: "servidor/juegos/validarJuegosConn.php",
    data: {
      editorial: inputeditorial
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.editorial);
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
  var inputcreador = $("#creador");
  var inputprecio = $("#precio");
  var inputgenero = $("#genero");
  var inputeditorial = $("#editorial");
  $.ajax({
    url: "servidor/juegos/validarJuegosConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      creador: inputcreador.val(),
      precio: inputprecio.val(),
      genero: inputgenero.val(),
      editorial: inputeditorial.val()
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(inputid, text.id);
      gestionarErrores(inputnombre, text.nombre);
      gestionarErrores(inputcreador, text.creador);
      gestionarErrores(inputprecio, text.precio);
      gestionarErrores(inputgenero, text.genero);
      gestionarErrores(inputeditorial, text.editorial);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputcreador, text.creador) === false && gestionarErrores(inputprecio, text.precio) === false && gestionarErrores(inputgenero, text.genero) === false && gestionarErrores(inputeditorial, text.editorial) === false) {
        $.ajax({
          url: "servidor/juegos/anadirJuegosConn.php",
          data: {
            id: inputid.val(),
            nombre: inputnombre.val(),
            creador: inputcreador.val(),
            genero: inputgenero.val(),
            precio: inputprecio.val(),
            editorial: inputeditorial.val()
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
  var inputcreador = $("#creador");
  var inputprecio = $("#precio");
  var inputgenero = $("#genero");
  var inputeditorial = $("#editorial");
  $.ajax({
    url: "servidor/juegos/validarJuegosConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      creador: inputcreador.val(),
      precio: inputprecio.val(),
      genero: inputgenero.val(),
      editorial: inputeditorial.val()
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(inputid, text.id);
      gestionarErrores(inputnombre, text.nombre);
      gestionarErrores(inputcreador, text.creador);
      gestionarErrores(inputprecio, text.precio);
      gestionarErrores(inputgenero, text.genero);
      gestionarErrores(inputeditorial, text.editorial);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputcreador, text.creador) === false && gestionarErrores(inputprecio, text.precio) === false && gestionarErrores(inputgenero, text.genero) === false && gestionarErrores(inputeditorial, text.editorial) === false) {
        var form = new FormData();
        form.append("id", $("#id").val());
        form.append("nombre", $("#nombre").val());
        form.append("creador", $("#creador").val());
        form.append("precio", $("#precio").val());
        form.append("genero", $("#genero").val());
        form.append("editorial", $("#editorial").val());
        fetch("servidor/juegos/editarJuegosConn.php", {
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
  fetch("servidor/juegos/borrarJuegosConn.php", {
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
    url: "servidor/juegos/buscarJuegosConn.php",
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
        alert("Error.");
      }

      document.getElementById("spinner").style = "display:none";
      break;
  }
}

function crearTablaJSON(respuesta) {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
  var resultados = JSON.parse(respuesta);
  var salida = "<table border='1'><tr><th>ID</th><th>NOMBRE</th><th>CREADOR</th><th>GENERO</th><th>PRECIO</th><th>EDITORIAL</th></tr>";

  for (var i = 0; i < resultados.length; i++) {
    var objeto = resultados[i];
    salida += "<tr><td>" + objeto.id + "</td><td>" + objeto.nombre + "</td><td>" + objeto.creador + "</td><td>" + objeto.genero + "</td><td>" + objeto.precio + "</td><td>" + objeto.editorial + "</td></tr>";
  }

  salida += "</table>";
  divResultado.innerHTML = salida;
}

function realizarPeticionAsincronaBusqueda() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
  var genero = "";

  if (document.getElementById("rol").checked) {
    genero = document.getElementById("rol").value;
  } else if (document.getElementById("misterio").checked) {
    genero = document.getElementById("misterio").value;
  } else {
    genero = document.getElementById("supervivencia").value;
  }

  alert("Se ha mostrado correctamente");
  document.getElementById("spinner").style = "display:block";
  miXHR = new objetoXHR();
  miXHR.open("POST", "servidor/juegos/buscarJuegosRadioConn.php", true);
  var datos = "genero=" + genero;
  miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  miXHR.onreadystatechange = comprobarEstadoPeticion;
  miXHR.send(datos);
}