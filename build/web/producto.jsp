<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="dao.ProductoDao"%>
<%@page import="modelo.Producto"%>
<%@page import="java.util.ArrayList"%>


<!DOCTYPE html>
<html>

<head>

<title>Productos</title>


<style>

body{
    font-family: Arial;
    background:#f2f2f2;
}


.contenedor{

    width:95%;
    max-width:1000px;
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
    background:#2c3e50;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;

}


button:hover{

    opacity:0.8;

}


.guardar{

    width:100%;
    background:#27ae60;

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


.editar{

background:#f39c12;

}


.eliminar{

background:#e74c3c;

}


.mensaje{

background:#d4edda;
color:#155724;
padding:10px;
border-radius:5px;
margin-bottom:15px;

}


.error{

background:#f8d7da;
color:#721c24;
padding:10px;
border-radius:5px;
margin-bottom:15px;

}


</style>


</head>


<body>


<div class="contenedor">


<h2>Registrar Producto</h2>



<%

if(request.getParameter("mensaje")!=null){

%>

<div class="mensaje">

Producto actualizado correctamente.

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




<form action="${pageContext.request.contextPath}/ProductoServlet" method="post">


<label>Nombre:</label>

<input type="text" name="nombre" required>



<label>Descripción:</label>

<textarea name="descripcion"></textarea>



<label>Precio Compra:</label>

<input type="number" 
step="0.01" 
name="precioCompra" 
required>



<label>Precio Venta:</label>

<input type="number" 
step="0.01" 
name="precioVenta" 
required>



<label>Stock:</label>

<input type="number" 
name="stock" 
required>



<label>Stock Mínimo:</label>

<input type="number" 
name="stockMinimo" 
required>



<label>ID Categoría:</label>

<input type="number" 
name="categoria_id" 
required>



<label>ID Proveedor:</label>

<input type="number" 
name="proveedor_id" 
required>



<button class="guardar" type="submit">

Guardar Producto

</button>


</form>





<h2>Lista de Productos</h2>


<table border="1">


<tr>

<th>ID</th>
<th>Nombre</th>
<th>Descripción</th>
<th>Precio Compra</th>
<th>Precio Venta</th>
<th>Stock</th>
<th>Stock Mínimo</th>
<th>Categoría</th>
<th>Proveedor</th>
<th>Acciones</th>

</tr>




<%

ProductoDao dao = new ProductoDao();

ArrayList<Producto> lista = dao.listar();


for(Producto producto : lista){

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
<%=producto.getPrecioCompra()%>
</td>


<td>
<%=producto.getPrecioVenta()%>
</td>


<td>
<%=producto.getStock()%>
</td>


<td>
<%=producto.getStockMinimo()%>
</td>


<td>
<%=producto.getCategoria_id()%>
</td>


<td>
<%=producto.getProveedor_id()%>
</td>



<td>


<a href="editarProducto.jsp?id=<%=producto.getId()%>">

<button class="editar">

Editar

</button>

</a>



<a href="EliminarProductoServlet?id=<%=producto.getId()%>"
onclick="return confirm('¿Desea eliminar este producto?');">


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