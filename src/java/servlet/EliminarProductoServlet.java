package servlet;

import dao.ProductoDao;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/EliminarProductoServlet")
public class EliminarProductoServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


        int id = Integer.parseInt(request.getParameter("id"));


        ProductoDao dao = new ProductoDao();



        if(dao.eliminar(id)){


            response.sendRedirect("producto.jsp?mensaje=eliminado");


        }else{


            response.sendRedirect("producto.jsp?error=eliminar");


        }


    }


}