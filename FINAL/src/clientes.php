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
    <script src="js/funcionesClientes.js" defer></script>
    <title>USUARIOS</title>
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

    <h1>CLIENTES</h1>
    <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead class="thead-dark">
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>apellidos</th>
                <th>email</th>
                <th>telefono</th>
                <th>dni</th>
            </tr>
        </thead>
        <tbody id="data"></tbody>
        </tfoot>
    </table>
<!-- AÑADIR -->
<button id="buttonanadir" class="float-left submit-button btn btn-primary" >AÑADIR CLIENTES</button>


<script type="text/javascript">
    document.getElementById("buttonanadir").onclick = function () {
        location.href = "anadirClientes.php";
    };
</script>

<!-- EDITAR -->

<button id="buttoneditar" class="float-left submit-button btn btn-primary" >EDITAR CLIENTES</button>

<script type="text/javascript">
    document.getElementById("buttoneditar").onclick = function () {
        location.href = "editarClientes.php";
    };
</script>

<!-- BORRAR-->

<button id="buttonborrar" class="float-left submit-button btn btn-primary" >BORRAR CLIENTES</button>

<script type="text/javascript">
    document.getElementById("buttonborrar").onclick = function () {
        location.href = "borrarClientes.php";
    };
</script>

<!-- BUSCAR -->

<button id="buttonbuscar" class="float-left submit-button btn btn-primary" >BUSCAR CLIENTES</button>

<script type="text/javascript">
    document.getElementById("buttonbuscar").onclick = function () {
        location.href = "buscarClientes.php";
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
