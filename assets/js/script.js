// when site loads, play the animation
document.addEventListener('DOMContentLoaded', function () {
	const logo = document.querySelector('.logo-img');
	const title = document.querySelector('.chakra');

	// logo fades in
	logo.style.animationDelay = '0.5s';

	// split the title text into individual letters
	title.innerHTML = title.textContent
		.split('')
		.map((letter, index) => {
			return `<span class="letter" style="animation-delay: ${
				index * 0.1 + 1
			}s">${letter}</span>`;
		})
		.join('');
});
