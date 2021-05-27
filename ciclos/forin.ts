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

// Forma For normal
for(let cantidadRepetir:number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir ++){
    console.log(listadoDeUsuarios[cantidadRepetir].nombre);
 }

console.log(listadoDeUsuarios);



//  Forma ForIn

for(let position in listadoDeUsuarios){
   console.log(listadoDeUsuarios[position].nombre);
   console.log(listadoDeUsuarios[position].apellido);
    
}