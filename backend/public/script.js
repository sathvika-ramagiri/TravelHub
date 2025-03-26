document.addEventListener('DOMContentLoaded', function () {
    const userRole = localStorage.getItem("userRole");

    // Restrict Navigation if Not Logged In
    document.addEventListener("click", function (e) {
        const clickedElement = e.target.closest("a"); // Get the clicked link
        if (clickedElement && !window.location.pathname.includes("login.html")) {
            const restrictedPages = ["deals.html", "services.html", "forums.html", "contact.html"];
            const targetHref = clickedElement.getAttribute("href");

            if (restrictedPages.some(page => targetHref.includes(page)) && !userRole) {
                e.preventDefault(); // Block navigation
                alert("Please login or sign up to access this page.");
                window.location.href = "login.html"; // Redirect to login
            }
        }
    });

    // Handle Login Button Click (Redirects on successful login)
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", async function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                const response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (data.success) {
                    localStorage.setItem("userRole", data.role); // Store user role
                    window.location.href = "home.html"; // Redirect to home page
                } else {
                    alert("Invalid credentials. Please try again.");
                }
            } catch (error) {
                console.error("Login error:", error);
                alert("An error occurred. Please try again later.");
            }
        });
    }

    // Handle Logout
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("userRole");
            window.location.href = "index.html"; // Redirect to landing page
        });
    }
});

    
    
    
    // Handle Logout Functionality
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("userRole"); // Clear stored role
            window.location.href = "login.html"; // Redirect to login page
        });
    }


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
