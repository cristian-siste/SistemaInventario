<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$id = $datos["id"];


$sql = "DELETE FROM usuarios WHERE id=?";


$stmt = $conexion->prepare($sql);


$stmt->bind_param(
    "i",
    $id
);


if($stmt->execute()){

    echo json_encode([
        "mensaje"=>"Usuario eliminado correctamente"
    ]);

}else{

    echo json_encode([
        "error"=>$conexion->error
    ]);

}


$conexion->close();

?>