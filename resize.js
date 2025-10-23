export function resizeCanvas() {
  const canvas = document.getElementById('drawCanvas');
  const ctx = canvas.getContext('2d');
  const temp = document.createElement('canvas');
  temp.width = canvas.width;
  temp.height = canvas.height;
  temp.getContext('2d').drawImage(canvas, 0, 0);

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.drawImage(temp, 0, 0);
}
