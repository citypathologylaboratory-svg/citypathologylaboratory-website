// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu after clicking
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});

// Form Submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const testType = this.querySelector('select').value;
    
    // Simulate form submission
    alert(`Thank you ${name}! Your ${testType} inquiry has been received. We will contact you shortly at +91 94092 77144.`);
    this.reset();
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--background)';
        header.style.backdropFilter = 'none';
    }
});

// Test Search Functionality (Optional Enhancement)
function initTestSearch() {
    const testItems = document.querySelectorAll('.test-item');
    const searchInput = document.createElement('input');
    
    searchInput.placeholder = 'Search tests...';
    searchInput.className = 'test-search';
    searchInput.style.cssText = `
        width: 100%;
        padding: 1rem;
        margin-bottom: 2rem;
        border: 2px solid var(--border);
        border-radius: 8px;
        font-size: 1rem;
    `;
    
    const testsSection = document.querySelector('.tests .container');
    testsSection.insertBefore(searchInput, testsSection.firstChild.nextSibling);
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        testItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Initialize test search when page loads
document.addEventListener('DOMContentLoaded', initTestSearch);
