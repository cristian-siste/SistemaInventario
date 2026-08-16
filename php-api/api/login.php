<?php

/*
|--------------------------------------------------------------------------
| Servicio Web: Inicio de Sesión
| Proyecto: Sistema de Gestión de Inventario
|--------------------------------------------------------------------------
| Este servicio permite autenticar usuarios mediante
| correo electrónico y contraseña.
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
| Validar los datos recibidos
|--------------------------------------------------------------------------
*/

if (
    !isset($datos["correo"]) ||
    !isset($datos["password"])
) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "Debe enviar correo y contraseña."
    ]);

    exit;
}


$correo = trim($datos["correo"]);
$password = trim($datos["password"]);


/*
|--------------------------------------------------------------------------
| Validar campos vacíos
|--------------------------------------------------------------------------
*/

if (
    $correo === "" ||
    $password === ""
) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "El correo y la contraseña son obligatorios."
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| Buscar el usuario mediante el correo
|--------------------------------------------------------------------------
*/

$sql = "SELECT id, nombre, correo, password, rol
        FROM usuarios
        WHERE correo = ?";

$stmt = $conexion->prepare($sql);

$stmt->bind_param(
    "s",
    $correo
);

$stmt->execute();

$resultado = $stmt->get_result();


/*
|--------------------------------------------------------------------------
| Verificar si el usuario existe
|--------------------------------------------------------------------------
*/

if ($resultado->num_rows === 0) {

    echo json_encode([
        "estado" => false,
        "mensaje" => "Error en la autenticación."
    ]);

    $stmt->close();
    $conexion->close();

    exit;
}


$usuario = $resultado->fetch_assoc();


/*
|--------------------------------------------------------------------------
| Verificar la contraseña
|--------------------------------------------------------------------------
*/

if (
    password_verify(
        $password,
        $usuario["password"]
    )
) {

    echo json_encode([
        "estado" => true,
        "mensaje" => "Autenticación satisfactoria.",
        "usuario" => [
            "id" => $usuario["id"],
            "nombre" => $usuario["nombre"],
            "correo" => $usuario["correo"],
            "rol" => $usuario["rol"]
        ]
    ]);

} else {

    echo json_encode([
        "estado" => false,
        "mensaje" => "Error en la autenticación."
    ]);

}


/*
|--------------------------------------------------------------------------
| Cerrar conexión
|--------------------------------------------------------------------------
*/

$stmt->close();

$conexion->close();

?>