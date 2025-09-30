const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, 'IMAGE')));
app.use(session({
    secret: "myprivate",
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 30000 } // 30 minutes
}));

// ---------------- PUBLIC ROUTES ----------------

// Public Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

// Signup Page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'SignUp.html'));
});

// Signup Logic
app.post('/signup', (req, res) => {
    const { fullname, email, mobile, password } = req.body;

    if (!fullname || !email || !mobile || !password) {
        return res.send("All fields are required");
    }

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.send("Error hashing password");

        const insert_arr = [fullname, email, mobile, hash];
        const insert_query = 'INSERT INTO users (fullname,email,phone_number,password) VALUES (?,?,?,?)';

        db.query(insert_query, insert_arr, (err, result) => {
            if (err) return res.send("Database error");
            res.redirect('/login');
        });
    });
});

// Login Page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

// Login Logic
app.post('/login', (req, res) => {
    const { email_login, password_login } = req.body;

    if (!email_login || !password_login) {
        return res.send("All fields are required");
    }

    const login_query = 'SELECT * FROM users WHERE email=?';
    db.query(login_query, [email_login], (err, result) => {
        if (err || result.length === 0) return res.send("Invalid Email or Password");

        const user = result[0];

        bcrypt.compare(password_login, user.password, (err, isMatch) => {
            if (err) return res.send("Something went wrong");
            if (!isMatch) return res.send("Invalid Email or Password");

            // ✅ Create session
            req.session.user = { id: user.id, email: user.email };

            // Redirect to protected home page
            res.redirect('/home');
        });
    });
});

// ---------------- PROTECTED ROUTES ----------------

// AfterLoginHome.html (Protected)
app.get('/home', (req, res) => {
    // // Session check
    if (!req.session.user) {
        return res.redirect('/login'); // if session not found → login page
    }

    // Disable caching to prevent back button showing cached page
    res.setHeader('Cache-Control', 'no-store');
    res.sendFile(path.join(__dirname, 'public', 'AfterLoginHome.html'));
});

// Logout Route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("Logout Error:", err);
        }
        // Redirect to public home page after logout
        res.redirect('/');
    });
});

// ---------------- SERVER ----------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
