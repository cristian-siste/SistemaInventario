package servlet;


import dao.ProveedorDao;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/EliminarProveedorServlet")
public class EliminarProveedorServlet extends HttpServlet {



    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        int id = Integer.parseInt(request.getParameter("id"));



        ProveedorDao dao = new ProveedorDao();



        if(dao.eliminar(id)){


            response.sendRedirect("proveedor.jsp?mensaje=eliminado");


        }else{


            response.sendRedirect("proveedor.jsp?error=eliminar");


        }


    }


}