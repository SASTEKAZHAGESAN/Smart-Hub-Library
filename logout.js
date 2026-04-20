// Logout function
function logout() {
    // Remove the logged-in user from localStorage
    localStorage.removeItem('currentUser');
    // Redirect to login page
    window.location.href = 'login.html';
}

// Auto logout after 2 seconds
setTimeout(logout, 2000);

// Logout immediately on button click
document.getElementById('logoutBtn').addEventListener('click', logout);
