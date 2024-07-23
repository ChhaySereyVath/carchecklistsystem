// dashboard pages when clicked on the indicator
function showDetails(view, status, battery, activity, installation, imageUrl) {
    document.getElementById('cameraTitle').textContent = view;
    document.getElementById('cameraStatus').textContent = status;
    document.getElementById('cameraBattery').textContent = battery;
    document.getElementById('cameraActivity').textContent = activity;
    document.getElementById('cameraInstallation').textContent = installation;
    document.getElementById('cameraImage').src = imageUrl;
    document.getElementById('cameraDetails').style.display = 'block';
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}
