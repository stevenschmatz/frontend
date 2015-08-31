$(document).ready(function() {

	var herotext = $('.hero-text'),
	top = $('.top'),
	p = $('p'),
	pbold = $('p'),
	motto = $('.motto'),
	body = $('body'),
	mid = $('.mid'),
	offset = herotext.offset(),
	tagline = $('.tagline'),
	learnMore = $('.learnLink'),
	playBtn = $('.play'),
	isHeroTextVisible = false;
	window = $('window');

	var heroTextModule = {
		show: function(){
			herotext.hide().fadeIn(1500);
			isHeroTextVisible = true;
		}
	};

	var containerModule = {
		show: function(){
			$('.container').animate({
				opacity: 1
			}, 1000)
		},

		hide: function(){
			$('.container').animate({
				opacity: 0
			}, 100)
		}
	}

	var videoBackgroundModule = {
		show: function(){
			$('#videoBackground').fadeIn('slow');
			$('.close').fadeIn('slow');
			document.getElementById('video').play();
			document.getElementById('full').pause();
			event.preventDefault();
		},

		hide: function(){
			$('#videoBackground').fadeOut('slow');
			$('.close').fadeIn('slow');
			document.getElementById('video').pause();
			document.getElementById('full').play();
			event.preventDefault();
		}
	}

	var getInfoModule = {
		show: function(){
			$('#involveBackground').fadeIn(500);
			$('.top').hide();
			$('.container').hide();
		},

		hide: function(){
			$('#involveBackground').fadeOut(500);
			$('.top').show();
			$('.container').show();
		}
	}

	var involvedOption = {
		animate: function(one){
			one.animate({
				marginTop: 0
			})
		},
		inactive: function(){
			$('#involveBackground h3').animate({
				marginTop: 100
			})
		}
	}

	heroTextModule.show();

	learnMore.bind('click touchstart',function(){
		$('html,body').animate({
			scrollTop: mid.offset().top - 30
		}, 800);
	});

	$('#involvedBtn').bind('click touchstart',function(){
		getInfoModule.show();
	});

	$('#ideas').bind('click touchstart',function(){
		getInfoModule.show();
	});

	setInterval(function(){
		if(body.scrollTop() > 90){
			containerModule.show();
		} else {
			containerModule.hide();
		}
	},1000)

	$('.play').bind("click touchstart",function(){
		videoBackgroundModule.show();
		$('.close').show();

	});

	$('.close').bind("click touchstart",function(){
		videoBackgroundModule.hide();
		$('.close').hide();
	});

	$('#involveBackground td').mouseenter(function(){
		$(this).children('h3').animate({
			marginTop: 0
		},300)
		
		$(this).children('p').css('display','block');
	});

	$('.involveTablePic').mouseleave(function(){
		involvedOption.inactive();
		$(this).children('p').hide('fast');
	});

	$(window).scroll(function(event){
		var windowTop = $(window).scrollTop();
		if(windowTop < 400){
		var newPos = (windowTop * 0.2 + 'px');
			$('.parallax').css({
			transform: 'translateY('+ newPos +')',
			MozTransform: 'translateY('+ newPos +')',
			webkitTransform: 'translateY('+ newPos +')',
			msTransform: 'translateY('+ newPos +')'
			})
		}

				// 	$('#facebook').animate({height: "100px", width: "100px"}, 600, function(){
				// 	$("#twitter").animate({height: "100px", width: "100px"}, 600, function(){
				// 		$("#instagram").animate({height: "105px", width: "105px"}, 600, function(){
				// 			$("#medium").animate({height: "100px", width: "100px"}, 600, function(){
				// 			});
				// 		});
				// 	});
				// });

		var contactTop = $('.contact').offset().top / 1.4; 

		if(windowTop >= contactTop) {
			$('.contact h1').fadeIn('slow',function(){
				$('#facebook').css({
					transform: 'scale(100,100)'
				},500);
				$('#twitter').css({
					transform: 'scale(100,100)'
				},500);

				$('#instagram').css({
					transform: 'scale(100,100)'
				},500);

				$('#medium').css({
					transform: 'scale(100,100)'
				},500);
			});

		} else if(windowTop <= 1100) {
			$('.contact h1').fadeOut('slow');
		}
	});

});