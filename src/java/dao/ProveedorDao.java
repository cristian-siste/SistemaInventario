package dao;


import conexion.conexion;
import modelo.Proveedor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;



public class ProveedorDao {



    // Registrar proveedor

    public boolean registrar(Proveedor proveedor){


        boolean resultado = false;


        String sql = "INSERT INTO proveedores(nombre, telefono, direccion) VALUES (?, ?, ?)";


        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ps.setString(1, proveedor.getNombre());

            ps.setString(2, proveedor.getTelefono());

            ps.setString(3, proveedor.getDireccion());


            ps.executeUpdate();


            resultado = true;



        }catch(SQLException e){

            System.out.println("Error al registrar proveedor: " + e);

        }



        return resultado;


    }







    // Listar proveedores

    public ArrayList<Proveedor> listar(){


        ArrayList<Proveedor> lista = new ArrayList<>();


        String sql = "SELECT * FROM proveedores";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            while(rs.next()){


                Proveedor proveedor = new Proveedor();



                proveedor.setId(rs.getInt("id"));

                proveedor.setNombre(rs.getString("nombre"));

                proveedor.setTelefono(rs.getString("telefono"));

                proveedor.setDireccion(rs.getString("direccion"));



                lista.add(proveedor);


            }



        }catch(SQLException e){

            System.out.println("Error al listar proveedores: " + e);

        }



        return lista;


    }







    // Buscar proveedor por ID


    public Proveedor buscarPorId(int id){


        Proveedor proveedor = null;


        String sql = "SELECT * FROM proveedores WHERE id=?";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setInt(1,id);



            ResultSet rs = ps.executeQuery();



            if(rs.next()){


                proveedor = new Proveedor();



                proveedor.setId(rs.getInt("id"));

                proveedor.setNombre(rs.getString("nombre"));

                proveedor.setTelefono(rs.getString("telefono"));

                proveedor.setDireccion(rs.getString("direccion"));



            }



        }catch(SQLException e){

            System.out.println("Error al buscar proveedor: " + e);

        }



        return proveedor;


    }








    // Actualizar proveedor


    public boolean actualizar(Proveedor proveedor){


        boolean resultado = false;



        String sql = "UPDATE proveedores SET nombre=?, telefono=?, direccion=? WHERE id=?";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setString(1, proveedor.getNombre());

            ps.setString(2, proveedor.getTelefono());

            ps.setString(3, proveedor.getDireccion());

            ps.setInt(4, proveedor.getId());



            ps.executeUpdate();



            resultado = true;



        }catch(SQLException e){

            System.out.println("Error al actualizar proveedor: " + e);

        }



        return resultado;


    }








    // Eliminar proveedor


    public boolean eliminar(int id){


        boolean resultado = false;



        String sql = "DELETE FROM proveedores WHERE id=?";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setInt(1,id);



            ps.executeUpdate();



            resultado = true;



        }catch(SQLException e){

            System.out.println("Error al eliminar proveedor: " + e);

        }



        return resultado;


    }



}