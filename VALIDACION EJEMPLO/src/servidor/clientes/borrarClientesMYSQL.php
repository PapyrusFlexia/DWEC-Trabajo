<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "juegosmesa";
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT * FROM clientes";
$juegosmesa = $conexion->query($sql);