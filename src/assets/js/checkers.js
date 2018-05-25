function getHeight() {
    var height = $(window).height() - $('#non-classes').height()-20;

    console.log(height);
    $(".course-container").css({
        'height' : height
    });
}

window.onload = function (){
    getHeight();
};