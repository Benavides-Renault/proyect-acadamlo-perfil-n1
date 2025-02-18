const languageToggle = document.getElementById('language-toggle');

function changeLanguage() {
	if (window.location.pathname.includes('ingles.html')) {
		languageToggle.checked = true;
	} else {
		languageToggle.checked = false;
	}

	languageToggle.addEventListener('change', () => {
		if (languageToggle.checked) {
			window.location.href = '/portafolio/assets/html/ingles.html';
		} else {
			window.location.href = '/portafolio/index.html';
		}
	});
}

export default changeLanguage;
