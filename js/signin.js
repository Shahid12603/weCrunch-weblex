const modal = document.getElementById("authModal");
const btn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const switchToLogin = document.getElementById("switchToLogin");
const formSwitch = document.getElementById("formSwitch");

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const modalTitle = document.getElementById("modalTitle");

// Open the modal (default: Sign Up form) 
btn.onclick = function() {
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
document.getElementById('signupForm').onsubmit = function(event) {
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
    console.log("Sign Up Data:", formData);
    alert("Sign up successful!");

    // Clear form fields after successful sign-up
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-phone').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';

    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};

// Handle Login form submission
document.getElementById('loginForm').onsubmit = function(event) {
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
    console.log("Login Data:", formData);
    alert("Login successful!");

    // Clear form fields after successful login
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};

// Call the initialization function to set up the oninput event handlers
initFormValidation();


