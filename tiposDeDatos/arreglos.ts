// Listas

interface Alumnos {

    nombre: string;
    edad:number
}

var listaDeNombres: Array<string> = ['Juana','Maria','Ana','Carmen'];

var listadoDeNumeros: Array<number> = [12,25,45,86];

var lisatdoDeAlumnos: Array<Alumnos> = [
    {
        nombre:'Abel',
        edad:34
    },
    {
        nombre:'Ana',
        edad:54
    },
    {
        nombre:'Maria',
        edad:45
    },
];

console.log(listaDeNombres[1])
console.log(listadoDeNumeros[2])
console.log(lisatdoDeAlumnos[2].nombre);

