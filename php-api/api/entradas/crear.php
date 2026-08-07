<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$producto_id = $datos["producto_id"];
$cantidad = $datos["cantidad"];
$fecha = $datos["fecha"];


$conexion->begin_transaction();


try{


    // Registrar entrada
    $sql = "INSERT INTO entradas
    (producto_id, cantidad, fecha)
    VALUES (?, ?, ?)";


    $stmt = $conexion->prepare($sql);


    $stmt->bind_param(
        "iis",
        $producto_id,
        $cantidad,
        $fecha
    );


    $stmt->execute();



    // Actualizar stock
    $sqlStock = "UPDATE productos
    SET stock = stock + ?
    WHERE id=?";


    $stmtStock = $conexion->prepare($sqlStock);


    $stmtStock->bind_param(
        "ii",
        $cantidad,
        $producto_id
    );


    $stmtStock->execute();



    $conexion->commit();


    echo json_encode([
        "mensaje"=>"Entrada registrada y stock actualizado"
    ]);



}catch(Exception $e){


    $conexion->rollback();


    echo json_encode([
        "error"=>$e->getMessage()
    ]);

}


$conexion->close();

?>