document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function showSuccessMessage() {
    const form = document.querySelector(".contact-form");
    const button = form.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Pesanan Telah Terkirim!";
    button.disabled = true;
    form.reset();

    setTimeout(function () {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}