const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	const suffix = this.dataset.sizing || ''; // check empty in case dataset is not set for color
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); //spacing and blur
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //base color