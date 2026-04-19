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
const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Normal Mode';
    } else {
        toggleBtn.textContent = 'Switch to Low Exposure';
    }
});
