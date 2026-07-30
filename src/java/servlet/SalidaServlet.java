package servlet;


import dao.SalidaDao;
import modelo.Salida;


import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/SalidaServlet")
public class SalidaServlet extends HttpServlet {



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {



        int producto_id = Integer.parseInt(
                request.getParameter("producto_id")
        );



        int cantidad = Integer.parseInt(
                request.getParameter("cantidad")
        );



        Salida salida = new Salida();



        salida.setProducto_id(producto_id);

        salida.setCantidad(cantidad);



        SalidaDao dao = new SalidaDao();




        if(dao.registrar(salida)){



            response.sendRedirect("salida.jsp?mensaje=registrado");



        }else{



            response.sendRedirect("salida.jsp?error=stock");



        }



    }


}