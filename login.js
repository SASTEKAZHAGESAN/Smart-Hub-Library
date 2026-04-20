function login() {
  let user = document.getElementById("name").value;
  let pass = document.getElementById("password").value;

  // 👇 Multiple users (you can add more)
  let users = [
    { name: "karthika", password: "12345" },
    { name: "ravi", password: "11111" },
    { name: "kumar", password: "22222" }
  ];

  // Check user
  let validUser = users.find(u => u.name === user && u.password === pass);

  if (validUser) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid name or password");
  }
}
