<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
$servidor = "localhost:3308";
$usuario = "root";
$password = "";
$baseDatos = "juegosrol";
$listaRol = array();
$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("UPDATE juegosrol SET creador='".$_POST['creador']."', genero='".$_POST['genero']."', editorial='".$_POST['editorial']."' WHERE id='".$_POST['id']."'");
$stmt->execute();
echo $stmt->rowCount();