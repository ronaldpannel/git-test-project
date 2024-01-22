/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

class Ball {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.radius = 30;
    this.x =
      Math.random() * (this.width - this.radius - this.radius) + this.radius;
    this.y =
      Math.random() * (this.height - this.radius - this.radius) + this.radius;
    this.vx = Math.random() * 8 - 4;
    this.vy = Math.random() * 8 - 4;
    this.color = "yellow";
  }
  draw(context) {
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.stroke();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.radius > this.width || this.x < this.radius) {
      this.vx = this.vx * -1;
    }
    if (this.y + this.radius > this.height || this.y < this.radius) {
      this.vy = this.vy * -1;
    }
  }
}

const ball = new Ball(canvas.width, canvas.height);
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);

  ball.draw(ctx);
  ball.update();
}
animate();
