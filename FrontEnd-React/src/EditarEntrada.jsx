import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NuevaEntrada.css";


function EditarEntrada(){


    const { id } = useParams();

    const navigate = useNavigate();



    const entradasGuardadas =

    JSON.parse(localStorage.getItem("entradas")) || [];




    const entradaActual = entradasGuardadas.find(

        entrada => entrada.id === Number(id)

    );





    const [entrada,setEntrada] = useState({


        producto: entradaActual?.producto || "",

        cantidad: entradaActual?.cantidad || "",

        fecha: entradaActual?.fecha || "",

        usuario: entradaActual?.usuario || "",

        observacion: entradaActual?.observacion || ""


    });








    const cambiarDato=(e)=>{


        setEntrada({

            ...entrada,

            [e.target.name]:e.target.value

        });


    };









    const actualizarEntrada=(e)=>{


        e.preventDefault();




        const nuevaLista = entradasGuardadas.map(item=>{


            if(item.id === Number(id)){


                return{


                    ...item,


                    producto:entrada.producto,


                    cantidad:Number(entrada.cantidad),


                    fecha:entrada.fecha,


                    usuario:entrada.usuario,


                    observacion:entrada.observacion


                };


            }


            return item;


        });






        localStorage.setItem(

            "entradas",

            JSON.stringify(nuevaLista)

        );






        window.dispatchEvent(

            new Event("datosActualizados")

        );





        alert("Entrada actualizada correctamente");



        navigate("/entradas");


    };








return(



<div className="contenedor">



<h1>
✏️ Editar Entrada
</h1>





<form

className="formulario-entrada"

onSubmit={actualizarEntrada}

>





<label>
Producto
</label>


<input

type="text"

name="producto"

value={entrada.producto}

onChange={cambiarDato}

/>







<label>
Cantidad
</label>


<input

type="number"

name="cantidad"

value={entrada.cantidad}

onChange={cambiarDato}

/>








<label>
Fecha
</label>


<input

type="date"

name="fecha"

value={entrada.fecha}

onChange={cambiarDato}

/>








<label>
Usuario responsable
</label>


<input

type="text"

name="usuario"

value={entrada.usuario}

onChange={cambiarDato}

/>








<label>
Observación
</label>


<textarea

name="observacion"

value={entrada.observacion}

onChange={cambiarDato}

/>








<button type="submit">

Actualizar Entrada

</button>






</form>




</div>



);


}


export default EditarEntrada;