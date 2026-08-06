import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditarUsuario() {


    const { id } = useParams();

    const navigate = useNavigate();



    const usuarios = JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];



    const usuarioActual = usuarios.find(
        usuario => usuario.id === Number(id)
    );



    const [usuario, setUsuario] = useState({

        nombre: usuarioActual?.nombre || "",
        correo: usuarioActual?.correo || "",
        password: usuarioActual?.password || "",
        rol: usuarioActual?.rol || "Auxiliar"

    });




    const cambiarDato = (e) => {


        setUsuario({

            ...usuario,

            [e.target.name]: e.target.value

        });


    };




    const actualizarUsuario = (e) => {


        e.preventDefault();



        const listaActualizada = usuarios.map((item)=>{


            if(item.id === Number(id)){


                return {

                    ...item,

                    nombre: usuario.nombre,

                    correo: usuario.correo,

                    password: usuario.password,

                    rol: usuario.rol

                };

            }


            return item;


        });



        localStorage.setItem(

            "usuarios",

            JSON.stringify(listaActualizada)

        );



        alert("Usuario actualizado correctamente");


        navigate("/usuarios");


    };





    return (

        <div className="contenedor">


            <h1>Editar Usuario</h1>



            <form onSubmit={actualizarUsuario}>


                <label>
                    Nombre
                </label>


                <input

                    type="text"

                    name="nombre"

                    value={usuario.nombre}

                    onChange={cambiarDato}

                    required

                />



                <label>
                    Correo
                </label>


                <input

                    type="email"

                    name="correo"

                    value={usuario.correo}

                    onChange={cambiarDato}

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

                    Actualizar Usuario

                </button>


            </form>


        </div>

    );


}


export default EditarUsuario;