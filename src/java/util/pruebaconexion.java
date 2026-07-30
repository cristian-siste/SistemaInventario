package util;

import conexion.conexion;
import java.sql.Connection;

public class pruebaconexion {

    public static void main(String[] args) {

        Connection con = conexion.getconexion();

        if (con != null) {

            System.out.println("La conexión funciona correctamente.");

        } else {

            System.out.println("No fue posible conectarse.");

        }

    }

}
