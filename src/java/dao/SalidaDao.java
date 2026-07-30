package dao;


import conexion.conexion;
import modelo.Salida;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import java.util.ArrayList;



public class SalidaDao {



    // Registrar salida y actualizar stock

    public boolean registrar(Salida salida){


        boolean resultado = false;



        String verificarStock = 
        "SELECT stock FROM productos WHERE id=?";



        String sqlSalida =
        "INSERT INTO salidas(producto_id, cantidad, fecha) VALUES (?, ?, NOW())";



        String actualizarStock =
        "UPDATE productos SET stock = stock - ? WHERE id=?";




        try{


            Connection con = conexion.getconexion();



            // Verificar stock disponible

            PreparedStatement psStock = con.prepareStatement(verificarStock);


            psStock.setInt(1, salida.getProducto_id());


            ResultSet rs = psStock.executeQuery();



            if(rs.next()){


                int stockActual = rs.getInt("stock");



                if(stockActual >= salida.getCantidad()){



                    // Registrar salida

                    PreparedStatement psSalida = con.prepareStatement(sqlSalida);



                    psSalida.setInt(1, salida.getProducto_id());

                    psSalida.setInt(2, salida.getCantidad());



                    psSalida.executeUpdate();





                    // Restar stock


                    PreparedStatement psActualizar = con.prepareStatement(actualizarStock);



                    psActualizar.setInt(1, salida.getCantidad());

                    psActualizar.setInt(2, salida.getProducto_id());



                    psActualizar.executeUpdate();



                    resultado = true;


                }


            }



        }catch(SQLException e){


            System.out.println("Error al registrar salida: " + e);


        }



        return resultado;


    }








    // Listar salidas


    public ArrayList<Salida> listar(){



        ArrayList<Salida> lista = new ArrayList<>();



        String sql = "SELECT * FROM salidas";



        try{


            Connection con = conexion.getconexion();



            PreparedStatement ps = con.prepareStatement(sql);



            ResultSet rs = ps.executeQuery();




            while(rs.next()){



                Salida salida = new Salida();



                salida.setId(rs.getInt("id"));

                salida.setProducto_id(rs.getInt("producto_id"));

                salida.setCantidad(rs.getInt("cantidad"));

                salida.setFecha(rs.getString("fecha"));



                lista.add(salida);



            }



        }catch(SQLException e){


            System.out.println("Error al listar salidas: " + e);


        }




        return lista;


    }



}