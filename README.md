This is a MERN stack application designed to facilitate online appointment booking for patients and doctors. It provides a user-friendly interface for patients to search for doctors, book appointments, and manage their schedules.
We have Developed this as a part of our MERN Project.

**Prerequisites**
1. Node.js and npm (or yarn): Ensure you have the latest versions installed.
2. MongoDB: Set up a local or cloud-based MongoDB database.

### To run the project on your local machine

<ol>
<li>Download the project from the git repository</li>
<li>Add .env file in root directory for the backend which contains</li>

```
PORT=5000
MONGO_URI=YOUR_OWN_MONGODB_URL
JWT_SECRET=YOUR_JWT_SECRET
```
<li>Add .env file in client directory for the frontend which contains</li>

```

REACT_APP_SERVER_DOMAIN=http://127.0.0.1:5000/api
REACT_APP_CLOUDINARY_BASE_URL=https://api.cloudinary.com/v1_1/{CLOUD_NAME}/image/upload
REACT_APP_CLOUDINARY_CLOUD_NAME=YOUR_OWN_CLOUDINARY_CLOUD_NAME
REACT_APP_CLOUDINARY_PRESET=YOUR_OWN_CLOUDINARY_PRESET
```
**Note:** Replace the **{CLOUD_NAME}** with your own cloudinary cloud name

<li>To run the backend, go to root directory in the terminal and execute: npm start</li>
<li>To run the frontend, open a new terminal and run 'cd client/' to go to client directory and execute: npm start</li>
</ol>

### To access the admin dashboard

<ol>
<li>Download the project from the git repository</li>
<li>You need to create your own MongoDB instance and add the MongoDB url to the .env file</li>
<li>Register on the website and go to your MongoDB and manually change the 'isAdmin' field of the account you want to make admin in the DB to 'true' and then log in back on the site</li>
<li>Now you will be able to access the admin dashboard</li>
</ol>


Tools and Technologies Used
1. MongoDB
2. Express JS
3. Node JS
4. React
5. HTML
6. CSS
7. IntelliJ

