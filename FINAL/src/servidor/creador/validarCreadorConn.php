<?php
require_once "validarAnadirCreador.php";

$errores = array();
$errores["id"] = array();
$errores["nombre"] = array();
$errores["apellidos"] = array();
$errores["email"] = array();

if(isset($_POST["id"])){
    $errores["id"] = validarId(trim($_POST["id"]));
}

if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["apellidos"])){
    $errores["apellidos"] = validarApellidos(trim($_POST["apellidos"]));
    
}

if(isset($_POST["email"])){
    $errores["email"] = validarEmail(trim($_POST["email"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);