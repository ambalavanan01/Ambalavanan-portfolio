
const toggle = document.querySelector('.menu-toggle');
const popup = document.querySelector('.popup-menu');

toggle.addEventListener('click', () => {
    popup.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !popup.contains(e.target)) {
        popup.classList.remove('active');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const skillCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            skillCardsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-card').forEach((card) => {
        skillCardsObserver.observe(card);
    });
});





const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const endpoint = "https://formspree.io/f/mrepwolr";

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    // Honeypot check
    if (form.company.value) return;

    let valid = true;

    [...form.elements].forEach(field => {
        if (field.required && !field.value.trim()) {
            field.classList.add("error");
            valid = false;
        } else {
            field.classList.remove("error");
        }
    });

    // Email sanity check
    const email = form.email.value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        form.email.classList.add("error");
        valid = false;
    }

    if (!valid) {
        status.textContent = "Please fix the highlighted fields.";
        status.classList.add("error");
        return;
    }

    const formData = new FormData(form);
    const button = form.querySelector("button");
    button.disabled = true;
    button.textContent = "Sending...";

    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: formData
        });

        if (res.ok) {
            status.textContent = "Message sent successfully. I’ll get back to you soon.";
            status.classList.add("success");
            form.reset();
        } else {
            throw new Error("Submission failed");
        }
    } catch {
        status.textContent = "Something went wrong. Please try again later.";
        status.classList.add("error");
    } finally {
        button.disabled = false;
        button.textContent = "Send Message";
    }
});
