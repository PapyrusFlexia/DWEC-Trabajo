<?php
require_once '../configuracion.php'; 
$connect = mysqli_connect($servidor, $usuario, $password, $baseDatos);
$output = '';
if(isset($_POST["query"]))
{
	$search = mysqli_real_escape_string($connect, $_POST["query"]);
	$query = "
	SELECT * FROM editorial 
	WHERE nombre LIKE '%".$search."%'";
}
else
{
	$query = "
	SELECT * FROM editorial ORDER BY id";
}
$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
	$output .= '<div class="table-responsive">
					<table class="table table bordered">
						<tr>
							<th>Id</th>
							<th>Nombre</th>
							<th>Direccion</th>
							<th>Email</th>
						</tr>';
	while($row = mysqli_fetch_array($result))
	{
		$output .= '
			<tr>
				<td>'.$row["id"].'</td>
				<td>'.$row["nombre"].'</td>
				<td>'.$row["direccion"].'</td>
				<td>'.$row["email"].'</td>
			</tr>
		';
	}
	echo $output;
}
else
{
	echo 'No encontrada';
}
?>