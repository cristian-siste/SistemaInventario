import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const ingresar = () => {

        const usuarios = JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];

        const usuarioEncontrado = usuarios.find(

            (usuario) =>

                usuario.correo === correo &&
                usuario.password === password

        );

        if (!usuarioEncontrado) {

            alert("Correo o contraseña incorrectos");

            return;

        }

        localStorage.setItem(

            "usuarioActivo",

            JSON.stringify(usuarioEncontrado)

        );

        navigate("/dashboard");

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <div className="login-logo">

                    📦

                </div>

                <h1>
                    Sistema de Gestión
                    <br />
                    de Inventario
                </h1>

                <p>
                    Bienvenido.
                    <br />
                    Inicia sesión para continuar.
                </p>

                <label>
                    Correo electrónico
                </label>

                <input
                    type="email"
                    placeholder="Ingrese correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <label>
                    Contraseña
                </label>

                <input
                    type="password"
                    placeholder="Ingrese contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={ingresar}>

                    Ingresar

                </button>

                <div className="footer-login">

                    © 2026 Sistema de Gestión de Inventario

                </div>

            </div>

        </div>

    );

}

export default Login;