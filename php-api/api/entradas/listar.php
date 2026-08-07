<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$sql = "SELECT 
entradas.id,
productos.nombre AS producto,
entradas.cantidad,
entradas.fecha

FROM entradas

INNER JOIN productos

ON entradas.producto_id = productos.id";


$resultado = $conexion->query($sql);


$entradas = [];


while($fila = $resultado->fetch_assoc()){

    $entradas[] = $fila;

}


echo json_encode($entradas);


$conexion->close();

?>