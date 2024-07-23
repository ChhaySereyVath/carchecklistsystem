# Car Checklist Management System

Link into the website hosted by GitHub: https://chhaysereyvath.github.io/carchecklistsystem/

Link into Google docs for direct access to more information: https://docs.google.com/document/d/14MPCMBBllbw9aE0q_SVbCCp98BYjfGwOTun0cICQdds/edit?usp=sharing

The car checklist management system is a web application for users to interact with their car surveillance system by managing their camera. This application offers a login/signup system for your account, a dashboard that displays the entire layout of your car, and the ability to access additional camera details by clicking on the camera indicator. Then, there are notification pages that provide a real-time update on your camera, confirming that the error has been fixed. You can also use this web application to submit a maintenance request and reach out to their support team for further information.

## Features

- User Authentication (Login/Signup)
- Dashboard with real-time camera status and click on indicator for more detail
- Maintenance Request Form
- Notifications for camera status
- Contact Support Form
- Using local storage to store the data info

## Technology used

- HTML
- CSS
- JavaScript
- Bootstrap 4.5.2
- Local Storage for storing data
## File Structure

- `index.html` - Home page for signup and login.
- `dashboard.html` - Dashboard to display car camera statuses and details.
- `maintenance.html` - Maintenance request submission form.
- `notifications.html` - Notifications page to display camera status updates.
- `contact.html` - Contact support form.
- `style.css` - Styling for the application.
- `script/login.js` - JavaScript for login and signup function.
- `script/dashboard.js` - JavaScript for the dashboard function.
- `script/maintenance.js` - JavaScript for maintenance request function.
- `script/contact.js` - JavaScript for contact form function.
- `image` - Image folder for the application

## Development Process
The development process involved designing a user-friendly interface for managing car CCTV systems. Key steps consisted of:

- Creating the UI with HTML, CSS.
- Storing user authentication (login/signup) using local storage.
- Dashboard development to show real-time camera statuses and detailed information using javascript when the user click on the camera indicator, it will show the detailed image and information.
- Create a maintenance request form to submit and store maintenance issues as a history then we can clear the maintenance request after the problem fixed.
- Add a notifications page that shows latest camera status updates, however the web-application is still in example in HTML not functionable.
- Implementing contact support form along with displaying success message.
- Implementing bootstrap for responsiveness to the website. Without this, the website couldn't display well in phone or tablet. 
- Ensure navigate across all pages smoothly starting from the home page.

## Challenges and overcome

- Local storage: At first, I thought making the user authentication would be hard as it need backend to store the information. But javascript allow us to use local storage to store data. This is very useful to store for a small amount of data.
- Handling with the error with the validation but I could solve some of the form with javaScript validation to ensure required fields are filled out correctly such as maintenance request, password validation, and textarea validation. However, I still working more on the notification.
- The problem is that pages need to be updated dynamically based on what a user does on the page. To solve this I had to use JavaScript’s event listeners and DOM manipulation to ensure the content are up-to-date.
- Responsive design as my HTML and CSS can only be display on the laptop browser but will display bad in mobile or tablet. So by implementing the boostrap would help me tested the application on various devices with different size. 

## Future Improvements

- Implement a connection to backend servers for data storage and retrieval for larger use.
- Improving on the notication pages as it not fully functional. 
- Use WebSockets to provide real-time updates as show the data at the client end, which is continuously being sent by the backend server. WebSocket is faster and improves the application performance.
- Make the UI more interactive by showing more detail in camera details, showing logs to show the history of the camera.

## Contact

For any questions, please contact me via chhaysereyvath3112@gmail.com .
