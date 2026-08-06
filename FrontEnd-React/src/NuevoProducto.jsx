import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NuevoProducto.css";

function NuevoProducto() {

    const navigate = useNavigate();

    const [producto, setProducto] = useState({

        nombre: "",
        descripcion: "",
        precioCompra: "",
        precioVenta: "",
        stock: "",
        stockMinimo: ""

    });




    const cambiarDato = (e) => {

        setProducto({

            ...producto,

            [e.target.name]: e.target.value

        });

    };






    const guardarProducto = (e) => {

        e.preventDefault();



        const nuevoProducto = {

            id: Date.now(),

            nombre: producto.nombre,

            descripcion: producto.descripcion,

            precioCompra: producto.precioCompra,

            precioVenta: producto.precioVenta,

            stock: producto.stock,

            stockMinimo: producto.stockMinimo

        };



        const productos = JSON.parse(

            localStorage.getItem("productos")

        ) || [];



        productos.push(nuevoProducto);



        localStorage.setItem(

            "productos",

            JSON.stringify(productos)

        );



        window.dispatchEvent(

            new Event("datosActualizados")

        );



        alert("Producto registrado correctamente");



        navigate("/productos");

    };






    return (

        <div className="contenedor">

            <h1>

                ➕ Nuevo Producto

            </h1>



            <form

                className="formulario-producto"

                onSubmit={guardarProducto}

            >



                <label>

                    Nombre del producto

                </label>

                <input

                    type="text"

                    name="nombre"

                    value={producto.nombre}

                    onChange={cambiarDato}

                    placeholder="Ingrese el nombre del producto"

                    required

                />





                <label>

                    Descripción

                </label>

                <textarea

                    name="descripcion"

                    value={producto.descripcion}

                    onChange={cambiarDato}

                    placeholder="Ingrese la descripción"

                ></textarea>





                <label>

                    Precio Compra

                </label>

                <input

                    type="number"

                    name="precioCompra"

                    value={producto.precioCompra}

                    onChange={cambiarDato}

                    placeholder="0"

                    required

                />





                <label>

                    Precio Venta

                </label>

                <input

                    type="number"

                    name="precioVenta"

                    value={producto.precioVenta}

                    onChange={cambiarDato}

                    placeholder="0"

                    required

                />





                <label>

                    Stock

                </label>

                <input

                    type="number"

                    name="stock"

                    value={producto.stock}

                    onChange={cambiarDato}

                    placeholder="0"

                    required

                />





                <label>

                    Stock mínimo

                </label>

                <input

                    type="number"

                    name="stockMinimo"

                    value={producto.stockMinimo}

                    onChange={cambiarDato}

                    placeholder="0"

                    required

                />





                <button type="submit">

                    Guardar Producto

                </button>



            </form>

        </div>

    );

}

export default NuevoProducto;