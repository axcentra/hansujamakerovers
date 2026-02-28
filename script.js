document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => revealOnScroll.observe(reveal));

    // 4. Lightbox for Gallery Images
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
        });
    });

    closeLightbox.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) lightbox.style.display = 'none';
    });

    // 5. About Section Auto Slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlides() {
        if (slides.length === 0) return;
        
        slides.forEach(slide => slide.classList.remove('active'));
        
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1; 
        
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3500); // Change image every 3.5 seconds
    }
    
    showSlides();

});