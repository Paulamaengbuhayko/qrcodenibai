import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const feedbackRef = ref(db, 'reports');

const tableBody = document.getElementById("feedbackList");

onValue(feedbackRef, (snapshot) => {
    tableBody.innerHTML = ''; // Clear old data
    const data = snapshot.val();

    if (data) {
        Object.keys(data).reverse().forEach((key) => {
            const feedback = data[key];
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>Anonymous</td>
                <td>${feedback.message || "No message"}</td>
                <td>${feedback.serviceRating || "No rating"}</td>
                <td>${feedback.staffRating || "No rating"}</td>
                <td>${feedback.foodRating || "No rating"}</td>
                <td>${new Date(feedback.timestamp).toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="6">No feedback yet.</td>`;
        tableBody.appendChild(row);
    }
});
