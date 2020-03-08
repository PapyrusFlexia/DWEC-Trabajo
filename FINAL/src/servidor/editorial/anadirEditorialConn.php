<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
require_once '../configuracion.php'; 
$listaMesa = array();
$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = "INSERT INTO editorial (`id`, `nombre`, `direccion`, `email`) VALUES ('".$_POST['id']."', '".$_POST['nombre']."', '".$_POST['direccion']."','".$_POST['email']."')";
echo $sql;
$stmt = $conn->prepare($sql);
$stmt->execute();
echo $stmt->rowCount();