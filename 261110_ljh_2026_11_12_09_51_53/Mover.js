class Mover {
  constructor() {
    // 공의 위치, 속도, 가속도(중력)를 벡터로 만듭니다.
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(3, -9); // 처음에 위쪽으로 튀어오르는 속도
    this.acceleration = createVector(0, 0.2); // 아래로 작용하는 중력

    this.diameter = 50;
    this.radius = this.diameter / 2;
    this.bounce = 0.9; // 튕길 때 속도가 줄어드는 정도 (1이면 영원히 튕김)
  }

  update() {
    // 중력을 속도에 더하고, 속도를 위치에 더합니다.
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.checkEdges();
  }

  checkEdges() {
    // 바닥
    if (this.position.y + this.radius > height) {
      this.position.y = height - this.radius;
      this.velocity.y *= -this.bounce;
    }

    // 천장
    if (this.position.y - this.radius < 0) {
      this.position.y = this.radius;
      this.velocity.y *= -this.bounce;
    }

    // 오른쪽 벽
    if (this.position.x + this.radius > width) {
      this.position.x = width - this.radius;
      this.velocity.x *= -this.bounce;
    }

    // 왼쪽 벽
    if (this.position.x - this.radius < 0) {
      this.position.x = this.radius;
      this.velocity.x *= -this.bounce;
    }
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.position.x, this.position.y, this.diameter);
  }
}
