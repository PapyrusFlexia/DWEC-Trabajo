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
    <script src="js/funciones.js" defer></script>
    <title>AÑADIR USUARIO</title>
  </head>

  <body>
  <div>
  <p id="message"></p>
  <form method="post">
    <table cellpadding="5" cellspacing="5">
      <tr><th>Id</th><td><input type="text" id="id" name="id"></td></tr>
      <tr><th>Nombre</th><td><input type="text" id="nombre" name="nombre"></td></tr>
      <tr><th>Apellidos</th><td><input type="text" id="apellidos" name="apellidos"></td></tr>
      <tr><th>Email</th><td><input type="text" id="email" name="email"></td></tr>
      <tr><th>Telefono</th><td><input type="text" id="telefono" name="telefono"></td></tr>
      <tr><th>Dni</th><td><input type="text" id="dni" name="dni"></td></tr>
      <td colspan="2"><input type="submit" name="insert" id="insert"></td>
    </table>
  </form>

  <button id="buttonindex" class="float-left submit-button" >REGRESAR A LOS CLIENTES</button>

<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "clientes.php";
    };
</script>
</div>
</body>