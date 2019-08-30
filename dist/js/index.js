$(function(){
	//获取商品分类
	//获取一级列表
	$.ajax({
		type:"get",
		url:"http://47.104.244.134:8080/goodstypelist.do",
		contentType: "application/x-www-form-urlencoded",
		async:true,
		data:{l:1,}	
	}).then(function(res){
		let level1=res;
		$.ajax({
			type:"get",
			url:"http://47.104.244.134:8080/goodstypelist.do",
			contentType: "application/x-www-form-urlencoded",
			async:true,
			data:{l:2},
			success:function(res){
				let level2=res;
				let str="";
				level1.forEach(function(item){
					//二级分类
					let level2str="";
					for(let i in level2){
						if(level2[i].parentid==item.id){
							level2str +=`
							<li>
								<a href="list.html?typeid=${level2[i].id}&page=1">${level2[i].name}"></a>
							</li>
							`;
						}
					}
					str+=`
						<div id="slid">
							<ul id="tog">
								<li>
									${item.name}
									<i class="arrow">&gt;</i>	
								</li>
							</ul>
							
						</div>
						
						<div class="item-body">
							<ul>
								${level2str}
							</ul>
						</div>
					
					`;
				})
				//console.log(str);
				$("#tog").html(str);
				
			}
		});
	})
	
	//搜索框
	$("#aInput").keydown(function(){
		//var val={l:$(this).val()};
		if($("#aInput").val()==""){
			$("#show").text("");
			return;
		}
		
		$.get("http://47.104.244.134:8080/goodstypelist.do",{l:$("#aInput").val()},function(data){
				console.log(data);
				
				var str="";
				$.each(data, function(index,item) {
					console.log(item.name);
					str +=`${item.name}`;
				});
			
			$("#show").text(str);
		})
		
	})
	
	
})/*jquery入口函数的封闭括号*/