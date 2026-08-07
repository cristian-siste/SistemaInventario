<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET");

header("Content-Type: application/json; charset=UTF-8");


include("../../config/conexion.php");


// Total de productos
$sqlProductos = "
SELECT COUNT(*) AS total
FROM productos
";


$resultadoProductos = $conexion->query($sqlProductos);

$totalProductos = $resultadoProductos->fetch_assoc();



// Productos con bajo stock
$sqlStock = "
SELECT COUNT(*) AS bajoStock
FROM productos
WHERE stock <= stockMinimo
";


$resultadoStock = $conexion->query($sqlStock);

$bajoStock = $resultadoStock->fetch_assoc();



// Total de entradas
$sqlEntradas = "
SELECT SUM(cantidad) AS totalEntradas
FROM entradas
";


$resultadoEntradas = $conexion->query($sqlEntradas);

$totalEntradas = $resultadoEntradas->fetch_assoc();



// Total de salidas
$sqlSalidas = "
SELECT SUM(cantidad) AS totalSalidas
FROM salidas
";


$resultadoSalidas = $conexion->query($sqlSalidas);

$totalSalidas = $resultadoSalidas->fetch_assoc();



// Respuesta JSON

echo json_encode([

    "totalProductos" => $totalProductos["total"],

    "bajoStock" => $bajoStock["bajoStock"],

    "totalEntradas" => $totalEntradas["totalEntradas"] ?? 0,

    "totalSalidas" => $totalSalidas["totalSalidas"] ?? 0

]);


$conexion->close();

?>