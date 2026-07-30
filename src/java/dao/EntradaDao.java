package dao;


import conexion.conexion;
import modelo.Entrada;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import java.util.ArrayList;



public class EntradaDao {



    // Registrar entrada y actualizar stock

    public boolean registrar(Entrada entrada){


        boolean resultado = false;



        String sqlEntrada = 
        "INSERT INTO entradas(producto_id, cantidad, fecha) VALUES (?, ?, NOW())";



        String sqlStock =
        "UPDATE productos SET stock = stock + ? WHERE id=?";



        try{


            Connection con = conexion.getconexion();



            PreparedStatement ps = con.prepareStatement(sqlEntrada);



            ps.setInt(1, entrada.getProducto_id());

            ps.setInt(2, entrada.getCantidad());



            ps.executeUpdate();





            PreparedStatement psStock = con.prepareStatement(sqlStock);



            psStock.setInt(1, entrada.getCantidad());

            psStock.setInt(2, entrada.getProducto_id());



            psStock.executeUpdate();



            resultado = true;



        }catch(SQLException e){


            System.out.println("Error al registrar entrada: " + e);


        }



        return resultado;


    }








    // Listar entradas


    public ArrayList<Entrada> listar(){


        ArrayList<Entrada> lista = new ArrayList<>();


        String sql = "SELECT * FROM entradas";



        try{


            Connection con = conexion.getconexion();



            PreparedStatement ps = con.prepareStatement(sql);



            ResultSet rs = ps.executeQuery();




            while(rs.next()){



                Entrada entrada = new Entrada();



                entrada.setId(rs.getInt("id"));

                entrada.setProducto_id(rs.getInt("producto_id"));

                entrada.setCantidad(rs.getInt("cantidad"));

                entrada.setFecha(rs.getString("fecha"));



                lista.add(entrada);



            }




        }catch(SQLException e){


            System.out.println("Error al listar entradas: " + e);


        }



        return lista;


    }



}