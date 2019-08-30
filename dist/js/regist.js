$(function(){
	var obj={};
var $name=$("#name");
var $mal=$("#mal");
var $femal=$("#femal");
var $mail=$("#mail");
var $password=$("#password");
//console.log($name);
$name.change(function(){
	var val=$(this).val();
	//console.log(val);
	var str=/\w{3,10}/g;
	if(!str.test(val)){
		$(this).next().css({"display":"block"});
		obj.name=1;
	}else{
		$(this).next().css({"display":"none"});
		$.get("http://47.104.244.134:8080/username.do",{username:val},(data)=>{
			if(data.code==0){
				$(this).next().text("用户名重复").css({"display":"block"})
			}
		})
		obj.name=0;
	}
})

$mail.change(function(){
	var val=$(this).val();
	var str=/^\w+@\w+(\.\w+)+$/;
	if(!str.test(val)){
		$(this).next().css({"display":"block"});
		obj.mail=1;
	}else{
		$(this).next().css({"display":"none"});
		$.get("http://47.104.244.134:8080/useremail.do",{email:val},(data)=>{
			if(data.code==0){
				$(this).next().text("该邮箱账号已被注册").css({"display":"block"})
			}
		})
		obj.mail=0
	}
})

$password.change(function(){
	
	var val=$(this).val();
	var str=/\w{5,16}/;
	if(!str.test(val)){
		$(this).next().css({"display":"block"});
		obj.password=1;
	}else{
		$(this).next().css({"display":"none"});
		obj.password=0;
	}
})

$("#yzm2").click(function(){
	$("#yzm2").text(function(){
		var str="";
		for(var i=0;i<4;i++){
			str+=Math.floor(Math.random()*10)
		}
		return str;
	})
})

$(".regist").click(function(){
	var $sei="";
	if($mal.prop("checked")){
		$sei="男";
	}
	if($femal.prop("checked")){
		$sei="女";
	}
	
	if(!$("#agree").prop("checked")){
		alert("请先阅读用户协议")
	}
	for(var i in obj){
		 var str="";
		 console.log(obj[i])
		str+=obj[i];
	 };
	if(str!=0){
		alert("请把信息填写完整")
		return;
	}else{
		$.post("http://47.104.244.134:8080/usersave.do",{
		username:$name.val(),
		password:$password.val(),
		email:$mail.val(),
		sex:$sei,},
		function(data){
		console.log(data);
		if(data.code!=0){
			alert("请重新注册");
		}else{
			alert("注册成功");
			setTimeout(function(){
				location.href="login.html";
			},2000)
		}
	})
	}
	
	
	
	
		
	
})



})



