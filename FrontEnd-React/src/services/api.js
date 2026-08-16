const API = "http://localhost/php-api/api";


// ===============================
// PRODUCTOS
// ===============================

export async function obtenerProductos(){

    try{

        const respuesta = await fetch(
            `${API}/productos/listar.php`
        );

        console.log("Respuesta API:", respuesta);

        const datos = await respuesta.json();

        console.log("Productos recibidos:", datos);

        return datos;

    }catch(error){

        console.error(
            "Error conexión API:",
            error
        );

        return [];

    }

}


export async function crearProducto(producto){

    const respuesta = await fetch(
        `${API}/productos/crear.php`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(producto)
        }
    );

    return await respuesta.json();

}


// ===============================
// CATEGORIAS
// ===============================

export async function obtenerCategorias(){

    const respuesta = await fetch(
        `${API}/categorias/listar.php`
    );

    return await respuesta.json();

}


export async function crearCategoria(categoria){

    const respuesta = await fetch(
        `${API}/categorias/crear.php`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(categoria)
        }
    );

    return await respuesta.json();

}


// ===============================
// PROVEEDORES
// ===============================

export async function obtenerProveedores(){

    const respuesta = await fetch(
        `${API}/proveedores/listar.php`
    );

    return await respuesta.json();

}


export async function crearProveedor(proveedor){

    const respuesta = await fetch(
        `${API}/proveedores/crear.php`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(proveedor)
        }
    );

    return await respuesta.json();

}


// ===============================
// USUARIOS
// ===============================

export async function obtenerUsuarios(){

    const respuesta = await fetch(
        `${API}/usuarios/listar.php`
    );

    return await respuesta.json();

}


export async function crearUsuario(usuario){

    const respuesta = await fetch(
        `${API}/usuarios/crear.php`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(usuario)
        }
    );

    return await respuesta.json();

}


// ===============================
// LOGIN
// ===============================

export async function iniciarSesion(correo, password){

    const respuesta = await fetch(
        `${API}/usuarios/login.php`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                correo:correo,
                password:password
            })
        }
    );

    return await respuesta.json();

}


// ===============================
// ENTRADAS
// ===============================

export async function obtenerEntradas(){

    const respuesta = await fetch(
        `${API}/entradas/listar.php`
    );

    return await respuesta.json();

}


export async function crearEntrada(entrada){

    const respuesta = await fetch(
        `${API}/entradas/crear.php`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(entrada)
        }
    );

    return await respuesta.json();

}


// ===============================
// SALIDAS
// ===============================

export async function obtenerSalidas(){

    const respuesta = await fetch(
        `${API}/salidas/listar.php`
    );

    return await respuesta.json();

}


export async function crearSalida(salida){

    const respuesta = await fetch(
        `${API}/salidas/crear.php`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(salida)
        }
    );

    return await respuesta.json();

}


// ===============================
// REPORTES
// ===============================

export async function obtenerReporte(){

    const respuesta = await fetch(
        `${API}/reportes/listar.php`
    );

    return await respuesta.json();

}


// ===============================
// ELIMINAR PRODUCTO
// ===============================

export async function eliminarProducto(id){

    const respuesta = await fetch(

        `${API}/productos/eliminar.php`,

        {
            method:"DELETE",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                id:id
            })
        }

    );

    return await respuesta.json();

}