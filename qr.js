import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzD92dVMPEaaE59KWqMRiy8dWW7XZYGjw",
  authDomain: "report-sytem.firebaseapp.com",
  databaseURL: "https://report-sytem-default-rtdb.firebaseio.com",
  projectId: "report-sytem",
  storageBucket: "report-sytem.appspot.com",
  messagingSenderId: "919657661419",
  appId: "1:919657661419:web:8b8c1dde57e52fc656cfae",
  measurementId: "G-KJQDWVK216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// DOM references
const form = document.getElementById("feedbackForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const newFeedbackButton = document.getElementById("newFeedbackButton");
const welcomeMessage = document.querySelector(".welcome-message");
const websiteTitle = document.querySelector("h1");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.getElementById("feedbackInput").value;
  const serviceRating = document.getElementById("serviceRating").value;
  const staffRating = document.getElementById("staffRating").value;
  const foodRating = document.getElementById("foodRating").value;

  if (message.trim() === "") {
    alert("Please enter your feedback.");
    return;
  }

  const feedbackRef = ref(database, 'reports/');
  const newFeedbackRef = push(feedbackRef);

  set(newFeedbackRef, {
    message: message,
    serviceRating: serviceRating,
    staffRating: staffRating,
    foodRating: foodRating,
    timestamp: new Date().toISOString()
  }).then(() => {
    // Hide form and welcome message
    form.querySelectorAll("fieldset, textarea, button, select, label").forEach(el => {
      el.style.display = "none";
    });

    welcomeMessage.style.display = "none";
    thankYouMessage.style.display = "block";
    thankYouMessage.style.fontSize = "2em";
    thankYouMessage.style.textAlign = "center";

    newFeedbackButton.style.display = "inline-block";
  }).catch((error) => {
    console.error("Error saving feedback:", error);
    alert("There was an error submitting your feedback.");
  });
});

// Handle "Submit Another Feedback" button
newFeedbackButton.addEventListener("click", () => {
  form.reset();

  // Show form inputs again
  form.querySelectorAll("fieldset, textarea, button, select, label").forEach(el => {
    el.style.display = "";
  });

  welcomeMessage.style.display = "block";
  thankYouMessage.style.display = "none";
  newFeedbackButton.style.display = "none";
});
