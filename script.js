// Typing Animation
const typingText = document.getElementById('typing');
const textArray = [
    "Web Developer",
    "App Developer",
    "Photographer",
    "UI/UX Designer",
    "Graphic Designer"
];
let arrayIndex = 0;
let charIndex = 0;

function typeText() {
    if(charIndex < textArray[arrayIndex].length) {
        typingText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if(charIndex > 0) {
        typingText.textContent = textArray[arrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('bi-moon');
    icon.classList.toggle('bi-sun');
});

// Search Functionality
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchBtn.addEventListener('click', () => {
    searchOverlay.style.display = 'block';
});

closeSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Typing Animation
document.addEventListener('DOMContentLoaded', typeText);