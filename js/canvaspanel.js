var ctx = document.getElementById("canvaspanel").getContext("2d");
document.addEventListener('keydown',goWhere,false);

//eatMan
var stepX = 0,stepY = 0,code;
function eatMan(){
	var eatR = 20,eatRx = eatRy = 75 ,eatMouthToeatHeart = eatR/3;
	  ctx.globalCompositeOperation = 'destination-over';
	// ctx.clearRect(0,0,500,500); // clear canvas
	ctx.save();
	if(stepX > eatR-eatRx&& stepX < 500-eatRx + eatR && stepY > eatR-eatRy && stepY < 500 - eatRy + eatRx ){
		switch(code){
			case 37:ctx.translate(stepX-=5,stepY);break;
			case 38:ctx.translate(stepX,stepY-=5);break;
			case 39:ctx.translate(stepX+=5,stepY);break;
			case 40:ctx.translate(stepX,stepY+=5);break;
		}
		ctx.beginPath();
		ctx.arc(eatRx,eatRy,eatR,Math.PI/6, Math.PI * (2-1/6));
		ctx.lineTo(eatRx - eatMouthToeatHeart , eatRy);
		ctx.closePath();
		ctx.fillStyle = '#F4FF59';
		ctx.fill();
		ctx.strokeStyle = '#dddddd';
		ctx.stroke();
		ctx.restore();
	}
	console.log(stepX);
 	setInterval(eatMan,1000 )
}
function goWhere(e){
	code = e.keyCode;
	eatMan();
}
 // ghost()
function ghost(){
	//ghost
	var width = 80,
		height=40,
		ghLBx = ghLHdx = 200, 
		ghLBy = ghRBy = 100, 
		ghRBx = ghRHdx = ghLBx + width, 
		ghLHdy = ghRHdy =ghLBy - height,
		headBezierP1x =ghLBx +height/4 ,
		headBezierP2x=270 ,
		headBezierP1y = headBezierP2y = ghLHdy - 50,
		ghBy =ghLBy -15, 
		jaggedW = width/8 ,
		jaggedH  = ghLBy - ghBy,
		ghEyeWidth= 13;
		ghEyeBezierH = 13;
		ghEyeMaginToBody = 13;
		ghEyeBeginY = ghLHdy;
		ghLeftEyeEndX = ghLHdx + ghEyeMaginToBody + ghEyeWidth;
		ghRightEyeEndX = ghRHdx - ghEyeMaginToBody - ghEyeWidth;
	ctx.beginPath();
	ctx.fillStyle = "#000";
	ctx.moveTo(ghLBx,ghLBy);
	ctx.lineTo(ghLHdx,ghLHdy);
	ctx.bezierCurveTo(headBezierP1x,headBezierP1y,headBezierP2x,headBezierP2y,ghRHdx,ghRHdy)
	ctx.lineTo(ghRBx,ghRBy);
	var tempX = ghRBx , tempY = ghRBy;
	for(var i = 0 ;i < 8;i++){
		tempX -= jaggedW;
		tempY = (i % 2 == 0) ? tempY - jaggedH : tempY + jaggedH;
		ctx.lineTo(tempX,tempY);
	}
	ctx.fill();
	//left eyes
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.moveTo(ghLHdx + ghEyeMaginToBody , ghEyeBeginY);
	ctx.bezierCurveTo(ghLHdx + ghEyeMaginToBody,ghLHdy-ghEyeBezierH,ghLeftEyeEndX,ghLHdy-ghEyeBezierH,ghLeftEyeEndX,ghLHdy)
	ctx.moveTo(ghLHdx + ghEyeMaginToBody , ghEyeBeginY);
	ctx.bezierCurveTo(ghLHdx + ghEyeMaginToBody,ghLHdy+ghEyeBezierH,ghLeftEyeEndX,ghLHdy+ghEyeBezierH,ghLeftEyeEndX,ghLHdy)
	ctx.fill();
	ctx.moveTo(ghLHdx + ghEyeMaginToBody , ghEyeBeginY);
	ctx.beginPath();
	ctx.fillStyle = "#000";
	ctx.arc(ghLHdx + ghEyeMaginToBody+3,ghLHdy+3,4,Math.PI * 2,false)
	ctx.fill();


	//right eyes
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.moveTo(ghRHdx - ghEyeMaginToBody , ghEyeBeginY);
	ctx.bezierCurveTo(ghRHdx - ghEyeMaginToBody,ghRHdy-ghEyeBezierH,ghRightEyeEndX,ghRHdy-ghEyeBezierH,ghRightEyeEndX,ghRHdy)
	ctx.moveTo(ghRHdx - ghEyeMaginToBody , ghEyeBeginY);
	ctx.bezierCurveTo(ghRHdx - ghEyeMaginToBody,ghRHdy+ghEyeBezierH,ghRightEyeEndX,ghRHdy+ghEyeBezierH,ghRightEyeEndX,ghRHdy)
	ctx.fill();
	ctx.moveTo(ghRightEyeEndX,ghRHdy);
	ctx.beginPath();

	ctx.fillStyle = "#000";
	ctx.arc(ghRightEyeEndX+3,ghRHdy+3,4,Math.PI * 2,false)
	ctx.fill();
}
