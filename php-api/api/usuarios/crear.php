<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$nombre = $datos["nombre"];
$correo = $datos["correo"];
$password = $datos["password"];
$rol = $datos["rol"];


$sql = "INSERT INTO usuarios
(nombre, correo, password, rol)
VALUES (?, ?, ?, ?)";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "ssss",
    $nombre,
    $correo,
    $password,
    $rol
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Usuario creado correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>