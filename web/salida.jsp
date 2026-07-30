<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.SalidaDao"%>
<%@page import="modelo.Salida"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Salidas de Inventario</title>


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
background:#e74c3c;
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



<h2>Registrar Salida</h2>




<%

if(request.getParameter("mensaje")!=null){

%>

<div class="mensaje">

Salida registrada correctamente.

</div>


<%

}



if(request.getParameter("error")!=null){

%>

<div class="error">

No hay suficiente stock para realizar la salida.

</div>


<%

}

%>





<form action="${pageContext.request.contextPath}/SalidaServlet" method="post">



<label>ID Producto:</label>

<input type="number"
name="producto_id"
required>



<label>Cantidad:</label>

<input type="number"
name="cantidad"
required>




<button type="submit">

Registrar Salida

</button>



</form>





<h2>Historial de Salidas</h2>




<table border="1">


<tr>

<th>ID</th>

<th>Producto ID</th>

<th>Cantidad</th>

<th>Fecha</th>

</tr>




<%

SalidaDao dao = new SalidaDao();


ArrayList<Salida> lista = dao.listar();



for(Salida salida : lista){


%>




<tr>


<td>

<%=salida.getId()%>

</td>


<td>

<%=salida.getProducto_id()%>

</td>


<td>

<%=salida.getCantidad()%>

</td>


<td>

<%=salida.getFecha()%>

</td>


</tr>




<%

}

%>



</table>


</div>


</body>


</html>