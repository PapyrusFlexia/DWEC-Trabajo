<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
require_once '../configuracion.php'; 
$listaRol = array();
$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("UPDATE juegos SET nombre='".$_POST['nombre']."', creador='".$_POST['creador']."', genero='".$_POST['genero']."', precio='".$_POST['precio']."', editorial='".$_POST['editorial']."' WHERE id='".$_POST['id']."'");
$query = "UPDATE juegos SET nombre='".$_POST['nombre']."', creador='".$_POST['creador']."', genero='".$_POST['genero']."', precio='".$_POST['precio']."', editorial='".$_POST['editorial']."' WHERE id='".$_POST['id']."'";
echo $query;
$stmt->execute();
echo $stmt->rowCount();
