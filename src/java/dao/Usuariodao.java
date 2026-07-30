package dao;


import conexion.conexion;
import modelo.Usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;



public class Usuariodao {



    // REGISTRAR USUARIO

    public boolean registrar(Usuario usuario) {


        boolean resultado = false;


        String sql = "INSERT INTO usuarios(nombre, correo, password, rol) VALUES (?, ?, ?, ?)";


        try {


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setString(1, usuario.getNombre());

            ps.setString(2, usuario.getCorreo());

            ps.setString(3, usuario.getPassword());

            ps.setString(4, usuario.getRol());



            int filas = ps.executeUpdate();



            if(filas > 0){

                resultado = true;

            }



            ps.close();

            con.close();



        }catch(SQLException e){


            System.out.println("Error al registrar usuario: " + e.getMessage());


        }



        return resultado;


    }







    // COMPATIBILIDAD CON REGISTRO ANTERIOR


    public boolean registrarUsuario(Usuario usuario) {


        return registrar(usuario);


    }








    // VALIDAR LOGIN


    public Usuario validarUsuario(String correo, String password) {



        Usuario usuario = null;



        String sql = "SELECT * FROM usuarios WHERE correo=? AND password=?";



        try {


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setString(1, correo);

            ps.setString(2, password);



            ResultSet rs = ps.executeQuery();



            if(rs.next()){


                usuario = new Usuario();



                usuario.setId(rs.getInt("id"));

                usuario.setNombre(rs.getString("nombre"));

                usuario.setCorreo(rs.getString("correo"));

                usuario.setPassword(rs.getString("password"));

                usuario.setRol(rs.getString("rol"));



            }



            rs.close();

            ps.close();

            con.close();



        }catch(SQLException e){


            System.out.println("Error login: " + e.getMessage());


        }



        return usuario;


    }








    // LISTAR USUARIOS


    public ArrayList<Usuario> listarUsuarios(){



        ArrayList<Usuario> lista = new ArrayList<>();



        String sql = "SELECT * FROM usuarios";



        try {



            Connection con = conexion.getconexion();



            PreparedStatement ps = con.prepareStatement(sql);



            ResultSet rs = ps.executeQuery();




            while(rs.next()){



                Usuario usuario = new Usuario();



                usuario.setId(rs.getInt("id"));

                usuario.setNombre(rs.getString("nombre"));

                usuario.setCorreo(rs.getString("correo"));

                usuario.setPassword(rs.getString("password"));

                usuario.setRol(rs.getString("rol"));



                lista.add(usuario);



            }



            rs.close();

            ps.close();

            con.close();



        }catch(SQLException e){


            System.out.println("Error al listar usuarios: " + e.getMessage());


        }




        return lista;



    }

    public boolean eliminarUsuario(int id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

   


}