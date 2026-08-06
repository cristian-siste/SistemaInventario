import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NuevoProveedor.css";

function NuevoProveedor() {

    const navigate = useNavigate();

    const [proveedor, setProveedor] = useState({

        nombre: "",
        telefono: "",
        direccion: ""

    });




    const cambiarDato = (e) => {

        setProveedor({

            ...proveedor,

            [e.target.name]: e.target.value

        });

    };






    const guardarProveedor = (e) => {

        e.preventDefault();



        const nuevoProveedor = {

            id: Date.now(),

            nombre: proveedor.nombre,

            telefono: proveedor.telefono,

            direccion: proveedor.direccion

        };



        const proveedores = JSON.parse(

            localStorage.getItem("proveedores")

        ) || [];



        proveedores.push(nuevoProveedor);



        localStorage.setItem(

            "proveedores",

            JSON.stringify(proveedores)

        );



        window.dispatchEvent(

            new Event("datosActualizados")

        );



        alert("Proveedor guardado correctamente");



        navigate("/proveedores");

    };






    return (

        <div className="contenedor">

            <h1>

                ➕ Nuevo Proveedor

            </h1>



            <form

                className="formulario-proveedor"

                onSubmit={guardarProveedor}

            >



                <label>

                    Nombre del proveedor

                </label>

                <input

                    type="text"

                    name="nombre"

                    value={proveedor.nombre}

                    onChange={cambiarDato}

                    placeholder="Ingrese nombre"

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

                    placeholder="Ingrese teléfono"

                    required

                />





                <label>

                    Dirección

                </label>

                <textarea

                    name="direccion"

                    value={proveedor.direccion}

                    onChange={cambiarDato}

                    placeholder="Ingrese dirección"

                    required

                />





                <button type="submit">

                    Guardar Proveedor

                </button>



            </form>

        </div>

    );

}

export default NuevoProveedor;