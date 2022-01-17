var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{   
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#7237a6";
    var espacio = ancho / lineas;

for(l=0; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 500);
    dibujarLinea(colorcito, 500, yi, xf, 0);
    console.log("Linea " + l);
}   


    dibujarLinea(colorcito, 1, 1, 1, 499);
    dibujarLinea(colorcito, 1, 499, 499, 499);

    dibujarLinea(colorcito, 1, 1, 499, 1);
    dibujarLinea(colorcito, 499, 1, 499, 499);
}