let diametro = 480;
let punti = 0;
let frecciaX = null, frecciaY = null;
let messaggio = "";
let colpito = false;

function setup() {
  createCanvas(600, 600);
  background("#d1d1d3");
}

function draw() {
  background("#d1d1d3");
  
  let centroX = width / 2;
  let centroY = height / 2;
  let raggio = diametro / 2;
  let step = 80;
  
  fill("#f45");
  circle(centroX, centroY, diametro);
  fill("#fff");
  circle(centroX, centroY, diametro - 80);
  fill("#f45");
  circle(centroX, centroY, diametro - 160);
  fill("#fff");
  circle(centroX, centroY, diametro - 240);
  fill("#f45");
  circle(centroX, centroY, diametro - 300);
  fill("#fff");
  circle(centroX, centroY, diametro - 360);
  fill("#f45");
  circle(centroX, centroY, diametro - 440);
  
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(`Punti: ${punti}`, width / 2, 30);
  
  textSize(18);
  fill(0);
  text(messaggio, width / 2, height - 50);
  
  if (frecciaX !== null && frecciaY !== null) {
    if (colpito) {
      drawArrow(frecciaX, frecciaY);
    } else {
      drawX(frecciaX, frecciaY);
    }
  }
}

function mouseClicked() {
  let centroX = width / 2;
  let centroY = height / 2;
  let distanza = dist(mouseX, mouseY, centroX, centroY);
  let raggio = diametro / 2;
  let step = raggio / 7;  // Dividi il raggio in 7 segmenti

  let punteggi = [5, 10, 20, 30, 40, 50, 60]; // Punti dal bordo verso il centro
  let livello = Math.floor(distanza / step);  // Calcolo del livello corretto

  if (distanza <= raggio) {
    if (livello >= 0 && livello < punteggi.length) {
      punti += punteggi[livello]; // Assegna i punti corretti
    }
    messaggio = "Ottimo colpo!";
    colpito = true;
  } else {
    messaggio = "Bersaglio Mancato!";
    colpito = false;
  }

  frecciaX = mouseX;
  frecciaY = mouseY;
}


function drawArrow(x, y) {
  fill("black");
  noStroke();
  triangle(x, y, x - 5, y + 15, x + 5, y + 15);
}

function drawX(x, y) {
  stroke("red");
  strokeWeight(4);
  line(x - 10, y - 10, x + 10, y + 10);
  line(x - 10, y + 10, x + 10, y - 10);
}
