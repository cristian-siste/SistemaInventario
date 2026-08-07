<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$sql = "SELECT * FROM categorias";


$resultado = $conexion->query($sql);


$categorias = [];


while($fila = $resultado->fetch_assoc()){

    $categorias[] = $fila;

}


echo json_encode($categorias);


$conexion->close();

?>