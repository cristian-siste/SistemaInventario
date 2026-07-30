<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.Usuariodao"%>
<%@page import="modelo.Usuario"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Usuarios</title>


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



input, select{

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



td, th{

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



<h2>
Registrar Usuario
</h2>



<%

if(request.getParameter("mensaje")!=null){

%>

<div class="mensaje">

Usuario registrado correctamente.

</div>

<%

}


if(request.getParameter("error")!=null){

%>

<div class="error">

No se pudo registrar el usuario.

</div>

<%

}

%>





<form action="${pageContext.request.contextPath}/UsuarioServlet" method="post">


<label>
Nombre:
</label>

<input type="text" 
name="nombre"
required>




<label>
Correo:
</label>

<input type="email"
name="correo"
required>




<label>
Contraseña:
</label>

<input type="password"
name="password"
required>




<label>
Rol:
</label>


<select name="rol" required>


<option value="Administrador">
Administrador
</option>


<option value="Auxiliar">
Auxiliar
</option>


</select>




<button type="submit">

Guardar Usuario

</button>



</form>





<h2>
Usuarios Registrados
</h2>



<table border="1">


<tr>

<th>ID</th>

<th>Nombre</th>

<th>Correo</th>

<th>Rol</th>

</tr>



<%


Usuariodao dao = new Usuariodao();


ArrayList<Usuario> lista = dao.listarUsuarios();



for(Usuario usuario : lista){


%>


<tr>


<td>

<%=usuario.getId()%>

</td>


<td>

<%=usuario.getNombre()%>

</td>


<td>

<%=usuario.getCorreo()%>

</td>


<td>

<%=usuario.getRol()%>

</td>


</tr>



<%

}

%>



</table>



</div>


</body>


</html>