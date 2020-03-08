<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
require_once '../configuracion.php'; 
$listaRol = array();
$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("UPDATE creador SET nombre='".$_POST['nombre']."', apellidos='".$_POST['apellidos']."', email='".$_POST['email']."' WHERE id='".$_POST['id']."'");
$query = "UPDATE creador SET nombre='".$_POST['nombre']."', apellidos='".$_POST['apellidos']."', email='".$_POST['email']."' WHERE id='".$_POST['id']."'";
echo $query;
$stmt->execute();
echo $stmt->rowCount();
