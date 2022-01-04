let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");

img1.addEventListener("mouseover", function (event) {
    event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic2.jpg)";
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic3.jpg)";
    }, 1000);
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic4.jpg)";
    }, 2000);
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic1.jpg)";
    }, 3000); 
}, false);

img1.addEventListener("mouseout", function (event) {
    event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic1.jpg)";
    /* event.target.style.pointerEvents = "none"; */
}, false);








img2.addEventListener("mouseover", function (event) {
    event.target.style.backgroundImage = "url(images/nagatoro-san-cap7-pic2.jpg)";
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/nagatoro-san-cap7-pic3.jpg)";
    }, 1000);
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/nagatoro-san-cap7-pic4.jpg)";
    }, 2000);
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/nagatoro-san-cap7-pic1.jpg)";
    }, 3000); 
}, false);

img2.addEventListener("mouseout", function (event) {
    event.target.style.backgroundImage = "url(images/nagatoro-san-cap7-pic1.jpg)";
    /* event.target.style.pointerEvents = "none"; */
}, false);




























/* 
    * CON FUNCIONES 
*/

/*
let HoverOn = function (event) {
    event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic2.jpg)";
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic3.jpg)";
    }, 1000);
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic4.jpg)";
    }, 2000);
    setTimeout(function () {
        event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic1.jpg)";
    }, 3000);
}


let HoverOff = function (event) {
    event.target.style.backgroundImage = "url(images/odd-taxi-cap12-pic1.jpg)";
}


img1.addEventListener("mouseover", function (event) {
    HoverOn(event)
}, false);

img1.addEventListener("mouseout", function (event) {
    HoverOff(event)
}, false);
*/



















