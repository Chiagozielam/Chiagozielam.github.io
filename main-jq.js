$(function(){
    $('.parallax').parallax() ;
});


$(function(){
    $('#about-me-link').click(function(){
        $('#job-description-content').addClass('hide').removeClass('show');
        $('#pricing-content').addClass('hide').removeClass('show');
        $('#contact-content').addClass('hide').removeClass('show');
        $('#about-me-content').addClass('show').removeClass('hide');
    });

    $('#job-description-link').click(function(){
        $('#about-me-content').addClass('hide').removeClass('show');
        $('#pricing-content').addClass('hide').removeClass('show');
        $('#contact-content').addClass('hide').removeClass('show');
        $('#job-description-content').addClass('show').removeClass('hide');
    });

    $('#pricing-link').click(function(){
        $('#about-me-content').addClass('hide').removeClass('show');
        $('#job-description-content').addClass('hide').removeClass('show');
        $('#contact-content').addClass('hide').removeClass('show');
        $('#pricing-content').addClass('show').removeClass('hide');
    });

    $('#contact-link').click(function(){
        $('#about-me-content').addClass('hide').removeClass('show');
        $('#job-description-content').addClass('hide').removeClass('show');
        $('#pricing-content').addClass('hide').removeClass('show');
        $('#contact-content').addClass('show').removeClass('hide');
    });

});

$(document).ready(function(){
    $( "a#nav-blog" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
$(document).ready(function(){
    $( "a#nav-social-media" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
$(document).ready(function(){
    $( "a#nav-about-me" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
$(document).ready(function(){
    $( "a#nav-projects" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
$(document).ready(function(){
    $( "a#hire-me-text" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        alert("Send me a mail. I'll respond to you shortly")
    });
});



$(function(){
    $('#submit-btn').click(function(){
        alert('This feature is currently down,please try contacting me through social media or call: 08136938836') ;
    }) ;
}) ;

$(function(){
    $('#hireMobile').click(function(){
        alert("Send me A mail. I'll respond to you shortly");
    });
});

