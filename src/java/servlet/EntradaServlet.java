package servlet;


import dao.EntradaDao;
import modelo.Entrada;


import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/EntradaServlet")
public class EntradaServlet extends HttpServlet {



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        int producto_id = Integer.parseInt(
                request.getParameter("producto_id")
        );


        int cantidad = Integer.parseInt(
                request.getParameter("cantidad")
        );



        Entrada entrada = new Entrada();



        entrada.setProducto_id(producto_id);

        entrada.setCantidad(cantidad);



        EntradaDao dao = new EntradaDao();




        if(dao.registrar(entrada)){



            response.sendRedirect("entrada.jsp?mensaje=registrado");



        }else{



            response.sendRedirect("entrada.jsp?error=registrar");



        }



    }


}