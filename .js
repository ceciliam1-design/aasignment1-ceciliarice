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
const toggleBtn = document.getElementById('toggle-mode');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// --- DARK MODE LOGIC ---
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Normal Mode';
    } else {
        toggleBtn.textContent = 'Switch to Low Exposure';
    }
});

contactForm.addEventListener('submit', (event) => {
    const nameValue = document.getElementById('user-name').value;
    const emailValue = document.getElementById('user-email').value;

    if (nameValue.trim() === "" || emailValue.trim() === "") {
    
        event.preventDefault();
        
        formStatus.textContent = "Please fill out all required fields.";
        formStatus.classList.add('error-text');
    } else {
    
        event.preventDefault(); 
        
        formStatus.textContent = "Thank you, Cecilia will get back to you soon!";
        formStatus.classList.remove('error-text');
        formStatus.classList.add('success-text');
        
        contactForm.reset(); 
    }
});
