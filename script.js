const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 180;

function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random() * 2;
  this.dy = Math.random() * 0.7 + 0.3;
  this.opacity = Math.random();
}

Star.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
  ctx.fill();
};

Star.prototype.update = function () {
  this.y += this.dy;
  if (this.y > canvas.height) {
    this.y = 0;
    this.x = Math.random() * canvas.width;
  }
  this.opacity = Math.abs(Math.sin(Date.now() * 0.0005));
  this.draw();
};

function init() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => star.update());
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();