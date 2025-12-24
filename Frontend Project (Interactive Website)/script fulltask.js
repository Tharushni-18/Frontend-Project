const colorBtn = document.getElementById('colorBtn');
const colors = ['#f4f4f4', '#d1e7dd', '#fff3cd', '#cfe2ff'];
let colorIndex = 0;

colorBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});
async function fetchPost() {
    const apiDisplay = document.getElementById('api-content');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        
        apiDisplay.innerHTML = `
            <h5 class="text-primary">${data.title}</h5>
            <p>${data.body.substring(0, 100)}...</p>
            <span class="badge bg-secondary">Source: JSONPlaceholder</span>
        `;
    } catch (error) {
        apiDisplay.innerHTML = "Error loading data.";
    }
}
fetchPost();
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const formSuccess = document.getElementById('formSuccess');
    nameError.textContent = "";
    emailError.textContent = "";
    formSuccess.textContent = "";
let isValid = true;
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        formSuccess.textContent = "Form submitted successfully! Check the console.";
        console.log("Form Data:", { name, email });
        userForm.reset();
    }
});