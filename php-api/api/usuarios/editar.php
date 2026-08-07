<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$id = $datos["id"];
$nombre = $datos["nombre"];
$correo = $datos["correo"];
$password = $datos["password"];
$rol = $datos["rol"];


$sql = "UPDATE usuarios SET
nombre=?,
correo=?,
password=?,
rol=?
WHERE id=?";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "ssssi",
    $nombre,
    $correo,
    $password,
    $rol,
    $id
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Usuario actualizado correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>