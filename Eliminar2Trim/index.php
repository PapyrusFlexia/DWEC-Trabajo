<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Ejemplo Ajax</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" >

    <!-- Incluimos librería Bootstrap css-->
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
          crossorigin="anonymous">


    <!-- Incluimos las librerís JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
        ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous">

    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
            integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
            crossorigin="anonymous">
    </script>
    <script src="js/eliminar.js" defer></script>
</head>
<body>
<?php
   require_once 'datosMYSQL.php';
?>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Email</th>
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
        <h5 class="modal-title">Eliminar juego</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿Estás seguro de eliminar esta juego?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="botonConfirmarEliminar" type="button"  class="btn btn-primary" data-accion="confirmar-eliminar" data-ideliminar="">Confirmar</button>
      </div>
    </div>
  </div>
</div>

</body>
</html>