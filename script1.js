let slides = [];

document.getElementById("addSlide").addEventListener("click", () => {
    const content = document.getElementById("slideContent").value;
    if (content) {
        slides.push(content);
        updatePreview();
        document.getElementById("slideContent").value = '';
    }
});

document.getElementById("saveCarousel").addEventListener("click", async () => {
    try {
        const response = await fetch('saveCarousel.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slides })
        });
        if (response.ok) {
            alert("Карусель збережено!");
        }
    } catch (error) {
        console.error("Помилка збереження:", error);
    }
});

function updatePreview() {
    const carousel = document.querySelector(".carousel");
    carousel.innerHTML = '';
    slides.forEach((slide, index) => {
        const div = document.createElement("div");
        div.textContent = `Слайд ${index + 1}: ${slide}`;
        carousel.appendChild(div);
    });
}
