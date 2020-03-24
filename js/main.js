$(function(){
    var navToggle = $('.nav_toggle'),
    closeToggle = $('.close_toggle'),
    lnb = $('.lnb')
    
    navToggle.on('click', function(e){
        e.preventDefault();
        setTimeout(function(){
            lnb.addClass('select');
            $('.dim').show();
        }, 100);
    });
    closeToggle.on('click', function(e){
        e.preventDefault();
        setTimeout(function(){
            lnb.removeClass('select');
            $('.dim').hide();
        }, 100);
    });
    $('.cont').on('click', function(e){
		e.preventDefault();
		if(lnb.hasClass('select')) {
            setTimeout(function(){
                lnb.removeClass('select');
                $('.dim').hide();
            }, 100);
		};
	});
    var table = $('.cont_table').find('.table_01');
    table.hide();
    table.eq(0).show();
    $('.toggle_group button').on('click', function(e){
        e.preventDefault();
        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');
        table.hide();
        var index = $(this).index();
        table.eq(index).show();
    });
})