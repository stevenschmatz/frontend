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

	$('.position').hover(function() {
		$(this).children('h3').animate({
			marginTop: 0
		},300)
		$(this).children('p').text('We bring together people who are passionate about social change and want to take action. We have several ways for you to get involved. No matter your age or experience, we will help you make an impact in the world');
		$('.involveTablePic').css('-webkit-filter', 'brightness(0.3);');
	}, function() {
		$(this).children('h3').animate({
			marginTop: 100
		},300)
		$(this).children('p').text('');
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
	});

});