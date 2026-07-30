package servlet;


import dao.ProductoDao;
import modelo.Producto;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/ProductoServlet")
public class ProductoServlet extends HttpServlet {


@Override
protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {

 System.out.println("ENTRO AL PRODUCTO SERVLET");
    String nombre = request.getParameter("nombre");

    String descripcion = request.getParameter("descripcion");


    double precioCompra = Double.parseDouble(request.getParameter("precioCompra"));


    double precioVenta = Double.parseDouble(request.getParameter("precioVenta"));


    int stock = Integer.parseInt(request.getParameter("stock"));


    int stockMinimo = Integer.parseInt(request.getParameter("stockMinimo"));


    int categoria_id = Integer.parseInt(request.getParameter("categoria_id"));


    int proveedor_id = Integer.parseInt(request.getParameter("proveedor_id"));



    // PRUEBA DE DATOS RECIBIDOS

    System.out.println("Nombre: " + nombre);

    System.out.println("Descripcion: " + descripcion);

    System.out.println("Precio Compra: " + precioCompra);

    System.out.println("Precio Venta: " + precioVenta);

    System.out.println("Stock: " + stock);

    System.out.println("Stock Minimo: " + stockMinimo);

    System.out.println("Categoria: " + categoria_id);

    System.out.println("Proveedor: " + proveedor_id);



    Producto producto = new Producto();



    producto.setNombre(nombre);

    producto.setDescripcion(descripcion);

    producto.setPrecioCompra(precioCompra);

    producto.setPrecioVenta(precioVenta);

    producto.setStock(stock);

    producto.setStockMinimo(stockMinimo);

    producto.setCategoria_id(categoria_id);

    producto.setProveedor_id(proveedor_id);



    ProductoDao dao = new ProductoDao();



    boolean guardado = dao.registrar(producto);



    if(guardado){

        System.out.println("Producto guardado correctamente");

    }else{

        System.out.println("No se pudo guardar el producto");

    }



    response.sendRedirect("producto.jsp");


}


}