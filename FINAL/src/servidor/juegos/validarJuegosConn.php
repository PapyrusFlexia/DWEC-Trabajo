<?php
require_once "validarAnadirJuegos.php";

$errores = array();
$errores["id"] = array();
$errores["nombre"] = array();
$errores["creador"] = array();
$errores["precio"] = array();
$errores["genero"] = array();
$errores["editorial"] = array();

if(isset($_POST["id"])){
    $errores["id"] = validarId(trim($_POST["id"]));
}

if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["creador"])){
    $errores["creador"] = validarCreador(trim($_POST["creador"]));
    
}

if(isset($_POST["precio"])){
    $errores["precio"] = validarPrecio(trim($_POST["precio"]));
}

if(isset($_POST["genero"])){
    $errores["genero"] = validarGenero(trim($_POST["genero"]));
}

if(isset($_POST["editorial"])){
    $errores["editorial"] = validarEditorial(trim($_POST["editorial"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);