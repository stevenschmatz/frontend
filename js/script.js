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
	isVideoPlaying = false;
	isPopupShowing = false;
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
			$('#videoBackground').fadeOut(1000,function(){
				isVideoPlaying = false;
				document.getElementById('video').currentTime = 0;
			});
			$('.close').fadeIn('slow');
			document.getElementById('video').pause();
			document.getElementById('full').play();

			event.preventDefault();
		}
	}

	var getInfoModule = {
		show: function(){
			$('.newsletterForm').fadeOut(100);
			$('#involveBackground').fadeIn(300);
			$('.involveWrap').fadeIn(300);
			// $('.top').hide();
			// $('.container').hide();
			document.getElementById('full').pause();
		},

		hide: function(){
			$('#involveBackground').fadeOut(100);
			$('.top').show();
			$('.container').show();
		}
	}

	var formModule = {
		show: function(){
			$('#involveBackground').fadeIn(300);
			$('.newsletterForm').fadeIn(300);
			// $('.top').hide();
			// $('.container').hide();
			$('.involveWrap').hide();
		},

		hide: function(){
			$('#involveBackground').fadeOut(300);
			$('.newsletterForm').fadeOut(00);
			$('.top').show();
			$('.container').show();
			$('.involveWrap').show();
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
		// $(window).scrollTop(0);
	});

	$('.newsletter').bind('click touchstart',function(){
		formModule.show();
		// $(window).scrollTop(0);
	});

	$('.involveClose').bind('click touchstart',function(){
		getInfoModule.hide();
		document.getElementById('full').play();
	});

	$('body').bind('click touchstart',function(){
		if(isVideoPlaying == true){
			videoBackgroundModule.hide();
			$('.close').hide();
			isVideoPlaying = false;
		}
	});

	$('#full').bind('click touchstart',function(){
		if($('#involveBackground').attr('opacity','1')){
			getInfoModule.hide();
		}
	});

	// $('.container').bind('click touchstart',function(){
	// 	if($('#involveBackground').attr('opacity','1')){
	// 		getInfoModule.hide();
	// 	}
	// });


	$('#ideas').bind('click touchstart',function(){
		getInfoModule.show();
	});

	$('.play').bind("click touchstart",function(){
		videoBackgroundModule.show();
		$('.close').show();
		
	});

$('.close').bind("click touchstart",function(){
	videoBackgroundModule.hide();
	$('.close').hide();
});

$('.position').hover(function() {

	$(this).children('h3').animate({
		marginTop: 0
	},300)
	$(this).children('p').fadeIn(200);
	var image = $(this).find('img');
	image.css('opacity','0.3');

}, function() {

	$(this).children('h3').animate({
		marginTop: 100
	},300)
	$(this).children('p').fadeOut(200);
	$('.involveTablePic').css('opacity','1');
});

setInterval(function(){
	var videoTime = document.getElementById('video');
	if(videoTime.currentTime > 1){
		isVideoPlaying = true;
	}
});


$(window).scroll(function(event){

	if($(window).scrollTop() > 450){
		containerModule.show();
	}

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

	var contactTop = $('.contact').offset().top / 1.4; 

	if(windowTop >= contactTop) {
		$('.contact h1').fadeIn('slow',function(){
			$('#facebook').css({
				transform: 'scale(100,100)',
				MozTransform: 'scale(100,100)',
				webkitTransform: 'scale(100,100)',
				msTransform: 'scale(100,100)'
			},500);
			$('#twitter').css({
				transform: 'scale(100,100)',
				MozTransform: 'scale(100,100)',
				webkitTransform: 'scale(100,100)',
				msTransform: 'scale(100,100)'
			},500);

			$('#instagram').css({
				transform: 'scale(100,100)',
				MozTransform: 'scale(100,100)',
				webkitTransform: 'scale(100,100)',
				msTransform: 'scale(100,100)'
			},500);

			$('#medium').css({
				transform: 'scale(100,100)',
				MozTransform: 'scale(100,100)',
				webkitTransform: 'scale(100,100)',
				msTransform: 'scale(100,100)'
			},500);
		});

	} else if(windowTop <= 1100) {
		$('.contact h1').fadeOut('slow');
		$('#facebook').css({
			transform: 'scale(1,1)',
			MozTransform: 'scale(1,1)',
			webkitTransform: 'scale(1,1)',
			msTransform: 'scale(1,1)'
		},500);

		$('#twitter').css({
			transform: 'scale(1,1)',
			MozTransform: 'scale(1,1)',
			webkitTransform: 'scale(1,1)',
			msTransform: 'scale(1,1)'
		},500);

		$('#instagram').css({
			transform: 'scale(1,1)',
			MozTransform: 'scale(1,1)',
			webkitTransform: 'scale(1,1)',
			msTransform: 'scale(1,1)'
		},500);

		$('#medium').css({
			transform: 'scale(1,1)',
			MozTransform: 'scale(1,1)',
			webkitTransform: 'scale(1,1)',
			msTransform: 'scale(1,1)'
		},500);
	}

	if ($(window).width() <= 414){

		$('#facebook').css({
			transform: 'scale(60,60)',
			MozTransform: 'scale(60,60)',
			webkitTransform: 'scale(60,60)',
			msTransform: 'scale(60,60)'
		},500);
		$('#twitter').css({
			transform: 'scale(60,60)',
			MozTransform: 'scale(60,60)',
			webkitTransform: 'scale(60,60)',
			msTransform: 'scale(60,60)'
		},500);

		$('#instagram').css({
			transform: 'scale(60,60)',
			MozTransform: 'scale(60,60)',
			webkitTransform: 'scale(60,60)',
			msTransform: 'scale(60,60)'
		},500);

		$('#medium').css({
			transform: 'scale(60,60)',
			MozTransform: 'scale(60,60)',
			webkitTransform: 'scale(60,60)',
			msTransform: 'scale(60,60)'
		},500);

	}
});

});