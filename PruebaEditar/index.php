<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Tema 5 Ej3</title>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/script.js" defer></script>
</head>

<body>
    <?php
		   require_once 'servidor/conexion.php';
		?>

        <div id="spinner">
            <div class="text-center">
                <div class="spinner-grow text-danger" role="status">
                    <span class="sr-only">Cargando</span>
                </div>
            </div>
        </div>
        <div>
            <h1>Select de un select</h1>
            <form id="formSelect" action="">
                <div>
                    <label for="selectCreador">Creador:</label>
                    <select id="selectCreador" name="selectCreador">
                        <option value="">Elige creador</option>
                        <option value="Mike">Mike</option>
                        <option value="Pepe">Pepe</option>
                        <option value="Wazowski">Wazowski</option>
                    </select>
                </div>

                <div>
                    <label for="selectResultado">Id del Juego de Rol seleccionado:</label>
                    <select id="selectResultado" name="selectResultado">

                    </select>
                </div>

            </form>
        </div>
        <div>

            <h1>Actualizar un juego</h1>
            <form id="formActualizar" action="">

                <div>
                    <label for="id">Selecciona el ID del juego:</label>
                    <select id="id" name="id">
                        <?php
				while($juegosrolIds = $juegosrolId->fetch_assoc()) {
			?>

                            <?php 
			    echo "<option value='".$juegosrolIds["id"]."'>". $juegosrolIds["id"]."</option>";
			?>
                                <?php
			}
			?>
                    </select>
                </div>

                <div>
                    <label for="creador">Creador:</label>
                    <select id="creador" name="creador">
                        <option value="Mike">Mike</option>
                        <option value="Pepe">Pepe</option>
                        <option value="Wazowski">Wazowski</option>
                    </select>
                </div>
                <div>
                    <label for="genero">Genero:</label>
                    <select id="genero" name="genero">
                        <option value="Fantasia">Fantasia</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="IRL">IRL</option>
                    </select>
                </div>

                <div>
                    <label for="editorial">Editorial:</label>
                    <select id="editorial" name="editorial">
                        <option value="Pipo">Pipo</option>
                        <option value="ElCapo">ElCapo</option>
                        <option value="LMD">LMD</option>
                    </select>
                </div>
                <input type="submit" id="btnActualizar" value="Actualizar" />

            </form>
        </div>
        <div id="resultadoActualizar"> </div>

        <!-- No he podido hacer el apartado de eliminar pese a que eliminar.php esté creado -->

</body>

</html>