<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$id = $datos["id"];
$nombre = $datos["nombre"];
$telefono = $datos["telefono"];
$direccion = $datos["direccion"];


$sql = "UPDATE proveedores SET
nombre=?,
telefono=?,
direccion=?
WHERE id=?";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "sssi",
    $nombre,
    $telefono,
    $direccion,
    $id
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Proveedor actualizado correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>