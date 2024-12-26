let currentSlide = 0;

async function loadCarousel() {
    try {
        const response = await fetch('getCarousel.php');
        const data = await response.json();
        if (data.slides) {
            const carousel = document.querySelector(".carousel");
            carousel.innerHTML = '';
            data.slides.forEach((slide, index) => {
                const div = document.createElement("div");
                div.textContent = slide;
                carousel.appendChild(div);
            });
        }
        updateCarousel();
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

function updateCarousel() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel div");
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll(".carousel div");
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}

// Завантаження каруселі при відкритті сторінки
loadCarousel();
