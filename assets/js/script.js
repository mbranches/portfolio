document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("close-menu").checked = false;
    });
});
