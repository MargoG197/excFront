$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    }); 

    $('.reviews-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        appendArrows: $('.reviews-arrows'),
        prevArrow: '<button id="prev" type="button" class="btn"><img src="img/reviews/prev.png"></button>',
        nextArrow: '<button id="next" type="button" class="btn"><img src="img/reviews/next.png"></button>'
    }); 
});


