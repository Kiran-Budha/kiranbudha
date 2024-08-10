
// document.getElementById("contact-form").addEventListener("send", function(event) {
//      event.preventDefault();
    


//     alert("");
// // }
//     // Prevent the default form submission

//     // Get form data
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     // Create email parameters
//     const templateParams = {
//         from_name: name,
//         from_email: email,
//         message: message
//     };

//     // Send email using EmailJS
//     emailjs.send("budha_98", "template_64qq7bu", templateParams)
//         .then(function(response) {
//             console.log("Email sent successfully", response);
//             document.getElementById("response-message").innerHTML = '<p>Email sent successfully!</p>';
//         }, function(error) {
//             console.error("Error sending email", error);
//             document.getElementById("response-message").innerHTML = '<p>There was an error sending the email.</p>';
//         });
// });





function sendMail(){
var params = {
    name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     message: document.getElementById("message").value,
 };
    const serviceID = "budha_98";
    const templateID = "template_1dddtnm";
    emailjs
     .send(serviceID, templateID, params)
     .then((res) => {
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
         document.getElementById("message").value = "";
         console.log(res);
    alert("Your message sent successfully/nThank you for your message!/nI will get back to you soon.");
    
    })
    
    .catch((err) => console.log(err));
}
