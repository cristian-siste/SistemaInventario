package servlet;


import dao.Usuariodao;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/EliminarUsuarioServlet")
public class EliminarUsuarioServlet extends HttpServlet {



@Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {



    int id = Integer.parseInt(request.getParameter("id"));



    Usuariodao dao = new Usuariodao();



    if(dao.eliminarUsuario(id)){


        response.sendRedirect("usuarios.jsp?mensaje=eliminado");


    }else{


        response.sendRedirect("usuarios.jsp?error=1");


    }


}



}