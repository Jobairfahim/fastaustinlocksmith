$(document).ready(function(){
	
	/******Sidenavbar****/
	$(".navbar-toggle").on("click", function () {
		$(".mob_navi").toggleClass("menu_open")
	}), $(".mob_sub_link span").on("click", function () {
		$(".mob_navi").toggleClass("submenu_open")
	}), $(".mob_sub_navigate i").on("click", function () {
		$(".mob_navi").toggleClass("menu_open")
	}), $(".mob_sub_navigate span").on("click", function () {
		$(".first-open").removeClass("close")
	}), $(".mob_sub_navigate span").on("click", function () {
		$(".second-open").removeClass("close")
	}), $(".mob_sub_navigate span").on("click", function () {
		$(".mob_navi").toggleClass("submenu_open")
	}), $(".mob_sub_link a").on("click", function () {
		$(".mob_navi").toggleClass("submenu_open")
	}), $(".first-open").on("click", function () {
		$(".second-open").addClass("close")
	}), $(".second-open").on("click", function () {
		$(".first-open").addClass("close")
	});
	$(".navbar-toggle").click(function () {
		$(".navbar-toggle").toggleClass("active")
	});
	
	/*********************Banner*******************/
	$('.banner-locksmith-hole').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  fade: true,
	  cssEase: 'linear',
	 
	});
	
	
	
	
	
	/*********************Services*******************/
	$('.service-locksmith-sli.mobile_single').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: false,
	  autoplaySpeed: 3000,
	    responsive: [
		{
			breakpoint: 993,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  
				
				}
			},
			{
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  
				
				}
			},	
			{
			breakpoint: 480,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  
				
				}
			}	
		]	
	 	
	});	
	$('.allser_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: false,
	  autoplaySpeed: 3000,
	    responsive: [
		{
			breakpoint: 993,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  
				
				}
			},
			{
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  
				
				}
			},	
			{
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  
				
				}
			}	
		]	
	 	
	});		

	/*********************Services*******************/
	$('.review-sideown-hole').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: false,
	  autoplaySpeed: 3000,
	});
	  
	/*********************Reviews*******************/
	$('.customer-hmereviews-megan').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
		responsive: [{
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  
				
				}
			}
	]	
	});
	/*********************Blogs*******************/
	$('.blogs-section-hole-inner').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
		 responsive: [{
			breakpoint: 993,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  
				
				}
			},
			{
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			   }
			},
			
		]	
	});
	/*********************Whychoose*******************/
	$('.whychoose-abt-sli').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: false,
	  autoplaySpeed: 3000,
		 responsive: [{
			breakpoint: 993,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  
				
				}
			},
			{
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
				}
			}	
		]
	});
	
	/***********BlogLoadmore**********/ 
	  $(".blogs-section-single.blog-own").slice(0, 12).show();
		  $("#blog-moreload").on("click", function(e){
			e.preventDefault();
			$(".blogs-section-single.blog-own:hidden").slice(0, 3).slideDown();
			if($(".blogs-section-single.blog-own:hidden").length == 0) {
			  $("#blog-moreload").text("exit").addClass("exit").hide();
			}
	  });
	 /***********ReviewLoadmore**********/ 
	  $(".customer-hmereview-megan-single.own-revi-pa").slice(0, 10).show();
		  $("#review-moreload").on("click", function(e){
			e.preventDefault();
			$(".customer-hmereview-megan-single.own-revi-pa:hidden").slice(0, 2).slideDown();
			if($(".customer-hmereview-megan-single.own-revi-pa:hidden").length == 0) {
			  $("#review-moreload").text("exit").addClass("exit").hide();
			}
	  }); 

});
