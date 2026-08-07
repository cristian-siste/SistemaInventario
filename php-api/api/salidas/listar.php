<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$sql = "SELECT 
salidas.id,
productos.nombre AS producto,
salidas.cantidad,
salidas.fecha

FROM salidas

INNER JOIN productos

ON salidas.producto_id = productos.id";


$resultado = $conexion->query($sql);


$salidas = [];


while($fila = $resultado->fetch_assoc()){

    $salidas[] = $fila;

}


echo json_encode($salidas);


$conexion->close();

?>