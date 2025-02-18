import parallax from './components/parallax.js';
import updateCurrentYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import changeLanguage from './components/language_switch.js';

loader();
resetToHome();
updateCurrentYear();
parallax();

document.addEventListener('DOMContentLoaded', () => {
	changeLanguage();
});
