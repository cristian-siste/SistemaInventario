import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditarProveedor() {


    const { id } = useParams();

    const navigate = useNavigate();



    const proveedores = JSON.parse(
        localStorage.getItem("proveedores")
    ) || [];



    const proveedorActual = proveedores.find(
        proveedor => proveedor.id === Number(id)
    );



    const [proveedor, setProveedor] = useState({

        nombre: proveedorActual?.nombre || "",
        telefono: proveedorActual?.telefono || "",
        direccion: proveedorActual?.direccion || ""

    });




    const cambiarDato = (e) => {

        setProveedor({

            ...proveedor,

            [e.target.name]: e.target.value

        });

    };




    const actualizarProveedor = (e) => {

        e.preventDefault();



        const listaActualizada = proveedores.map((item)=>{


            if(item.id === Number(id)){


                return {

                    ...item,

                    nombre: proveedor.nombre,

                    telefono: proveedor.telefono,

                    direccion: proveedor.direccion

                };


            }


            return item;


        });



        localStorage.setItem(

            "proveedores",

            JSON.stringify(listaActualizada)

        );



        alert("Proveedor actualizado correctamente");

        navigate("/proveedores");


    };





    return (

        <div className="contenedor">


            <h1>Editar Proveedor</h1>


            <form onSubmit={actualizarProveedor}>


                <label>
                    Nombre
                </label>


                <input

                    type="text"

                    name="nombre"

                    value={proveedor.nombre}

                    onChange={cambiarDato}

                    required

                />



                <label>
                    Teléfono
                </label>


                <input

                    type="text"

                    name="telefono"

                    value={proveedor.telefono}

                    onChange={cambiarDato}

                    required

                />



                <label>
                    Dirección
                </label>


                <input

                    type="text"

                    name="direccion"

                    value={proveedor.direccion}

                    onChange={cambiarDato}

                    required

                />



                <button type="submit">

                    Actualizar Proveedor

                </button>



            </form>


        </div>

    );


}


export default EditarProveedor;