<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$sql = "SELECT 
productos.id,
productos.nombre,
productos.descripcion,
productos.precioCompra,
productos.precioVenta,
productos.stock,
productos.stockMinimo,
categorias.nombre AS categoria,
proveedores.nombre AS proveedor

FROM productos

INNER JOIN categorias
ON productos.categoria_id = categorias.id

INNER JOIN proveedores
ON productos.proveedor_id = proveedores.id";


$resultado = $conexion->query($sql);


$productos = [];


while($fila = $resultado->fetch_assoc()){

    $productos[] = $fila;

}


echo json_encode($productos);


$conexion->close();

?>