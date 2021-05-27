var cantidadSolicitada = 15;
var deseaImprimir = true;
debugger;
if (cantidadSolicitada > 10) {
    console.log("Tienes que aplicar un descuento");
}
// Si es verdadero va a imprimir los siguiente
if (deseaImprimir) {
    console.log("Estamos imprimiendo");
    if (cantidadSolicitada > 10) {
        console.log("Perfecto tiene un descuento");
    }
}
deseaImprimir = false;
deseaImprimir = true;
deseaImprimir = false;
deseaImprimir = false && false;
deseaImprimir = true && true;
