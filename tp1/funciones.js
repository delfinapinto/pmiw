// Función para dibujar cuadrados
function cuadrados(colorUno, colorDos, posX, posY, tam) {
  let resta = 46.5;
  for (let i = 0; i < cant; i++) { 
    if (esPar(i)) {
      fill(colorUno);
    } else {
      fill(colorDos);
    }
    noStroke();
    rectMode(CENTER);
    rect(posX, posY, tam - i * resta, tam - i * resta);
  }
}

// Función para dibujar la grilla de cuadrados
function grilla(uno, dos) {
  let tamaño = 210;

  // Ciclos FOR anidados
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 2; y++) {
      cuadrados(uno, dos, 505 + x * 190, 104 + y * 190, tamaño);
    }
  }

  tamaño = 215;
  cuadrados(uno, dos, 600, 199, tamaño);
}

// Función que retorna si un número es par
function esPar(num) {
  return (num % 2 === 0);
}

// Función que responde a las teclas presionadas
function keyPressed() {
  if (key === 'c') {
    fondo = color(random(255), random(255), random(255));
    primario = color(random(255), random(255), random(255));
  }

  if (key === 'r') {
    fondo = color(0);
    primario = color(255);
  }
}
