package modelo;


public class Usuario {


    private int id;
    private String nombre;
    private String correo;
    private String password;
    private String rol;



    public Usuario(){

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



    public String getCorreo() {

        return correo;

    }


    public void setCorreo(String correo) {

        this.correo = correo;

    }



    public String getPassword() {

        return password;

    }


    public void setPassword(String password) {

        this.password = password;

    }



    public String getRol() {

        return rol;

    }


    public void setRol(String rol) {

        this.rol = rol;

    }



    // Compatibilidad con tu UsuarioDao actual

    public int getId_usuario() {

        return id;

    }



    public void setId_usuario(int id_usuario) {

        this.id = id_usuario;

    }



    public String getpassword() {

        return password;

    }



    public void setpassword(String password) {

        this.password = password;

    }


}