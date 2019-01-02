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