function foo(id) {
	return document.getElementById(id);
}

function Zoom() {
	this.zoomBox = foo("zoomBox");
	this.midArea = foo("midArea");
	this.midImg = foo("midpic")
	this.zoom = foo('zoom');
	this.bigArea = foo("bigArea");
	this.bigImg = foo("bigPic");
	this.smallArea = foo("smallArea");
	this.smallImgs = foo("smallpic");
	this.init();
	this.move();
	this.change();
}
Zoom.prototype.init = function() {
	this.midArea.onmouseover = () => {
		this.zoom.style.display = "block";
		this.bigArea.style.display = "block";
	}
	this.midArea.onmouseout = () => {
		this.zoom.style.display = "none";
		this.bigArea.style.display = "none";
	}
}
Zoom.prototype.move = function() {
	this.midArea.onmousemove = (e) => {
		e = e || event;
		var x = e.pageX - this.zoomBox.offsetLeft - this.zoom.offsetWidth / 2;
		var y = e.pageY - this.zoomBox.offsetTop - this.zoom.offsetHeight / 2;
		
		//以下写法有bug，因为事件源在改变
		//var x = e.offsetX - this.zoom.offsetWidth/2;
		//var y = e.offsetY - this.zoom.offsetHeight/2;
		
		x = x < 0 ? 0 : x > this.midArea.clientWidth - this.zoom.offsetWidth ? this.midArea.clientWidth - this.zoom.offsetWidth : x;
		y = y < 0 ? 0 : y > this.midArea.clientHeight - this.zoom.offsetHeight ? this.midArea.clientHeight - this.zoom.offsetHeight : y

		this.zoom.style.left = x + 'px';
		this.zoom.style.top = y + 'px';
		
		
		this.bigImg.style.left = -this.zoom.offsetLeft/this.midArea.offsetWidth*this.bigImg.offsetWidth+"px";
		this.bigImg.style.top = -this.zoom.offsetTop/this.midArea.offsetHeight*this.bigImg.offsetHeight+"px";
	}
}
Zoom.prototype.change = function(){
	for(let i = 0; i < this.smallImgs.length; i++){
		this.smallImgs[i].onclick = ()=>{
			this.midImg.src = this.smallImgs[i].src;
			this.bigImg.src = this.smallImgs[i].src;
		}
	}
}
