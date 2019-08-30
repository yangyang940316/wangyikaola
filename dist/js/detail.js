let oid =location.search.split("=")[1];
	console.log(oid);
	$.get("http://47.104.244.134:8080/goodsbyid.do",{id:oid},function(data){
		//console.log(data)
		var str =`<div class="products">
			<li>
			<div id="zoomBox">
				<div id="midArea">
					<img id="midPic" src="${data.picurl}">
					<div id="zoom"></div>
				</div>
				<div id="bigArea">
					<img id="bigPic" src="${data.picurl}">
				</div>
				<div id="smallArea">
				<img id="smallPic" src="${data.picurl}">	
				</div>
			</div>
			
            <strong>${data.name}</strong><br/>
          	<em>￥${data.price}</em>
          	<i>上架时间 :  ${data.pubdate}</i>
          	<p>评分:${data.star}</p>
            </li>
		</div>
		<div id="cartbox">	
		<input id="btn1" type="button" value="-"/>
		<input id="tex" type="text" value="1"/>
		<input id="btn2" type="button" value="+"/>
		<a href="cart.html">
			<input id="btn3" type="button" value="加入购物车"/>
		</a>
		<div>
		
		`;
			document.querySelector("#products").innerHTML = str;
			
			//添加点击事件
			
			$("#btn1").click(function(){
				var val=$("#tex").val();
				val--;
				if(val<=0){
					val=0;
				}
				$("#tex").val(val);
			})
			
			$("#btn2").click(function(){
				var val=$("#tex").val();
				val++;
				$("#tex").val(val);
			})
			
			$("#btn3").click(function(){
				var val=$("#tex").val()
				var num=parseInt(val);
				
				//cart.addProduct(id,num,false);
				$.get("http://47.104.244.134:8080/cartsave.do",
				{gid:oid,token:"3"},
				function(data){
					console.log(data);
				})
				
								
			})
	})/*get的封闭括号*/







	
	
	

	
	

	
	
	
	
	
	
	
	
	
	

