import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NuevaEntrada.css";


function NuevaEntrada(){


    const navigate = useNavigate();



    const [productos,setProductos] = useState([]);

    const [usuarios,setUsuarios] = useState([]);



    const [entrada,setEntrada] = useState({

        producto:"",
        cantidad:"",
        fecha:"",
        usuario:"",
        observacion:""

    });





    const [nuevoProducto,setNuevoProducto] = useState({

        nombre:"",
        stock:""

    });






    useEffect(()=>{


        setProductos(

            JSON.parse(localStorage.getItem("productos")) || []

        );


        setUsuarios(

            JSON.parse(localStorage.getItem("usuarios")) || []

        );


    },[]);







    const cambiarEntrada=(e)=>{


        setEntrada({

            ...entrada,

            [e.target.name]:e.target.value

        });


    };






    const cambiarProducto=(e)=>{


        setNuevoProducto({

            ...nuevoProducto,

            [e.target.name]:e.target.value

        });


    };








    const guardarEntrada=(e)=>{


        e.preventDefault();



        const entradas =

        JSON.parse(localStorage.getItem("entradas")) || [];





        const nuevaEntrada={


            id:Date.now(),

            ...entrada,

            cantidad:Number(entrada.cantidad),

            fecha:entrada.fecha


        };





        localStorage.setItem(

            "entradas",

            JSON.stringify(

                [

                ...entradas,

                nuevaEntrada

                ]

            )

        );





        window.dispatchEvent(

            new Event("datosActualizados")

        );



        alert("Entrada registrada correctamente");


        navigate("/entradas");


    };










    const crearProducto=()=>{



        if(!nuevoProducto.nombre ||

           !nuevoProducto.stock){


            alert("Complete los datos del producto");

            return;

        }






        const listaProductos =

        JSON.parse(localStorage.getItem("productos")) || [];






        const producto={


            id:Date.now(),

            nombre:nuevoProducto.nombre,

            descripcion:"Producto creado desde entradas",

            precioCompra:0,

            precioVenta:0,

            stock:Number(nuevoProducto.stock),

            stockMinimo:5


        };






        localStorage.setItem(

            "productos",

            JSON.stringify(

                [

                ...listaProductos,

                producto

                ]

            )

        );






        window.dispatchEvent(

            new Event("datosActualizados")

        );





        setProductos(

            [

            ...productos,

            producto

            ]

        );





        setNuevoProducto({

            nombre:"",

            stock:""

        });




        alert("Producto creado correctamente");


    };









return(



<div className="contenedor">



<h1>
⬇ Registrar Entrada
</h1>





<form 

className="formulario-entrada"

onSubmit={guardarEntrada}



>




<label>
Producto
</label>



<select

name="producto"

value={entrada.producto}

onChange={cambiarEntrada}

required

>


<option value="">

Seleccione un producto

</option>



{

productos.map(producto=>(


<option

key={producto.id}

value={producto.nombre}

>


{producto.nombre}


</option>


))


}



</select>







<label>
Cantidad ingresada
</label>


<input

type="number"

name="cantidad"

value={entrada.cantidad}

onChange={cambiarEntrada}

required

/>






<label>
Fecha
</label>


<input

type="date"

name="fecha"

value={entrada.fecha}

onChange={cambiarEntrada}

required

/>






<label>
Usuario responsable
</label>


<select

name="usuario"

value={entrada.usuario}

onChange={cambiarEntrada}

required

>


<option value="">

Seleccione el usuario responsable

</option>



{

usuarios.map(usuario=>(


<option

key={usuario.id}

value={usuario.nombre}

>


{usuario.nombre}


</option>


))


}



</select>








<label>
Observación
</label>


<textarea

name="observacion"

value={entrada.observacion}

onChange={cambiarEntrada}

placeholder="Escriba una observación"

/>






<button type="submit">

Guardar Entrada

</button>



</form>








<div className="crear-producto">


<h2>
➕ Crear Producto Nuevo
</h2>


<p>

Utilice esta sección si el producto todavía no existe en el inventario.

</p>





<label>
Nombre del producto
</label>


<input

type="text"

name="nombre"

value={nuevoProducto.nombre}

onChange={cambiarProducto}

placeholder="Ejemplo: Lápiz"

/>





<label>
Stock inicial
</label>


<input

type="number"

name="stock"

value={nuevoProducto.stock}

onChange={cambiarProducto}

placeholder="Ejemplo: 50"

/>





<button

onClick={crearProducto}

>

Crear Producto

</button>



</div>





</div>



);



}


export default NuevaEntrada;