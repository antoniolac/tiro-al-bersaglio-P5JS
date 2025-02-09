
let diametro = 480

function setup() {
  createCanvas(600, 600);
  background("#d1d1d3");
  // da qui disegnamo i cerchi concentrici di un bersaglio
  
  
}

function draw() {
    /*
      width -> la larghezza del canvas -> in questo caso 600
      height -> l'altezza del canvas. -> in questo caso 600
      
      mouseX -> coordinata X del punto in cui il mouse si trova nel canvas
      mouseY -> coordinata Y del punto in cui il mouse si trova nel canvas
    
    */
    fill("#f45")
    circle(width/2, height/2, diametro)
    fill("#fff")
    circle(width/2, height/2, diametro-80)
    fill("#f45")
    circle(width/2, height/2, diametro-160)
    fill("#fff")
    circle(width/2, height/2, diametro-240)
    fill("#f45")
    circle(width/2, height/2, diametro-300)
    fill("#fff")
    circle(width/2, height/2, diametro-360)
    fill("#f45")
    circle(width/2, height/2, diametro-440)
    
    
}


function mouseClicked(){
  // width/2, height/2
  // let r = diametro / 2
  // 1. Calcolare la distanza fra il centro del cerchio e il punto cliccato
  // 2. SE la distanza calcolata è minore o uguale del raggio -> ho cliccato nel cerchio
  
  
  console.log(mouseX, mouseY)
}