var center_height = $('#div_h1_p').outerHeight();
$('#center').height(center_height);
var container_text_height = $('.container_text_img').outerHeight();
$('#section_text_img').height(container_text_height);
var navTop = $(".main_nav").offset().top;
var boxTop = $(".info_home").offset().top;
var section_text_img = $(".box_ball_text").offset().top;
var div_text_img_p = $(".div_text_img_p").offset().top;
var left_height = $("#left").outerHeight();
$("left_top").height(left_height);
var info_2 = $(".info_2").offset().top;
var beauty_height = $(".beauty_text_img").outerHeight();
$(".beauty_text_img_top").height(beauty_height);
var left_top = $("#left_top").offset().top;
/* 
var container_height = $('.container').outerHeight();
$('#container_div').height(container_height);
*/

$(window).scroll(function(){
	if(navTop <= $(window).scrollTop()){
		$(".main_nav").addClass("fixedNav");
	}
		else if(navTop > $(window).scrollTop()){
			$(".main_nav").removeClass("fixedNav");
		}
})
setTimeout(function(){
	$(".center_div").addClass("center_div_add")
},2000)

function f1(){
	$(".container_4").animate({
		'left':'0',
	},1000,function(){
		$(".container_3").animate({
			'left':'0',
		},1000,function(){
			$(".container_2").animate({
				'left':'0',
			},1000,function(){
				$(".container_1").animate({
					'left':'0',
				},1000)
			})
		})
	})
}

function f2() {
/*	$(".container_text_img").animate({
		'right':'0', 
	},1000)
	$(".text_img_1").animate({
		"opacity":"1"
	},2000)
	$(".text_img_2").animate({
		"opacity":"1"
	},2000)
	$(".text_img_3").animate({
		"opacity":"1"
	},2000)*/
	$(".container_text_img").addClass("container_text_img_add");
};

function f3 (){
	$(".text_content_all").addClass("text_content_all_add");
}

function f4 () {
	$(".left").addClass("left_add");
}

function f5 (){
	$(".beauty_text_img").addClass("left_add");
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > boxTop){
		f1();
   	 } 
  	 if(scroll > section_text_img){
   	 	f2(); 
   	 }
   	 if(scroll > div_text_img_p){
   	 	f3();
   	 }
   	 if(scroll > info_2) {
   	 	f4();
   	 }
   	 if(scroll > left_top) {
   	 	f5();
   	 }
});

//boxer
/*


//texter


*/
//
//$(document).ready(function(){
//	
	/*
	*/
//});



/*  
	$("#center_div").animate({
		'left':'0',
		'opacity':'1'
	},1000)
	
	$(".container_text_img").animate({
		'right':'0', 
	},1000)
	$(".text_img_1").animate({
		"opacity":"1"
	},2000)
	$(".text_img_2").animate({
		"opacity":"1"
	},2000)
	$(".text_img_3").animate({
		"opacity":"1"
	},2000)
});
*/


/*
	,function(){
		$(".container_3").animate({
		'left':'0',
	},2000,function(){
		$(".container_2").animate({
		'left':'0',
	},2000,function(){
		$(".container_1").animate({
		'left':'0',
	},2000)

*/	