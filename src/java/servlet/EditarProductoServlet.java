package servlet;

import dao.ProductoDao;
import modelo.Producto;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/EditarProductoServlet")
public class EditarProductoServlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


        Producto producto = new Producto();


        producto.setId(Integer.parseInt(request.getParameter("id")));

        producto.setNombre(request.getParameter("nombre"));

        producto.setDescripcion(request.getParameter("descripcion"));

        producto.setPrecioCompra(
                Double.parseDouble(request.getParameter("precioCompra"))
        );

        producto.setPrecioVenta(
                Double.parseDouble(request.getParameter("precioVenta"))
        );

        producto.setStock(
                Integer.parseInt(request.getParameter("stock"))
        );

        producto.setStockMinimo(
                Integer.parseInt(request.getParameter("stockMinimo"))
        );

        producto.setCategoria_id(
                Integer.parseInt(request.getParameter("categoria_id"))
        );

        producto.setProveedor_id(
                Integer.parseInt(request.getParameter("proveedor_id"))
        );



        ProductoDao dao = new ProductoDao();



        if(dao.actualizar(producto)){


            response.sendRedirect("producto.jsp?mensaje=actualizado");


        }else{


            response.sendRedirect("producto.jsp?error=actualizar");


        }


    }


}