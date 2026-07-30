<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.ReporteDao"%>
<%@page import="modelo.Producto"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Reportes</title>


<style>

body{

font-family:Arial;
background:#f2f2f2;

}



.menu{

background:#2c3e50;
padding:15px;
text-align:center;

}



.menu a{

color:white;
text-decoration:none;
margin:15px;
font-weight:bold;

}



.contenedor{

width:95%;
max-width:1100px;
margin:40px auto;
background:white;
padding:30px;
border-radius:10px;
box-shadow:0px 5px 15px #ccc;

}



h1,h2{

text-align:center;
color:#2c3e50;

}



.tarjetas{

display:flex;
justify-content:center;
gap:20px;
flex-wrap:wrap;

}



.tarjeta{

width:220px;
padding:25px;
background:#ecf0f1;
border-radius:10px;
text-align:center;

}



.numero{

font-size:35px;
font-weight:bold;
color:#27ae60;

}



table{

width:100%;
margin-top:30px;
border-collapse:collapse;

}



th{

background:#2c3e50;
color:white;

}



td,th{

padding:10px;
text-align:center;

}



</style>


</head>


<body>



<div class="menu">


<a href="dashboard.jsp">
Inicio
</a>


<a href="producto.jsp">
Productos
</a>


<a href="entrada.jsp">
Entradas
</a>


<a href="salida.jsp">
Salidas
</a>


<a href="reporte.jsp">
Reportes
</a>



</div>






<div class="contenedor">


<h1>
Reportes del Sistema
</h1>



<%


ReporteDao dao = new ReporteDao();


int entradas = dao.totalEntradas();


int salidas = dao.totalSalidas();



ArrayList<Producto> productos = dao.reporteProductos();



%>





<div class="tarjetas">



<div class="tarjeta">

<div class="numero">

<%=productos.size()%>

</div>

<p>
Productos registrados
</p>

</div>





<div class="tarjeta">

<div class="numero">

<%=entradas%>

</div>

<p>
Total Entradas
</p>

</div>





<div class="tarjeta">

<div class="numero">

<%=salidas%>

</div>

<p>
Total Salidas
</p>

</div>




</div>







<h2>
Reporte de Inventario Actual
</h2>




<table border="1">


<tr>

<th>ID</th>

<th>Nombre</th>

<th>Descripción</th>

<th>Precio Compra</th>

<th>Precio Venta</th>

<th>Stock</th>

<th>Stock Mínimo</th>

</tr>




<%


for(Producto producto : productos){


%>



<tr>


<td>
<%=producto.getId()%>
</td>


<td>
<%=producto.getNombre()%>
</td>


<td>
<%=producto.getDescripcion()%>
</td>


<td>
$ <%=producto.getPrecioCompra()%>
</td>


<td>
$ <%=producto.getPrecioVenta()%>
</td>


<td>
<%=producto.getStock()%>
</td>


<td>
<%=producto.getStockMinimo()%>
</td>


</tr>



<%


}


%>



</table>




</div>


</body>


</html>