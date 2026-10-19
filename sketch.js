function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(220);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {

  //disegno glifi a scacchiera
  let nGlifi = 16;
  let nCelle = nGlifi * 2; // solo metà delle celle ospita una ruota
  let nColonne = ceil(sqrt(nCelle));
  let nRighe = ceil(nCelle / nColonne);
  let dimColonna = windowWidth / nColonne;
  let dimRiga = windowHeight / nRighe;

  for (let r = 0; r < nRighe; r++) {
    for (let c = 0; c < nColonne; c++) {
      // una cella sì, una no
      if ((r + c) % 2 === 0) {
        mioGLifo(c * dimColonna + dimColonna / 2, r * dimRiga + dimRiga / 2, min(dimColonna, dimRiga) * 1.1);
      }
    }
  }
}

function draw() {
}

function mioGLifo(_x, _y, _size) {
  const s = _size / 520; // scala rispetto al disegno originale
  const compounds = ['#e10600', '#ffd300', '#f2f2f2','#00A651','#800080','#0000FF']; 

  push();
  translate(_x, _y);

  // gomma
  noStroke();
  fill(15);
  circle(0, 0, _size);

  // banda colorata sul fianco
  noFill();
  stroke(random(compounds));
  strokeWeight(10 * s);
  circle(0, 0, 410 * s);

  // cerchio
  fill(40);
  stroke(170);
  strokeWeight(8 * s);
  circle(0, 0, 330 * s);

  // raggi (rotazione casuale per ogni ruota)
  noStroke();
  fill(130);
  push();
  rotate(random(0, 360));
  for (let i = 0; i < 10; i++) {
    push();
    rotate(i * 36);
    rect(28 * s, -11 * s, 125 * s, 22 * s, 10 * s);
    pop();
  }
  pop();

  // mozzo
  fill(200);
  circle(0, 0, 90 * s);
  fill(40);
  circle(0, 0, 18 * s);

  pop();
}
}
