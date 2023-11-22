const form = document.getElementById('signupForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Basic password strength validation
  if (password.length < 6) {
    alert('Password should be at least 6 characters long');
    return;
  }

  // Hide the form and show the confirmation
  form.style.display = 'none';
  confirmation.style.display = 'block';
});
