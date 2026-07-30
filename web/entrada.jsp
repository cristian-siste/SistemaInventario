<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.EntradaDao"%>
<%@page import="modelo.Entrada"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Entradas de Inventario</title>


<style>

body{
    font-family:Arial;
    background:#f2f2f2;
}


.contenedor{

    width:900px;
    margin:40px auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0px 5px 15px #ccc;

}


h2{

text-align:center;
color:#2c3e50;

}



input{

width:100%;
padding:10px;
margin:10px 0;
border:1px solid #ccc;
border-radius:5px;

}



button{

width:100%;
padding:12px;
background:#27ae60;
color:white;
border:none;
border-radius:5px;
cursor:pointer;

}



button:hover{

opacity:0.8;

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



.mensaje{

background:#d4edda;
color:#155724;
padding:10px;
border-radius:5px;

}



.error{

background:#f8d7da;
color:#721c24;
padding:10px;
border-radius:5px;

}


</style>


</head>



<body>


<div class="contenedor">



<h2>Registrar Entrada</h2>




<%

if(request.getParameter("mensaje")!=null){

%>

<div class="mensaje">

Entrada registrada correctamente.

</div>


<%

}


if(request.getParameter("error")!=null){

%>

<div class="error">

No se pudo registrar la entrada.

</div>


<%

}

%>





<form action="${pageContext.request.contextPath}/EntradaServlet" method="post">



<label>ID Producto:</label>

<input type="number"
name="producto_id"
required>



<label>Cantidad:</label>

<input type="number"
name="cantidad"
required>



<button type="submit">

Guardar Entrada

</button>



</form>





<h2>Historial de Entradas</h2>




<table border="1">


<tr>

<th>ID</th>

<th>Producto ID</th>

<th>Cantidad</th>

<th>Fecha</th>

</tr>




<%

EntradaDao dao = new EntradaDao();


ArrayList<Entrada> lista = dao.listar();



for(Entrada entrada : lista){


%>




<tr>


<td>

<%=entrada.getId()%>

</td>


<td>

<%=entrada.getProducto_id()%>

</td>


<td>

<%=entrada.getCantidad()%>

</td>


<td>

<%=entrada.getFecha()%>

</td>


</tr>




<%

}

%>



</table>


</div>


</body>


</html>