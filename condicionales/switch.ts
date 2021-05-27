var cantidadDeNumerosEnviados:number = 20;

switch(cantidadDeNumerosEnviados){
    
    case 25:{
        console.log('Son viente y cinco');
        break;
    }
    case 20:{
        console.log('Son viente');
        break;
    }
    case 15:{
        console.log('Son quince');
        break;
    }
    default :{
        console.log('No se cumplio ninguna expresion');
        
    }
}


enum tipoMenu{
    canciones= 1,
    album=2,
    perfil=3

}



// 1 menu de canciones
// 2 menu de albunes
// 3 menu del Perfil
var menu:number = 0;

switch(menu){

    case tipoMenu.canciones: {
        console.log('Accede a las canciones');
        break;
    }
    case tipoMenu.album: {
        console.log('Accede a los albunes');
        break;
    }
    case tipoMenu.perfil: {
        console.log('Accede al pefil');
        break;
    }
    default: {
        console.log('El menu no existe');
        break;
    }
}

