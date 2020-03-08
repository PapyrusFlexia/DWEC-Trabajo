<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>BORRAR CLIENTES</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" >

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="js/funcionesClientes.js" defer></script>
    <link rel="stylesheet" type="text/css" href="css/css.css">
</head>
<body>
<?php
   require_once 'servidor/clientes/borrarClientesMYSQL.php';
?>
<h1> BORRAR CLIENTES </h1>  
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Email</th>
      <th scope='col'>Telefono</th>
      <th scope='col'>Dni</th>
      <th scope='col'>Acciones</th>
    </tr>
    </thead>
  <tbody>
    <?php
        while($juegomesa = $juegosmesa->fetch_assoc()) {
            ?>
            <tr data-idJuegomesa="<?php echo $juegomesa["id"]; ?>">
                <td><?php echo $juegomesa["nombre"]; ?></td>
                <td><?php echo $juegomesa["apellidos"]; ?></td>
                <td><?php echo $juegomesa["email"]; ?></td>
                <td><?php echo $juegomesa["dni"]; ?></td>
                <td><?php echo $juegomesa["telefono"]; ?></td>
                <td><button data-idEliminar="<?php echo $juegomesa["id"]; ?>" data-accion="eliminar">Eliminar</button></td>
            </tr>    
            <?php
        }
    ?>
</tbody>
</table>
<div id="modalEliminar" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar Cliente</h5>
        <button type="button" class="close " data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿Estás seguro de eliminar este cliente?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="botonConfirmarEliminar" type="button"  class="btn btn-primary" data-accion="confirmar-eliminar" data-ideliminar="">Confirmar</button>
      </div>
    </div>
  </div>
</div>
<button id="buttonindex" class="float-left submit-button btn btn-primary" >REGRESAR A LOS CLIENTES</button>
<div id="spinner" class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
</div>
<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "clientes.php";
    };
</script>



</body>
</html>