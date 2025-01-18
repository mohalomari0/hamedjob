document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.education-card');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        },
        { threshold: 0.2 }
    );

cards.forEach((card) => observer.observe(card));Â });
// function navigateToLogin() {
// window.location.href = "index.html";
// }
// function navigateToPage() {
// window.location.href = "signup.html";
// }
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
if (window.scrollY > 300) {
scrollToTopBtn.style.display = "block";
} else {
scrollToTopBtn.style.display = "none";
}
};
scrollToTopBtn.onclick = function () {
window.scrollTo({
top: 0,
behavior: "smooth",
});
};