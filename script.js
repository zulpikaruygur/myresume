document.addEventListener("DOMContentLoaded", function () {
    // Toggle Active Class on Navbar Links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Edit Button Alert
    const editButton = document.querySelector(".edit-btn");
    if (editButton) {
        editButton.addEventListener("click", function () {
            alert("Edit Resume functionality coming soon!");
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
