let mover;
let walls = [];

function setup() {
  createCanvas(400, 400);

  // 가운데에 있는 동그라미를 Mover로 만든다
  mover = new Mover(width / 2, height / 2, 50);

  // 벽: { x, y, w, h }
  walls = [
    { x: 0, y: 0, w: 20, h: height }, // 왼쪽 벽
    { x: width - 20, y: 0, w: 20, h: height }, // 오른쪽 벽
    { x: 0, y: 0, w: width, h: 20 }, // 천장
    { x: 0, y: height - 20, w: width, h: 20 }, // 바닥
  ];
}

function draw() {
  background(200);

  // 벽 그리기
  noStroke();
  fill(70);
  for (let i = 0; i < walls.length; i++) {
    const w = walls[i];
    rect(w.x, w.y, w.w, w.h);
  }

  // Mover 업데이트 및 그리기
  mover.update(walls);
  mover.display();

  // 안내 문구
  noStroke();
  fill(90);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("클릭하면 중력이 적용됩니다", width / 2, 40);
}

// 캔버스를 클릭하면 중력이 켜진다
function mousePressed() {
  mover.drop();
}