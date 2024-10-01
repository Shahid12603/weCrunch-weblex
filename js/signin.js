const modal = document.getElementById("authModal");
const btn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const switchToLogin = document.getElementById("switchToLogin");
const formSwitch = document.getElementById("formSwitch");

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const modalTitle = document.getElementById("modalTitle");

var notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'center',
    y: 'top'
  },
  dismissible: false,
  behaviour: 'With ripple'
});

// Function to update the login/logout button and class based on the user's login state
function updateLoginButton(username) {
  const userDropdown = document.getElementById('userDropdown');
  
  if (username) {
    // If the user is logged in, show the username with a new class and the logout button
    btn.innerHTML = username;
    btn.classList.remove('order_online');
    btn.classList.add('user_logged_in'); // You can define this class in your CSS
    btn.onclick = toggleDropdown; // Toggle the dropdown when username is clicked

    // Display the dropdown with "Logout" link when clicking the username
    document.getElementById('logoutLink').onclick = handleLogout; // Handle logout when clicked

  } else {
    // If no user is logged in, revert to the login/signup text and class
    btn.innerHTML = 'Sign In';
    btn.classList.remove('user_logged_in');
    btn.classList.add('order_online');
    btn.onclick = openAuthModal; // Attach the function to open the login modal

    // Hide the logout button
    userDropdown.style.display = 'none';
  }
}

// Toggle the visibility of the dropdown menu
function toggleDropdown() {
  const userDropdown = document.getElementById('userDropdown');
  userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
}

function handleLogout() {
  // Clear the token and username from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  
  // Show a success message (optional)
  notyf.success('You have been logged out successfully.');

  // Update the button to show "Login / Sign In" and remove the logout button
  updateLoginButton(null);

  // Optionally refresh the page or redirect the user
  // location.reload();
}

// Open the modal (default: Sign Up form) 
function openAuthModal() {
  modal.style.display = "block";
  modalTitle.innerText = "Sign In";
  signupForm.style.display = "flex";
  signupForm.style.flexDirection = "column";
  signupForm.style.gap = "10px";
  loginForm.style.display = "none";
  formSwitch.innerHTML = 'Already have an account? <a href="javascript:void(0);" id="switchToLogin">Log in</a>';
  document.body.classList.add("modal-open");
  switchToLoginHandler();  // Attach event listener for switching to login
}

// Close the modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

// Function to switch to sign up form
function switchToSignUpHandler() {
  document.getElementById("switchToSignUp").onclick = function() {
    modalTitle.innerText = "Sign In";
    signupForm.style.display = "flex";
    signupForm.style.flexDirection = "column";
    signupForm.style.gap = "10px";
    loginForm.style.display = "none";
    formSwitch.innerHTML = 'Already have an account? <a href="javascript:void(0);" id="switchToLogin">Log in</a>';
    switchToLoginHandler();  // Attach event listener for switching back to login
  };
}

// Function to switch to login form
function switchToLoginHandler() {
  document.getElementById("switchToLogin").onclick = function() {
    modalTitle.innerText = "Log In";
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
    loginForm.style.flexDirection = "column";
    loginForm.style.gap = "10px";
    formSwitch.innerHTML = 'Don’t have an account? <a href="javascript:void(0);" id="switchToSignUp">Sign up</a>';
    switchToSignUpHandler();  // Attach event listener for switching back to sign up
  };
}

function togglePasswordVisibility(passwordInputId, eyeOpenId, eyeClosedId) {
  const passwordInput = document.getElementById(passwordInputId);
  const eyeOpen = document.getElementById(eyeOpenId);
  const eyeClosed = document.getElementById(eyeClosedId);

  // Toggle password visibility
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeOpen.style.display = "none";
      eyeClosed.style.display = "inline";
  } else {
      passwordInput.type = "password";
      eyeOpen.style.display = "inline";
      eyeClosed.style.display = "none";
  }
}

// Utility function for validation
function validateInput(inputId, errorMessageId, errorMessage) {
  const input = document.getElementById(inputId);
  const errorMessageElement = document.getElementById(errorMessageId);

  // Check if the input is empty
  if (!input.value.trim()) {
    input.classList.add('error');
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.style.display = 'block';  // Show the error message
    return false;
  } else {
    input.classList.remove('error');
    errorMessageElement.textContent = '';
    errorMessageElement.style.display = 'none';  // Hide the error message
    return true;
  }
}

// Remove red border and error message as the user starts typing
function removeErrorOnInput(inputId, errorMessageId) {
  const input = document.getElementById(inputId);
  const errorMessageElement = document.getElementById(errorMessageId);

  input.addEventListener('input', function () {
    if (input.value.trim()) {
      input.classList.remove('error');
      errorMessageElement.style.display = 'none';  // Hide error message
    }
  });
}

// Initialize the oninput behavior for each form field
function initFormValidation() {
  removeErrorOnInput('signup-username', 'signup-username-error');
  removeErrorOnInput('signup-email', 'signup-email-error');
  removeErrorOnInput('signup-password', 'signup-password-error');
  removeErrorOnInput('signup-phone', 'signup-phone-error');
  removeErrorOnInput('login-email', 'login-email-error');
  removeErrorOnInput('login-password', 'login-password-error');
}

// Handle Sign Up form submission
document.getElementById('signupForm').onsubmit = async function(event) {
  event.preventDefault();

  // Validate each input field
  const isUsernameValid = validateInput('signup-username', 'signup-username-error', 'Please enter your username.');
  const isEmailValid = validateInput('signup-email', 'signup-email-error', 'Please enter a valid email.');
  const isPhoneValid = validateInput('signup-phone', 'signup-phone-error', 'Please enter your phone number.');
  const isPasswordValid = validateInput('signup-password', 'signup-password-error', 'Please enter your password.');

  // Only submit if all validations pass
  if (isUsernameValid && isEmailValid && isPasswordValid && isPhoneValid) {
    const formData = {
      username: document.getElementById('signup-username').value,
      phone: document.getElementById('signup-phone').value,
      email: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Sign Up Data:", data);

        // Store the token and username in local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);

        // Update the login button with the username
        updateLoginButton(data.username);

        //toaster
        notyf.success('Signup Successful!');
        
        // Clear form fields after successful sign-up
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-phone').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';

        // Close the modal
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      } else {
        //toaster
        notyf.error(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      notyf.error('An unexpected error occurred, Please try again!');
    }
  }
};

// On page load, check if the user is logged in and update the button
window.addEventListener('load', function () {
  const username = localStorage.getItem('username');
  updateLoginButton(username); // Update the button with the username or "Login / Sign In"
});

// Handle Login form submission
document.getElementById('loginForm').onsubmit = async function(event) {
  event.preventDefault();

  // Validate each input field
  const isEmailValid = validateInput('login-email', 'login-email-error', 'Please enter a valid email.');
  const isPasswordValid = validateInput('login-password', 'login-password-error', 'Please enter your password.');

  // Only submit if all validations pass
  if (isEmailValid && isPasswordValid) {
    const formData = {
      email: document.getElementById('login-email').value,
      password: document.getElementById('login-password').value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login Data:", data);

        //to store the token in local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);

        // Update the login button text to the username
        updateLoginButton(data.username);

        //toaster
        notyf.success('Login Successful!');

        // Clear form fields after successful login
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        
        // Close the modal
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      } else {
        notyf.error(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      notyf.error('An unexpected error occurred, Please try again!');
    }
  }
};

// Check for user session on page reload
window.addEventListener('load', function () {
  const username = localStorage.getItem('username');
  console.log(username);
  if (username) {
    updateLoginButton(username); // Change the button text to the username if the user is logged in
  }
});

// Call the initialization function to set up the oninput event handlers
initFormValidation();


