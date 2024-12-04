function check(event) {
    event.preventDefault();

    const correctUsername = "admin";
    const correctPassword = "123";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const feedback = document.getElementById("feedback");

    if (username === correctUsername && password === correctPassword) {
        feedback.style.color = "green";
        feedback.textContent = "Login successful!";
        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 1500);
    } else {
        feedback.style.color = "red";
        feedback.textContent = "Invalid username or password.";
    }
}