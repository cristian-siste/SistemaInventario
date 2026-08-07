<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$nombre = $datos["nombre"];
$telefono = $datos["telefono"];
$direccion = $datos["direccion"];


$sql = "INSERT INTO proveedores
(nombre, telefono, direccion)
VALUES (?, ?, ?)";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "sss",
    $nombre,
    $telefono,
    $direccion
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Proveedor creado correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>