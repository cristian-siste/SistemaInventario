<?php

$data = [
    "nombre"=>"Teclado USB",
    "descripcion"=>"Teclado para oficina",
    "precioCompra"=>25000,
    "precioVenta"=>40000,
    "stock"=>15,
    "stockMinimo"=>5,
    "categoria_id"=>1,
    "proveedor_id"=>1
];


$ch = curl_init("http://localhost/php-api/api/productos/crear.php");

curl_setopt($ch, CURLOPT_POST, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json"
]);

curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


$respuesta = curl_exec($ch);


curl_close($ch);


echo $respuesta;

?>