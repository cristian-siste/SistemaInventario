<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$id = $datos["id"];
$nombre = $datos["nombre"];
$descripcion = $datos["descripcion"];
$precioCompra = $datos["precioCompra"];
$precioVenta = $datos["precioVenta"];
$stock = $datos["stock"];
$stockMinimo = $datos["stockMinimo"];
$categoria_id = $datos["categoria_id"];
$proveedor_id = $datos["proveedor_id"];


$sql = "UPDATE productos SET

nombre=?,
descripcion=?,
precioCompra=?,
precioVenta=?,
stock=?,
stockMinimo=?,
categoria_id=?,
proveedor_id=?

WHERE id=?";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
"ssddiiiii",
$nombre,
$descripcion,
$precioCompra,
$precioVenta,
$stock,
$stockMinimo,
$categoria_id,
$proveedor_id,
$id
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Producto actualizado correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>