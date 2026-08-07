<?php

header("Content-Type: application/json; charset=UTF-8");

include("../../config/conexion.php");


$datos = json_decode(file_get_contents("php://input"), true);


$producto_id = $datos["producto_id"];
$cantidad = $datos["cantidad"];
$fecha = $datos["fecha"];


$conexion->begin_transaction();


try{


    // Verificar stock disponible

    $consulta = "SELECT stock FROM productos WHERE id=?";


    $stmt = $conexion->prepare($consulta);


    $stmt->bind_param(
        "i",
        $producto_id
    );


    $stmt->execute();


    $resultado = $stmt->get_result();


    $producto = $resultado->fetch_assoc();



    if($producto["stock"] < $cantidad){

        throw new Exception("Stock insuficiente");

    }



    // Registrar salida

    $sql = "INSERT INTO salidas
    (producto_id, cantidad, fecha)
    VALUES (?, ?, ?)";


    $stmtSalida = $conexion->prepare($sql);


    $stmtSalida->bind_param(
        "iis",
        $producto_id,
        $cantidad,
        $fecha
    );


    $stmtSalida->execute();



    // Descontar stock

    $sqlStock = "UPDATE productos
    SET stock = stock - ?
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
        "mensaje"=>"Salida registrada y stock actualizado"
    ]);



}catch(Exception $e){


    $conexion->rollback();


    echo json_encode([
        "error"=>$e->getMessage()
    ]);

}


$conexion->close();

?>