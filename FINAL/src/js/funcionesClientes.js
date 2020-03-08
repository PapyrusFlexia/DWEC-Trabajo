"use strict";

var ajax = new XMLHttpRequest();
ajax.open("GET", "servidor/clientes/mostrarClientes.php", true);
ajax.send();

ajax.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    var html = "";

    for (var a = 0; a < data.length; a++) {
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
    url: "servidor/clientes/validarClientesConn.php",
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
    url: "servidor/clientes/validarClientesConn.php",
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
    url: "servidor/clientes/validarClientesConn.php",
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
    url: "servidor/clientes/validarClientesConn.php",
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

function validarTelefono() {
  var inputtelefono = $("#telefono").val();
  var Input = $("#telefono");
  $.ajax({
    url: "servidor/clientes/validarClientesConn.php",
    data: {
      telefono: inputtelefono
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.telefono);
    }
  }).fail(function () {
    alert("Error");
    $("#resultado").html("Error");
  }).always(function () {
    $("#spinner").css("display", "none");
  });
}

function validarDni() {
  var inputdni = $("#dni").val();
  var Input = $("#dni");
  $.ajax({
    url: "servidor/clientes/validarClientesConn.php",
    data: {
      dni: inputdni
    },
    method: "POST",
    dataType: "JSON",
    beforeSend: function beforeSend() {
      $("#spinner").css("display", "block");
    },
    success: function success(text) {
      gestionarErrores(Input, text.dni);
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
  var inputtelefono = $("#telefono");
  var inputdni = $("#dni");
  $.ajax({
    url: "servidor/clientes/validarClientesConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      apellidos: inputapellidos.val(),
      producto: inputemail.val(),
      telefono: inputtelefono.val(),
      dni: inputdni.val()
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
      gestionarErrores(inputtelefono, text.telefono);
      gestionarErrores(inputdni, text.dni);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputapellidos, text.apellidos) === false && gestionarErrores(inputemail, text.email) === false && gestionarErrores(inputtelefono, text.telefono) === false && gestionarErrores(inputdni, text.dni) === false) {
        $.ajax({
          url: "servidor/clientes/anadirClientesConn.php",
          data: {
            id: inputid.val(),
            nombre: inputnombre.val(),
            apellidos: inputapellidos.val(),
            email: inputemail.val(),
            telefono: inputtelefono.val(),
            dni: inputdni.val()
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
  var inputtelefono = $("#telefono");
  var inputdni = $("#dni");
  $.ajax({
    url: "servidor/clientes/validarClientesConn.php",
    data: {
      id: inputid.val(),
      nombre: inputnombre.val(),
      apellidos: inputapellidos.val(),
      producto: inputemail.val(),
      telefono: inputtelefono.val(),
      dni: inputdni.val()
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
      gestionarErrores(inputtelefono, text.telefono);
      gestionarErrores(inputdni, text.dni);

      if (gestionarErrores(inputid, text.id) === false && gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputapellidos, text.apellidos) === false && gestionarErrores(inputemail, text.email) === false && gestionarErrores(inputtelefono, text.telefono) === false && gestionarErrores(inputdni, text.dni) === false) {
        var form = new FormData();
        form.append("id", $("#id").val());
        form.append("nombre", $("#nombre").val());
        form.append("apellidos", $("#apellidos").val());
        form.append("email", $("#email").val());
        form.append("telefono", $("#telefono").val());
        form.append("dni", $("#dni").val());
        fetch("servidor/clientes/editarClientesConn.php", {
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
  fetch("servidor/clientes/borrarClientesConn.php", {
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
    url: "servidor/clientes/buscarClientesConn.php",
    method: "post",
    data: {
      query: query
    },
    success: function success(data) {
      $('#result').html(data);
    }
  });
}
