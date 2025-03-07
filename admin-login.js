document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // ✅ Debugging: Log values to check
        console.log("Email entered:", email);
        console.log("Password entered:", password);

        // ✅ Check credentials
        if (email === "email" && password === "password") {
            alert("Login Successful!");
            window.location.href = "admin-dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid email or password!");
        }
    });
});
