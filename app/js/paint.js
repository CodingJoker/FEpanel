var panel = document.getElementById('paintPanel');
var panelCon = panel.getContext('2d');
panelCon.globalCompositeOperation = 'source-over';
panel.addEventListener('mousedown',startPaint,false);
function startPaint(e){

	panelCon.save();
	panelCon.beginPath();
	panelCon.moveTo(e.offsetX,e.offsetY);
	panel.addEventListener('mousemove',paint,false);
	panel.addEventListener('mouseup',upHandler,false);
	panel.addEventListener('mouseout',upHandler,false);
};
function paint(e){
	// console.log("X:"+e.offsetX+"\nY:"+e.offsetY)

	panelCon.lineTo(e.offsetX,e.offsetY);
	panelCon.stroke();
	panelCon.globalCompositeOperation = 'destination-over';

	e.stopPropagation();
}
function upHandler(e){
	console.log('up');
	panel.removeEventListener('mousemove',paint,false);
	panel.removeEventListener('mouseup',upHandler,false);
	e.stopPropagation();
}
$('.btn-reset').click(function(){
	console.log('ok');
	panelCon.restore();
})
$('.btn-repaint').click(function(){
	panelCon.clearRect(0,0,500,500);
})
