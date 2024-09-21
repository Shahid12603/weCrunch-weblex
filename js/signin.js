const modal = document.getElementById("signupModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close-wrapper")[0];

btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
}

span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
}

document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();
    // Add form submission logic here
    alert("Sign up successful!");
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    console.log(formData);
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}

