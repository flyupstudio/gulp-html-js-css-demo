function preload(arrayOfImages){
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function findNearest(includeLeft, includeRight, value) {
	var nearest = null;
	var diff = null;
	for (var i = 0; i < values.length; i++) {
			if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
					var newDiff = Math.abs(value - values[i]);
					if (diff == null || newDiff < diff) {
							nearest = values[i];
							diff = newDiff;
					}
			}
	}
	return nearest;
}

$(document).ready(function(){

	preload([
		'images/check.png',
		'images/radio.png',
		'images/check-main.png',
		'images/picker-over.png'
	]);
	
	$('INPUT[type="text"]').autoClear();
	$('TEXTAREA').autoClear();
	
	$( "#accordion" ).accordion({ 
		animated: false
	});
	
	(function($){  
		$(function(){  
			$('input[type="text"], input[type="checkbox"], input[type="submit"], input[type="radio"], select').styler({
				onFormStyled: function(){
					$('select').each(function(){
						if (!$(this).find('[selected]').length){
							var place_holder = $(this).attr('placeholder');
							$(this).val('').next().find('.jq-selectbox__select-text').text(place_holder);
						}
						else{
							$(this).addClass('used');
						}
					});
				}
			});  
		})  
	})(jQuery);

	$(".fancybox").fancybox({padding: 0});

	$(document).on('change','select:not(.used)',function(){
		$(this).addClass('used');
	});

	$('.b-list .label').click(function(){
		$('.buttons-pg .main .b-list LI').removeClass('active');
		$(this).parent().parent().addClass('active');	
	});	
	
	$('.domain .rate .init LABEL').click(function(){
		$('.domain .rate .init').css('display','none');
		$('.domain .rate .subsequent').css('display','block');		
	});		
	
	$('.domain .rate .subsequent LABEL').click(function(){
		$('.domain .rate .subsequent').css('display','none');
		$('.domain .rate .init').css('display','block');		
	});	
	
	$('.payment .payment-list > div').click(function(e){
		e.preventDefault();
	//	$('.payment .payment-list .item').removeClass('active');
	//	$(this).addClass('active');
		var hHeight = $(this).find('.hint').outerHeight(); 
		$('.payment .payment-list .item').css('margin-bottom','-4px');
		$('.payment .payment-list .item').removeClass('active');
		$('.payment .payment-list .item').find('.hint').hide();
		$(this).find('.hint').slideDown('fast');
		$(this).css('margin-bottom',hHeight);
		$(this).addClass('active');
	});	

	$('.payment .payment-list .item .hint').click(function(e){
		e.preventDefault();
		return false;		
	});		
	
  $("INPUT.col").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
             // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
             // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 // Ничего не делаем
                 return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }  
        }
    });
	
	$('.seo-pg .f-wr .button.large').click(function(e){
		e.preventDefault();
		$('.seo-pg .f-wrap').addClass('loaded');
		setTimeout(function() {
			$('.seo-pg .f-wrap .initial').css('display','none');
			$('.seo-pg .f-wrap .finish').css('display','block');
			$('.seo-pg .f-wrap').removeClass('loaded');
		},1500);
	})		
	
	$('.domain-fm .main input[type="text"]').val("extrareg");
	
	$('.domain-fm .main .button').click(function(e){
		e.preventDefault();
		var Dmname = $('.domain-fm .main input[type="text"]').val();
		var Dmt = $('.domain-fm .main .jq-selectbox__select-text').text();
		$('.domain-fm .addt .tit span').text(Dmname + Dmt);
		$(this).parents(".domain-fm").find(".addt").css("display","block");		
	})		
	
	$(".c-top .f-main .item.ls UL").hide();
	$(".c-top .f-main .item.ls UL").empty();
	$('.domain-fm .addt .button').on('click', function(e){
		e.preventDefault();
		$(this).parent().css("display","none");
		$(this).parents(".fancybox-skin").find(".fancybox-close").click();
	//	$('div[role="main"] .c-top .f-main .item.ls A').css('display','none');
		var dName = $('.domain-fm .addt .tit span').text();

		$(".c-top .f-main .item.ls UL").show().append('<li>'+'<a href="#">'+dName+'</a>'+'<a class="cls" href="#"><img src="images/d-cls.png" alt="#" /></a>'+'</li>');
		
		$('.c-top .f-main .item.ls ul li .cls').on('click', function(e){
			e.preventDefault();		
			$(this).parent().remove();
		});
	})	
	
	$('.domain .tb-domn .buttons .button').click(function(e){
		e.preventDefault();
		
		if ($('.domain .tb-domn').hasClass('show')) {
			$(this).parents('.tb-domn').removeClass("show");
			$('.domain .tb-domn').addClass('loaded');				
			setTimeout(function() {
				$('.domain .tb-domn').removeClass('loaded'); 
				$('.domain .tb-domn .other').css("display","none");
				$('.domain .tb-domn .init').slideDown(1000);	
			},700);				
			$(this).text('Показать другие доменные зоны');		
	    } else {
			$(this).parents('.tb-domn').addClass("show");
			$('.domain .tb-domn').addClass('loaded');				
			setTimeout(function() {
				$('.domain .tb-domn').removeClass('loaded'); 
				$('.domain .tb-domn .init').css("display","none");
				$('.domain .tb-domn .other').slideDown(1000);	
			},700);		
			$(this).text('Cкрыть другие доменные зоны');
	    }
	});		
	
	$('.phones-pg .ph-rates .buttons .button').click(function(e){
		e.preventDefault();
		
		if ($('.phones-pg .ph-rates').hasClass('show')) {
			$(this).parents('.ph-rates').removeClass("show");
			$(this).parents('.ph-rates').addClass('loaded');				
			setTimeout(function() {
				$('.phones-pg .ph-rates').removeClass('loaded'); 
				$('.phones-pg .ph-rates .other').css("display","none");
				$('.phones-pg .ph-rates .init').slideDown(1000);	
			},700);				
			$(this).text('Показать другие доменные зоны');		
	    } else {
			$(this).parents('.ph-rates').addClass("show");
			$(this).parents('.ph-rates').addClass('loaded');				
			setTimeout(function() {
				$('.phones-pg .ph-rates').removeClass('loaded'); 
				$('.phones-pg .ph-rates .init').css("display","none");
				$('.phones-pg .ph-rates .other').slideDown(1000);	
			},700);		
			$(this).text('Cкрыть другие доменные зоны');
	    }
	});		
	
	$('.seo-pg .f-wrap .ch-list li label').click(function(e){
	//	e.preventDefault();
		if ($(this).find(".jq-checkbox").hasClass('checked')) {
			$(this).parents("li").removeClass("active");	
	    } else {
			$(this).parents("li").addClass("active");			
	    }
	});	
	
	var sliderValue = [1,3,6,12];
	$(function(){
		$('#value-slider-1').slider({
			range: 'min',
	    	value: 3,
	    	min: 0,
	    	max: 12,
			slide: function( event, ui ) {
            	if(sliderValue.indexOf(ui.value)===-1) return false;
            }
		});
	}); 
	$('.value-slider-1 .value-scale li').click(function(){
		var text = $(this).text();
		var num = parseInt(text);
		$('#value-slider-1').slider('value', num);	
	});	
	var sliderValue2 = [1,5,8,12,20];
	$(function(){
		$('#value-slider-2').slider({
			range: 'min',
	    	value: 1,
	    	min: 0,
	    	max: 20,
			slide: function( event, ui ) {
            	if(sliderValue2.indexOf(ui.value)===-1) return false;
            }
		});
	});
	$('.value-slider-2 .value-scale li').click(function(){
		var text = $(this).text();
		var num = parseInt(text);	
		if(num == '1'){
			$('#value-slider-2').slider('value', 1);				
		}		
		if(num == '2'){
			$('#value-slider-2').slider('value', 5);				
		}		
		if(num == '5'){
			$('#value-slider-2').slider('value', 8);				
		}		
		if(num == '10'){
			$('#value-slider-2').slider('value', 12);				
		}		
		if(num == '20'){
			$('#value-slider-2').slider('value', 20);				
		}

	});	
	$(function(){
		$('#value-slider-3').slider({
			range: 'min',
	    	value: 6,
	    	min: 0,
	    	max: 12,
			slide: function( event, ui ) {
            	if(sliderValue.indexOf(ui.value)===-1) return false;
            }
		});
	});
	$('.value-slider-3 .value-scale li').click(function(){
		var text = $(this).text();
		var num = parseInt(text);	
		if(num == '1'){
			$('#value-slider-3').slider('value', 1);				
		}		
		if(num == '5'){
			$('#value-slider-3').slider('value', 3);				
		}		
		if(num == '10'){
			$('#value-slider-3').slider('value', 6);				
		}		
		if(num == '20'){
			$('#value-slider-3').slider('value', 12);				
		}		

	});		
	$(function(){
		$('#value-slider-4').slider({
			range: 'min',
	    	value: 6,
	    	min: 0,
	    	max: 12,
			slide: function( event, ui ) {
            	if(sliderValue.indexOf(ui.value)===-1) return false;
            }
		});
	});	
	$('.value-slider-4 .value-scale li').click(function(){
		var text = $(this).text();
		var num = parseInt(text);	
		if(num == '1'){
			$('#value-slider-4').slider('value', 1);				
		}		
		if(num == '5'){
			$('#value-slider-4').slider('value', 3);				
		}		
		if(num == '10'){
			$('#value-slider-4').slider('value', 6);				
		}		
		if(num == '20'){
			$('#value-slider-4').slider('value', 12);				
		}		
	});
	$(function(){
		$('#value-slider-5').slider({
			range: 'min',
	    	value: 6,
	    	min: 0,
	    	max: 12,
			slide: function( event, ui ) {
            	if(sliderValue.indexOf(ui.value)===-1) return false;
            }
		});
	});	
	$('.value-slider-5 .value-scale li').click(function(){
		var text = $(this).text();
		var num = parseInt(text);	
		if(num == '1'){
			$('#value-slider-5').slider('value', 1);				
		}		
		if(num == '10'){
			$('#value-slider-5').slider('value', 3);				
		}		
		if(num == '25'){
			$('#value-slider-5').slider('value', 6);				
		}		
		if(num == '100'){
			$('#value-slider-5').slider('value', 12);				
		}		
	});	
	$(function(){
		$('#value-slider-6').slider({
			range: 'min',
	    	value: 6,
	    	min: 0,
	    	max: 12,
			slide: function( event, ui ) {
            	if(sliderValue.indexOf(ui.value)===-1) return false;
            }
		});
	});	
	$('.value-slider-6 .value-scale li').click(function(){
		var text = $(this).text();
		var num = parseInt(text);	
		if(num == '1'){
			$('#value-slider-6').slider('value', 1);				
		}		
		if(num == '10'){
			$('#value-slider-6').slider('value', 3);				
		}		
		if(num == '25'){
			$('#value-slider-6').slider('value', 6);				
		}		
		if(num == '100'){
			$('#value-slider-6').slider('value', 12);				
		}		
	});		/*
		$('#value-slider-7').slider({
			range: 'min',
	    	min: 5000,
	    	max: 500000,			
			value: 20000,
			slide: function( event, ui ) {
				$( "#cost" ).val( ui.value );
            }			
		
		});		
		*/
		
	var sliderValue3 = [1,4,8,12,16,20];	
	
	$("#value-slider-7").slider({
		range: 'min',
		value: 1,
		min: 0,
		max: 20,
		slide: function( event, ui ) {
			if(sliderValue3.indexOf(ui.value)===-1) return false;
			
			if((ui.value >= 1) && (ui.value < 4)){
				$('div[role="main"] .seo-pg .f-wrap INPUT.col').val(5000);
			}			
			if((ui.value >= 4) && (ui.value < 8)){
				$('div[role="main"] .seo-pg .f-wrap INPUT.col').val(10000);
			}				
			if((ui.value >= 8) && (ui.value < 12)){
				$('div[role="main"] .seo-pg .f-wrap INPUT.col').val(30000);
			}				
			if((ui.value >= 12) && (ui.value < 16)){
				$('div[role="main"] .seo-pg .f-wrap INPUT.col').val(50000);
			}				
			if((ui.value >= 16) && (ui.value < 20)){
				$('div[role="main"] .seo-pg .f-wrap INPUT.col').val(100000);
			}				
			if((ui.value >= 20)){
				$('div[role="main"] .seo-pg .f-wrap INPUT.col').val(500000);
			}			

		}
	});
		
		
	$('.value-slider-7 .value-scale li').click(function(){
		var pr = $(this).text();
		var num = $(this).css("left");
		var text = parseInt(num);
		var all_width = $(this).parents('.ui-value-slider').find('.ui-slider').width();
		var prc = (text * 100) / all_width;
		$(this).parents('.ui-value-slider').find('.ui-slider-handle').css('left',prc+'%');
		$(this).parents('.ui-value-slider').find('.ui-slider-range').css('width',prc+'%');
		$(this).parents('.f-wr').find('#cost').val(pr);
	});
		
/*	$("#slider-range").slider({
		range: "min",
		value: 7000,
		min: 3000,
		max: 30000,
		stop: function(event, ui) {
	    $("#amount").val($("#slider-range").slider("values",0));	
		},	
		slide: function( event, ui ) {
		$("#amount").val(ui.value );
		}
	});   

	$("#amount").change(function(){
	    var value1=$("#amount").val();
	     
	    if (value1 < 3000) { value1 = 3000; $("#amount").val(3000)}
		if (value1 > 30000) { value1 = 30000; $("#amount").val(30000)}
	 
	    $("#slider-range").slider("value",value1);
	});	  
		
		
	});		*/	
		
		
		$("#cost").change(function(){
			var value1=$("#cost").val();
			 
			if (value1 < 5000) { value1 = 5000; $("#cost").val(5000)}
			if (value1 > 500000) { value1 = 500000; $("#cost").val(500000)}
		 
			$("#value-slider-7").slider("value",value1);
		});
				
		
		
	$(function(){			
		$('#value-slider-8').slider({
			range: 'min',
	    	min: 500,
	    	max: 2000,			
			value: 1250,
			step: 10,
			slide: function( event, ui ) {
				$( "#cost" ).val( ui.value );
            }			
		
		});
	});			
	
	/* GOOGLE MAP */
	if($("#map_canvas").length>0) {

		var latlng = new google.maps.LatLng(55.757240, 37.634579);
		var settings = {
			zoom: 17,
			center: latlng,
			mapTypeControl: true,
			mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
			navigationControl: true,
			navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
			mapTypeId: google.maps.MapTypeId.ROADMAP};
		
		var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
			
		var companyImage = new google.maps.MarkerImage('images/maps/logo.png',
		new google.maps.Size(40,54),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
		);	
		
		var companyPos = new google.maps.LatLng(55.757240, 37.634579);

		var companyMarker = new google.maps.Marker({
			position: companyPos,
			map: map,
			icon: companyImage,
			title:"Extrareg"
		});
	}
	
	
	/* UPLOAD FORM */
	
	var ul = $('#upload .subs ul');

    $('#upload .subs a').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#upload').fileupload({

        // This element will accept file drag/drop uploading
        
		dropZone: dropZ,
		
        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {
		
		//	$('.support .f-wr .wr .fl-list.shw .init').show();
		//	$('.support .f-wr .wr .fl-list.shw .subs').show();
		
		
         /*   var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"'+
                ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');  */
				
            var tpl = $('<li class="working"><p></p><span></span></li>');

            // Append the file name and file size
    //        tpl.find('p').text(data.files[0].name).append('<i>' + formatFileSize(data.files[0].size) + '</i>');
            tpl.find('p').text(data.files[0].name);

            // Add the HTML to the UL element
            data.context = tpl.appendTo(ul);

            // Initialize the knob plugin
            tpl.find('input').knob();

            // Listen for clicks on the cancel icon
            tpl.find('span').click(function(){
                if(tpl.hasClass('working')){
                    jqXHR.abort();
                }
				
			tpl.remove();
			/*	
                tpl.stop(true , true).fadeOut(function(){
					
                    tpl.remove();
                });  */

            });

            // Automatically upload the file once it is added to the queue
            var jqXHR = data.submit();
        },

        progress: function(e, data){

            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();

            if(progress == 100){
                data.context.removeClass('working');
            }
        },

        fail:function(e, data){
            // Something has gone wrong!
            data.context.addClass('error');
        }

    });


    // Prevent the default action when a file is dropped on the window
	
	var dropZ = $(document);
	
	dropZ
		.on('dragenter', function(event) {
			var elem = $('.support .f-wr .fl-list ul li');
			
			if (elem.length > 0){
				$('.support .f-wr .wr .fl-list.shw .subs').show();
				$('#drop').hide();		

				$(document).addClass('active');
				
			}else{
				$('.support .f-wr .wr .fl-list.shw .subs').hide();
				$('#drop').show();				
			}			
			
			return false;
		})
		.on('dragleave', function(event) {
			$('.support .f-wr .wr .fl-list.shw .subs').show();
			$('#drop').hide();					
			return false;
		})
		.on('dragover', function() {
			var elem = $('.support .f-wr .fl-list ul li');
			
			if (elem.length > 0){
				$('.support .f-wr .wr .fl-list.shw .subs').show();
				$('#drop').hide();				
			}else{
				$('.support .f-wr .wr .fl-list.shw .subs').hide();
				$('#drop').show();				
			}
		
			return false;
		})		
		.bind('out', function() {
			$('.support .f-wr .wr .fl-list.shw .subs').show();
			$('#drop').hide();			
			return false;
		})
		.on('drop', function(event) {
			var elem = $('.support .f-wr .fl-list ul li');		
			
			if (elem.length > 0){
				$('.support .f-wr .wr .fl-list.shw .subs').show();
				$('#drop').hide();	

			}else{
				$('.support .f-wr .wr .fl-list.shw .subs').hide();
				$('#drop').show();				
			}				
			 
	});	 
	

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }

        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }

        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }

        return (bytes / 1000).toFixed(2) + ' KB';
    }
	
	
	$('.support .questions .item li').click(function(e){
		e.preventDefault();		
		$('.support .questions .item li').removeClass('active');
		$(this).addClass('active');
	});
	
	
	
	
	
	
});


//eof