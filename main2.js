require("./css/main");

import $ from 'jquery';
$("body").click( (e)=>{
	if(e.target.id == "clickMe"){
	 	$(".modal").css({display:"block"});
	 	setTimeout(()=>{
	 		$(".modal").addClass("modal-open");
	 	},0)		
		return ;
	}
	$(".modal").css({display:"none"}).removeClass("modal-open")
})

function a(){
	var a = 4;
	return function(){
		return a;
	}
}
if(true){
	//b = 1;
}
try{
	//console.log(b);
}catch(e){
	//console.log(e)
}
var i = 0;
while(i < 10){
	//console.log(i);
	i++;
}
console.log(i);
console.log(a()());

var num = 12;
function Fn(){
	var num = 120;
	return function(){
		console.log(num);
	}
}
var f = Fn();
console.log($("#box-1"))
var boxId = document.getElementById("box-1");
// boxId.addEventListener("click",function(e){
// 	console.log(this.id)
// },false)

function addEvent(obj,fn){
	if(window.attachEvent){
		obj.attachEvent("onclick",function(){
			console.log(this);
		})
	}else{

	}
}


// boxId.addEventListener(type,funciton(){
// 	console.log(type);
// })
// $("#box-1").mouseover(()=>{
// 	//鼠标滑过只执行一次
// 	console.log("over");
// })
// $("#box-1").mousemove(()=>{
// 	//鼠标移动就执行
// 	console.log("move");
// })
// $("#box-1").mouseout(()=>{
// 	//鼠标移动就执行
// 	console.log("out");
// })
// $("#box-1").mousedown(()=>{
// 	//鼠标移动就执行
// 	console.log("down");
// })
// $("#box-1").mouseup(()=>{
// 	//鼠标移动就执行
// 	console.log("up");
// })
// $("#box-1").mouseleave(()=>{
// 	//鼠标移动就执行
// 	console.log("leave");
// })