// Open the lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

let slideIndex = 1;
showSlides(slideIndex);

// Change slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Show current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
