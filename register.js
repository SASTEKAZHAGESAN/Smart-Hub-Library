document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if(users.some(u => u.email === email)){
        document.getElementById("message").textContent = "Email already registered!";
        return;
    }

    // Save new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can login now.");
    window.location.href = "login.html";
});
