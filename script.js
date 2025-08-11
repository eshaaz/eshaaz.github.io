// Custom JavaScript for Eshaaz Website

// Global data object
let siteData = {};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    
    // Load data and initialize all functionality
    loadSiteData().then(() => {
        populateContent();
        initSmoothScrolling();
        initNavbarScrollEffect();
        initFormValidation();
        initAnimations();
        initLoadingAnimations();
        initProductCardInteractions();
        initSocialLinks();
    }).catch(error => {
        console.error('Error loading site data:', error);
        // Initialize with fallback content
        initSmoothScrolling();
        initNavbarScrollEffect();
        initFormValidation();
        initAnimations();
        initLoadingAnimations();
    });
    
});

// Load site data from JSON
async function loadSiteData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        siteData = await response.json();
        console.log('Site data loaded successfully:', siteData);
    } catch (error) {
        console.error('Failed to load site data:', error);
        throw error;
    }
}

// Populate content from JSON data
function populateContent() {
    // Helper function to get nested object property
    function getNestedProperty(obj, path) {
        return path.split('.').reduce((current, prop) => current && current[prop], obj);
    }
    
    // Helper function to set content
    function setContent(selector, content) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element.tagName.toLowerCase() === 'img') {
                element.src = content;
            } else if (element.tagName.toLowerCase() === 'title') {
                document.title = content;
                element.textContent = content;
            } else {
                element.textContent = content;
            }
        });
    }
    
    // Helper function to set href attributes
    function setHref(selector, href) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.href = href;
        });
    }
    
    // Populate simple content elements
    document.querySelectorAll('[data-content]').forEach(element => {
        const path = element.getAttribute('data-content');
        const content = getNestedProperty(siteData, path);
        if (content) {
            if (element.tagName.toLowerCase() === 'title') {
                document.title = content;
            }
            element.textContent = content;
        }
    });
    
    // Populate images
    document.querySelectorAll('[data-src]').forEach(element => {
        const path = element.getAttribute('data-src');
        const src = getNestedProperty(siteData, path);
        if (src) {
            element.src = src;
        }
    });
    
    // Populate image alt attributes
    document.querySelectorAll('[data-alt]').forEach(element => {
        const path = element.getAttribute('data-alt');
        const alt = getNestedProperty(siteData, path);
        if (alt) {
            element.alt = alt;
        }
    });
    
    // Populate href attributes
    document.querySelectorAll('[data-href]').forEach(element => {
        const path = element.getAttribute('data-href');
        const href = getNestedProperty(siteData, path);
        if (href) {
            element.href = href;
        }
    });
    
    // Populate about content array
    const aboutContainer = document.querySelector('[data-content-array="about.content"]');
    if (aboutContainer && siteData.about && siteData.about.content) {
        aboutContainer.innerHTML = '';
        siteData.about.content.forEach(paragraph => {
            const p = document.createElement('p');
            p.className = 'about-text';
            p.textContent = paragraph;
            aboutContainer.appendChild(p);
        });
    }
    
    // Populate navigation
    const navContainer = document.querySelector('[data-nav="site.navigation"]');
    if (navContainer && siteData.site && siteData.site.navigation) {
        navContainer.innerHTML = '';
        siteData.site.navigation.forEach(item => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            const a = document.createElement('a');
            a.className = 'nav-link';
            a.href = item.href;
            a.textContent = item.name;
            li.appendChild(a);
            navContainer.appendChild(li);
        });
    }
    
    // Populate products
    const productsContainer = document.querySelector('#products-container');
    if (productsContainer && siteData.collection && siteData.collection.products) {
        productsContainer.innerHTML = '';
        siteData.collection.products.forEach(product => {
            const productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
        });
    }
    
    // Populate features
    const featuresContainer = document.querySelector('#features-container');
    if (featuresContainer && siteData.features && siteData.features.items) {
        featuresContainer.innerHTML = '';
        siteData.features.items.forEach(feature => {
            const featureCard = createFeatureCard(feature);
            featuresContainer.appendChild(featureCard);
        });
    }
    
    // Populate social links
    const socialLinksContainer = document.querySelector('#social-links');
    if (socialLinksContainer && siteData.site && siteData.site.socialMedia) {
        socialLinksContainer.innerHTML = '';
        
        if (siteData.site.socialMedia.facebook) {
            const facebookLink = createSocialLink('facebook', siteData.site.socialMedia.facebook);
            socialLinksContainer.appendChild(facebookLink);
        }
        
        if (siteData.site.socialMedia.instagram) {
            const instagramLink = createSocialLink('instagram', siteData.site.socialMedia.instagram);
            socialLinksContainer.appendChild(instagramLink);
        }
    }
    
    // Populate footer links
    const footerLinksContainer = document.querySelector('#footer-links');
    if (footerLinksContainer && siteData.footer && siteData.footer.links) {
        footerLinksContainer.innerHTML = '';
        siteData.footer.links.forEach(link => {
            const a = document.createElement('a');
            a.className = 'footer-link';
            a.href = link.href;
            a.textContent = link.name;
            footerLinksContainer.appendChild(a);
        });
    }
}

// Create product card element
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3';
    
    const currency = siteData.currency || '৳';
    
    col.innerHTML = `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.alt}" class="img-fluid">
            </div>
            <div class="product-content">
                <h5 class="product-title">${product.name}</h5>
                <p class="product-price">${currency} ${product.price.toLocaleString()}</p>
                <a href="${product.link}" class="btn btn-outline-primary btn-sm">View on Facebook</a>
            </div>
        </div>
    `;
    
    return col;
}

// Create feature card element
function createFeatureCard(feature) {
    const col = document.createElement('div');
    col.className = 'col-md-4 text-center';
    
    col.innerHTML = `
        <div class="feature-card">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h5 class="feature-title">${feature.title}</h5>
            <p class="feature-text">${feature.description}</p>
        </div>
    `;
    
    return col;
}

// Create social link element
function createSocialLink(platform, href) {
    const a = document.createElement('a');
    a.href = href;
    a.className = `social-link ${platform}`;
    a.setAttribute('aria-label', platform.charAt(0).toUpperCase() + platform.slice(1));
    
    const icon = document.createElement('i');
    icon.className = `fab fa-${platform}${platform === 'facebook' ? '-f' : ''}`;
    
    a.appendChild(icon);
    return a;
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.custom-navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Form Validation and Submission
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitContactForm();
            }
        });
        
        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    validateField(this);
                }
            });
        });
    }
}

// Submit contact form to email service
async function submitContactForm() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('.btn-send');
    const originalButtonText = submitButton.textContent;
    
    // Get form data
    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    
    try {
        // Format the message with sender info and date
        const currentDate = new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
        
        const formattedMessage = `
CONTACT FORM SUBMISSION FROM ESHAAZ WEBSITE

Sender Information:
------------------
Name: ${formData.name}
Email: ${formData.email}
Submission Date: ${currentDate}

Message:
--------
${formData.message}

------------------
Note: This is an automated email from the Eshaaz website contact form. Please do not reply to this email address. Contact the sender directly at their provided email address.
        `.trim();
        
        // Prepare email data
        const emailData = {
            to: siteData.config?.emailService?.recipientEmail || 'niazsiraj07@gmail.com',
            subject: `CONTACT FORM submission by ${formData.email}`,
            message: formattedMessage,
            name: formData.name
        };
        
        // Get email service endpoint from config
        const emailEndpoint = siteData.config?.emailService?.endpoint || 'https://email-service-e5iq.onrender.com/api/v1/send-email';
        
        // Send email via API
        const response = await fetch(emailEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData)
        });
        
        if (response.ok) {
            showSuccessMessage('Thank you for contacting us! Your message has been sent successfully. We\'ll get back to you soon.');
            resetForm();
        } else {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(errorData.error || `Server error: ${response.status}`);
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showErrorMessage('Sorry, there was an error sending your message. Please try again later or contact us directly.');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remove previous validation classes
    field.classList.remove('is-valid', 'is-invalid');
    
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
    } else if (field.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    } else if (field.hasAttribute('minlength') && value.length > 0) {
        const minLength = parseInt(field.getAttribute('minlength'));
        isValid = value.length >= minLength;
    } else if (field.hasAttribute('maxlength') && value.length > 0) {
        const maxLength = parseInt(field.getAttribute('maxlength'));
        isValid = value.length <= maxLength;
    }
    
    // Add validation classes
    if (value !== '') {
        field.classList.add(isValid ? 'is-valid' : 'is-invalid');
    }
    
    // Update character count for textarea
    if (field.tagName.toLowerCase() === 'textarea') {
        updateCharacterCount(field);
    }
    
    return isValid;
}

// Update character count for textarea
function updateCharacterCount(textarea) {
    const maxLength = parseInt(textarea.getAttribute('maxlength')) || 1000;
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;
    
    let countElement = textarea.parentNode.querySelector('.char-count');
    if (!countElement) {
        countElement = document.createElement('small');
        countElement.className = 'form-text text-muted char-count';
        textarea.parentNode.appendChild(countElement);
    }
    
    countElement.textContent = `${currentLength}/${maxLength} characters`;
    
    if (remaining < 50) {
        countElement.style.color = '#dc3545';
    } else if (remaining < 100) {
        countElement.style.color = '#ffc107';
    } else {
        countElement.style.color = '#6c757d';
    }
}

// Validate entire form
function validateForm() {
    const form = document.getElementById('contactForm');
    const formInputs = form.querySelectorAll('input, textarea');
    let isFormValid = true;
    
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    return isFormValid;
}

// Show success message
function showSuccessMessage(customMessage = null) {
    const message = customMessage || 'Thank you for your message! We\'ll get back to you soon.';
    
    // Remove any existing alerts
    const existingAlerts = document.querySelectorAll('.form-alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3 form-alert';
    alertDiv.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.appendChild(alertDiv);
    
    // Auto-dismiss after 8 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 8000);
}

// Show error message
function showErrorMessage(customMessage = null) {
    const message = customMessage || 'There was an error processing your request. Please try again.';
    
    // Remove any existing alerts
    const existingAlerts = document.querySelectorAll('.form-alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create error alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger alert-dismissible fade show mt-3 form-alert';
    alertDiv.innerHTML = `
        <i class="fas fa-exclamation-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.appendChild(alertDiv);
    
    // Auto-dismiss after 10 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 10000);
}

// Reset form
function resetForm() {
    const form = document.getElementById('contactForm');
    form.reset();
    
    // Remove validation classes
    const formInputs = form.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
    });
}

// Initialize animations
function initAnimations() {
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Loading animations for sections
function initLoadingAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('loading');
        observer.observe(section);
    });
    
    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('loading');
        observer.observe(card);
    });
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('loading');
        observer.observe(card);
    });
}

// Utility function to add CSS animation styles
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .loading {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .loading.loaded {
            opacity: 1;
            transform: translateY(0);
        }
        
        .product-card.loading {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .feature-card.loading {
            animation: fadeInUp 0.6s ease forwards;
        }
    `;
    document.head.appendChild(style);
}

// Initialize animation styles
addAnimationStyles();

// Product card interactions
function initProductCardInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const button = card.querySelector('.btn');
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show a message that this would redirect to Facebook
            showFacebookRedirectMessage();
        });
    });
}

// Show Facebook redirect message
function showFacebookRedirectMessage() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        max-width: 400px;
        margin: 1rem;
    `;
    
    modalContent.innerHTML = `
        <i class="fab fa-facebook-f" style="font-size: 3rem; color: #1877f2; margin-bottom: 1rem;"></i>
        <h4 style="color: #94303d; margin-bottom: 1rem;">Visit Our Facebook Page</h4>
        <p>You'll be redirected to our Facebook page to view this product and place your order.</p>
        <button class="btn btn-primary" onclick="this.closest('.modal-backdrop').remove()">Close</button>
    `;
    
    modal.className = 'modal-backdrop';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Remove modal after 3 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 3000);
}

// Initialize product interactions after DOM is loaded
setTimeout(initProductCardInteractions, 500);

// Navbar active link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add scroll listener for active nav link
window.addEventListener('scroll', updateActiveNavLink);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(updateActiveNavLink, 10));

// Social media link interactions
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show message about social media
            const platform = this.classList.contains('facebook') ? 'Facebook' : 'Instagram';
            showSocialMediaMessage(platform);
        });
    });
}

function showSocialMediaMessage(platform) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #94303d;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    message.innerHTML = `
        <i class="fab fa-${platform.toLowerCase()} me-2"></i>
        Visit our ${platform} page to see more!
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => message.remove(), 300);
    }, 2000);
}

// Add slide animations
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
    }
`;
document.head.appendChild(slideStyle);

// Initialize social links
setTimeout(initSocialLinks, 500);

console.log('Eshaaz website loaded successfully! 🌟');
