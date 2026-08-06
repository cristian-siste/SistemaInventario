import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerProveedores } from "../services/api";


function Proveedores(){


    const [proveedores, setProveedores] = useState([]);



    useEffect(()=>{

        cargarProveedores();


    },[]);



    const cargarProveedores = async()=>{

        try{

            const datos = await obtenerProveedores();

            console.log(
                "Proveedores recibidos:",
                datos
            );


            setProveedores(datos);


        }catch(error){

            console.error(
                "Error cargando proveedores:",
                error
            );

        }

    };



    return(

        <div className="contenedor">


            <div className="header-pagina">

                <h1>
                    Proveedores
                </h1>


                <Link
                    to="/nuevo-proveedor"
                    className="btn"
                >
                    Nuevo Proveedor
                </Link>


            </div>



            <div className="tabla-contenedor">


                <table>


                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Nombre</th>

                            <th>Teléfono</th>

                            <th>Dirección</th>

                            <th>Acciones</th>

                        </tr>


                    </thead>



                    <tbody>


                    {
                        proveedores.map((proveedor)=>(


                            <tr key={proveedor.id}>


                                <td>
                                    {proveedor.id}
                                </td>


                                <td>
                                    {proveedor.nombre}
                                </td>


                                <td>
                                    {proveedor.telefono}
                                </td>


                                <td>
                                    {proveedor.direccion}
                                </td>


                                <td>


                                    <Link
                                        to={`/editar-proveedor/${proveedor.id}`}
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


export default Proveedores;