# Componente PHP API - Sistema de Gestión de Inventario

## Descripción

Este componente fue desarrollado en PHP como parte del proyecto Sistema de Gestión de Inventario.

Su objetivo es permitir la comunicación entre la aplicación web desarrollada en React y la base de datos MySQL mediante una API, permitiendo consultar y gestionar la información del sistema.

## Funcionalidades

El componente PHP permite:

- Consultar productos.
- Consultar categorías.
- Consultar proveedores.
- Consultar entradas de inventario.
- Consultar salidas de inventario.
- Generar información para reportes.
- Conectar el sistema con la base de datos MySQL.

## Estructura del componente

php-api/

    api/
        productos/
        categorias/
        proveedores/
        entradas/
        salidas/
        reportes/

    config/
        conexion.php

    database/

    prueba.php

    README.md


## Tecnologías utilizadas

- PHP
- MySQL
- Apache
- XAMPP
- React JS


## Requisitos para ejecutar

Para ejecutar el componente se necesita:

- XAMPP instalado.
- Servicio Apache activo.
- Servicio MySQL activo.
- Base de datos sistema_inventario creada.


## Instalación

1. Copiar la carpeta php-api dentro de:

C:\xampp\htdocs


2. Iniciar en XAMPP:

Apache

MySQL


3. Crear la base de datos:

sistema_inventario


4. Configurar la conexión en:

php-api/config/conexion.php


## Configuración de conexión

Archivo:

config/conexion.php


Configuración utilizada:

$host = "localhost";

$usuario = "root";

$password = "";

$baseDatos = "sistema_inventario";


## Ejecución del componente

La API puede ser probada desde el navegador utilizando:

Productos:

http://localhost/php-api/api/productos/listar.php


Categorías:

http://localhost/php-api/api/categorias/listar.php


Proveedores:

http://localhost/php-api/api/proveedores/listar.php


Entradas:

http://localhost/php-api/api/entradas/listar.php


Salidas:

http://localhost/php-api/api/salidas/listar.php


Reportes:

http://localhost/php-api/api/reportes/listar.php


## Respuesta del servicio

La información es enviada en formato JSON para ser utilizada por el FrontEnd React.

Ejemplo:

[
    {
        "id":1,
        "nombre":"Producto",
        "stock":10
    }
]


## Arquitectura del sistema

React JS

        |

        |

API PHP

        |

        |

Base de datos MySQL


## Autor

Cristian Salazar


## Proyecto

Sistema de Gestión de Inventario
link   http://localhost:5173/dashboard