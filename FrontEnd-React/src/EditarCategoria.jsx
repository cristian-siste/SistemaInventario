import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditarCategoria(){


    const { id } = useParams();

    const navigate = useNavigate();




    const categoriasGuardadas =

    JSON.parse(localStorage.getItem("categorias")) || [];





    const categoriaActual = categoriasGuardadas.find(

        categoria => categoria.id === Number(id)

    );






    const [categoria,setCategoria] = useState({

        nombre: categoriaActual?.nombre || "",

        descripcion: categoriaActual?.descripcion || ""

    });








    const cambiarDato=(e)=>{


        setCategoria({

            ...categoria,

            [e.target.name]: e.target.value

        });


    };








    const actualizarCategoria=(e)=>{


        e.preventDefault();




        const listaActualizada = categoriasGuardadas.map(item=>{


            if(item.id === Number(id)){


                return{

                    ...item,

                    nombre: categoria.nombre,

                    descripcion: categoria.descripcion

                };


            }


            return item;


        });






        localStorage.setItem(

            "categorias",

            JSON.stringify(listaActualizada)

        );





        window.dispatchEvent(

            new Event("datosActualizados")

        );





        alert("Categoría actualizada correctamente");



        navigate("/categorias");


    };







return(


<div className="contenedor">



<h1>
✏️ Editar Categoría
</h1>





<form onSubmit={actualizarCategoria}>



<label>
Nombre de la categoría
</label>


<input

type="text"

name="nombre"

value={categoria.nombre}

onChange={cambiarDato}

required

/>





<label>
Descripción
</label>



<textarea

name="descripcion"

value={categoria.descripcion}

onChange={cambiarDato}

placeholder="Descripción de la categoría"

>

</textarea>






<button type="submit">

Actualizar Categoría

</button>





</form>




</div>


);


}


export default EditarCategoria;