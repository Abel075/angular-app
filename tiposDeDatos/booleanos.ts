var esNuevo:boolean = false;

var deseaImprimir:boolean = true;
var juan = 'juan';
var juan2 = 'juan';

var soniguales:boolean = (juan == juan2);


var aceptaDescuento:boolean = (15 + 18 == 33);

console.log('Este booleano es: ', aceptaDescuento)
console.log('Estos booleanos son: ', soniguales)

var sonAmbosVerdaderos:boolean = soniguales || aceptaDescuento;


var listaNumero1:number = 100;
var listaNumero2:number = 120;

var sonLasListasIguales:boolean = (listaNumero1 !=listaNumero2);
console.log('Las listas son iguales', sonLasListasIguales)