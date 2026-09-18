const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const button = document.querySelector('#copy-email');
const message = document.querySelector('#copy-message');

if (button) {
	button.addEventListener('click', function () {
		if (navigator.clipboard) {
			navigator.clipboard.writeText('info@frisenschoon.nl');
			button.classList.add('copied');
			button.textContent = 'Gekopieerd';
			message.textContent = ' ✓';
		}
	});
}

const page = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(function (link) {
	if (link.getAttribute('href') === page) {
		link.classList.add('active');
	}
});
