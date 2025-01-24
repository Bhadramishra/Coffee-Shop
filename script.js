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
    // Show custom success message
    showAlert(`Thank you, ${name}! Your message has been received.`);

    // Clear form fields
    contactForm.reset();
    

} else {
    // Show custom error message
    showAlert("Please fill in all fields before submitting.");
}

// Function to show the custom alert
function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message; // Set the message
    alertBox.style.display = 'flex'; // Display the alert

    // Disable background scrolling when the alert is visible
    document.body.style.overflow = 'hidden';
}

 // Function to close the alert and redirect the user
 window.closeAlert = function() {
    console.log('Close button clicked');  // Debugging line
    const alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none'; // Hide the alert
    document.body.style.overflow = 'auto'; // Re-enable scrolling

}
    });
});
