const profileImg = document.querySelector('img[alt="Cecilia Rice"]');
const mainHeading = document.querySelector('h1');
const navLinks = document.querySelectorAll('nav a');
const toggleBtn = document.getElementById('toggle-mode');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (profileImg) {
    profileImg.addEventListener('click', function() {
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

        if (document.body.classList.contains('low-exposure')) {
            toggleBtn.textContent = 'Switch to Normal Mode';
        } else {
            toggleBtn.textContent = 'Switch to Low Exposure';
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const nameValue = document.getElementById('user-name').value;
        const emailValue = document.getElementById('user-email').value;

        if (nameValue.trim() === "" || emailValue.trim() === "") {
            formStatus.textContent = "Please fill out all required fields.";
            formStatus.className = 'error-text'; 
        } else {
            formStatus.textContent = "Thank you, Cecilia will get back to you soon!";
            formStatus.className = 'success-text';
            contactForm.reset(); 
        }
    });
}
