var nombres = ["Ana", "Maria", "Andrea"];
// Ver cada elemto dentro de un arreglo / Funciones flecha
nombres.forEach(function (nombre) { return console.log(nombre); });
nombres.forEach(function (nombre) {
    if (nombre == "Ana") {
        console.log("Hola Ana");
    }
});
var alumnos = [];
alumnos.push({ nombre: "Juan", apellido: "Perez" });
alumnos.push({ nombre: "Lidia", apellido: "Perez" });
alumnos.push({ nombre: "Ricardo", apellido: "Perez" });
// La expresion Lamba no es el for each, es el contenido dentro
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre);
});
