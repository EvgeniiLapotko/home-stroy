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
        speed: 300,
        arrows: false,
        fade: true,
    });

    $(".slider__home").slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        prevArrow:
            '<button><svg width="31" height="59" viewBox="0 0 31 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.7461 1L1 33.4185L29.7461 58.4923" stroke="#FF7A00" /></svg></button>',
        nextArrow:
            '<button class="next-arrow"><svg width="31" height="59" viewBox="0 0 31 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25387 58.4922L30 26.0736L1.25387 0.999928" stroke="#FF7A00"/></svg></button>',
    });

    const crovl = document.querySelector(".popup-crovl");
    const itemCrovl = document.querySelector(".works__item-crovl");
    const itemPl = document.querySelector(".works__item-pl");
    const itemkl = document.querySelector(".works__item-cl");
    const itemOt = document.querySelector(".works__item-ot");
    const itemSn = document.querySelector(".works__item-sn");
    const itemEl = document.querySelector(".works__item-el");
    const close = document.querySelector(".close");
    const burger = document.querySelector(".burger__menu");
    const menu = document.querySelector(".menu__list");

    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    itemPl.addEventListener("click", () => {
        crovl.classList.add("active");
    });
    itemkl.addEventListener("click", () => {
        crovl.classList.add("active");
    });
    itemOt.addEventListener("click", () => {
        crovl.classList.add("active");
    });
    itemCrovl.addEventListener("click", () => {
        crovl.classList.add("active");
    });
    itemSn.addEventListener("click", () => {
        crovl.classList.add("active");
    });
    itemEl.addEventListener("click", () => {
        crovl.classList.add("active");
    });
    close.addEventListener("click", () => crovl.classList.remove("active"));
});

$(function () {
    $(".wrapper-table .tabs-table__tab").on("click", function (event) {
        var id = $(this).attr("data-id");
        $(".wrapper-table")
            .find(".table-item")
            .removeClass("active-tab")
            .hide();
        $(".wrapper-table .tabs-table")
            .find(".tabs-table__tab")
            .removeClass("active");
        $(this).addClass("active");
        $("#" + id)
            .addClass("active-tab")
            .fadeIn();
        return false;
    });
});

// (function () {
//     const crovl = document.querySelector(".popup-crovl");
//     const itemCrovl = document.querySelector(".works__item-crovl");
//     itemCrovl.addEventListener("onclick", () => {
//         crovl.classList.add("active");
//         console.log(50);
//     });
//     console.log("ghfh");
// })();
