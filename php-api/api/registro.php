<?php

/*
|--------------------------------------------------------------------------
| Servicio Web: Registro de Usuarios
| Proyecto: Sistema de Gestión de Inventario
|--------------------------------------------------------------------------
| Este servicio permite registrar nuevos usuarios.
| Recibe los datos mediante una petición POST en formato JSON.
|--------------------------------------------------------------------------
*/

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require_once("../../config/conexion.php");


/*
|--------------------------------------------------------------------------
| Recibir los datos enviados en formato JSON
|--------------------------------------------------------------------------
*/

$datos = json_decode(file_get_contents("php://input"), true);


/*
|--------------------------------------------------------------------------
| Validar que lleguen los datos necesarios
|--------------------------------------------------------------------------
*/

if (
    !isset($datos["nombre"]) ||
    !isset($datos["correo"]) ||
    !isset($datos["password"]) ||
    !isset($datos["rol"])
) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "Debe enviar nombre, correo, contraseña y rol."
    ]);

    exit;
}


$nombre = trim($datos["nombre"]);
$correo = trim($datos["correo"]);
$password = trim($datos["password"]);
$rol = trim($datos["rol"]);


/*
|--------------------------------------------------------------------------
| Validar campos vacíos
|--------------------------------------------------------------------------
*/

if (
    $nombre === "" ||
    $correo === "" ||
    $password === "" ||
    $rol === ""
) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "Todos los campos son obligatorios."
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| Verificar si el correo ya existe
|--------------------------------------------------------------------------
*/

$sql = "SELECT id FROM usuarios WHERE correo = ?";

$stmt = $conexion->prepare($sql);

$stmt->bind_param(
    "s",
    $correo
);

$stmt->execute();

$resultado = $stmt->get_result();


if ($resultado->num_rows > 0) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "El correo ya está registrado."
    ]);

    $stmt->close();
    $conexion->close();

    exit;
}


/*
|--------------------------------------------------------------------------
| Encriptar la contraseña
|--------------------------------------------------------------------------
*/

$passwordEncriptada = password_hash(
    $password,
    PASSWORD_DEFAULT
);


/*
|--------------------------------------------------------------------------
| Insertar el nuevo usuario
|--------------------------------------------------------------------------
*/

$sql = "INSERT INTO usuarios
        (nombre, correo, password, rol)
        VALUES (?, ?, ?, ?)";

$stmt = $conexion->prepare($sql);

$stmt->bind_param(
    "ssss",
    $nombre,
    $correo,
    $passwordEncriptada,
    $rol
);


/*
|--------------------------------------------------------------------------
| Enviar respuesta
|--------------------------------------------------------------------------
*/

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