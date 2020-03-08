<?php
require_once "validarAnadirEditorial.php";

$errores = array();
$errores["id"] = array();
$errores["nombre"] = array();
$errores["direccion"] = array();
$errores["email"] = array();

if(isset($_POST["id"])){
    $errores["id"] = validarId(trim($_POST["id"]));
}

if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["direccion"])){
    $errores["direccion"] = validarDireccion(trim($_POST["direccion"]));
    
}

if(isset($_POST["email"])){
    $errores["email"] = validarEmail(trim($_POST["email"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);