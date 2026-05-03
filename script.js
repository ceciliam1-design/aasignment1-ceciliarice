const profileImg = document.querySelector('img[alt="Cecilia Rice"]');
const mainHeading = document.querySelector('h1');
const navLinks = document.querySelectorAll('nav a');
const toggleBtn = document.getElementById('toggle-mode');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (profileImg) {
    profileImg.addEventListener('click', () => {
        profileImg.classList.toggle('image-highlight');
        if (mainHeading) {
            mainHeading.textContent = "Thanks for visiting, I'm Cecilia!";
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => link.classList.add('active-link'));
    link.addEventListener('mouseleave', () => link.classList.remove('active-link'));
});

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('low-exposure');
        const isLow = document.body.classList.contains('low-exposure');
        toggleBtn.textContent = isLow ? 'Switch to Normal Mode' : 'Switch to Low Exposure';
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;

        if (!name.trim() || !email.trim()) {
            formStatus.textContent = "Please fill out all fields.";
            formStatus.className = 'error-text';
        } else {
            formStatus.textContent = "Thank you! Cecilia will reply soon.";
            formStatus.className = 'success-text';
            contactForm.reset();
        }
    });
}
