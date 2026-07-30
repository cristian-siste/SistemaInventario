<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<title>Sistema de Gestión de Inventario</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{

height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#0f172a,#2563eb);

}

.login{

width:430px;
background:#fff;
padding:40px;
border-radius:15px;
box-shadow:0px 15px 35px rgba(0,0,0,.30);
text-align:center;

}

.logo{

font-size:70px;
margin-bottom:10px;

}

h1{

color:#1e293b;
margin-bottom:10px;

}

p{

color:#64748b;
margin-bottom:25px;

}

.error{

background:#ffe5e5;
color:#c62828;
padding:12px;
border-radius:8px;
margin-bottom:20px;
font-weight:bold;

}

input{

width:100%;
padding:14px;
margin-bottom:18px;
border:1px solid #cbd5e1;
border-radius:8px;
font-size:15px;

}

input:focus{

outline:none;
border-color:#2563eb;

}

button{

width:100%;
padding:14px;
background:#2563eb;
color:white;
border:none;
border-radius:8px;
font-size:16px;
cursor:pointer;
transition:.3s;

}

button:hover{

background:#1d4ed8;

}

.registro{

margin-top:25px;

}

.registro a{

text-decoration:none;
font-weight:bold;
color:#2563eb;

}

.registro a:hover{

text-decoration:underline;

}

.footer{

margin-top:25px;
font-size:13px;
color:#888;

}

</style>

</head>

<body>

<div class="login">

<div class="logo">

📦

</div>

<h1>Sistema de Gestión de Inventario</h1>

<p>Ingrese su correo y contraseña</p>

<%

if(request.getParameter("error")!=null){

%>

<div class="error">

Correo o contraseña incorrectos.

</div>

<%

}

%>

<form action="${pageContext.request.contextPath}/loginservlet" method="post">

<input
type="email"
name="correo"
placeholder="Correo electrónico"
required>

<input
type="password"
name="contrasena"
placeholder="Contraseña"
required>

<button type="submit">

Iniciar Sesión

</button>

</form>

<div class="registro">

¿No tienes una cuenta?

<br><br>

<a href="registro.jsp">

Crear una cuenta

</a>

</div>

<div class="footer">

© 2026 Sistema de Gestión de Inventario

</div>

</div>

</body>

</html>