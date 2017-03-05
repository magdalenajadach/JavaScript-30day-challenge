const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop; //returns the distance of the current element relative to the top of the offsetParent node

function fixNav() {
	if (window.scrollY >= topOfNav) { // returns the number of pixels that the document has already been scrolled vertically
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	} else {
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener('scroll', fixNav);