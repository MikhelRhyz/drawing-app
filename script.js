const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.querySelector("#clearBtn");
const sizeRange = document.querySelector("#sizeRange");
const sizeValue = document.querySelector("#sizeValue");

sizeRange.addEventListener("input", () => {
    ctx.lineWidth = sizeRange.value;
    sizeValue.textContent = sizeRange.value;
});

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
});

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.lineWidth = 4;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = '#000';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
