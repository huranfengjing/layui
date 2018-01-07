layui.use(['layer','element','jquery','tree'],function(){
	var layer=layui.layer,
	element=layui.element,
	jq=layui.jquery;
	
	jq(".left_menu_li .layui-nav-item .layui-nav-child dl dd").click(function(){
		debugger;
		jq("#iframe-mask").show();
		//遮罩层消失
		jq("#admin-frame").load(function(){
			jq("#iframe-mask").fadeOut(100);
		});
	});
	layer.open({
		title:"您有新的确认作业！",
		anim: 2,
		time:2000,
		type:1,
		offset: 'rb',
		shade: 0, //不显示遮罩
		content:'<div style="min-height:60px;padding: 20px 60px;">有效台账转坏账通知！</div>'
	});
	
});
