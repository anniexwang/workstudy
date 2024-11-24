const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#0000000'
ctx.lineWidth = 2;
ctx.setLineDash([10, 5]);

ctx.lineDashOffset = 0;

ctx.beginPath();
ctx.moveTo(10,100);
ctx.lineTo(300,100);

ctx.stroke()