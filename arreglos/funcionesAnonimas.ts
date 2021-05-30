
var nombres: string[] = ["Ana","Maria","Andrea"];


// Ver cada elemto dentro de un arreglo / Funciones flecha

nombres.forEach((nombre) => console.log(nombre));




nombres.forEach((nombre) => {

    if (nombre == "Ana"){
        console.log("Hola Ana");
        
    }
}
);

interface ALumno{
    nombre: string;
    apellido: string;
}

var alumnos: Alumno [] = [];

alumnos.push({nombre:"Juan", apellido: "Perez"});

alumnos.push({nombre:"Lidia", apellido: "Perez"});

alumnos.push({nombre:"Ricardo", apellido: "Perez"});

// La expresion Lamba no es el for each, es el contenido dentro

alumnos.forEach((alumno)=>{

    console.log(alumno.nombre);
    
})
