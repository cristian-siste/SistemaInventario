<?php
/*
|--------------------------------------------------------------------------
| Servicio Web: Registro de Usuarios
| Proyecto: Sistema de Gestión de Inventario
|--------------------------------------------------------------------------
| Este servicio registra un nuevo usuario en la base de datos.
*/

header("Content-Type: application/json");

require_once("../config/conexion.php");

// Obtener los datos enviados en formato JSON
$datos = json_decode(file_get_contents("php://input"), true);

// Validar que lleguen los datos
if (!isset($datos["usuario"]) || !isset($datos["password"])) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "Debe enviar usuario y contraseña."
    ]);

    exit;
}

$usuario = trim($datos["usuario"]);
$password = trim($datos["password"]);

// Verificar si el usuario ya existe
$sql = "SELECT id FROM usuarios WHERE usuario = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "El usuario ya existe."
    ]);

    exit;
}

// Encriptar contraseña
$passwordEncriptada = password_hash($password, PASSWORD_DEFAULT);

// Registrar usuario
$sql = "INSERT INTO usuarios(usuario, password) VALUES(?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $usuario, $passwordEncriptada);

if ($stmt->execute()) {

    echo json_encode([
        "estado" => true,
        "mensaje" => "Usuario registrado correctamente."
    ]);

} else {

    echo json_encode([
        "estado" => false,
        "mensaje" => "Error al registrar el usuario."
    ]);

}

$stmt->close();
$conexion->close();

?>