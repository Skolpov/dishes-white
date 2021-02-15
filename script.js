
// Scroll Header

window.onscroll = function() {myFunction()};

var header = document.querySelector(".header-scroll"); 
var tablet = document.querySelector('.scroll-tablet');
var mobile = document.querySelector('.scroll-mobile');

var headerWrap = document.querySelector('.header-wrap');
var sticky = header.offsetTop; 
var section = document.querySelector('.first-screen');

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("see");
		tablet.classList.add("see");
		mobile.classList.add("see");
	} else {
		header.classList.remove("see");
		tablet.classList.remove("see");
		mobile.classList.remove("see");
	}
};



// var mediaQuery = window.matchMedia("screen and (min-width: 768px)");
// mediaQuery.addListener(foo);
// foo(mediaQuery);

// function foo(mq) {
    
// }



// ==========