
var nombres: string[] = ["Ana", "Maria","Juan"];
console.log(nombres);

// El metodo push nos sirve para agregar alementos dentro de nuestro arreglos

nombres.push('Carlos');
console.log(nombres);

var numeros:number[] = [15,23,45];

numeros.push(56);
console.log(numeros);

//  con un objetos
interface Alumno{
    nombre:string;
    apellido:string;
}

var alumnos: Alumno [] = [];

alumnos.push({nombre: "Ana",apellido: "Garmendia"});

console.log(alumnos);

var ana:Alumno[] ={
    nombre: 'Ana',
    apellido: "Gonzalez"   
}
var carmen:Alumno[] ={
    nombre: 'Carmen',
    apellido: "Perez"   
}

alumnos.push(ana)
alumnos.push(carmen)