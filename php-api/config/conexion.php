<?php
/*
|-------------------------------------------------------------------------- 
| Archivo: conexion.php
| Descripción: Conexión a la base de datos MySQL del Sistema de Inventario.
|-------------------------------------------------------------------------- 
*/


// Permitir conexión desde React
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");


$host = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "sistema_inventario";


// Crear conexión
$conexion = new mysqli(
    $host,
    $usuario,
    $password,
    $baseDatos
);


// Verificar conexión
if ($conexion->connect_error) {

    die("Error de conexión: " . $conexion->connect_error);

}


// Configurar caracteres UTF-8
$conexion->set_charset("utf8");

?>