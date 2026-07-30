package servlet;


import dao.ProveedorDao;
import modelo.Proveedor;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/EditarProveedorServlet")
public class EditarProveedorServlet extends HttpServlet {



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        Proveedor proveedor = new Proveedor();



        proveedor.setId(
                Integer.parseInt(request.getParameter("id"))
        );


        proveedor.setNombre(
                request.getParameter("nombre")
        );


        proveedor.setTelefono(
                request.getParameter("telefono")
        );


        proveedor.setDireccion(
                request.getParameter("direccion")
        );



        ProveedorDao dao = new ProveedorDao();



        if(dao.actualizar(proveedor)){


            response.sendRedirect("proveedor.jsp?mensaje=actualizado");


        }else{


            response.sendRedirect("proveedor.jsp?error=actualizar");


        }



    }


}
