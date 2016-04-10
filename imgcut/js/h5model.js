function model(){
	$("#bg").click(function(){
		$(this).removeClass('modelbg');
		$(".h5model .modelbody").removeClass('on');
	})
	function alert(){
		$("#bg").addClass('modelbg');
		$(".h5model .modelbody").addClass('on');
	}
	function msg(str){
		var self = this;
		self.str = str;
		function success(){
			$(".h5model .msg").text(self.str).addClass('success')
			destroy()
		}
		function error(){
			$(".h5model .msg").text(self.str).addClass('error')
			destroy()
		}
		function destroy(){
			setTimeout(function(){
			$(".h5model .msg").removeClass('success').removeClass('error');
			},2500)
		}
		return {
			success:success,
			error:error
		}
	}
	return {
		alert : alert,
		msg:msg
	}
}
var a = new model();
$('#explain').click(a.alert);
// $('#explain').click(a.msg(123).error);
