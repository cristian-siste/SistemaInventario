import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../services/api";


function ConsultarProductos() {


    const [productos, setProductos] = useState([]);

    const [busqueda, setBusqueda] = useState("");



    const cargarProductos = async()=>{


        try{


            const datos = await obtenerProductos();


            console.log(
                "Productos consulta:",
                datos
            );


            setProductos(datos);



        }catch(error){


            console.error(
                "Error cargando productos:",
                error
            );


        }


    };





    useEffect(()=>{


        cargarProductos();



        window.addEventListener(
            "datosActualizados",
            cargarProductos
        );



        return ()=>{


            window.removeEventListener(
                "datosActualizados",
                cargarProductos
            );


        };


    },[]);







    const productosFiltrados = productos.filter((producto)=>{


        const nombre = producto.nombre || "";


        return nombre
            .toLowerCase()
            .includes(
                busqueda.toLowerCase()
            );


    });








    const obtenerEstadoStock = (producto)=>{


        const stock = Number(producto.stock || 0);

        const minimo = Number(producto.stockMinimo || 0);



        if(stock === 0){

            return "Agotado";

        }



        if(stock <= minimo){

            return "Bajo stock";

        }



        return "Disponible";


    };







return (


<div className="contenedor">



<h1>
🔎 Consultar Productos
</h1>



<p>
Consulte la información y disponibilidad
de los productos registrados.
</p>





<input

type="text"

placeholder="Buscar producto por nombre..."

value={busqueda}

onChange={(e)=>
    setBusqueda(e.target.value)
}

/>







<table>


<thead>

<tr>

<th>
ID
</th>


<th>
Producto
</th>


<th>
Descripción
</th>


<th>
Precio Compra
</th>


<th>
Precio Venta
</th>


<th>
Stock
</th>


<th>
Stock Mínimo
</th>


<th>
Estado
</th>


</tr>

</thead>






<tbody>


{

productosFiltrados.length === 0 ?


<tr>

<td colSpan="8">

No se encontraron productos.

</td>

</tr>



:


productosFiltrados.map((producto)=>(



<tr key={producto.id}>


<td>
{producto.id}
</td>


<td>
{producto.nombre}
</td>


<td>
{producto.descripcion || "Sin descripción"}
</td>


<td>

$

{Number(
producto.precioCompra || 0
).toLocaleString("es-CO")}

</td>


<td>

$

{Number(
producto.precioVenta || 0
).toLocaleString("es-CO")}

</td>


<td>
{producto.stock || 0}
</td>


<td>
{producto.stockMinimo || 0}
</td>


<td>
{obtenerEstadoStock(producto)}
</td>



</tr>


))


}



</tbody>



</table>



</div>


);


}



export default ConsultarProductos;