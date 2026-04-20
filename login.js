function login() {
  let user = document.getElementById("name").value;
  let pass = document.getElementById("password").value;

  // 👇 You define your own login
  if (user === "karthika" && pass === "12345") {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid name or password");
  }
}
