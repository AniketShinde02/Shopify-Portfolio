// Header Blur & Shrink Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-2', 'shadow-sm');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.add('py-4');
        navbar.classList.remove('py-2', 'shadow-sm');
    }
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Lock Body Scroll
        // Small delay to allow display:flex to apply before opacity transition
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenu.classList.add('flex');
        }, 10);
    });

    const closeMenu = () => {
        mobileMenu.classList.add('opacity-0');
        document.body.style.overflow = ''; // Unlock Body Scroll
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }, 300);
    };

    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// LENIS SMOOTH SCROLL SETUP (Buttery Smooth Refined)
let lenis;
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        lerp: 0.1, // Faster response for better feel on lower-end hardware
        duration: 1.2, // Standard premium duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: true, // Enable for mobile consistency
        touchMultiplier: 1.5,
        infinite: false,
    });


    // Request Animation Frame for Lenis
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Efficient Image Hardware Acceleration Trigger
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.willChange = 'transform';
                entry.target.style.transform = 'translateZ(0)';
            } else {
                entry.target.style.willChange = 'auto';
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
} else {
    console.warn('Lenis script not loaded. Falling back to native scroll.');
}



// TEXT REVEAL ANIMATION (Synchronized Heading/Subtext)
const textRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            textRevealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.reveal-text').forEach(el => textRevealObserver.observe(el));

// LEGACY REVEAL (Keep for existing content compatibility)
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-zoom').forEach(el => observer.observe(el));

// SIMPLE PARALLAX ON SCROLL (Hero Blob & Images) - Optimized with RAF
if (lenis) {
    let ticking = false;
    lenis.on('scroll', ({ scroll }) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const parallaxBg = document.querySelector('.parallax-bg');
                if (parallaxBg) {
                    parallaxBg.style.transform = `translate3d(0, ${scroll * 0.1}px, 0)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}


// FAQ Accordion Logic
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close others
        document.querySelectorAll('.faq-item').forEach(other => {
            other.classList.remove('active');
        });

        // Toggle current
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// AJAX Contact Form Submission
const contactForm = document.getElementById('portfolio-contact-form');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Button Loading State
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span> <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>`;
        lucide.createIcons();

        const formData = new FormData(contactForm);

        try {
            // Securely Fetch Config (Runtime)
            const configResponse = await fetch('assets/config.json');
            if (!configResponse.ok) throw new Error('Failed to load configuration');

            const config = await configResponse.json();
            const accessKey = config.WEB3FORMS_ACCESS_KEY;

            if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
                throw new Error("Missing or Invalid Web3Forms Access Key!");
            }

            // Append Access Key to FormData
            formData.append("access_key", accessKey);

            // Using Web3Forms (Production Grade & Reliable)
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // Show Success UI
                successMsg.classList.remove('hidden');
                contactForm.reset();
                if (charCount) charCount.textContent = '0 / 1000';

                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            } else {
                console.error("Form Error:", result);
                throw new Error(result.message || 'Submission failed');
            }

        } catch (error) {
            alert("Oops! " + error.message);
        } finally {
            // Restore Button UI
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            lucide.createIcons();
        }
    });
}

// Character Counter for Message
const messageInput = document.getElementById('message-input');
const charCount = document.getElementById('char-count');

if (messageInput && charCount) {
    messageInput.addEventListener('input', () => {
        const length = messageInput.value.length;
        charCount.textContent = `${length} / 1000`;

        if (length >= 900) {
            charCount.classList.add('text-lime');
            charCount.classList.remove('text-gray-400');
        } else {
            charCount.classList.remove('text-lime');
            charCount.classList.add('text-gray-400');
        }
    });
}

// Custom Cursor Logic (Premium Interaction) - Optimized with RAF
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
    let cursorX = 0, cursorY = 0;
    let ticking = false;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
                ticking = false;
            });
            ticking = true;
        }
    });


    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(2.5)';
            cursor.style.backgroundColor = 'rgba(198, 245, 70, 0.3)';
            cursor.style.borderColor = 'var(--lime)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(2.5)', '');
            cursor.style.backgroundColor = '';
            cursor.style.borderColor = '';
        });
    });
}

