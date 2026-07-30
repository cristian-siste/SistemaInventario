<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>

<title>Dashboard Inventario</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Arial;
}


body{

    background:#eef2f7;

}


/* MENU */

.sidebar{

    position:fixed;
    width:240px;
    height:100vh;
    background:#1f2937;
    padding:20px;

}


.logo{

    color:white;
    text-align:center;
    font-size:22px;
    font-weight:bold;
    margin-bottom:30px;

}



.sidebar a{

    display:block;
    color:#d1d5db;
    text-decoration:none;
    padding:12px;
    border-radius:8px;
    margin-bottom:8px;

}



.sidebar a:hover{

    background:#2563eb;
    color:white;

}




/* CONTENIDO */

.main{

    margin-left:240px;
    padding:30px;

}



.header{

    background:white;
    padding:25px;
    border-radius:15px;
    box-shadow:0 5px 15px #ccc;

}



.header h1{

color:#1f2937;

}



.usuario{

margin-top:10px;
color:#2563eb;
font-weight:bold;

}



/* TARJETAS */

.resumen{

display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
margin-top:25px;

}



.card{

background:white;
padding:20px;
border-radius:12px;
box-shadow:0 5px 15px #ccc;

}



.card h3{

color:#6b7280;

}


.numero{

font-size:30px;
font-weight:bold;

}




.panel{

background:white;
margin-top:25px;
padding:20px;
border-radius:12px;
box-shadow:0 5px 15px #ccc;

}



</style>


</head>



<body>



<div class="sidebar">


<div class="logo">

📦 INVENTARIO

</div>


<a href="dashboard.jsp">
🏠 Inicio
</a>


<a href="producto.jsp">
📦 Productos
</a>


<a href="categoria.jsp">
📁 Categorías
</a>


<a href="proveedor.jsp">
🚚 Proveedores
</a>


<a href="entrada.jsp">
⬆ Entradas
</a>


<a href="salida.jsp">
⬇ Salidas
</a>


<a href="usuarios.jsp">
👥 Usuarios
</a>


<a href="reportes.jsp">
📊 Reportes
</a>


<a href="logout.jsp">
🚪 Cerrar sesión
</a>



</div>





<div class="main">



<div class="header">

<h1>
Sistema de Gestión de Inventario
</h1>


<p>
Control de productos, proveedores y movimientos
</p>


<div class="usuario">
Usuario conectado: Administrador
</div>


</div>






<div class="resumen">


<div class="card">

<h3>
Productos
</h3>

<div class="numero">
0
</div>

</div>



<div class="card">

<h3>
Proveedores
</h3>

<div class="numero">
0
</div>

</div>




<div class="card">

<h3>
Usuarios
</h3>

<div class="numero">
0
</div>

</div>




<div class="card">

<h3>
Stock Bajo
</h3>

<div class="numero">
0
</div>

</div>




</div>







<div class="panel">


<h2>
Accesos del sistema
</h2>

<br>


<a href="producto.jsp">
📦 Gestionar Productos
</a>

<br><br>


<a href="proveedor.jsp">
🚚 Gestionar Proveedores
</a>

<br><br>


<a href="usuarios.jsp">
👥 Gestionar Usuarios
</a>

<br><br>


<a href="reportes.jsp">
📊 Ver Reportes
</a>



</div>




</div>



</body>


</html>