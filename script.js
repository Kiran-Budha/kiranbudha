// Initialize EmailJS
emailjs.init("budha_98");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send("budha_98", "template_64qq7bu", templateParams)
        .then(function(response) {
            console.log("Email sent successfully", response);
            document.getElementById("response-message").innerHTML = '<p>Email sent successfully!</p>';
        }, function(error) {
            console.error("Error sending email", error);
            document.getElementById("response-message").innerHTML = '<p>There was an error sending the email.</p>';
        });
});
