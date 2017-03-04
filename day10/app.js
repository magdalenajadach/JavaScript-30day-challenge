const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handleCheck(event) {
	// check if there is the shiht key down and that user is checking it
	let isBetween = false;
	if(event.shiftKey && this.checked) {
		// loop over every single checkbox
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				isBetween = !isBetween;
			}

			if (isBetween) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;
}

checkboxes.forEach(function(checkbox) {
	checkbox.addEventListener('click', handleCheck);
}); // click event listen for mouse click and keybooard as well

// arrowFuncion => checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
