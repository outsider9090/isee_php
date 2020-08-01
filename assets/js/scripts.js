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
	  $('#dropdownMenuButton').find('i').text('keyboard_arrow_down');
	}
  });

  $('#search_frm_input').on('focus', function () {
	$('.search_res_ajax').css('display' , 'block');
	$(this).css({
	  'display': 'block',
	  'border-bottom-left-radius': '0',
	  'border-bottom-right-radius': '0',
	  'box-shadow': '0 -5px 10px #bdbdbd'
	});
  });

  $('#search_frm_input').on('blur', function () {
	$(this).css({
	  'border-radius': '25px',
	  'box-shadow': '0 0 10px #bdbdbd'
	});
  });


  $('#search_frm_input').on('input',function () {
	var input_txt = $(this).val();
	if (input_txt !== ''){
	  $('#clear_btn').css('display', 'block');
	}else {
	  $('#clear_btn').css('display', 'none');
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
	var image_src = $(this).attr('src');
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
	  $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
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
	var status = $(this).attr('aria-expanded');
	if (status == 'false'){
	  $(this).find('i').text('keyboard_arrow_up');
	}else {
	  $(this).find('i').text('keyboard_arrow_down');
	}
  });

  $('#accordion').find('.btn').on('click', function () {
	var status = $(this).attr('aria-expanded');
	if (status == 'false'){
	  //$('#accordion').find('.btn i').text('keyboard_arrow_down');
	  $(this).find('i').text('keyboard_arrow_up');
	}else {
	  $(this).find('i').text('keyboard_arrow_down');
	}
  });

  $('.close_filter_tag').click(function () {
	var li_element = $(this).parents('li');
	li_element.remove();
  });

});


