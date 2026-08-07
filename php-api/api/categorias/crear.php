<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$nombre = $datos["nombre"];
$descripcion = $datos["descripcion"];


$sql = "INSERT INTO categorias
(nombre, descripcion)
VALUES (?, ?)";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "ss",
    $nombre,
    $descripcion
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Categoría creada correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>