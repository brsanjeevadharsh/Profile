// You can add JavaScript here for interactive elements.
// For example, you could add an event listener to the "Contact Me" button.
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // You can add functionality here, like scrolling to the contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// More JavaScript can be added as your website evolves.
