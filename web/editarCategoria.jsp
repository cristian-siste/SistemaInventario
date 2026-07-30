<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.CategoriaDao"%>
<%@page import="modelo.Categoria"%>


<!DOCTYPE html>
<html>

<head>

<title>Editar Categoría</title>


<style>

body{
    font-family:Arial;
    background:#f2f2f2;
}


.contenedor{

    width:500px;
    margin:50px auto;
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


a{

display:block;
text-align:center;
margin-top:15px;

}


</style>


</head>


<body>


<div class="contenedor">


<h2>Editar Categoría</h2>



<%

int id = Integer.parseInt(request.getParameter("id"));


CategoriaDao dao = new CategoriaDao();


Categoria categoria = dao.buscarPorId(id);


%>




<form action="${pageContext.request.contextPath}/EditarCategoriaServlet" method="post">


<input type="hidden" name="id" value="<%=categoria.getId()%>">



<label>Nombre:</label>

<input type="text" 
name="nombre"
value="<%=categoria.getNombre()%>"
required>



<label>Descripción:</label>

<textarea name="descripcion"><%=categoria.getDescripcion()%></textarea>




<button type="submit">

Guardar Cambios

</button>



</form>




<a href="categoria.jsp">

⬅ Volver a categorías

</a>



</div>


</body>

</html>