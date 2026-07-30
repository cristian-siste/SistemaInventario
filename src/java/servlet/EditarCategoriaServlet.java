package servlet;


import dao.CategoriaDao;
import modelo.Categoria;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/EditarCategoriaServlet")
public class EditarCategoriaServlet extends HttpServlet {



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        Categoria categoria = new Categoria();



        categoria.setId(
                Integer.parseInt(request.getParameter("id"))
        );


        categoria.setNombre(
                request.getParameter("nombre")
        );


        categoria.setDescripcion(
                request.getParameter("descripcion")
        );



        CategoriaDao dao = new CategoriaDao();



        if(dao.actualizar(categoria)){


            response.sendRedirect("categoria.jsp?mensaje=actualizado");


        }else{


            response.sendRedirect("categoria.jsp?error=actualizar");


        }



    }


}