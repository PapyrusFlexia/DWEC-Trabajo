<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="js/funcionesClientes.js" defer></script>
    <title>AÑADIR USUARIO</title>
  </head>

  <body>
  <div id="mainform">
<div class="innerdiv">
 
  <p id="message"></p>
  <form action='#' id="myForm" method='post' name="myForm">
    <table id="example" class="display" width="100%">
      <tr><th>Id</th><td><input type="text" id="id" name="id"></td></tr>
      <div id='idError'></div>
      <tr><th>Nombre</th><td><input type="text" id="nombre" name="nombre"></td></tr>
      <div id='nombreError'></div>
      <tr><th>Apellidos</th><td><input type="text" id="apellidos" name="apellidos"></td></tr>
      <div id='apellidosError'></div>
      <tr><th>Email</th><td><input type="text" id="email" name="email"></td></tr>
      <div id='emailError'></div>
      <tr><th>Telefono</th><td><input type="text" id="telefono" name="telefono"></td></tr>
      <div id='telefonoError'></div>
      <tr><th>Dni</th><td><input type="text" id="dni" name="dni"></td></tr>
      <div id='dniError'></div>
      <td colspan="2"><input  type='button' class="btn btn-primary" value='Submit' name="insert" id="insert"><!--<input type="submit" name="insert" id="insert"></td>-->
    </table>
  </form>

  <button id="buttonindex" class="float-left submit-button btn btn-primary" >REGRESAR A LOS CLIENTES</button>
  </div>
</div> 
<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "clientes.php";
    };
</script>
</body>