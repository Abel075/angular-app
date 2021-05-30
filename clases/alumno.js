// Dentro de la clase se puede crear una funcion pero seria un metodo
// Inicio de la clase
var Alumno = /** @class */ (function () {
    // Contructor
    function Alumno() {
        this.nombre = "Ana";
        this.apellido = "Pineda";
        this.peso = 324;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log('Hola', this.nombre, this.apellido, this.peso);
    };
    Alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        // this.mostrarMensaje();
    };
    return Alumno;
}());
// Fin de la clase
var alumno1 = new Alumno();
alumno1.asignar('Juan', 'Perez', 345);
var alumno2 = new Alumno();
alumno2.asignar("Maria", "Gonzalez", 150);
var alumno3 = new Alumno();
alumno3.asignar("Johana", "Ramirez", 590);
