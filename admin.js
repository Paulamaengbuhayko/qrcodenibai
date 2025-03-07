// Handle form submission
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent page reload on form submit

    const feedbackMessage = document.getElementById("feedbackInput").value.trim();
    const thankYouMessage = document.getElementById("thankYouMessage");
    const submitButton = document.getElementById("submitButton");

    // If feedback is empty, alert the user
    if (!feedbackMessage) {
        alert("Please enter your feedback before submitting.");
        return;
    }

    // Here you can handle the form data, for now, we just simulate feedback submission
    // (e.g., sending it to a server via AJAX or Fetch API)
    console.log("Feedback submitted:", feedbackMessage);

    // Hide the submit button and show the thank you message
    submitButton.style.display = "none";
    thankYouMessage.style.display = "block";

    // Optionally, reset the form fields
    document.getElementById("feedbackInput").value = "";
    document.getElementById("feedbackInput").style.display = "none";
});

// Handle select option for feedback or admin login
function handleSelection() {
    const feedbackType = document.getElementById("feedback").value;
    const feedbackInput = document.getElementById("feedbackInput");
    const submitButton = document.getElementById("submitButton");
    const label = document.getElementById("feedbackLabel");

    if (feedbackType === "feedback") {
        feedbackInput.style.display = "block";
        submitButton.style.display = "block";
        label.style.display = "none";
    } else if (feedbackType === "admin") {
        window.location.href = "admin-login.html";
    }
}
