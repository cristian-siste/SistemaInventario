import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NuevaSalida.css";


function NuevaSalida(){


    const navigate = useNavigate();


    const [productos,setProductos] = useState([]);

    const [usuarios,setUsuarios] = useState([]);



    const [salida,setSalida] = useState({

        producto:"",
        cantidad:"",
        fecha:"",
        usuario:"",
        observacion:""

    });





    useEffect(()=>{


        setProductos(

            JSON.parse(localStorage.getItem("productos")) || []

        );


        setUsuarios(

            JSON.parse(localStorage.getItem("usuarios")) || []

        );


    },[]);







    const cambiarDato=(e)=>{


        setSalida({

            ...salida,

            [e.target.name]:e.target.value

        });


    };







    const guardarSalida=(e)=>{


        e.preventDefault();



        const salidas =

        JSON.parse(localStorage.getItem("salidas")) || [];





        const nuevaSalida={


            id:Date.now(),

            producto:salida.producto,

            cantidad:Number(salida.cantidad),

            fecha:salida.fecha,

            usuario:salida.usuario,

            observacion:salida.observacion


        };






        localStorage.setItem(

            "salidas",

            JSON.stringify(

                [

                ...salidas,

                nuevaSalida

                ]

            )

        );





        window.dispatchEvent(

            new Event("datosActualizados")

        );





        alert("Salida registrada correctamente");



        navigate("/salidas");


    };








return(



<div className="contenedor">



<h1>
⬆ Registrar Salida
</h1>




<form 

className="formulario-salida"

onSubmit={guardarSalida}

>




<label>
Producto
</label>


<select

name="producto"

value={salida.producto}

onChange={cambiarDato}

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
Cantidad
</label>


<input

type="number"

name="cantidad"

value={salida.cantidad}

onChange={cambiarDato}

required

/>








<label>
Fecha
</label>


<input

type="date"

name="fecha"

value={salida.fecha}

onChange={cambiarDato}

required

/>







<label>
Usuario responsable
</label>


<select

name="usuario"

value={salida.usuario}

onChange={cambiarDato}

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

value={salida.observacion}

onChange={cambiarDato}

placeholder="Escriba una observación"

/>







<button type="submit">

Guardar Salida

</button>





</form>




</div>



);


}


export default NuevaSalida;