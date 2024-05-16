// login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            errorMessage.style.display = 'none';
            alert('Login successful');
            // Redirect to profile page or handle the login process here
        } else {
            errorMessage.textContent = 'Wrong username and password';
            errorMessage.style.display = 'block';
        }
    });
});

// Google Sign-In
function onGoogleSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    localStorage.setItem('username', profile.getName());
    localStorage.setItem('email', profile.getEmail());
    alert('Google Sign-In successful. Your information has been stored.');
    // Redirect to profile page or handle post-sign-in actions here
}

// Facebook Sign-In
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'YOUR_APP_ID',
        cookie     : true,
        xfbml      : true,
        version    : 'v13.0'
    });

    FB.AppEvents.logPageView();
};

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        FB.api('/me', { fields: 'name, email' }, function(response) {
            console.log('Successful login for: ' + response.name);
            console.log('Email: ' + response.email);
            localStorage.setItem('username', response.name);
            localStorage.setItem('email', response.email);
            alert('Facebook Sign-In successful. Your information has been stored.');
            // Redirect to profile page or handle post-sign-in actions here
        });
    }
}
