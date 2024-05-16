// signup.js
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        const validationResult = validateForm(username, email, password, confirmPassword);
        if (validationResult.isValid) {
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            errorMessage.style.display = 'none';
            alert('Your information has been stored');
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            // Redirect to profile page or handle the sign-up process here
        } else {
            errorMessage.textContent = validationResult.message;
            errorMessage.style.display = 'block';
        }
    });

    function validateForm(username, email, password, confirmPassword) {
        if (username.length < 6) {
            return { isValid: false, message: 'Username must be at least 6 characters long.' };
        }
        if (!validateEmail(email)) {
            return { isValid: false, message: 'Please enter a valid email address.' };
        }
        if (password.length < 8) {
            return { isValid: false, message: 'Password must be at least 8 characters long.' };
        }
        if (!/[A-Z]/.test(password)) {
            return { isValid: false, message: 'Password must contain at least one uppercase letter.' };
        }
        if (password !== confirmPassword) {
            return { isValid: false, message: 'Passwords do not match.' };
        }
        return { isValid: true, message: '' };
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
