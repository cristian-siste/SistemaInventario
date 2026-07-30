
package dao;

import conexion.conexion;
import modelo.Producto;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class ProductoDao {


    // Registrar producto

    public boolean registrar(Producto producto){

        boolean resultado = false;


        String sql = "INSERT INTO productos(nombre, descripcion, precioCompra, precioVenta, stock, stockMinimo, categoria_id, proveedor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";


        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ps.setString(1, producto.getNombre());
            ps.setString(2, producto.getDescripcion());
            ps.setDouble(3, producto.getPrecioCompra());
            ps.setDouble(4, producto.getPrecioVenta());
            ps.setInt(5, producto.getStock());
            ps.setInt(6, producto.getStockMinimo());
            ps.setInt(7, producto.getCategoria_id());
            ps.setInt(8, producto.getProveedor_id());


            ps.executeUpdate();


            resultado = true;


        }catch(SQLException e){

            System.out.println("Error al registrar producto: " + e);

        }


        return resultado;

    }





    // Listar productos

    public ArrayList<Producto> listar(){


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
                producto.setCategoria_id(rs.getInt("categoria_id"));
                producto.setProveedor_id(rs.getInt("proveedor_id"));


                lista.add(producto);


            }



        }catch(SQLException e){

            System.out.println("Error al listar productos: " + e);

        }


        return lista;

    }






    // Buscar producto por ID

    public Producto buscarPorId(int id){


        Producto producto = null;


        String sql = "SELECT * FROM productos WHERE id=?";


        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ps.setInt(1,id);


            ResultSet rs = ps.executeQuery();



            if(rs.next()){


                producto = new Producto();


                producto.setId(rs.getInt("id"));
                producto.setNombre(rs.getString("nombre"));
                producto.setDescripcion(rs.getString("descripcion"));
                producto.setPrecioCompra(rs.getDouble("precioCompra"));
                producto.setPrecioVenta(rs.getDouble("precioVenta"));
                producto.setStock(rs.getInt("stock"));
                producto.setStockMinimo(rs.getInt("stockMinimo"));
                producto.setCategoria_id(rs.getInt("categoria_id"));
                producto.setProveedor_id(rs.getInt("proveedor_id"));

            }



        }catch(SQLException e){

            System.out.println("Error al buscar producto: " + e);

        }


        return producto;

    }





    // Actualizar producto

    public boolean actualizar(Producto producto){


        boolean resultado = false;


        String sql = "UPDATE productos SET nombre=?, descripcion=?, precioCompra=?, precioVenta=?, stock=?, stockMinimo=?, categoria_id=?, proveedor_id=? WHERE id=?";


        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);



            ps.setString(1, producto.getNombre());
            ps.setString(2, producto.getDescripcion());
            ps.setDouble(3, producto.getPrecioCompra());
            ps.setDouble(4, producto.getPrecioVenta());
            ps.setInt(5, producto.getStock());
            ps.setInt(6, producto.getStockMinimo());
            ps.setInt(7, producto.getCategoria_id());
            ps.setInt(8, producto.getProveedor_id());
            ps.setInt(9, producto.getId());



            ps.executeUpdate();


            resultado = true;



        }catch(SQLException e){

            System.out.println("Error al actualizar producto: " + e);

        }


        return resultado;

    }





    // Eliminar producto

    public boolean eliminar(int id){


        boolean resultado = false;


        String sql = "DELETE FROM productos WHERE id=?";


        try{


            Connection con = conexion.getconexion();


            PreparedStatement ps = con.prepareStatement(sql);


            ps.setInt(1,id);



            ps.executeUpdate();


            resultado = true;



        }catch(SQLException e){

            System.out.println("Error al eliminar producto: " + e);

        }


        return resultado;

    }


}