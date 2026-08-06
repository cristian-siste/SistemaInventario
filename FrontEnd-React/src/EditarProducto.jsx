import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditarProducto(){


    const { id } = useParams();

    const navigate = useNavigate();



    const productos = JSON.parse(
        localStorage.getItem("productos")
    ) || [];



    const productoActual = productos.find(

        producto => producto.id === Number(id)

    );



    const [producto,setProducto] = useState({

        nombre: productoActual?.nombre || "",
        descripcion: productoActual?.descripcion || "",
        precioCompra: productoActual?.precioCompra || "",
        precioVenta: productoActual?.precioVenta || "",
        stock: productoActual?.stock || "",
        stockMinimo: productoActual?.stockMinimo || ""

    });




    const cambiarDato = (e)=>{


        setProducto({

            ...producto,

            [e.target.name]:e.target.value

        });


    };




    const actualizarProducto = (e)=>{


        e.preventDefault();



        const listaActualizada = productos.map((item)=>{


            if(item.id === Number(id)){


                return{

                    ...item,

                    nombre:producto.nombre,

                    descripcion:producto.descripcion,

                    precioCompra:producto.precioCompra,

                    precioVenta:producto.precioVenta,

                    stock:producto.stock,

                    stockMinimo:producto.stockMinimo

                };


            }


            return item;


        });



        localStorage.setItem(

            "productos",

            JSON.stringify(listaActualizada)

        );



        alert("Producto actualizado correctamente");


        navigate("/productos");


    };





    return(

        <div className="contenedor">


            <h1>
                Editar Producto
            </h1>



            <form onSubmit={actualizarProducto}>


                <label>
                    Nombre
                </label>


                <input

                    type="text"

                    name="nombre"

                    value={producto.nombre}

                    onChange={cambiarDato}

                    required

                />



                <label>
                    Descripción
                </label>


                <input

                    type="text"

                    name="descripcion"

                    value={producto.descripcion}

                    onChange={cambiarDato}

                />



                <label>
                    Precio Compra
                </label>


                <input

                    type="number"

                    name="precioCompra"

                    value={producto.precioCompra}

                    onChange={cambiarDato}

                />



                <label>
                    Precio Venta
                </label>


                <input

                    type="number"

                    name="precioVenta"

                    value={producto.precioVenta}

                    onChange={cambiarDato}

                />



                <label>
                    Stock
                </label>


                <input

                    type="number"

                    name="stock"

                    value={producto.stock}

                    onChange={cambiarDato}

                />



                <label>
                    Stock mínimo
                </label>


                <input

                    type="number"

                    name="stockMinimo"

                    value={producto.stockMinimo}

                    onChange={cambiarDato}

                />



                <button type="submit">

                    Actualizar Producto

                </button>



            </form>


        </div>

    );


}


export default EditarProducto;