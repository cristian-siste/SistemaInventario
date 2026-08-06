import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerUsuarios } from "../services/api";


function Usuarios(){


    const [usuarios, setUsuarios] = useState([]);



    useEffect(()=>{

        cargarUsuarios();


    },[]);



    const cargarUsuarios = async()=>{

        try{

            const datos = await obtenerUsuarios();


            console.log(
                "Usuarios recibidos:",
                datos
            );


            setUsuarios(datos);


        }catch(error){

            console.error(
                "Error cargando usuarios:",
                error
            );

        }

    };



    return(

        <div className="contenedor">


            <div className="header-pagina">


                <h1>
                    Usuarios
                </h1>


                <Link
                    to="/nuevo-usuario"
                    className="btn"
                >
                    Nuevo Usuario
                </Link>


            </div>



            <div className="tabla-contenedor">


                <table>


                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Nombre</th>

                            <th>Correo</th>

                            <th>Rol</th>

                            <th>Acciones</th>

                        </tr>


                    </thead>



                    <tbody>


                    {
                        usuarios.map((usuario)=>(


                            <tr key={usuario.id}>


                                <td>
                                    {usuario.id}
                                </td>


                                <td>
                                    {usuario.nombre}
                                </td>


                                <td>
                                    {usuario.correo}
                                </td>


                                <td>
                                    {usuario.rol}
                                </td>


                                <td>


                                    <Link
                                        to={`/editar-usuario/${usuario.id}`}
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


export default Usuarios;