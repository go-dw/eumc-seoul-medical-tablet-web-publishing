$(function(){
    // 주소창 숨기기 아이폰인 경우
    if (navigator.userAgent.indexOf('iPhone') != -1) {
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);    }, false);
        }
    //아이폰이 아닌경우
    else {
        hideURLbar();
    }
    function hideURLbar() {
        window.scrollTo(0, 1);
    }

    window.addEventListener('load', function(){setTimeout(scrollTo, 0, 0, 1);
    }, false);


    
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
    $('.dim').on('click', function(e){
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

    $('.per_tit').hide();
    $('.popup_ins .popup_wrap').hide();
    $('.table_wait tbody .row').on('click', function(e){
        e.preventDefault();
        $('.res_tit').hide();
        $('.per_tit').show();
        $('.popup_ins .popup_wrap').show();
        const p_name = $(this).find('.td_name').text();
        $('.per_tit .name').text(p_name+' 님');
    });
    $('.close_wrap .ico_close').on('click', function(e){
        e.preventDefault();
        $('.res_tit').show();
        $('.per_tit').hide();
        $('.popup_ins .popup_wrap').hide();
    });

    $('.per_tit_02').show();
    const p_name_02 = $('.table_cur tbody .row').eq(0).find('.td_name').text();
    $('.per_tit_02 .name').text(p_name_02+' 님');
    $('.table_cur tbody .row').on('click', function(e){
        e.preventDefault();
        const p_name = $(this).find('.td_name').text();
        $('.per_tit .name').text(p_name+' 님');
    });

    const arr_btn = $('.column_box');
    const arr_popup = $('.arr_popup');
    const arr_text = $('.arr_popup .arr_text');
    const arr_close = $('.arr_popup .btn_close');
    const arr_yes = $('.arr_popup .arr_yes');
    arr_popup.hide();

    arr_btn.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('active_com')){
            arr_text.text('도착확인하시겠습니까?')
            setTimeout(function(){
                arr_popup.show().addClass('on');
                $('.dim').show();
            }, 100);
        }else if($(this).hasClass('active_chk')){
            arr_text.text('도착확인을 취소하시겠습니까?')
            setTimeout(function(){
                arr_popup.show().addClass('on');
                $('.dim').show();
            }, 100);
        }else{
            arr_text.text('도착확인하시겠습니까?')
            setTimeout(function(){
                arr_popup.show().addClass('on');
                $('.dim').show();
            }, 100);
        };
    });
    arr_close.on('click', function(e){
        e.preventDefault();
        setTimeout(function(){
            arr_popup.hide().removeClass('on');
            $('.dim').hide();
        }, 100);
    });
    arr_yes.on('click', function(e){
        e.preventDefault();
        setTimeout(function(){
            arr_popup.hide().removeClass('on');
            $('.dim').hide();
        }, 100);
    });
    $('.dim').on('click', function(e){
        if(arr_popup.hasClass('on')) {
            setTimeout(function(){
                arr_popup.hide().removeClass('on');
                $('.dim').hide();
            }, 100);
        };
    });
})