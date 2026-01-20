// Fade Text Animation
document.addEventListener('DOMContentLoaded', function() {
    const fadeElement = document.querySelector('.fade-text');
    if (!fadeElement) return;

    // Get current language
    const getCurrentLang = () => localStorage.getItem('language') || 'es';

    // Words for each language
    const words = {
        es: ['Fran Mayer', 'QA engineer', 'problem solver', 'tech enthusiast'],
        en: ['Fran Mayer', 'QA engineer', 'problem solver', 'tech enthusiast']
    };

    let currentIndex = 0;

    function fadeToNextWord() {
        const lang = getCurrentLang();
        const currentWords = words[lang];

        // Fade out
        fadeElement.classList.add('fade-out');
        fadeElement.classList.remove('fade-in');

        setTimeout(() => {
            // Change word
            currentIndex = (currentIndex + 1) % currentWords.length;
            fadeElement.textContent = currentWords[currentIndex];

            // Fade in
            fadeElement.classList.remove('fade-out');
            fadeElement.classList.add('fade-in');
        }, 500); // Wait for fade out to complete
    }

    // Change word every 3 seconds
    setInterval(fadeToNextWord, 3000);
});

