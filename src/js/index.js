

window.onload = function(){

	$(function(){
			$(".img").hover(function(){
				// alert("!");
			})

			$("img.active").mouseover(function(){
				$img_width = $(this).width();
				$(this).mousemove(function(e){
					if(e.pageX >= $img_width/2){
						console.log("오른쪽");
					}
					else{
						console.log("왼쪽");	
					}
					
				});
			})

	});
}