<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$sql = "SELECT 
id,
nombre,
correo,
rol
FROM usuarios";


$resultado = $conexion->query($sql);


$usuarios = [];


while($fila = $resultado->fetch_assoc()){

    $usuarios[] = $fila;

}


echo json_encode($usuarios);


$conexion->close();

?>