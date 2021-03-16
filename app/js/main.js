$(function () {
    $(".tabs__wrapper .tab").on("click", function (event) {
        var id = $(this).attr("data-id");
        $(".tabs__wrapper").find(".tab-item").removeClass("active-tab").hide();
        $(".tabs__wrapper .tabs").find(".tab").removeClass("active");
        $(this).addClass("active");
        $("#" + id)
            .addClass("active-tab")
            .fadeIn();
        return false;
    });

    $(".about__item-slider").slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
    });

    $(".slider__home").slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        prevArrow:
            '<button><svg width="31" height="59" viewBox="0 0 31 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.7461 1L1 33.4185L29.7461 58.4923" stroke="#FF7A00" /></svg></button>',
        nextArrow:
            '<button class="next-arrow"><svg width="31" height="59" viewBox="0 0 31 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25387 58.4922L30 26.0736L1.25387 0.999928" stroke="#FF7A00"/></svg></button>',
    });
});
