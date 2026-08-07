<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$id = $datos["id"];
$producto_id = $datos["producto_id"];
$cantidad = $datos["cantidad"];
$fecha = $datos["fecha"];


$sql = "UPDATE salidas SET
producto_id=?,
cantidad=?,
fecha=?
WHERE id=?";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "iisi",
    $producto_id,
    $cantidad,
    $fecha,
    $id
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Salida actualizada correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>