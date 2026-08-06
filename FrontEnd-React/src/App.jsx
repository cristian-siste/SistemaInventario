import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Productos from "./pages/Productos";
import NuevoProducto from "./NuevoProducto";
import EditarProducto from "./EditarProducto";

import Categorias from "./pages/Categorias";
import NuevaCategoria from "./pages/NuevaCategoria";
import EditarCategoria from "./EditarCategoria";

import Proveedores from "./pages/Proveedores";
import NuevoProveedor from "./pages/NuevoProveedor";
import EditarProveedor from "./pages/EditarProveedor";

import Usuarios from "./pages/Usuarios";
import NuevoUsuario from "./pages/NuevoUsuario";
import EditarUsuario from "./pages/EditarUsuario";

import Reportes from "./pages/Reportes";

import Entradas from "./Entradas";
import NuevaEntrada from "./NuevaEntrada";
import EditarEntrada from "./EditarEntrada";

import Salidas from "./Salidas";
import NuevaSalida from "./NuevaSalida";
import EditarSalida from "./EditarSalida";
import ConsultarProductos from "./pages/ConsultarProductos";



function App() {

    return (

        <BrowserRouter>

            <Routes>


                <Route
                    path="/"
                    element={<Inicio />}
                />


                <Route
                    path="/login"
                    element={<Login />}
                />


                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />


                <Route
                    path="/productos"
                    element={<Productos />}
                />


                <Route
                    path="/nuevo-producto"
                    element={<NuevoProducto />}
                />


                <Route
                    path="/editar-producto/:id"
                    element={<EditarProducto />}
                />


                <Route
                    path="/categorias"
                    element={<Categorias />}
                />


                <Route
                    path="/nueva-categoria"
                    element={<NuevaCategoria />}
                />
                <Route 
                path="/editar-categoria/:id"
                element={<EditarCategoria/>}
                />


                <Route
                    path="/proveedores"
                    element={<Proveedores />}
                />


                <Route
                    path="/nuevo-proveedor"
                    element={<NuevoProveedor />}
                />


                <Route
                    path="/editar-proveedor/:id"
                    element={<EditarProveedor />}
                />


                <Route
                    path="/usuarios"
                    element={<Usuarios />}
                />


                <Route
                    path="/nuevo-usuario"
                    element={<NuevoUsuario />}
                />


                <Route
                    path="/editar-usuario/:id"
                    element={<EditarUsuario />}
                />


                <Route
                    path="/reportes"
                    element={<Reportes />}
                />


                <Route
                    path="/entradas"
                    element={<Entradas />}
                />
                <Route
                path="/editar-entrada/:id"
                element={<EditarEntrada/>}
                />


                <Route
                    path="/nueva-entrada"
                    element={<NuevaEntrada />}
                />


                <Route
                    path="/salidas"
                    element={<Salidas />}
                />


                <Route
                    path="/nueva-salida"
                    element={<NuevaSalida />}
                />
                <Route 
                path="/editar-salida/:id"
                element={<EditarSalida/>}
                />


                <Route
                    path="/consultar-productos"
                    element={<ConsultarProductos />}
                />


            </Routes>


        </BrowserRouter>

    );

}


export default App;