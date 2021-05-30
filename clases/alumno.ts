// Dentro de la clase se puede crear una funcion pero seria un metodo


// Inicio de la clase

class Alumno{

    private nombre:string;
    private apellido:string;
    private peso:number;


    // Contructor
    constructor(){
        this.nombre = "Ana";
        this.apellido = "Pineda";
        this.peso = 324;

        this.mostrarMensaje();
    }


    private mostrarMensaje(): void{
        console.log('Hola',this.nombre,this.apellido,this.peso);
        
    }

    asignar(nombreParametro:string, apellidoParametro:string, pesoParametro:number){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        // this.mostrarMensaje();
    }
}

// Fin de la clase

var alumno1: Alumno = new Alumno();
alumno1.asignar('Juan','Perez', 345)

var alumno2: Alumno = new Alumno();
alumno2.asignar("Maria","Gonzalez",150)

var alumno3: Alumno = new Alumno();
alumno3.asignar("Johana","Ramirez",590)





