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
// Forma For normal
for (var cantidadRepetir = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir++) {
    console.log(listadoDeUsuarios[cantidadRepetir].nombre);
}
console.log(listadoDeUsuarios);
//  Forma ForIn
for (var position in listadoDeUsuarios) {
    console.log(listadoDeUsuarios[position].nombre);
    console.log(listadoDeUsuarios[position].apellido);
}
