let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover();
}

function draw() {
  background(200);
  mover.update();
  mover.show();
}
