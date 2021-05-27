// una interfaz toma un objeto y obliga a usar su propiedades tal como estan. Evita errores en la nomenclatura de variables.

interface Personas {
    nombre:string,
    apellido:string,
    edad:number,
    peso:number
}

var persona1:Personas ={
    nombre:'Juan',
    apellido: 'Carlos',
    edad:16,
    peso:250
}

