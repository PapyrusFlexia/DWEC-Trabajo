<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="js/funcionesJuegos.js" defer></script>
    <title>Juegos Mesa</title>
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler btn btn-primary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                    <a class="nav-link" href="index.php">Índice</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="clientes.php">Clientes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="creador.php">Creador</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="editorial.php">Editorial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="juegos.php">Juegos</a>
                </li>
            </ul>
        </div>
    </nav>
<div id="spinner">
        <div class="text-center">
            <div class="spinner-grow text-info" role="status">
                <span class="sr-only">Cargando</span>
            </div>
        </div>
    </div>
    <h1>JUEGOS</h1>
    <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead class="thead-dark">
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>creador</th>
                <th>precio</th>
                <th>genero</th>
                <th>editorial</th>
            </tr>
        </thead>
        <tbody id="dataJuegos"></tbody>
        </tfoot>
    </table>
<!-- AÑADIR -->
<button id="buttonanadir" class="float-left submit-button btn btn-primary" >AÑADIR JUEGOS</button>

<script type="text/javascript">
    document.getElementById("buttonanadir").onclick = function () {
        location.href = "anadirJuegos.php";
    };
</script>

<!-- EDITAR -->

<button id="buttoneditar" class="float-left submit-button btn btn-primary" >EDITAR JUEGOS</button>

<script type="text/javascript">
    document.getElementById("buttoneditar").onclick = function () {
        location.href = "editarJuegos.php";
    };
</script>

<!-- BORRAR-->

<button id="buttonborrar" class="float-left submit-button btn btn-primary" >BORRAR JUEGOS</button>

<script type="text/javascript">
    document.getElementById("buttonborrar").onclick = function () {
        location.href = "borrarJuegos.php";
    };
</script>

<!-- BUSCAR -->

<button id="buttonbuscar" class="float-left submit-button btn btn-primary" >BUSCAR JUEGOS</button>

<script type="text/javascript">
    document.getElementById("buttonbuscar").onclick = function () {
        location.href = "buscarJuegos.php";
    };
</script>

<!-- BUSCAR POR RADIO BUTTON -->

<button id="buttonbuscarRadio" class="float-left submit-button btn btn-primary" >BUSCAR JUEGOS POR RADIO BUTTON</button>

<script type="text/javascript">
    document.getElementById("buttonbuscarRadio").onclick = function () {
        location.href = "buscarJuegosRadio.php";
    };
</script>



    <!-- Formulario añadir y borrar-->

    <script type="text/javascript" charset="utf8" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>

</html>