package servlet;


import dao.CategoriaDao;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/EliminarCategoriaServlet")
public class EliminarCategoriaServlet extends HttpServlet {



    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        int id = Integer.parseInt(request.getParameter("id"));



        CategoriaDao dao = new CategoriaDao();



        if(dao.eliminar(id)){


            response.sendRedirect("categoria.jsp?mensaje=eliminado");


        }else{


            response.sendRedirect("categoria.jsp?error=eliminar");


        }


    }


}