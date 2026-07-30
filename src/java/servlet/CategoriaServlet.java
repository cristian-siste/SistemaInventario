package servlet;


import dao.CategoriaDao;
import modelo.Categoria;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/CategoriaServlet")
public class CategoriaServlet extends HttpServlet {



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        String nombre = request.getParameter("nombre");

        String descripcion = request.getParameter("descripcion");



        Categoria categoria = new Categoria();


        categoria.setNombre(nombre);

        categoria.setDescripcion(descripcion);



        CategoriaDao dao = new CategoriaDao();



        if(dao.registrar(categoria)){


            response.sendRedirect("categoria.jsp?mensaje=registrado");


        }else{


            response.sendRedirect("categoria.jsp?error=registrar");


        }



    }


}