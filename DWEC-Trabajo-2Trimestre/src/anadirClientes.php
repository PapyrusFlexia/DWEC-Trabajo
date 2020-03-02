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
  <div id="mainform">
<div class="innerdiv">
 
  <p id="message"></p>
  <form action='#' id="myForm" method='post' name="myForm">
    <table cellpadding="5" cellspacing="5">
      <tr><th>Id</th><td><input onblur="validate('id', this.value)" type="text" id="id" name="id"></td></tr>
      <div id='idError'></div>
      <tr><th>Nombre</th><td><input onblur="validate('nombre', this.value)" type="text" id="nombre" name="nombre"></td></tr>
      <div id='nombreError'></div>
      <tr><th>Apellidos</th><td><input onblur="validate('apellidos', this.value)" type="text" id="apellidos" name="apellidos"></td></tr>
      <div id='apellidosError'></div>
      <tr><th>Email</th><td><input onblur="validate('email', this.value)" type="text" id="email" name="email"></td></tr>
      <div id='emailError'></div>
      <tr><th>Telefono</th><td><input onblur="validate('telefono', this.value)" type="text" id="telefono" name="telefono"></td></tr>
      <div id='telefonoError'></div>
      <tr><th>Dni</th><td><input onblur="validate('dni', this.value)" type="text" id="dni" name="dni"></td></tr>
      <div id='dniError'></div>
      <!-- PROBANDOOOOOOO -->
      <td colspan="2"><input onclick="checkForm()" type='button' value='Submit' name="insert" id="insert"><!--<input type="submit" name="insert" id="insert"></td>-->
    </table>
  </form>

  <button id="buttonindex" class="float-left submit-button" >REGRESAR A LOS CLIENTES</button>
  </div>
</div> 
<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "clientes.php";
    };
</script>

<!-- PRUEBAS 
<div id="mainform">
<div class="innerdiv">
 Required Div Starts Here 
<h2>Form Validation Using AJAX</h2>
<form action='#' id="myForm" method='post' name="myForm">
<h3>Fill Your Information!</h3>
<table>
<tr>
<td>Username</td>
<td><input id='username1' name='username'  type='text'></td>
<td>
<div id='username'></div>
</td>
</tr>
<tr>
<td>Password</td>
<td><input id='password1' name='password' onblur="validate('password', this.value)" type='password'></td>
<td>
<div id='password'></div>
</td>
</tr>
<tr>
<td>Email</td>
<td><input id='email1' name='email' onblur="validate('email', this.value)" type='text'></td>
<td>
<div id='email'></div>
</td>
</tr>
<tr>
<td>website</td>
<td><input id='website1' name='website' onblur="validate('website', this.value)" type='text'></td>
<td>
<div id='website'></div>
</td>
</tr>
</table>
<input onclick="checkForm()" type='button' value='Submit'>
</form>
</div>
</div> -->
</body>