<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$nombre = $datos["nombre"];
$descripcion = $datos["descripcion"];
$precioCompra = $datos["precioCompra"];
$precioVenta = $datos["precioVenta"];
$stock = $datos["stock"];
$stockMinimo = $datos["stockMinimo"];
$categoria_id = $datos["categoria_id"];
$proveedor_id = $datos["proveedor_id"];


$sql = "INSERT INTO productos
(nombre, descripcion, precioCompra, precioVenta, stock, stockMinimo, categoria_id, proveedor_id)
VALUES (?,?,?,?,?,?,?,?)";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "ssddiiii",
    $nombre,
    $descripcion,
    $precioCompra,
    $precioVenta,
    $stock,
    $stockMinimo,
    $categoria_id,
    $proveedor_id
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Producto creado correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>