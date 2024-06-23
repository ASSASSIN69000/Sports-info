document.addEventListener("DOMContentLoaded", function() {
    var emailLink = document.getElementById("emailLink");

    // Add a click event listener to the email link
    emailLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of opening the link

        // Replace the dummy email address with the actual email address
        var emailAddress = "info@example.com";

        // Create a mailto link with the email address
        var mailtoLink = "mailto:" + encodeURIComponent(emailAddress);

        // Open the user's default email client
        window.location.href = mailtoLink;
    });
});
