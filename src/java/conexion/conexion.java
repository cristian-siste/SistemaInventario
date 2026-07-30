package conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conexion {

    private static final String URL = "jdbc:mysql://localhost:3306/sistema_inventario";
    private static final String USER = "root";
    private static final String PASSWORD = "tiancris7";

    public static Connection getconexion() {

        Connection con = null;

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(URL, USER, PASSWORD);

            System.out.println("Conexión exitosa a MySQL");

        } catch (ClassNotFoundException e) {

            System.out.println("No se encontró el Driver.");

        } catch (SQLException e) {

            System.out.println("Error al conectar con la base de datos.");

        }

        return con;
    }
}
