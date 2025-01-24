// JavaScript for Online Coffee Shop

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);

            // Clear form fields
            contactForm.reset();
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});

