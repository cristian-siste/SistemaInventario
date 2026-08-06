import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

import { obtenerReporte } from "../services/api";
import { obtenerProductos } from "../services/api";
import { obtenerUsuarios } from "../services/api";
import { obtenerProveedores } from "../services/api";
import { obtenerEntradas } from "../services/api";
import { obtenerSalidas } from "../services/api";


function Dashboard(){


    const [productos,setProductos] = useState([]);
    const [usuarios,setUsuarios] = useState([]);
    const [proveedores,setProveedores] = useState([]);
    const [entradas,setEntradas] = useState([]);
    const [salidas,setSalidas] = useState([]);

    const [reporte,setReporte] = useState({

        totalProductos:0,
        bajoStock:0,
        totalEntradas:0,
        totalSalidas:0

    });



    const cargarDatos = async()=>{


        try{


            const datosProductos = await obtenerProductos();
            const datosUsuarios = await obtenerUsuarios();
            const datosProveedores = await obtenerProveedores();
            const datosEntradas = await obtenerEntradas();
            const datosSalidas = await obtenerSalidas();
            const datosReporte = await obtenerReporte();



            setProductos(datosProductos);

            setUsuarios(datosUsuarios);

            setProveedores(datosProveedores);

            setEntradas(datosEntradas);

            setSalidas(datosSalidas);

            setReporte(datosReporte);



        }catch(error){


            console.error(
                "Error cargando dashboard:",
                error
            );


        }


    };





    useEffect(()=>{


        cargarDatos();



        window.addEventListener(
            "datosActualizados",
            cargarDatos
        );



        return ()=>{


            window.removeEventListener(
                "datosActualizados",
                cargarDatos
            );


        };


    },[]);





    const stockTotal = productos.reduce(

        (total,producto)=>

        total + Number(producto.stock || 0),

        0

    );





    const bajoStock = productos.filter(

        producto =>

        Number(producto.stock || 0)

        <=

        Number(producto.stockMinimo || 0)

    );





    const valorInventario = productos.reduce(

        (total,producto)=>{


            return total +

            (

            Number(producto.stock || 0)

            *

            Number(producto.precioCompra || 0)

            );


        },

        0

    );






return(


<div className="layout">


<Sidebar />


<div className="contenedor">


<div className="dashboard-header">


<div>


<h1>
📊 Dashboard
</h1>


<p>
Resumen general del sistema de inventario
</p>


</div>



<div className="usuario-panel">

👤 Administrador

</div>


</div>







<div className="dashboard-tarjetas">





<div className="tarjeta tarjeta-azul">

<div className="icono">
📦
</div>

<h3>
Productos
</h3>

<h2>
{reporte.totalProductos}
</h2>

<span>
Registrados
</span>

</div>







<div className="tarjeta tarjeta-verde">

<div className="icono">
👥
</div>

<h3>
Usuarios
</h3>

<h2>
{usuarios.length}
</h2>

<span>
Activos
</span>

</div>







<div className="tarjeta tarjeta-morada">

<div className="icono">
🚚
</div>

<h3>
Proveedores
</h3>

<h2>
{proveedores.length}
</h2>

<span>
Registrados
</span>

</div>







<div className="tarjeta tarjeta-roja">

<div del="icono">
⚠️
</div>

<h3>
Bajo Stock
</h3>

<h2>
{reporte.bajoStock}
</h2>

<span>
Productos alerta
</span>

</div>





</div>








<div className="dashboard-tarjetas segunda">





<div className="tarjeta">

<h3>
📊 Stock Disponible
</h3>

<h2>
{stockTotal}
</h2>

</div>






<div className="tarjeta">

<h3>
⬇ Entradas
</h3>

<h2>
{reporte.totalEntradas}
</h2>

</div>






<div className="tarjeta">

<h3>
⬆ Salidas
</h3>

<h2>
{reporte.totalSalidas}
</h2>

</div>






<div className="tarjeta">

<h3>
💰 Valor Inventario
</h3>

<h2>
${valorInventario.toLocaleString("es-CO")}
</h2>

</div>


</div>








<div className="panel">


<h2>
📦 Productos recientes
</h2>



<table>

<thead>

<tr>

<th>
Producto
</th>

<th>
Stock
</th>

<th>
Precio
</th>

</tr>

</thead>



<tbody>


{

productos.length === 0 ?


<tr>

<td colSpan="3">

No hay productos registrados

</td>

</tr>



:


productos.slice(0,5).map(producto=>(


<tr key={producto.id}>


<td>
{producto.nombre}
</td>


<td>
{producto.stock}
</td>


<td>
${producto.precioVenta}
</td>


</tr>


))


}



</tbody>


</table>


</div>








<div className="panel">


<h2>
👥 Usuarios recientes
</h2>



<table>

<thead>

<tr>

<th>
Nombre
</th>

<th>
Correo
</th>

<th>
Rol
</th>

</tr>

</thead>




<tbody>


{

usuarios.length === 0 ?


<tr>

<td colSpan="3">

No hay usuarios registrados

</td>

</tr>



:


usuarios.slice(0,5).map(usuario=>(


<tr key={usuario.id}>


<td>
{usuario.nombre}
</td>


<td>
{usuario.correo}
</td>


<td>
{usuario.rol}
</td>


</tr>


))


}



</tbody>


</table>


</div>





</div>


</div>


);


}


export default Dashboard;