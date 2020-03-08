"use strict";

var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/creador/mostrarCreador.php", true);
ajax.send();

ajax.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var dataCreador = JSON.parse(this.responseText);
    console.log(dataCreador);
    var html = "";

    for (var a = 0; a < dataCreador.length; a++) {
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
    $(document).ready(function () {
      $('#example').DataTable({
        "lengthMenu": [[5, 10, 15, 20, -1], [5, 10, 15, 20, "Todos"]],
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
    url: "servidor/creador/validarCreadorConn.php",
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
    url: "servidor/creador/validarCreadorConn.php",
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

function validarApellidos() {
  var inputapellidos = $("#apellidos").val();
  var Input = $("#apellidos");
  $.ajax({
    url: "servidor/creador/validarCreadorConn.php",
    data: {
      apellidos: inputapellidos
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.apellidos);
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
    url: "servidor/creador/validarCreadorConn.php",
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
  var inputapellidos = $("#apellidos");
  var inputemail = $("#email");
  $.ajax({
    url: "servidor/creador/validarCreadorConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      apellidos: inputapellidos.val(),
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
      gestionarErrores(inputapellidos, text.apellidos);
      gestionarErrores(inputemail, text.email);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputapellidos, text.apellidos) === false && gestionarErrores(inputemail, text.email) === false) {
        $.ajax({
          url: "servidor/creador/anadirCreadorConn.php",
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
  var inputapellidos = $("#apellidos");
  var inputemail = $("#email");
  $.ajax({
    url: "servidor/creador/validarCreadorConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      apellidos: inputapellidos.val(),
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
      gestionarErrores(inputapellidos, text.apellidos);
      gestionarErrores(inputemail, text.email);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputapellidos, text.apellidos) === false && gestionarErrores(inputemail, text.email) === false) {
        var form = new FormData();
        form.append("id", $("#id").val());
        form.append("nombre", $("#nombre").val());
        form.append("apellidos", $("#apellidos").val());
        form.append("email", $("#email").val());
        fetch("servidor/creador/editarCreadorConn.php", {
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
  fetch("servidor/creador/borrarCreadorConn.php", {
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
    url: "servidor/creador/buscarCreadorConn.php",
    method: "post",
    data: {
      query: query
    },
    success: function success(data) {
      $('#result').html(data);
    }
  });
}