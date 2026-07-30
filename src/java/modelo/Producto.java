package modelo;

public class Producto {

    private int id;
    private String nombre;
    private String descripcion;
    private double precioCompra;
    private double precioVenta;
    private int stock;
    private int stockMinimo;
    private int categoria_id;
    private int proveedor_id;


    public Producto(){

    }


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }


    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }


    public String getDescripcion() {
        return descripcion;
    }


    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


    public double getPrecioCompra() {
        return precioCompra;
    }


    public void setPrecioCompra(double precioCompra) {
        this.precioCompra = precioCompra;
    }


    public double getPrecioVenta() {
        return precioVenta;
    }


    public void setPrecioVenta(double precioVenta) {
        this.precioVenta = precioVenta;
    }


    public int getStock() {
        return stock;
    }


    public void setStock(int stock) {
        this.stock = stock;
    }


    public int getStockMinimo() {
        return stockMinimo;
    }


    public void setStockMinimo(int stockMinimo) {
        this.stockMinimo = stockMinimo;
    }


    public int getCategoria_id() {
        return categoria_id;
    }


    public void setCategoria_id(int categoria_id) {
        this.categoria_id = categoria_id;
    }


    public int getProveedor_id() {
        return proveedor_id;
    }


    public void setProveedor_id(int proveedor_id) {
        this.proveedor_id = proveedor_id;
    }

}