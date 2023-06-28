
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form values
  const username = registerForm.elements['username'].value;
  const email = registerForm.elements['email'].value;
  const password = registerForm.elements['password'].value;

  // Create a user object
  const user = {
    username,
    email,
    password
  };

  // Store the user object in local storage
  localStorage.setItem(username, JSON.stringify(user));
  window.location.href = 'djs.html';

  // Display a success message
  alert('Registration successful!');
});

// Handle the login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form values
  const username = loginForm.elements['username'].value;
  const password = loginForm.elements['password'].value;

  // Retrieve the user object from local storage
  const user = JSON.parse(localStorage.getItem(username));

  // Check if the user exists and the password is correct
  if (user && user.password === password) {
    // Display a success message
    alert('Login successful!');
  } else {
    // Display an error message
    alert('Incorrect username or password!');
  }
});
