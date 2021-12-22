var nav = document.getElementById("nav");
var mobileMenu = document.getElementById("mobile-menu");

var headerHeight = nav.clientHeight;
mobileMenu.onclick = function () {
    var isClose = nav.clientHeight === headerHeight;
    console.log(isClose);
    if (isClose) {
        nav.style.height = "auto";
    } else {
        nav.style.height = null;
    }
};