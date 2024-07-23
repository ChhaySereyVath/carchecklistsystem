document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const dashboardLink = document.getElementById('dashboardLink');
    const notificationsLink = document.getElementById('notificationsLink');
    const maintenanceLink = document.getElementById('maintenanceLink');
    const contactLink = document.getElementById('contactLink');
    const logoutLink = document.getElementById('logoutLink');
    const welcomeContainer = document.getElementById('welcomeContainer');

    // Check if user is logged in
    if (localStorage.getItem('loggedInUser')) {
        showUserContent();
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                showUserContent();
                redirectToDashboard();
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Handle signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const passwordError = document.getElementById('passwordError');

            if (newPassword !== confirmPassword) {
                passwordError.textContent = "Passwords do not match!";
                passwordError.style.display = "block";
            } else {
                passwordError.style.display = "none";
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const newUser = { username: newUsername, password: newPassword };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                alert('Signup successful! Please login.');
                openForm(null, 'Login');
            }
        });
    }

    // Tab functionality for user to input in the text fields
    function openForm(evt, formName) {
        const tabcontent = document.querySelectorAll('.tabcontent');
        const tablinks = document.querySelectorAll('.tab button');

        // Hide all tabcontent
        tabcontent.forEach(content => content.classList.remove('active'));

        // Remove the active class from all tablinks
        tablinks.forEach(link => link.classList.remove('active'));

        // Show the current tab and add an "active" class to the button that opened it
        document.getElementById(formName).classList.add('active');
        if (evt) {
            evt.currentTarget.classList.add('active');
        }
    }

    // Add event listeners to tab buttons
    const tabButtons = document.querySelectorAll('.tab button');
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => openForm(e, button.textContent));
    });

    // Open the default tab
    if (document.getElementById('defaultOpen')) {
        document.getElementById('defaultOpen').click();
    }

    // Show user content
    function showUserContent() {
        if (dashboardLink) dashboardLink.style.display = 'block';
        if (notificationsLink) notificationsLink.style.display = 'block';
        if (maintenanceLink) maintenanceLink.style.display = 'block';
        if (contactLink) contactLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'block';
        if (welcomeContainer) {
            welcomeContainer.style.display = 'none';
            document.querySelector('.form-container').style.display = 'none';
        }
    }

    // Redirect to dashboard
    function redirectToDashboard() {
        window.location.href = 'dashboard.html';
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}
