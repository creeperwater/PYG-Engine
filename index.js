var x=0;//px/s
var v=100;

function main(gap){
  x+=gap*v;
  x>meta.width&&(x=0);
  ctx.clearRect(0,0,meta.width, meta.height)
  ctx.fillRect(x,100,100,100)
}