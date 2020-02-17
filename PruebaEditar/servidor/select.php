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
$stmt = $conn->prepare("SELECT id FROM juegosrol where creador ='".$_POST["selectCreador"]."'");		
$stmt->execute();
$listaRol = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($listaRol);