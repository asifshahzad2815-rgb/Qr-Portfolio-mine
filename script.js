/**
 * Asif Shahzad's Pizza - Promotional Website Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Data
    const faqData = {
        ordering: [
            { q: "How do I place an order?", a: "You can order via phone, our contact form, or upcoming online portal. Currently, call us or send a message for delivery." },
            { q: "What is the delivery time?", a: "Typically 30-45 mins. Free delivery for orders above $20." },
            { q: "Do you offer contactless delivery?", a: "Yes, we provide contactless drop-off on request." }
        ],
        pizza: [
            { q: "What makes Asif Shahzad's pizza special?", a: "Our sourdough crust, 48-hour fermentation, and premium imported tomatoes." },
            { q: "Do you have gluten-free crust?", a: "Absolutely! Gluten-free base is available (+$2)." },
            { q: "Are your ingredients organic?", a: "We source local organic vegetables and hormone-free meats." }
        ],
        promo: [
            { q: "Any ongoing promotions?", a: "Yes! Use code ASIF30 for 30% off on large pizzas. Limited time." },
            { q: "How can I get loyalty rewards?", a: "Sign up for our newsletter and get a free slice on your next order." },
            { q: "Family combo deals?", a: "Check our Market section — Family Combo only $24.99!" }
        ],
        all: [
            { q: "Where is Asif Shahzad located?", a: "Our main kitchen is at 123 Pizza Avenue, but we deliver citywide." },
            { q: "Do you cater for events?", a: "Yes! Corporate and private events — contact us for a quote." },
            { q: "Can I customize my pizza?", a: "Absolutely, build your own pizza with unlimited toppings." }
        ]
    };

    const faqContainer = document.getElementById('faqContainer');
    const categorySelect = document.getElementById('faqCategory');

    function renderFAQs(category) {
        if (!faqContainer) return;
        
        const items = faqData[category] || faqData.all;
        faqContainer.innerHTML = items.map(item => `
            <div class="faq-item">
                <h4>${item.q}</h4>
                <p>${item.a}</p>
            </div>
        `).join('');
    }

    // Initial render
    renderFAQs('all');

    // Category change listener
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            renderFAQs(e.target.value);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Logo click to scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
