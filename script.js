document.addEventListener("DOMContentLoaded", function () {
    //  Smooth Scrolling untuk Navigasi
    document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Tutup Navbar Otomatis setelah Klik (Mode Mobile)
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click(); 
            }
        });
    });

    //  Hover Effect untuk Kartu Proyek
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Validasi Formulir Kontak sebelum Dikirim
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();
            if (name === "" || email === "" || message === "") {
                alert("⚠️ Please fill in all fields before sending!");
                return;
            }
            if (!validateEmail(email)) {
                alert("⚠️ Please enter a valid email address!");
                return;
            }
            alert("✅ Message sent successfully!");
            this.reset(); 
        });
    }

    // Fungsi Validasi Email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
