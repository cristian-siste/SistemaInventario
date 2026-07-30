<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.ProveedorDao"%>
<%@page import="modelo.Proveedor"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Proveedores</title>


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



input, textarea{

width:100%;
padding:10px;
margin:10px 0;
border:1px solid #ccc;
border-radius:5px;

}



button{

padding:10px;
color:white;
border:none;
border-radius:5px;
cursor:pointer;

}



.guardar{

width:100%;
background:#27ae60;

}



.editar{

background:#f39c12;

}



.eliminar{

background:#e74c3c;

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


<h2>Registrar Proveedor</h2>



<%

if(request.getParameter("mensaje")!=null){

%>

<div class="mensaje">

Operación realizada correctamente.

</div>

<%

}


if(request.getParameter("error")!=null){

%>

<div class="error">

No se pudo realizar la operación.

</div>

<%

}

%>




<form action="${pageContext.request.contextPath}/ProveedorServlet" method="post">


<label>Nombre:</label>

<input type="text"
name="nombre"
required>



<label>Teléfono:</label>

<input type="text"
name="telefono"
required>



<label>Dirección:</label>

<textarea name="direccion"></textarea>




<button class="guardar" type="submit">

Guardar Proveedor

</button>


</form>





<h2>Lista de Proveedores</h2>



<table border="1">


<tr>

<th>ID</th>

<th>Nombre</th>

<th>Teléfono</th>

<th>Dirección</th>

<th>Acciones</th>

</tr>




<%

ProveedorDao dao = new ProveedorDao();


ArrayList<Proveedor> lista = dao.listar();



for(Proveedor proveedor : lista){

%>




<tr>


<td>

<%=proveedor.getId()%>

</td>



<td>

<%=proveedor.getNombre()%>

</td>



<td>

<%=proveedor.getTelefono()%>

</td>



<td>

<%=proveedor.getDireccion()%>

</td>




<td>


<a href="editarProveedor.jsp?id=<%=proveedor.getId()%>">


<button class="editar">

Editar

</button>


</a>





<a href="EliminarProveedorServlet?id=<%=proveedor.getId()%>"
onclick="return confirm('¿Desea eliminar este proveedor?');">


<button class="eliminar">

Eliminar

</button>


</a>



</td>


</tr>




<%

}

%>



</table>


</div>


</body>

</html>