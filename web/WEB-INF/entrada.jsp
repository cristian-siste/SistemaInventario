<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.EntradaDao"%>
<%@page import="modelo.Entrada"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Entrada</title>


<style>

body{
font-family:Arial;
background:#f2f2f2;
}


.contenedor{

width:700px;
margin:40px auto;
background:white;
padding:30px;
border-radius:10px;

}


input{

width:100%;
padding:10px;
margin:10px 0;

}


button{

width:100%;
padding:10px;
background:#2c3e50;
color:white;
border:none;

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


<div class="contenedor">


<h2>Registrar Entrada</h2>


<form action="${pageContext.request.contextPath}/EntradaServlet" method="post">


<label>ID Producto:</label>

<input type="number" name="producto_id" required>


<label>Cantidad:</label>

<input type="number" name="cantidad" required>



<button type="submit">
Guardar Entrada
</button>


</form>




<h2>Historial de Entradas</h2>


<table border="1">


<tr>

<th>ID</th>
<th>Producto</th>
<th>Cantidad</th>
<th>Fecha</th>

</tr>


<%

EntradaDao dao = new EntradaDao();

ArrayList<Entrada> lista = dao.listar();


for(Entrada entrada : lista){

%>


<tr>

<td><%=entrada.getId()%></td>

<td><%=entrada.getProducto_id()%></td>

<td><%=entrada.getCantidad()%></td>

<td><%=entrada.getFecha()%></td>


</tr>


<%

}

%>


</table>


</div>


</body>


</html>
