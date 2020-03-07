<?php

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "juegosmesa";
$listaMesa = array();
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "DELETE FROM clientes where id=".$_POST["id"];
echo $sql;
$conexion->query($sql);
echo json_encode(1);