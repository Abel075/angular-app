
interface Alumno{
    alumnoID: number;
    nombre: string;
    apellido: string;
}

var alumnos: Alumno[] = []

alumnos.push({alumnoID: 1 , nombre:"Juan", apellido: "Perez"});

alumnos.push({alumnoID: 2, nombre:"Lidia", apellido: "Perez"});

alumnos.push({alumnoID: 3, nombre:"Ricardo", apellido: "Perez"});

// La funcion find nos permite buscar dentro de un arreglo un elemento

var alumnoEncontrado = alumnos.find((alumno) => {

    return alumno.nombre.includes("an")
})

console.log(alumnoEncontrado);
