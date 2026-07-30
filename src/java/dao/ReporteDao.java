package dao;


import conexion.conexion;
import modelo.Producto;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;



public class ReporteDao {



    // Reporte de productos

    public ArrayList<Producto> reporteProductos(){


        ArrayList<Producto> lista = new ArrayList<>();


        String sql = "SELECT * FROM productos";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            while(rs.next()){


                Producto producto = new Producto();



                producto.setId(rs.getInt("id"));

                producto.setNombre(rs.getString("nombre"));

                producto.setDescripcion(rs.getString("descripcion"));

                producto.setPrecioCompra(rs.getDouble("precioCompra"));

                producto.setPrecioVenta(rs.getDouble("precioVenta"));

                producto.setStock(rs.getInt("stock"));

                producto.setStockMinimo(rs.getInt("stockMinimo"));



                lista.add(producto);



            }



        }catch(SQLException e){


            System.out.println("Error reporte productos: "+e);


        }



        return lista;


    }







    // Cantidad total de entradas


    public int totalEntradas(){


        int total = 0;


        String sql = "SELECT COUNT(*) FROM entradas";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            if(rs.next()){

                total = rs.getInt(1);

            }



        }catch(SQLException e){


            System.out.println(e);


        }



        return total;


    }







    // Cantidad total de salidas


    public int totalSalidas(){


        int total = 0;


        String sql = "SELECT COUNT(*) FROM salidas";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            if(rs.next()){

                total = rs.getInt(1);

            }



        }catch(SQLException e){


            System.out.println(e);


        }



        return total;


    }



}