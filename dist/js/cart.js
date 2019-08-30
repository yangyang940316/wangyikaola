
$.get("http://47.104.244.134:8080/cartlist.do",
				{token:3},
				function(data){
					//console.log(data);
					var str=""
					data.forEach(function(item,index){
						//console.log(item);
						var goods=item.goods
						//console.log(item.count)
						if(goods.flag==3){
						str+=`<li>
								<input type="checkbox" class="ck">
								<img class="pic" src="${goods.picurl}"/>
								<div class="detail">
									<span>${goods.name}</span>
									<span class="perPrice">${goods.price}</span>
									<input class="btn1" type="button" value="-"/>
									<input class="tex" type="text" value=${item.count} />
									<input class="btn2" type="button" value="+"/>
									<span class="perTotal" id=${item.gid}>${goods.price*item.count}</span>
									<input  class="btn3" id=${item.id} type="button"  value="删除">	
								</div>
								</li>
								
								
						`;}
						})
					//添加点击事件，效果未实现
					$("#list").html(str);
					
					$(".btn1").click(function(){
						//console.log($(this).next().val())
						var val=$(this).next().val();
							val--;
							if(val<=0){
							val=0;
							}		
					$(this).next().val(val);
					var price=$(this).prev().text();
					$(this).next().next().next().text(val*price)
					
					})
			
					$(".btn2").click(function(){
						//console.log($(this).prev().val())
						var val=$(this).prev().val();
							val++;
					$(this).prev().val(val);

					var price= $(this).prev().prev().prev().text();
					$(this).next().text(val*price)
					
					})
					$(".btn3").click(function(){
						$(this).parent().parent().remove()//这样的话，刷新页面以后还显示；
					})
				
				//复选框
				$(".checkAll").prop("checked",true);
				$.each($(".ck"),function(i){
					$(this).prop("checked",true);
				})
				
				$(".checkAll").click(function(){
					$.each($(".ck"),function(i){
						$(".ck").eq(i).prop("checked",$(".checkAll").prop("checked"))
					})
				})
				
				
		
				
	})


