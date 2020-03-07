<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "juegosmesa";

$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT * FROM juegosmesa";
$sqlId = "SELECT id FROM juegosmesa";
$juegosmesa = $conexion->query($sql);
$juegosmesaId = $conexion->query($sqlId);
