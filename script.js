document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Modal / Lightbox functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('modalCaption');
    const closeBtn = document.getElementById('closeModal');
    const skeleton = document.getElementById('modalSkeleton');

    // Make openModal globally available
    window.openModal = function(imageSrc, caption) {
        modal.style.display = "block";
        captionText.innerHTML = caption;
        
        // Simulating image load since we don't have real images yet
        modalImg.style.display = "none";
        skeleton.style.display = "flex";
        skeleton.textContent = caption + " (Örnek Görsel Yüklenecek)";

        // If you had real images:
        // modalImg.src = imageSrc;
        // modalImg.onload = () => {
        //     skeleton.style.display = "none";
        //     modalImg.style.display = "block";
        // };
    };

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(209, 213, 219, 0.98)'; /* Koyu Metalik Gri */
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = 'rgba(229, 231, 235, 0.95)'; /* Açık Metalik Gri */
            navbar.style.boxShadow = 'none';
        }
    });

    // Active link highlighting during scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
});
