import { resizeCanvas } from "./resize.js";

const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.querySelector("#clearBtn");
const sizeRange = document.querySelector("#sizeRange");
const sizeValue = document.querySelector("#sizeValue");
const colorPicker = document.querySelector("#colorPicker");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", () => {
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "drawing.png";
    link.click();
});

colorPicker.addEventListener("input", ()  => {
    ctx.strokeStyle = colorPicker.value;
});

sizeRange.addEventListener("input", () => {
    ctx.lineWidth = sizeRange.value;
    sizeValue.textContent = sizeRange.value;
});

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
});

resizeCanvas();

// ctx.lineWidth = 4;
// ctx.lineCap = 'round';
// ctx.lineJoin = 'round';
// ctx.strokeStyle = '#000';

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

window.addEventListener("resize", () => {
    resizeCanvas();
})