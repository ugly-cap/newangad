document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const statusElement = document.getElementById('status');
    statusElement.textContent = "Sending...";

    const serviceID = 'service_5o17c2q'; // Replace with your EmailJS service ID
    const templateID = 'template_6tt6bac'; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            statusElement.textContent = "Message sent successfully!";
        }, (err) => {
            statusElement.textContent = "Failed to send message.";
            console.log(JSON.stringify(err)); // This will log the error details
        });
});