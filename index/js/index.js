function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));	
				}
				var speed = (json[attr]-now)/20;
				// var speed = (json[attr] - now) / 8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				var current = now+speed;
				if(json[attr]!==current){
					isStop=false;
				}				
					if(attr=='opacity'){
						obj.style[attr] = (now+speed)/100;
					}else{
						obj.style[attr] = now+speed+'px';
					}									
			}	
			if(isStop){
					clearInterval(obj.timer)
					callback&&callback();
				}	
							
		},10);
		
	}
	function getStyle(obj,style){
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			obj.currentStyle[style];
		}		
	}
 
window.onload=function(){
	var tou=document.getElementsByClassName('tou')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>128){
			tou.style.position='fixed';
			
		}
		else{
			tou.style.position='static';
		}
	}

}
var a=['10','30','50','100'];
function change(){

	var cccc2e=document.getElementById('cccc2e').value;
	var p=document.getElementById('p');
	p.innerHTML='';
	if(cccc2e==-1)
	{
		p.innerHTML+='请选择';
	}
	else
	{
		var c=a[cccc2e];
	    p.innerHTML+='￥'+c;

	}
}
    var speed=25;
   	var cccc2k2=document.getElementById("cccc2k2");
	var cccc2k1=document.getElementById("cccc2k1");
    var cccc2k=document.getElementById("cccc2k");
    cccc2k2.innerHTML=cccc2k1.innerHTML;
    function Marquee1(){
	   if(cccc2k2.offsetTop-cccc2k.scrollTop<=0)
       {
	     cccc2k.scrollTop-=cccc2k1.offsetHeight;
       }
      else
      {
	     cccc2k.scrollTop++;
      }
	}
	var MyMar1=setInterval(Marquee1,speed);
    cccc2k.onmouseover=function()
    {
       clearInterval(MyMar1)
    }
    cccc2k.onmouseout=function()
    {
      MyMar1=setInterval(Marquee1,speed)
    }		
     






       var you1=document.getElementById('you1');
       you1.onmouseover=function()
       {
       	you1.style.marginLeft="1225px";
       }
       you1.onmouseout=function()
       {
          you1.style.marginLeft="1310px";
       }


        var you2=document.getElementById('you2');
       you2.onmouseover=function()
       {
       	you2.style.marginLeft="1225px";
       }
       you2.onmouseout=function()
       {
          you2.style.marginLeft="1310px";
       }


       var you3=document.getElementById('you3');
       var yyy=document.getElementById('yyy');
       you3.onmouseover=function()
       {
       	yyy.style.display="block";

       	you3.style.marginLeft="1225px";
       }
       you3.onmouseout=function()
       {
       	 yyy.style.display="none";
          you3.style.marginLeft="1310px";
       }

        var you4=document.getElementById('you4');
       you4.onmouseover=function()
       {
       	you4.style.marginLeft="1225px";
       }
       you4.onmouseout=function()
       {
          you4.style.marginLeft="1310px";
       }


   
