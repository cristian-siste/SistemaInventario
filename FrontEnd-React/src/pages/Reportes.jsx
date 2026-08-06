import React, { useState, useEffect } from "react";
import { obtenerReporte } from "../services/api";

function Reportes(){


    const [reporte, setReporte] = useState({

        totalProductos:0,
        bajoStock:0,
        totalEntradas:0,
        totalSalidas:0

    });



    useEffect(()=>{


        cargarReporte();



        window.addEventListener(
            "datosActualizados",
            cargarReporte
        );



        return ()=>{

            window.removeEventListener(
                "datosActualizados",
                cargarReporte
            );

        };


    },[]);





    const cargarReporte = async()=>{


        try{


            const datos = await obtenerReporte();


            console.log(
                "Reporte recibido:",
                datos
            );


            setReporte(datos);



        }catch(error){


            console.error(
                "Error cargando reporte:",
                error
            );


        }


    };





    return(


        <div className="contenedor">


            <div className="header-pagina">


                <h1>
                    Reportes
                </h1>


            </div>





            <div className="tarjetas-dashboard">



                <div className="tarjeta">


                    <h3>
                        Total Productos
                    </h3>


                    <p>
                        {reporte.totalProductos}
                    </p>


                </div>





                <div className="tarjeta">


                    <h3>
                        Productos Bajo Stock
                    </h3>


                    <p>
                        {reporte.bajoStock}
                    </p>


                </div>





                <div className="tarjeta">


                    <h3>
                        Total Entradas
                    </h3>


                    <p>
                        {reporte.totalEntradas}
                    </p>


                </div>





                <div className="tarjeta">


                    <h3>
                        Total Salidas
                    </h3>


                    <p>
                        {reporte.totalSalidas}
                    </p>


                </div>



            </div>


        </div>


    );


}



export default Reportes;