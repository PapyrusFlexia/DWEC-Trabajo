<?php
$servidor = "localhost:3308";
$usuario = "root";
$password = "";
$baseDatos = "juegosrol";

$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sqlAll = "SELECT * FROM juegosrol";
$sqlId = "SELECT id FROM juegosrol";
$juegosrolAll = $conexion->query($sqlAll);
$juegosrolId = $conexion->query($sqlId);
