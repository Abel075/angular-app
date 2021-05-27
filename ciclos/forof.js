// For normal, instancia un item por cada item que se encuentre dentro de un listado
var listadoDeUsuarios = [
    {
        nombre: 'Abel',
        apellido: 'Correa'
    },
    {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    {
        nombre: 'Pedro',
        apellido: 'Gomez'
    }
];
// console.log(listadoDeUsuarios);
// Recorrer y solo mostrar el nombre de cada uno con for convencional
/*
for(let cantidadRepetir:number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir ++){
    console.log(listadoDeUsuarios[cantidadRepetir].nombre);
 }
*/
// Metodo ForOf
for (var _i = 0, listadoDeUsuarios_1 = listadoDeUsuarios; _i < listadoDeUsuarios_1.length; _i++) {
    var usuario = listadoDeUsuarios_1[_i];
    console.log('Hola bienvenido:', usuario.nombre);
    console.log('Me alegra tenerte de nuevo:', usuario.apellido, usuario.nombre);
}
