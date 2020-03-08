<?php
/**require_once '../configuracion.php'; */ 
$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "juegosmesa";
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT * FROM juegos";
$juegosmesa = $conexion->query($sql);