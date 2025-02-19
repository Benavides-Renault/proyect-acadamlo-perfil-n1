const languageToggle = document.getElementById('language-toggle');

function changeLanguage() {
	if (window.location.pathname.includes('ingles.html')) {
		languageToggle.checked = true;
	} else {
		languageToggle.checked = false;
	}

	languageToggle.addEventListener('change', () => {
		if (languageToggle.checked) {
			window.location.href = '../../html/ingles.html';
		} else {
			window.location.href = '../../../index.html';
		}
	});
}

export default changeLanguage;
