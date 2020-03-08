<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Búsqueda</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="js/funcionesJuegos.js"></script>
	</head>
	<body>
		<div class="container">
			
			<h2 align="center">Buscador</h2><br/>
			<div class="form-group">
				<div class="input-group">
					<span class="input-group-addon">Buscar</span>
					<input type="text" name="search_text" id="search_text" placeholder="Buscar por nombre del juego" class="form-control" />
                    <button id="buttonindex" class="float-left submit-button btn btn-primary" >REGRESAR A LOS JUEGOS</button>

<script type="text/javascript">
    document.getElementById("buttonindex").onclick = function () {
        location.href = "juegos.php";
    };
</script>
				</div>
			</div>
			<div id="result"></div>
		</div>
		<div style="clear:both"></div>
	</body>
</html>
