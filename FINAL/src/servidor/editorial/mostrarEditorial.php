<?php
require_once '../configuracion.php'; 
$conn = mysqli_connect($servidor, $usuario, $password, $baseDatos);
$conn->set_charset("utf8");
$result = mysqli_query($conn, "SELECT * FROM editorial");


$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

echo json_encode($data);
exit();