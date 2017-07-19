var header = document.getElementById("header");
window.onscroll = function (e) {
    if((window.scrollY) > 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
}
var elScroll = ('.map-sticker-holder');
elScroll.onmouseover = function(event) {
  VSA_initScrollbars;
};