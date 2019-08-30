$(function(){
	$(".products li").click(function(){
		location.href="detail.html";
	})
	
	let urlData=getUrlData();
	if(urlData.typeid){
		showLists(urlData.typeid,urlData.page,10);
	}else{
		$(".products").html("未查到对应商品")
	}
	
	function getUrlData(){
		var data=window.location.search.substr(1).split("&");
		//console.log(data);
		var res={};
		data.forEach(function(item){
			let da=item.split("=");
			res[da[0]]=da[1];	
		});
		return res;
	}

	function showLists(tid,page,limit){
		$.ajax({
			type:"get",
			url:"http://47.104.244.134:8080/goodsbytid.do",
			data:{tid:tid,page:page,limit:limit},
			success:function(res){
				if(res.count==0){
					$(".products").html("未查到对应商品");
					return;
				}
				$("#pageShowUl").twbsPagination({
					totalPages:parseInt(res.count/10),
					startPage:parseInt(page),
					visiblePages:7,
					first:"首页",
					prev:"下一页",
					next:"上一页",
					last:"尾页",
					hideOnlyOnePage:true,
					onpageClick:function(e,pages){
						window.location = `lists.html?typeid=${tid}&page=${pages}`;
					}	
				});
				
				let str="";
				res.data.forEach(function(item,index){
					str +=`<li>
							<a href="detail.html?id=${item.id}">
                                        <img src="${item.picurl}">
                             
                             <span>新人专享</span><br/>
                             <p>${item.name}</p>
                             <em>￥${item.price}</em>
                            
                            <input type="button" value="加入购物车"/>
                           </a>
							</li>		
					`;
					
				});
				$(".products").append(str);
			
			//存点击的id,并跳转到详情页
			
			}/*回调函数succ的封闭括号*/
		});/*ajax的封闭括号*/
	}/*showlist的封闭括号*/
	
	
	
})/*jquery入口函数的封闭括号*/