// login.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Here you would typically send the username/password to the backend for validation
  // For now, let's assume login is successful and simulate role-based redirection

  if (username && password && role) {
      // Store the role in localStorage (or sessionStorage)
      localStorage.setItem('userRole', role);

      // Redirect based on the user's role
      if (role === 'admin') {
          window.location.href = 'admin.html';
      } else if (role === 'employee') {
          window.location.href = 'employee.html';
      } else if (role === 'reseller') {
          window.location.href = 'reseller.html';
      }
  } else {
      alert('Please enter valid credentials!');
  }
});
