// Funcion que devuelve un dato : hay qeu especifivar que dato va a devolver

function multiplicar(numero1:number, numero2:number): number{

    var total = numero1 * numero2;
    return total;
}

function calcularPromedio(nota1:number,nota2:number,nota3:number):number{

    var total:number = (nota1 + nota2 + nota3)/3
    return total
}




var numeroResultado:number = 0;

numeroResultado = multiplicar(5,10)

console.log(numeroResultado);

var promedio:number = 0;

promedio = calcularPromedio(60,80,90);
console.log(promedio.toFixed(2));


