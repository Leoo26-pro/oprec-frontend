document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("show-more");
    const buttonIcon = button.querySelector("img");
    const targetSection = document.getElementById("features-section");
    const hiddenItems = document.querySelectorAll(".hidden");

    button.addEventListener("click", function (e) {
        e.preventDefault();

        hiddenItems.forEach(function (item) {
            item.classList.toggle("active");
        });

        if (button.textContent.trim().includes("Show More")) {
            button.innerHTML =
                'Show Less <img src="assets/icons/Up-icon.svg" alt="" />';
        } else {
            button.innerHTML =
                'Show More <img src="assets/icons/down-icon.svg" alt="" />';
        }
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});
