var nombres = ["Ana", "Maria", "Juan"];
console.log(nombres);
// El metodo push nos sirve para agregar alementos dentro de nuestro arreglos
nombres.push('Carlos');
console.log(nombres);
var numeros = [15, 23, 45];
numeros.push(56);
console.log(numeros);
var alumnos = [];
alumnos.push({ nombre: "Ana", apellido: "Garmendia" });
console.log(alumnos);
var ana = {
    nombre: 'Ana',
    apellido: "Gonzalez"
};
var carmen = {
    nombre: 'Carmen',
    apellido: "Perez"
};
alumnos.push(ana);
alumnos.push(carmen);
