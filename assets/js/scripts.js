jQuery(document).ready(function ($) {

	$('#gi-single').ezPlus({
		zoomWindowFadeIn: 500,
		zoomLensFadeIn: 500,
		gallery: 'p-gallery',
		imageCrossfade: true,
		zoomWindowWidth: 300,
		zoomWindowHeight: 300,
		zoomWindowOffsetX: 10,
		scrollZoom: true,
		cursor: 'default',
		zoomWindowPosition: 10,
		borderColour: '#888',
		borderSize: 4,
		constrainSize: true,
		easing:true,
		easingAmount: 12,
		galleryActiveClass:"active",
		lensShape:'round',
		minZoomLevel: 0.5,
		maxZoomLevel: 1.5
	});

	$('#search_frm_input').css('border-radius', '25px');

	$(document).click(function(e) {
		if ( $(e.target).closest('#search_frm_input').length === 0 ) {
			$('.search_res_ajax').css('display' , 'none');
		}
		if ( $(e.target).closest('#dropdownMenuButton').length === 0 ) {
			$('#dropdownMenuButton').find('i').css('transform' , 'rotateZ(0deg)');
		}
	});


	$('#search_frm_input').on('blur', function () {
		$(this).css({
			'border-radius': '25px',
			'box-shadow': '0 0 10px #bdbdbd'
		});
	});


	$('#search_frm_input').on('input',function () {
		let input_txt = $(this).val();
		if (input_txt !== ''){
			$('#clear_btn').css('display', 'block');
			$('.search_res_ajax').css('display' , 'block');
			$(this).css({
				'display': 'block',
				'border-bottom-left-radius': '0',
				'border-bottom-right-radius': '0',
				'box-shadow': '0 -5px 10px #bdbdbd'
			});
		}else {
			$('#clear_btn').css('display', 'none');
			$('#search_frm_input').css({
				'border-radius': '25px',
				'box-shadow': '0 0 10px #bdbdbd'
			});
			$('.search_res_ajax').css('display' , 'none');
		}
	});
	$('#clear_btn').on('click', function () {
		$('#search_frm_input').val('');
		$(this).css('display', 'none');
	});



	$('#gi-single').attr('src' , $('.gallery_image.active').attr('src'));
	$('.gallery_image').on('click' , function (e) {
		e.preventDefault();
		$('#gi-single').css('opacity' , '0');
		$('.gallery_image').removeClass('active');
		$(this).addClass('active');
		let image_src = $(this).attr('src');
		$('#gi-single').attr('src' , image_src).animate({opacity: '1'} , 800);

		$('#gi-single').ezPlus({
			imageCrossfade: true,
			scrollZoom: true,
			cursor: 'default',
			zoomWindowPosition: 10,
			borderColour: '#888',
			borderSize: 4,
			constrainSize: true,
			easing:true,
			easingAmount: 12,
			galleryActiveClass:"active",
			lensShape:'round',
			minZoomLevel: 0.5,
			maxZoomLevel: 1.5
		});

	});


	$.fn.digits = function () {
		return this.each(function () {
			$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1/"));
		})
	};

	$('.digits').digits();

	$('.owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		autoplay: false,
		responsiveClass:false,
		nav:true,
		dots: false,
		lazyLoad: true,
		responsive:{
			0:{
				items:1,
			},
			300:{
				items:3,
			},
			400:{
				items:3,
			},
			500:{
				items:3,
			},
			600:{
				items:3,
			},
			800:{
				items:4,
			},
			900:{
				items:5,
			},
			1000:{
				items:5,
			}
		}
	});
	$('.owl-next').html('<i class="material-icons">chevron_right</i>');
	$('.owl-prev').html('<i class="material-icons">chevron_left</i>');

	$('.sell_count').each(function () {
		if ($(this).text() == '0'){
			$(this).css('color', '#dc004e');
		}
	});


	$('#breadcrumb_nav').find('.btn').on('click', function () {
		let status = $(this).attr('aria-expanded');
		if (status == 'false'){
			$(this).find('i').css('transform' , 'rotateZ(180deg)');
		}else {
			$(this).find('i').css('transform' , 'rotateZ(0deg)');
		}
	});


	$('#accordion').find('.btn').on('click', function () {
		let status = $(this).attr('aria-expanded');
		if (status == 'false'){
			//$('#accordion').find('.btn i').text('keyboard_arrow_down');
			$(this).find('i').css('transform' , 'rotateZ(0deg)');
		}else {
			$(this).find('i').css('transform' , 'rotateZ(180deg)');
		}
	});

	$('.close_filter_tag').click(function () {
		let li_element = $(this).parents('li');
		li_element.remove();
	});

	$('.products_cards').find('img.no-image').attr('src', './assets/images/image_not_found.jpg');
	$('.cards').find('img.no-image').attr('src', './assets/images/image_not_found.jpg');



//  signup form validation
	let counter = 1;

	simple_validate($('.signup_frm').find('input#name'));
	simple_validate($('.signup_frm').find('input#username'));
	$('.signup_frm').find('input#password').on('blur', function () {
		let value = $(this).val();
		if (value === ''){
			counter++;
			$(this).siblings('.invalid-feedback').css('display', 'block');
		}else {
			counter--;
			$(this).siblings('.invalid-feedback').css('display', 'none');
			$('.signup_frm').find('input#password-confirm').siblings('.invalid-feedback').css('display', 'none');
		}
		$('.signup_frm').find('input#password-confirm').blur();
	});
	$('.signup_frm').find('input#password-confirm').on('blur', function () {
		let value = $(this).val();
		let pass = $('.signup_frm').find('input#password').val();

		if (value === '' || pass!=value){
			counter++;
			$(this).siblings('.invalid-feedback').css('display', 'block');
		}else {
			counter--;
			$(this).siblings('.invalid-feedback').css('display', 'none');
			$('.signup_frm').find('input#password').siblings('.invalid-feedback').css('display', 'none');
		}
	});

	email_validate($('.signup_frm').find('input#email'));

//  signup form validation


//  contact-us form validation
	simple_validate($('.contact_us_frm').find('input#your_name'));
	simple_validate($('.contact_us_frm').find('input#subject'));
	textarea_validate($('.contact_us_frm').find('textarea#message_body'));
//  contact-us form validation


	$('#signup_frm_submit').hover(function (e) {
		let is_disabled = $(this).hasClass('disabled');
		if (! is_disabled){
			$(this).find('i').animate({bottom: '10px'}, 'fast');
		}
	},(function () {
		let is_disabled = $(this).hasClass('disabled');
		if (! is_disabled){
			$(this).find('i').animate({bottom: '-60px'}, 'fast');
		}
	}));
	
	
	$('#showPassword').hover(function () {
		$('.signup_frm').find('input#password').attr('type', 'text');
	}, (function () {
		$('.signup_frm').find('input#password').attr('type', 'password');
	}));
	$('#showConfirmPassword').hover(function () {
		$('.signup_frm').find('input#password-confirm').attr('type', 'text');
	}, (function () {
		$('.signup_frm').find('input#password-confirm').attr('type', 'password');
	}));




});




function simple_validate(element) {
	element.on('blur', function () {
		let value = $(this).val();
		if (value === ''){
			$(this).siblings('.invalid-feedback').css('display', 'block');
		}else {
			$(this).siblings('.invalid-feedback').css('display', 'none');
		}
	});
}
function textarea_validate(element) {
	element.on('keyup', function () {
		let value = $(this).val();
		console.log(value.length);
		if (value.length < 20){
			$(this).siblings('.invalid-feedback').css('display', 'block');
		}else {
			$(this).siblings('.invalid-feedback').css('display', 'none');
		}
	});
}
function email_validate(element) {
	element.on('blur', function () {
		let value = $(this).val();
		let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		let is_email_valid = emailReg.test( value );
		if (! is_email_valid || value === ''){
			$(this).siblings('.invalid-feedback').css('display', 'block');
		}else {
			$(this).siblings('.invalid-feedback').css('display', 'none');
		}
	});
}


