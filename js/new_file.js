$(function(){
	$(".lunbo .igs").eq(0).show().siblings().hide();
	$(".lunbo .igs1").eq(0).addClass("blueline");
	var i=0;
	setInterval(function(){
		i++;
		if(i>6){
			i=0;
		}
		$(".lunbo .igs").eq(i).fadeIn().siblings().fadeOut();
		$(".lunbo .igs1").eq(i).addClass("blueline").siblings().removeClass("blueline");
	},2000);
	
	$(".lunbo .igs1").hover(function(){
		$(this).addClass("blueline");
		var index=$(this).index();
		$(".lunbo .igs").eq(index).fadeIn().siblings().fadeOut();
	},function(){
		$(this).removeClass("blueline");
	})
	
	
	$(".pannel a").hover(function(){
		$(this).animate({"background-position-X":"0"},200)
	},function(){
		$(this).animate({"background-position-X":"-58px"},200)
	})
	
	$(".pannel_app").hover(function(){
		$(".qr").show();
	},function(){
		$(".qr").hide();
	})
	
	$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$(".pannel_top").show();
				$(".qr").css({"bottom":"28px"});
			}else{
				$(".pannel_top").hide();
				$(".qr").css({"bottom":"92px"});
			}
	});
		
	$(".pannel_top").click(function(){
		$('body,html').animate({scrollTop:0},300);
		return false;
	});
})

		