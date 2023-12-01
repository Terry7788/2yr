function checkPassword() {
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (password === "Cossy") {
        window.location.href = "homepage.html";  // Redirect to the main homepage
    } else {
        message.textContent = "Go Away, you aren't Cossy enough.";
        message.style.color = "red";
    }
}