import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NuevoUsuario.css";

function NuevoUsuario() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({

        nombre: "",
        correo: "",
        password: "",
        rol: "Auxiliar"

    });




    const cambiarDato = (e) => {

        setUsuario({

            ...usuario,

            [e.target.name]: e.target.value

        });

    };






    const guardarUsuario = (e) => {

        e.preventDefault();



        const nuevoUsuario = {

            id: Date.now(),

            nombre: usuario.nombre,

            correo: usuario.correo,

            password: usuario.password,

            rol: usuario.rol

        };



        const usuarios = JSON.parse(

            localStorage.getItem("usuarios")

        ) || [];



        usuarios.push(nuevoUsuario);



        localStorage.setItem(

            "usuarios",

            JSON.stringify(usuarios)

        );



        window.dispatchEvent(

            new Event("datosActualizados")

        );



        alert("Usuario registrado correctamente");



        navigate("/usuarios");

    };






    return (

        <div className="contenedor">

            <h1>

                ➕ Nuevo Usuario

            </h1>



            <form

                className="formulario-usuario"

                onSubmit={guardarUsuario}

            >



                <label>

                    Nombre

                </label>

                <input

                    type="text"

                    name="nombre"

                    value={usuario.nombre}

                    onChange={cambiarDato}

                    placeholder="Ingrese nombre"

                    required

                />





                <label>

                    Correo electrónico

                </label>

                <input

                    type="email"

                    name="correo"

                    value={usuario.correo}

                    onChange={cambiarDato}

                    placeholder="Ingrese correo"

                    required

                />





                <label>

                    Contraseña

                </label>

                <input

                    type="password"

                    name="password"

                    value={usuario.password}

                    onChange={cambiarDato}

                    placeholder="Ingrese contraseña"

                    required

                />





                <label>

                    Rol

                </label>

                <select

                    name="rol"

                    value={usuario.rol}

                    onChange={cambiarDato}

                >

                    <option value="Administrador">

                        Administrador

                    </option>

                    <option value="Auxiliar">

                        Auxiliar

                    </option>

                </select>





                <button type="submit">

                    Guardar Usuario

                </button>



            </form>

        </div>

    );

}

export default NuevoUsuario;