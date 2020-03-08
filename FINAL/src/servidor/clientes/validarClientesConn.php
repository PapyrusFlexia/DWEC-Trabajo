<?php
require_once "validarAnadirClientes.php";

$errores = array();
$errores["id"] = array();
$errores["nombre"] = array();
$errores["apellidos"] = array();
$errores["email"] = array();
$errores["telefono"] = array();
$errores["dni"] = array();

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


if(isset($_POST["telefono"])){
    $errores["telefono"] = validarTelefono(trim($_POST["telefono"]));
}

if(isset($_POST["dni"])){
    $errores["dni"] = validarDni(trim($_POST["dni"]));
}


echo json_encode($errores,JSON_FORCE_OBJECT);