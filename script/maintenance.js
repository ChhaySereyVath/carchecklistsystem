// maintenanc form submission
document.addEventListener('DOMContentLoaded', () => {
    const maintenanceForm = document.getElementById('maintenanceForm');
    const clearRequestsButton = document.getElementById('clearRequestsButton');

    if (maintenanceForm) {
        maintenanceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const carId = document.getElementById('carId').value;
            const issue = document.getElementById('issue').value;

            const requests = JSON.parse(localStorage.getItem('maintenanceRequests')) || [];
            const newRequest = { carId, issue, date: new Date().toLocaleString() };
            requests.push(newRequest);
            localStorage.setItem('maintenanceRequests', JSON.stringify(requests));

            document.getElementById('carId').value = '';
            document.getElementById('issue').value = '';

            displayRequests();
        });

        displayRequests();
    }

    // Clear requests functionality
    if (clearRequestsButton) {
        clearRequestsButton.addEventListener('click', () => {
            localStorage.removeItem('maintenanceRequests');
            displayRequests();
        });
    }

    // Display maintenance requests
    function displayRequests() {
        const requests = JSON.parse(localStorage.getItem('maintenanceRequests')) || [];
        const requestList = document.getElementById('requestList').querySelector('ul');
        requestList.innerHTML = '';

        requests.forEach(request => {
            const li = document.createElement('li');
            li.className = 'list-group-item request-item';
            li.textContent = `${request.date} - Car ID: ${request.carId}, Issue: ${request.issue}`;
            requestList.appendChild(li);
        });
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}
