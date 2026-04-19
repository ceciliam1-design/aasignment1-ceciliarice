const profileImg = document.querySelector('img[alt="Cecilia Rice"]');
const mainHeading = document.querySelector('h1');
const navLinks = document.querySelectorAll('nav a');

profileImg.addEventListener('click', function() {
    profileImg.classList.toggle('image-highlight');
    
    mainHeading.textContent = "Thanks for visiting, I'm Cecilia!";
});

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('active-link');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('active-link');
    });
});
