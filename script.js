document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login");
    const messageContainer = document.getElementById("message");
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        const formData = new FormData(loginForm); // Changed 'loginform' to 'loginForm'
        fetch("6A.php", {
            method: "POST", 
            body: formData
        })
        .then((response)=>{
            console.log("Response status:", response.status);
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data)=>{
            console.log("Data received:", data);
            if(data.success){
                showMessage("success", "Login successful!"); // Corrected spelling of 'successful'
            } else {
                showMessage("error", "Invalid username or password.");
            }
        })
        .catch((error)=>{
            console.error("Error:", error);
            showMessage("error", "An error occurred. Please try again later."); // Corrected spelling of 'occurred'
        });
    });
    function showMessage(type, text){
        messageContainer.innerHTML = `<div class="${type}">${text}</div>`; // Added backticks and fixed the template string syntax
    }
});
const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });