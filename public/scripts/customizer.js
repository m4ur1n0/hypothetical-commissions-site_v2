// --- Initialize variables from localStorage or defaults ---

let fontSize = parseInt(localStorage.getItem('fontSize')) || 16;
let fontFamily = localStorage.getItem('fontFamily') || 'sans-serif';
let selectedTheme = localStorage.getItem('theme') || 'light';

const themes = {
    light: {
        '--bg-color': '#ffffff',
        '--text-color': '#000000',
        '--accent-color': 'rgba(184, 230, 248, 0.885)',
    },
    dark: {
        '--bg-color': '#121212',
        '--text-color': '#e0e0e0',
        '--accent-color': '#4444aa',
    },
    contrast: {
        '--bg-color': '#000000',
        '--text-color': '#ffff00',
        '--accent-color': '#00ff00',
    },
};



// get app;ied
function applyFontSize() {

    document.documentElement.style.setProperty('--dynamic-font-size', `${fontSize}px`);
}
function applyFontFamily() {
    document.body.style.fontFamily = fontFamily;
}


function applyTheme(themeName) {

    const theme = themes[themeName];

    if (!theme) return;
    Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
}

// apply on page load
applyFontSize();
applyFontFamily();
applyTheme(selectedTheme);




// font size++ button
const increaseFontBtn = document.getElementById('increase-font');

if (increaseFontBtn) {

    increaseFontBtn.addEventListener('click', () => {
        fontSize += 2; // idk i just feel like 1 is unnoticeable


        localStorage.setItem('fontSize', fontSize);
        applyFontSize();
    });
}

// font size-- button
const decreaseFontBtn = document.getElementById('decrease-font');
if (decreaseFontBtn) {

    decreaseFontBtn.addEventListener('click', () => {

        fontSize = Math.max(10, fontSize - 2);
        localStorage.setItem('fontSize', fontSize);
        applyFontSize();

    });
}

const fontSelect = document.getElementById('font-select');

if (fontSelect) {
    fontSelect.value = fontFamily; // init

    fontSelect.addEventListener('change', (e) => {
        fontFamily = e.target.value;
        localStorage.setItem('fontFamily', fontFamily);
        applyFontFamily();
    });
}

// themes
const themeSelect = document.getElementById('theme-select');


if (themeSelect) {
    themeSelect.value = selectedTheme; // Set initial value
    themeSelect.addEventListener('change', (e) => {
        selectedTheme = e.target.value;
        localStorage.setItem('theme', selectedTheme);
        applyTheme(selectedTheme);
    });
    }

// idk if this will work...
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoomed-image');
    });
});
