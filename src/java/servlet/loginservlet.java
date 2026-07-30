package servlet;

import dao.Usuariodao;
import modelo.Usuario;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/loginservlet")
public class loginservlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


        String correo = request.getParameter("correo");
        String password = request.getParameter("contrasena");


        Usuariodao dao = new Usuariodao();


        Usuario usuario = dao.validarUsuario(correo, password);


        if(usuario != null){


            HttpSession sesion = request.getSession();

            sesion.setAttribute("usuario", usuario);


            response.sendRedirect("dashboard.jsp");


        }else{


            response.sendRedirect("login.jsp?error=1");


        }

    }

}