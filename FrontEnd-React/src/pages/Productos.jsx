import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerProductos, eliminarProducto } from "../services/api";


function Productos(){


    const [productos, setProductos] = useState([]);




    const cargarProductos = async()=>{


        try{


            const datos = await obtenerProductos();


            setProductos(datos);



        }catch(error){


            console.error(
                "Error cargando productos:",
                error
            );


        }


    };





    useEffect(()=>{


        cargarProductos();



        window.addEventListener(
            "datosActualizados",
            cargarProductos
        );



        return ()=>{


            window.removeEventListener(
                "datosActualizados",
                cargarProductos
            );


        };


    },[]);







    const eliminar = async(id)=>{


        const confirmar = window.confirm(
            "¿Desea eliminar este producto?"
        );



        if(!confirmar){

            return;

        }




        try{


            const respuesta = await eliminarProducto(id);



            console.log(
                respuesta
            );



            cargarProductos();



            window.dispatchEvent(

                new Event("datosActualizados")

            );



        }catch(error){


            console.error(
                "Error eliminando producto:",
                error
            );


        }


    };







    return(


        <div className="contenedor">



            <div className="header-pagina">


                <h1>
                    Productos
                </h1>



                <Link

                    to="/nuevo-producto"

                    className="btn"

                >

                    Nuevo Producto

                </Link>


            </div>






            <div className="tabla-contenedor">


                <table>



                    <thead>


                        <tr>


                            <th>
                                ID
                            </th>


                            <th>
                                Nombre
                            </th>


                            <th>
                                Descripción
                            </th>


                            <th>
                                Precio Compra
                            </th>


                            <th>
                                Precio Venta
                            </th>


                            <th>
                                Stock
                            </th>


                            <th>
                                Categoría
                            </th>


                            <th>
                                Proveedor
                            </th>


                            <th>
                                Acciones
                            </th>


                        </tr>


                    </thead>







                    <tbody>



                    {

                        productos.length === 0 ?


                        <tr>


                            <td colSpan="9">

                                No hay productos registrados

                            </td>


                        </tr>



                        :



                        productos.map((producto)=>(



                            <tr key={producto.id}>



                                <td>

                                    {producto.id}

                                </td>




                                <td>

                                    {producto.nombre}

                                </td>




                                <td>

                                    {producto.descripcion}

                                </td>




                                <td>

                                    ${producto.precioCompra}

                                </td>




                                <td>

                                    ${producto.precioVenta}

                                </td>




                                <td>

                                    {producto.stock}

                                </td>




                                <td>

                                    {producto.categoria}

                                </td>




                                <td>

                                    {producto.proveedor}

                                </td>





                                <td>



                                    <Link

                                        to={`/editar-producto/${producto.id}`}

                                        className="btn-editar"

                                    >

                                        Editar

                                    </Link>





                                    <button


                                        className="btn-eliminar"


                                        onClick={()=>eliminar(producto.id)}


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



export default Productos;