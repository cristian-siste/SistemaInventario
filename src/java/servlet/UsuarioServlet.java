package servlet;


import dao.Usuariodao;
import modelo.Usuario;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/UsuarioServlet")
public class UsuarioServlet extends HttpServlet {



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        String nombre = request.getParameter("nombre");

        String correo = request.getParameter("correo");

        String password = request.getParameter("password");

        String rol = request.getParameter("rol");



        Usuario usuario = new Usuario();



        usuario.setNombre(nombre);

        usuario.setCorreo(correo);

        usuario.setPassword(password);

        usuario.setRol(rol);




        Usuariodao dao = new Usuariodao();




        if(dao.registrar(usuario)){


            response.sendRedirect("usuarios.jsp?mensaje=registrado");


        }else{


            response.sendRedirect("usuarios.jsp?error=1");


        }


    }



}