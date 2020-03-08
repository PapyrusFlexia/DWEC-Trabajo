<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
require_once '../configuracion.php'; 
$listaMesa = array();
$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = "INSERT INTO juegos (`id`, `nombre`, `creador`, `genero`, `precio`, `editorial`) VALUES ('".$_POST['id']."', '".$_POST['nombre']."', '".$_POST['creador']."','".$_POST['genero']."', '".$_POST['precio']."','".$_POST['editorial']."')";
echo $sql;
$stmt = $conn->prepare($sql);
$stmt->execute();
echo $stmt->rowCount();