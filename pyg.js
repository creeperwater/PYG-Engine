var ctx = $('#main').getContext('2d');
const meta={height:$('body').clientHeight,width:$('body').clientWidth,time:0,draw:true}
const opt={low:true};
$('#main').height=meta.height;
$('#main').width=meta.width;
function pyg_slow(){
  $('#fps').innerText=`fps:${meta.fps}`;
  const second=Math.round(meta.time/1000);
  $('#time').innerText=`${Math.floor(second/60)}:${second%60}`;
  if(meta.height!=$('body').clientHeight){
    meta.height=$('body').clientHeight;
    $('#main').height=meta.height;
  }
  if(meta.width!=$('body').clientWidth){
    meta.width=$('body').clientWidth;
    $('#main').width=meta.width;
  }
  setTimeout(pyg_slow,1000);
}
function pyg_fast(time=0){
  if(opt.low){
    meta.draw=!meta.draw;
    if(meta.draw){
      requestAnimationFrame(pyg_fast);
      return;
    } 
  }
  const gap=(time-meta.time)/1000;
  meta.fps=Math.floor(1/(gap||2));
  meta.time=time;
  main(gap);
  requestAnimationFrame(pyg_fast);
}
function run(){
  pyg_fast();
  pyg_slow();
}
