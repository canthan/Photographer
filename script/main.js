$(document).ready(function() {

    var scrollPos = $(window).scrollTop();

    showImg("#image1");
    showImg("#image2");
    showImg("#image3");
    showImg("#image4");

    $("#image1Div").css("height","auto");
    $("#image2Div").css("height","auto");
    $("#image3Div").css("height","auto");
    $("#image4Div").css("height","auto");

   //=============================== SHOW CURRENT POSITION IN MENU ====================================
    $(document).scroll(function () {

        if ($(window).scrollTop() > scrollPos) {
        scrollPos = $(window).scrollTop();
        }

        showImg("#image1");
        showImg("#image2");
        showImg("#image3");
        showImg("#image4");
    });

    //=============================== HOVER OVER GALLERY ====================================
    $("#galleries").find("a").mouseenter(function () {
        $(this).children(".captionImg").css("display", "inline");
        $(this).children("img").css("background-color", "black");
    }).mouseleave(function () {
        $(this).children(".captionImg").css("display", "none");
        $(this).children("img").css("background-color", "white");
    });

});

//=============================== CHECK IF IS IN VIEW ====================================
function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//=============================== SHOW IMAGE WHEN IN VIEW ====================================
function showImg(imgId) {
    if (isScrolledIntoView(imgId) && $(imgId).css("visibility") === "hidden") {
        $(imgId).css("visibility", "visible");
    }
}

