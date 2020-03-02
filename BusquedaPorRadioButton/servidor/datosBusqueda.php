<?php
sleep(2);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "juegosmesa";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT id,nombre,creador,genero,precio,editorial FROM juegos WHERE genero LIKE '%".$_POST['genero']."%'");
$stmt->execute();
$juegosmesa = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($juegosmesa);
?>