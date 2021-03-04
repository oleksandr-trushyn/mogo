$(function(){
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffdet = $(window).scrollTop();

    checkScroll(scrollOffdet);

    $(window).on("scroll", function () {
        scrollOffdet = $(this).scrollTop();

        checkScroll(scrollOffdet)
    });
    
    
    function checkScroll(scrollOffdet) {

        if(scrollOffdet >= introH) {
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }
    }
    
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('data-collapse');

        $this.toggleClass("active");
    });



    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    
});