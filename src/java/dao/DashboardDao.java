package dao;


import conexion.conexion;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



public class DashboardDao {



    // Total productos

    public int totalProductos(){


        int total = 0;


        String sql = "SELECT COUNT(*) FROM productos";


        try{


            Connection con = conexion.getconexion();

            PreparedStatement ps = con.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();


            if(rs.next()){

                total = rs.getInt(1);

            }



        }catch(SQLException e){

            System.out.println("Error total productos: " + e);

        }



        return total;

    }







    // Productos con bajo stock


    public int productosBajoStock(){


        int total = 0;



        String sql = 
        "SELECT COUNT(*) FROM productos WHERE stock <= stockMinimo";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            if(rs.next()){

                total = rs.getInt(1);

            }



        }catch(SQLException e){

            System.out.println("Error bajo stock: " + e);

        }



        return total;

    }








    // Productos agotados


    public int productosAgotados(){


        int total = 0;


        String sql =
        "SELECT COUNT(*) FROM productos WHERE stock = 0";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            if(rs.next()){

                total = rs.getInt(1);

            }



        }catch(SQLException e){

            System.out.println("Error productos agotados: " + e);

        }



        return total;

    }








    // Total proveedores


    public int totalProveedores(){


        int total = 0;


        String sql = "SELECT COUNT(*) FROM proveedores";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            if(rs.next()){

                total = rs.getInt(1);

            }



        }catch(SQLException e){

            System.out.println("Error proveedores: " + e);

        }



        return total;

    }



}