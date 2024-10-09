// logout.js

document.getElementById('logout').addEventListener('click', function () {
  // Clear the stored user role
  localStorage.removeItem('userRole');

  // Redirect to the login page
  window.location.href = 'login.html';
});
