const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


const mobileServicesBtn = document.getElementById('mobile-services-btn');
const mobileServices = document.getElementById('mobile-services');
const mobileArrow = document.getElementById('mobile-arrow');

mobileServicesBtn.addEventListener('click', () => {
    mobileServices.classList.toggle('hidden');

    mobileArrow.classList.toggle('rotate-180');
});