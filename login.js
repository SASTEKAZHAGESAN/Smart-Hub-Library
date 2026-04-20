function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}
