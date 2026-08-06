import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NuevaCategoria.css";

function NuevaCategoria(){


    const navigate = useNavigate();



    const [categoria,setCategoria] = useState({

        codigo:"",
        nombre:"",
        descripcion:""

    });





    const cambiarDato = (e)=>{


        setCategoria({

            ...categoria,

            [e.target.name]: e.target.value

        });


    };






    const guardarCategoria = (e)=>{


        e.preventDefault();



        const categorias =

        JSON.parse(localStorage.getItem("categorias")) || [];






        const nuevaCategoria = {


            id: Date.now(),

            codigo: categoria.codigo,

            nombre: categoria.nombre,

            descripcion: categoria.descripcion


        };





        const listaNueva = [

            ...categorias,

            nuevaCategoria

        ];






        localStorage.setItem(

            "categorias",

            JSON.stringify(listaNueva)

        );






        window.dispatchEvent(

            new Event("datosActualizados")

        );






        alert("Categoría guardada correctamente");



        navigate("/categorias");


    };







return(


<div className="contenedor">



<h1>
➕ Nueva Categoría
</h1>





<form

className="formulario-categoria"

onSubmit={guardarCategoria}

>




<label>
Código de categoría
</label>


<input

type="text"

name="codigo"

value={categoria.codigo}

onChange={cambiarDato}

placeholder="Ejemplo CAT001"

required

/>






<label>
Nombre de la categoría
</label>


<input

type="text"

name="nombre"

value={categoria.nombre}

onChange={cambiarDato}

placeholder="Ingrese el nombre"

required

/>






<label>
Descripción
</label>


<textarea

name="descripcion"

value={categoria.descripcion}

onChange={cambiarDato}

placeholder="Ingrese la descripción"

/>






<button type="submit">

Guardar Categoría

</button>





</form>




</div>


);


}


export default NuevaCategoria;