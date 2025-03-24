// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Category filter for businesses section
    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // In a real application, this would filter the businesses
            // based on the selected category
            console.log('Category selected:', this.textContent);
        });
    });

    // Modal functionality for login/signup (placeholder)
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';

            // In a real app, this would open a login modal
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            window.location.href = 'register.html';

            // In a real app, this would open a signup modal
        });
    }

    // Deal view functionality (placeholder)
    const viewDealBtns = document.querySelectorAll('.view-deal-btn');

    viewDealBtns.forEach(button => {
        button.addEventListener('click', function() {
            const dealTitle = this.closest('.deal-card').querySelector('h3').textContent;
            alert(`You clicked on "${dealTitle}". In a real app, this would open the deal details.`);
        });
    });

    // Business contact functionality (placeholder)
    const contactBusinessBtns = document.querySelectorAll('.contact-business-btn');

    contactBusinessBtns.forEach(button => {
        button.addEventListener('click', function() {
            const businessName = this.closest('.business-card').querySelector('h3').textContent;
            alert(`You're contacting "${businessName}". In a real app, this would open a contact form or messaging interface.`);
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile navigation toggle (placeholder)
    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.classList.add('mobile-nav-toggle');
    mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';

    if (window.innerWidth < 992) {
        const header = document.querySelector('header .container');
        header.insertBefore(mobileNavToggle, header.firstChild);

        mobileNavToggle.addEventListener('click', function() {
            alert('Mobile navigation menu would toggle here');
            // In a real app, this would toggle the mobile navigation
        });
    }

    // Fake notification system (placeholder)
    setTimeout(() => {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-bell"></i>
                <p>New deals have been posted! <a href="deals.html">Check them out</a></p>
                <button class="close-notification"><i class="fas fa-times"></i></button>
            </div>
        `;

        document.body.appendChild(notification);

         setTimeout(() => {
            notification.remove();
        }, 5000);
    }, 2000);
});
