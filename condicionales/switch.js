var cantidadDeNumerosEnviados = 20;
switch (cantidadDeNumerosEnviados) {
    case 25: {
        console.log('Son viente y cinco');
        break;
    }
    case 20: {
        console.log('Son viente');
        break;
    }
    case 15: {
        console.log('Son quince');
        break;
    }
    default: {
        console.log('No se cumplio ninguna expresion');
    }
}
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["album"] = 2] = "album";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
// 1 menu de canciones
// 2 menu de albunes
// 3 menu del Perfil
var menu = 0;
switch (menu) {
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
