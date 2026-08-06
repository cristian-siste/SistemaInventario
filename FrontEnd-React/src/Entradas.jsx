import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerEntradas } from "./services/api";


function Entradas(){


    const [entradas, setEntradas] = useState([]);



    useEffect(()=>{

        cargarEntradas();

    },[]);



    const cargarEntradas = async()=>{

        try{

            const datos = await obtenerEntradas();


            console.log(
                "Entradas recibidas:",
                datos
            );


            setEntradas(datos);


        }catch(error){

            console.error(
                "Error cargando entradas:",
                error
            );

        }

    };



    return(

        <div className="contenedor">


            <div className="header-pagina">


                <h1>
                    Entradas
                </h1>


                <Link
                    to="/nueva-entrada"
                    className="btn"
                >
                    Nueva Entrada
                </Link>


            </div>



            <div className="tabla-contenedor">


                <table>


                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Producto</th>

                            <th>Cantidad</th>

                            <th>Fecha</th>

                            <th>Acciones</th>

                        </tr>


                    </thead>



                    <tbody>


                    {
                        entradas.map((entrada)=>(


                            <tr key={entrada.id}>


                                <td>
                                    {entrada.id}
                                </td>


                                <td>
                                    {entrada.producto}
                                </td>


                                <td>
                                    {entrada.cantidad}
                                </td>


                                <td>
                                    {entrada.fecha}
                                </td>


                                <td>


                                    <Link
                                        to={`/editar-entrada/${entrada.id}`}
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


export default Entradas;