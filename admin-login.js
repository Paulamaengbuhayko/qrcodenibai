document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("Email entered:", email);
        console.log("Password entered:", password);

        if (email === "email" && password === "password") {
            alert("Login Successful!");
            window.location.href = "admin-dashboard.html"; 
        } else {
            alert("Invalid email or password!");
        }
    });
});
