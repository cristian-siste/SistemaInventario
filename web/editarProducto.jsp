<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.ProductoDao"%>
<%@page import="modelo.Producto"%>


<!DOCTYPE html>
<html>

<head>

<title>Editar Producto</title>

<style>

body{
    font-family:Arial;
    background:#f2f2f2;
}


.contenedor{

    width:500px;
    margin:40px auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0px 5px 15px #aaa;

}


h2{

text-align:center;
color:#2c3e50;

}


input, textarea{

width:100%;
padding:10px;
margin:10px 0;
border-radius:5px;
border:1px solid #ccc;

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

background:#219150;

}


a{

display:block;
text-align:center;
margin-top:15px;
text-decoration:none;

}

</style>

</head>


<body>


<div class="contenedor">


<h2>Editar Producto</h2>


<%

int id = Integer.parseInt(request.getParameter("id"));


ProductoDao dao = new ProductoDao();


Producto producto = dao.buscarPorId(id);


%>



<form action="${pageContext.request.contextPath}/EditarProductoServlet" method="post">


<input type="hidden" name="id" value="<%=producto.getId()%>">



<label>Nombre:</label>

<input type="text" 
name="nombre" 
value="<%=producto.getNombre()%>"
required>



<label>Descripción:</label>

<textarea name="descripcion"><%=producto.getDescripcion()%></textarea>



<label>Precio Compra:</label>

<input type="number"
step="0.01"
name="precioCompra"
value="<%=producto.getPrecioCompra()%>"
required>



<label>Precio Venta:</label>

<input type="number"
step="0.01"
name="precioVenta"
value="<%=producto.getPrecioVenta()%>"
required>



<label>Stock:</label>

<input type="number"
name="stock"
value="<%=producto.getStock()%>"
required>



<label>Stock Mínimo:</label>

<input type="number"
name="stockMinimo"
value="<%=producto.getStockMinimo()%>"
required>



<label>Categoría ID:</label>

<input type="number"
name="categoria_id"
value="<%=producto.getCategoria_id()%>"
required>



<label>Proveedor ID:</label>

<input type="number"
name="proveedor_id"
value="<%=producto.getProveedor_id()%>"
required>



<button type="submit">

Guardar Cambios

</button>


</form>



<a href="producto.jsp">

⬅ Volver a productos

</a>



</div>


</body>

</html>