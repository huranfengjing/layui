layui.config({
				base: 'js/'
			});
		layui.use(['laypage','table', 'form'], function() {
				var $ = layui.jquery,
					layerTips = parent.layer === undefined ? layui.layer : parent.layer, //获取父窗口的layer对象
					layer = layui.layer, //获取当前窗口的layer对象
					form = layui.form;
					table=layui.table;
					laypage=layui.laypage;
					 //执行一个 table 实例
					  table.render({
					    elem: '#laydateDemo'
					    ,url: './datas/table.json' //数据接口
					    ,page: true //开启分页
					    ,cols: [[ //表头
					      {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
					      ,{field: 'username', title: '用户名', width:80}
					      ,{field: 'sex', title: '性别', width:80, sort: true}
					      ,{field: 'city', title: '城市', width:80} 
					      ,{field: 'sign', title: '签名', width: 170}
					      ,{field: 'experience', title: '积分', width: 80, sort: true}
					      ,{field: 'score', title: '评分', width: 80, sort: true}
					      ,{field: 'classify', title: '职业', width: 80}
					      ,{field: 'wealth', title: '财富', width: 135, sort: true}
					      ,{ width: 165, align:'center', toolbar: '#barDemo'}
					    ]]
					  });
				//获取所有选择的列
				$('#getSelected').on('click', function() {
					var names = '';
					$('#content').children('tr').each(function() {
						var $that = $(this);
						var $cbx = $that.children('td').eq(0).children('input[type=checkbox]')[0].checked;
						if($cbx) {
							var n = $that.children('td:last-child').children('a[data-opt=edit]').data('name');
							names += n + ',';
						}
					});
					layer.msg('你选择的名称有：' + names);
				});
				  //完整功能
				  laypage.render({
				    elem: 'demo7'
				    ,count: 100
				    ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
				    ,jump: function(obj){
				      console.log(obj)
				    }
				  });
			});
