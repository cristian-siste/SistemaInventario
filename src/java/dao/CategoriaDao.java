package dao;


import conexion.conexion;
import modelo.Categoria;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;



public class CategoriaDao {



    // Registrar categoria

    public boolean registrar(Categoria categoria){


        boolean resultado = false;


        String sql = "INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)";


        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ps.setString(1, categoria.getNombre());

            ps.setString(2, categoria.getDescripcion());


            ps.executeUpdate();


            resultado = true;



        }catch(SQLException e){

            System.out.println("Error al registrar categoria: " + e);

        }



        return resultado;

    }






    // Listar categorias

    public ArrayList<Categoria> listar(){


        ArrayList<Categoria> lista = new ArrayList<>();


        String sql = "SELECT * FROM categorias";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ResultSet rs = ps.executeQuery();



            while(rs.next()){


                Categoria categoria = new Categoria();


                categoria.setId(rs.getInt("id"));

                categoria.setNombre(rs.getString("nombre"));

                categoria.setDescripcion(rs.getString("descripcion"));



                lista.add(categoria);



            }



        }catch(SQLException e){


            System.out.println("Error al listar categorias: " + e);


        }



        return lista;


    }







    // Buscar categoria por ID


    public Categoria buscarPorId(int id){


        Categoria categoria = null;


        String sql = "SELECT * FROM categorias WHERE id=?";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ps.setInt(1,id);



            ResultSet rs = ps.executeQuery();



            if(rs.next()){


                categoria = new Categoria();


                categoria.setId(rs.getInt("id"));

                categoria.setNombre(rs.getString("nombre"));

                categoria.setDescripcion(rs.getString("descripcion"));



            }



        }catch(SQLException e){


            System.out.println("Error al buscar categoria: " + e);


        }



        return categoria;


    }







    // Actualizar categoria


    public boolean actualizar(Categoria categoria){


        boolean resultado = false;


        String sql = "UPDATE categorias SET nombre=?, descripcion=? WHERE id=?";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setString(1,categoria.getNombre());

            ps.setString(2,categoria.getDescripcion());

            ps.setInt(3,categoria.getId());



            ps.executeUpdate();



            resultado = true;



        }catch(SQLException e){


            System.out.println("Error al actualizar categoria: " + e);


        }



        return resultado;


    }








    // Eliminar categoria


    public boolean eliminar(int id){


        boolean resultado = false;


        String sql = "DELETE FROM categorias WHERE id=?";



        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setInt(1,id);



            ps.executeUpdate();



            resultado = true;



        }catch(SQLException e){


            System.out.println("Error al eliminar categoria: " + e);


        }



        return resultado;


    }



}