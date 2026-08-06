import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerCategorias } from "../services/api";


function Categorias(){


    const [categorias, setCategorias] = useState([]);



    useEffect(()=>{

        cargarCategorias();


    },[]);



    const cargarCategorias = async()=>{

        try{

            const datos = await obtenerCategorias();

            console.log("Categorías recibidas:", datos);

            setCategorias(datos);


        }catch(error){

            console.error(
                "Error cargando categorías:",
                error
            );

        }

    };



    return(

        <div className="contenedor">


            <div className="header-pagina">


                <h1>
                    Categorías
                </h1>


                <Link
                    to="/nueva-categoria"
                    className="btn"
                >
                    Nueva Categoría
                </Link>


            </div>



            <div className="tabla-contenedor">


                <table>


                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Nombre</th>

                            <th>Descripción</th>

                            <th>Acciones</th>

                        </tr>


                    </thead>



                    <tbody>


                    {
                        categorias.map((categoria)=>(


                            <tr key={categoria.id}>


                                <td>
                                    {categoria.id}
                                </td>


                                <td>
                                    {categoria.nombre}
                                </td>


                                <td>
                                    {categoria.descripcion}
                                </td>


                                <td>


                                    <Link
                                        to={`/editar-categoria/${categoria.id}`}
                                        className="btn-editar"
                                    >
                                        Editar
                                    </Link>


                                    <button
                                        className="btn-eliminar"
                                    >
                                        Eliminar
                                    </button>


                                </td>


                            </tr>


                        ))
                    }


                    </tbody>


                </table>


            </div>


        </div>

    );


}


export default Categorias;