<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$id = $datos["id"];
$nombre = $datos["nombre"];
$descripcion = $datos["descripcion"];


$sql = "UPDATE categorias SET
nombre=?,
descripcion=?
WHERE id=?";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "ssi",
    $nombre,
    $descripcion,
    $id
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Categoría actualizada correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>