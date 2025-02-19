const languageToggle = document.getElementById('language-toggle');

function changeLanguage() {
	const isEnglish = window.location.pathname.includes(
		'/assets/html/ingles.html',
	);

	languageToggle.checked = isEnglish;

	languageToggle.addEventListener('change', () => {
		window.location.replace(
			languageToggle.checked ? '/assets/html/ingles.html' : '/index.html',
		);
	});
}

export default changeLanguage;
