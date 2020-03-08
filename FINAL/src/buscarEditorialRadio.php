<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>BUSCAR EDITORIAL POR RADIO BUTTON</title>
    <script src="js/funcionesEditorial.js" defer></script>
    <link rel="stylesheet" type="text/css" href="css/css.css">
</head>
<body>
<div>
    <h1>FORMULARIO DE BUSQUEDA</h1>
    <form id="formularioBusqueda" action="">
    <div id="">

        <input type="radio" name="direccion" id="sevilla" value="Sevilla" />
        <label for="sevilla">Sevilla</label>

        <input type="radio" name="direccion" id="madrid" value="Madrid" />
        <label for="madrid">Madrid</label>

        <input type="radio" name="direccion" id="barcelona" value="Barcelona" />
        <label for="barcelona">Barcelona</label>
    </div>    
    <input type="submit" id="botonBusqueda" class="float-left submit-button btn btn-primary" value="OBTENER DATOS POR BUSQUEDA" />
    <button id="buttonindex" class="float-left submit-button btn btn-primary" >REGRESAR A LAS EDITORIALES</button>

<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "editorial.php";
    };
    </script>
    </form>
    <div id="spinner" class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
      </div>
</div>
<div id="resultado">

</div>

</body>
</html>