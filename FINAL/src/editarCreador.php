<!doctype html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="js/funcionesCreador.js" defer></script>
    <link rel="stylesheet" type="text/css" href="css/css.css">
    <title>EDITAR CREADOR</title>
  </head>

  <body>
  <div id="mainform">
    <div class="row">
        <div class="col-sm-6">
            <div id="formInsertar">
            <h1>EDITAR CREADORES</h1>
                <form id="formulario" onsubmit="validarFormularioEditar()">
                    <label for="id">Id</label>
                    <input type="text" id="id" name="id" onchange="validarId()">
                    <div id='divErrores'>
                    </div>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" onchange="validarNombre()">
                    <div id='divErrores'>
                    </div>
                    <label for="apellidos">Apellidos</label>
                    <input type="text" id="apellidos" name="apellidos" onchange="validarApellidos()">
                    <div id='divErrores'>
                    </div>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" onchange="validarEmail()">
                    <div id='divErrores'>
                    </div>
                    <button class="btn btn-primary" id="insert">BOTON DE ENVIO</button>
                    <div id="resultado"></div>
                </form>
            </div>
            <button id="buttonindex" class="float-left submit-button btn btn-primary">REGRESAR A LOS CREADORES</button>
        </div>
        <div class="col-sm-6">
            <div id="spinner" class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "creador.php";
    };
</script>
</body>

</html>