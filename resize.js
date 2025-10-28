export function resizeCanvas() {
  const canvas = document.getElementById('drawCanvas');
  const ctx = canvas.getContext('2d');
  const temp = document.createElement('canvas');
  temp.width = canvas.width;
  temp.height = canvas.height;
  temp.getContext('2d').drawImage(canvas, 0, 0);

  // Resize canvas to new display size
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // Redraw old image
  ctx.drawImage(temp, 0, 0);

  // 🔥 Restore previous settings
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = document.getElementById('sizeRange').value;
  ctx.strokeStyle = document.getElementById('colorPicker').value;
  ctx.imageSmoothingEnabled = true;
}
