<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script type="text/javascript" src="js/funcionesJuegos.js" defer></script>
</head>

<body>
    <div id="spinner">
        <div class="text-center">
            <div class="spinner-grow text-danger" role="status">
                <span class="sr-only">Cargando</span>
            </div>
        </div>
    </div>
    


    <h1>Actualizar un juego</h1>
    <form id="formActualizar" action="">

    

        <div>
            <label for="id">ID:</label>
            <input type="text" id="id" name="id">
        </div>

        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre">
        </div>
        <div>
            <label for="creador">Creador:</label>
            <input type="text" id="creador" name="creador">
        </div>

        <div>
            <label for="genero">Género:</label>
            <input type="text" id="genero" for="genero">
        </div>

        <div>
            <label for="precio">Precio:</label>
            <input type="text" id="precio" for="precio">
        </div>

        <div>
            <label for="editorial">Editorial:</label>
            <input type="text" id="editorial" for="editorial">
        </div>
        <input type="submit" id="btnActualizar" value="Actualizar" />

    </form>
    </div>
    <div id="resultadoActualizar"> </div>

    <button id="buttonindex" class="float-left submit-button" >REGRESAR A LOS JUEGOS</button>

<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "juegos.php";
    };
</script>


</body>

</html>