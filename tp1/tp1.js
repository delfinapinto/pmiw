//Delfina Pinto Guzmán, Legajo: 119111/8, Comisión 4
// link del video https://youtu.be/S3Aa_N0VJvA

let imagen;

let cant;

let fondo, primario;

function preload() {
  imagen = loadImage("ilusion.jpeg"); 
}

function setup() {
  createCanvas(800, 400);

  cant = 5;

  fondo = color(0);
  primario = color(255);
}

function draw() {
  background(fondo);

  grilla(fondo, primario);

  image(imagen, 0, 0, 400, 400);
  grilla(fondo, primario);
}
