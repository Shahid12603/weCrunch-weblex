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
  signupForm.style.display = "block";
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

// Function to switch to login form
function switchToLoginHandler() {
  document.getElementById("switchToLogin").onclick = function() {
    modalTitle.innerText = "Log In";
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    formSwitch.innerHTML = 'Don’t have an account? <a href="javascript:void(0);" id="switchToSignUp">Sign up</a>';
    switchToSignUpHandler();  // Attach event listener for switching back to sign up
  };
}

// Function to switch to sign up form
function switchToSignUpHandler() {
  document.getElementById("switchToSignUp").onclick = function() {
    modalTitle.innerText = "Sign In";
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    formSwitch.innerHTML = 'Already have an account? <a href="javascript:void(0);" id="switchToLogin">Log in</a>';
    switchToLoginHandler();  // Attach event listener for switching back to login
  };
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("signup-password");
    const eyeOpen = document.getElementById("eye-open");
    const eyeClosed = document.getElementById("eye-closed");

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

// Handle Sign Up form submission
signupForm.onsubmit = function(event) {
  event.preventDefault();
  const formData = {
    username: document.getElementById('signup-username').value,
    email: document.getElementById('signup-email').value,
    password: document.getElementById('signup-password').value,
  };
  console.log("Sign Up Data:", formData);
  alert("Sign up successful!");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

// Handle Login form submission
loginForm.onsubmit = function(event) {
  event.preventDefault();
  const formData = {
    email: document.getElementById('login-email').value,
    password: document.getElementById('login-password').value,
  };
  console.log("Login Data:", formData);
  alert("Login successful!");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};
