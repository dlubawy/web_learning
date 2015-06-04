var width = 16;
var height = 16;

$(document).ready(function() {
    $('div').on('click', function(event, width, height) {
	for(i = 0; i < (width*height); i++) {
	    $('.container').append('<div class="box"></div>');
	    if((i+1)%height === 0 && i !== 1) {
		$('.container').append('<br>');
	    }
	}
	$('.box').hover(function() {
	    $(this).css('background-color', 'blue');
	});
    });
    $('button').click(function() {
	width = prompt('What width?');
	height = prompt('What height?');
	$('.box').remove();
	$('div').trigger('click', [width, height]);
    });
});
