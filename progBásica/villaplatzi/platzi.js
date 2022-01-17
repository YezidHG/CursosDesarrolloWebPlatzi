var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png",
    cargaOK: false
};
var vaca = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(5, 15);
var cantidad2 = aleatorio(1, 4);
var cantidad3 = aleatorio(5, 20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        console.log(cantidad2);
        for(var v=0; v < cantidad2; v++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        console.log(cantidad2);
        for(var v=0; v < cantidad2; v++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}
function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}