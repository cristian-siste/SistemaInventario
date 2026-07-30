<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.Usuariodao"%>
<%@page import="modelo.Usuario"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Usuarios</title>


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



.contenedor{

    width:90%;
    margin:40px auto;
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 5px 15px #ccc;

}



h1{

    text-align:center;
    color:#1f2937;
    margin-bottom:25px;

}



.mensaje{

    background:#d4edda;
    color:#155724;
    padding:12px;
    border-radius:8px;
    margin-bottom:20px;

}



.error{

    background:#f8d7da;
    color:#721c24;
    padding:12px;
    border-radius:8px;
    margin-bottom:20px;

}



.volver{

    display:inline-block;
    background:#2c3e50;
    color:white;
    padding:10px 15px;
    text-decoration:none;
    border-radius:8px;
    margin-bottom:20px;

}



table{

    width:100%;
    border-collapse:collapse;

}



th{

    background:#2563eb;
    color:white;
    padding:12px;

}



td{

    padding:12px;
    text-align:center;
    border-bottom:1px solid #ddd;

}



form{

    display:inline;

}



button{

    border:none;
    padding:8px 15px;
    border-radius:6px;
    cursor:pointer;
    color:white;

}



.eliminar{

    background:#e74c3c;

}



.eliminar:hover{

    background:#c0392b;

}



.editar{

    background:#f39c12;

}



</style>


</head>


<body>



<div class="contenedor">



<h1>
👥 Usuarios Registrados
</h1>




<%

if(request.getParameter("mensaje")!=null){

%>


<div class="mensaje">

Usuario eliminado correctamente.

</div>


<%

}


if(request.getParameter("error")!=null){

%>


<div class="error">

No se pudo eliminar el usuario.

</div>


<%

}

%>





<a class="volver" href="dashboard.jsp">

⬅ Volver al Dashboard

</a>





<table border="1">



<tr>

<th>
ID
</th>

<th>
Nombre
</th>

<th>
Correo
</th>

<th>
Rol
</th>

<th>
Acciones
</th>


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



<td>


<form action="EliminarUsuarioServlet" 
      method="get"
      onsubmit="return confirm('¿Desea eliminar este usuario?');">



<input type="hidden"
       name="id"
       value="<%=usuario.getId()%>">



<button class="eliminar" type="submit">

🗑 Eliminar

</button>



</form>



</td>


</tr>




<%

}

%>



</table>




</div>


</body>


</html>