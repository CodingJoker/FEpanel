;(function(){
	$("body").keydown(function(e){
		var viewBox = $(".view-box");
		if(e.keyCode == 37){
			//向左
			var nowStep = viewBox.find('.js-step-now');
			if(nowStep.prev().hasClass('step')){
				nowStep.removeClass('js-step-now').removeClass('view-step').prev().addClass('js-step-now');
			}else{
				if(viewBox.prev().hasClass('rotate-box')){
					viewBox.addClass('to-right').removeClass('view-box');
					viewBox.prev().addClass('view-box').removeClass('to-left');
				}
			}
			
		}else if(e.keyCode == 39){
				var nowStep = viewBox.find('.js-step-now');
				if(nowStep.next().hasClass('step')){
					nowStep.removeClass('js-step-now').next().addClass('view-step').addClass('js-step-now');
				}else{
					if(viewBox.next().hasClass('rotate-box')){
					viewBox.addClass('to-left').removeClass('view-box');
					viewBox.next().addClass('view-box').removeClass('to-right');
					}
				}

		}
	});
	var body = document.getElementsByTagName('body');
	var beforeTime = new Date(),now;
	document.addEventListener("mousewheel",function(e){
		now = new Date();
		if(now-beforeTime < 300){
			return;
		}
		beforeTime = now;
		var viewBox = $(".view-box");
		if(e.deltaY > 0){
			var nowStep = viewBox.find('.js-step-now');
			if(nowStep.next().hasClass('step')){
				nowStep.removeClass('js-step-now').next().addClass('view-step').addClass('js-step-now');
			}else{
				if(viewBox.next().hasClass('rotate-box')){
				viewBox.addClass('to-left').removeClass('view-box');
				viewBox.next().addClass('view-box').removeClass('to-right');
				}
			}
		}else{
			var nowStep = viewBox.find('.js-step-now');
			if(nowStep.prev().hasClass('step')){
				nowStep.removeClass('js-step-now').removeClass('view-step').prev().addClass('js-step-now');
			}else{
				if(viewBox.prev().hasClass('rotate-box')){
					viewBox.addClass('to-right').removeClass('view-box');
					viewBox.prev().addClass('view-box').removeClass('to-left');
				}
			}
		}
	},false)
}())