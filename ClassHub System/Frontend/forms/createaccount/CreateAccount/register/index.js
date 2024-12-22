var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Updated connection (removed deprecated options)
mongoose.connect('mongodb://localhost:27017/Database')
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

// POST route for sign-up form submission
app.post("/sign-up", (req, res) => {
    // Extract form data from the request body
    var fullName = req.body.signupfullName;
    var dob = req.body.signupdob;
    var email = req.body.signupemail;
    var phone = req.body.signupphone;
    var username = req.body.username;
    var password = req.body.signuppassword;
    var confirmPassword = req.body.signupconfirmPassword;
    var role = req.body.role; // This will be either 'Teacher', 'School Admin', or 'Super Admin'
    var termsAgreed = req.body.signuptermsCheck === 'on'; // Check if the checkbox was ticked

    // Check if passwords match before inserting into the database
    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
    }

    // Create the data object
    const data = {
        fullname: fullName,
        dob: dob,
        email: email,
        phone: phone,
        username: username,
        password: password, // You should hash the password before saving it
        role: role
    };

    // Assuming you're using MongoDB to insert the data into a 'users' collection
    mongoose.connection.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting user data:", err);
            return res.status(500).send("Error inserting user data");
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_success.html'); // Redirect to success page
    });
});

app.get("/", (req, res) => {
    // Fix the CORS header to use the correct name
    res.set({
        "Access-Control-Allow-Origin": "*" // Correct CORS header name
    });
    return res.redirect('index.html');
}).listen(3000);

console.log("listening on port 3000");
