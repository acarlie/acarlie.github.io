$(document).ready(function(){
    $('#fade-wrapper').fadeIn(1000);

    var scrollMenuIds = $('a.nav-link[href]');

    $(document).scroll(function(){
        scrollMenuIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
   


});