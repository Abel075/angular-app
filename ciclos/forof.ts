// For normal, instancia un item por cada item que se encuentre dentro de un listado

interface Usuario{
    nombre:string,
    apellido:string
}

var listadoDeUsuarios:Array<Usuario> =[
    {
        nombre: 'Abel',       /*usuario*/
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
]

// console.log(listadoDeUsuarios);

// Recorrer y solo mostrar el nombre de cada uno con for convencional

/* 
for(let cantidadRepetir:number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir ++){
    console.log(listadoDeUsuarios[cantidadRepetir].nombre);
 }
*/

// Metodo ForOf

for(let usuario of listadoDeUsuarios){
    console.log('Hola bienvenido:',usuario.nombre);
    console.log('Me alegra tenerte de nuevo:',usuario.apellido,usuario.nombre);
    
    

}