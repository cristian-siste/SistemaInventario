package servlet;


import dao.ProveedorDao;
import modelo.Proveedor;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/ProveedorServlet")
public class ProveedorServlet extends HttpServlet {



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        String nombre = request.getParameter("nombre");

        String telefono = request.getParameter("telefono");

        String direccion = request.getParameter("direccion");



        Proveedor proveedor = new Proveedor();



        proveedor.setNombre(nombre);

        proveedor.setTelefono(telefono);

        proveedor.setDireccion(direccion);



        ProveedorDao dao = new ProveedorDao();




        if(dao.registrar(proveedor)){


            response.sendRedirect("proveedor.jsp?mensaje=registrado");


        }else{


            response.sendRedirect("proveedor.jsp?error=registrar");


        }



    }


}