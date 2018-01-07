layui.use(['form', 'layer'],function(){
	var form=layui.form;
	var layer=layui.layer;
	//监听提交
	form.on('submit(submit)',function(data){
		var user=data.field;
		if(user.username=='admin'&&user.password=='111111'){
			window.location.href='index.html';
		}else{
			layer.msg("用户名或密码不正确！",{
				icon:2,
				time:2000,
				anim:6
			});
		}
	});
});