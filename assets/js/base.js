$(document).ready(function (){
    // Links of Navbar Manager
    $('nav > ul > li:not(:has(> span))').mouseenter(function (){
        let width = $(this).width();
        let posX = $(this).position()['left'];
        $('#navbar-indicator').width(width);
        $('#navbar-indicator').css({'left': posX});
        $('nav > ul > li:not(:has(> span)) > div').stop();
        $('nav > ul > li:not(:has(> span)) > div').animate({'height': '0', 'opacity': 0}, 300);
        if ($(this).is(':has(> div)')){
            $('#backdrop-shadow').stop();
            $('#backdrop-shadow').removeClass('h-0');
            $('#backdrop-shadow').fadeIn(300);
            $(this).children('div').stop();
            $(this).children('div').animate({'height': '240px', 'opacity': 1}, 300);
        }else{
            $('#backdrop-shadow').stop();
            $('#backdrop-shadow').fadeOut(300);
            $('#backdrop-shadow').addClass('h-0');
        }
    });
    // Fix Changes Navbar
    $('nav').mouseleave(function (){ 
        $('#navbar-indicator').width(0);
        $('#backdrop-shadow').stop();
        $('#backdrop-shadow').fadeOut(300);
        $('#backdrop-shadow').addClass('h-0');
        $('nav > ul > li:not(:has(> span)) > div').stop();
        $('nav > ul > li:not(:has(> span)) > div').animate({'height': '0', 'opacity': 0}, 300);
    });
    // Mega Tab Menu
    $('nav > ul > li:not(:has(> span)) > div > div > ul > li').hover(function (){
        $(this).siblings().removeClass('bg-white dark:bg-slate-800 ps-2 text-primary !text-primary font-bold rounded-s-xl');
        $(this).addClass('bg-white dark:bg-slate-800 ps-2 text-primary !text-primary font-bold rounded-s-xl');
        let tabName = $(this).attr('--target');
        $(this).parent().siblings().children('ul').children('li:not(#'+tabName+')').animate({'height': 0}, 300);
        $(this).parent().siblings().children('ul').children('li#'+tabName).animate({'height': $(this).parent().siblings().css('height')}, 300);
    });
    // Return to Top
    $('#return').click(function (){
        window.scrollTo(0, 0);
    });
    // Window scroll =>
    let lastScrollTop = 0;
    $(window).scroll(function (){
        if ($(this).scrollTop() > lastScrollTop && !$('nav').hasClass('-translate-y-full')){
            $('nav').addClass('-translate-y-full');
        }else if($(this).scrollTop() < lastScrollTop && $('nav').hasClass('-translate-y-full')){
            $('nav').removeClass('-translate-y-full');
        }
        lastScrollTop = $(this).scrollTop();
    });
    // Mobile Navbar
    $('#mobile-nav-open, #mobile-nav-close').click(function (){
        $('#mobile-nav > div > ul > li > div:first-of-type > svg').removeClass('!-rotate-90 ltr:!rotate-90');
        $('#mobile-nav > div > ul > li > div:last-of-type').slideUp(300);
        $('#mobile-nav > div > ul > li > div:last-of-type > ul > li > div:first-of-type > svg').removeClass('!-rotate-90 ltr:!rotate-90');
        $('#mobile-nav > div > ul > li > div:last-of-type > ul > li > div:last-of-type').slideUp(300);
        $('#mobile-nav').slideToggle(300);
        $('#backdrop-shadow').toggleClass('h-0');
    });
    $('#backdrop-shadow').click(function (){
        if ($('#mobile-nav').height() == $(window).height()){
            $('#mobile-nav').slideToggle(300);
            $('#backdrop-shadow').toggleClass('h-0');
        }
    });
    // Step 1 Menu Mobile Navbar
    $('#mobile-nav > div > ul > li > div:first-of-type').click(function (){
        $(this).parent().siblings().children('div:first-of-type').children('svg').removeClass('!-rotate-90 ltr:!rotate-90');
        $(this).parent().siblings().has('div').children('div:last-of-type').slideUp(300);
        $(this).children('svg').toggleClass('!-rotate-90');
        $(this).siblings('div').slideToggle(300);
    });
    // Step 2 Menu Mobile Navbar
    $('#mobile-nav > div > ul > li > div:last-of-type > ul > li > div:first-of-type').click(function (){
        $(this).parent().siblings().children('div:first-of-type').children('svg').removeClass('!-rotate-90 ltr:!rotate-90');
        $(this).parent().siblings().has('div').children('div:last-of-type').slideUp(300);
        $(this).children('svg').toggleClass('!-rotate-90');
        $(this).siblings('div').slideToggle(300);
    });
    // Search Box Modal
    $('#search').on('input', function (){
        if ($(this).val() != ''){
            $('#search-modal').fadeIn(300);
        }else{
            $('#search-modal').fadeOut(300);
        }
    });
    // Dark / Light Mode Toggle Button
    $('#toggle-mode').click(function (){
        $('html').toggleClass('dark');
    });
});