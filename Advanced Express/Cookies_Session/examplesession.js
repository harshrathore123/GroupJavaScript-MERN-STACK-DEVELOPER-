const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname))); // Serve all files in the folder

// Configure session
app.use(session({
    secret: 'myharsh',          // Secret key to sign the session ID cookie
    resave: false,                // Don't save session if unmodified
    saveUninitialized: true,      // Save new sessions
    cookie: { maxAge: 30000 } // 30 second
}));

// Home route
// I AM DONE
app.get('/', (req, res) => {
    if (req.session.username) {
        res.send(`Hello ${req.session.username}, welcome back!`);
    } else {
        res.sendFile(path.join(__dirname,'login_button.html'));
    }
});

// That also done
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'example.html'));
})

// Login route (sets session)

app.post('/login', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).send('Username is required');
    }

    // Set username in session
    req.session.username = username;
    res.redirect('/dashboard');
});

// Prevent browser caching for sensitive pages
// app.use((req, res, next) => {
//     res.set('Cache-Control', 'no-store'); // or 'no-store, no-cache, must-revalidate'
//     next();
// });

// Dashboard route (protected)
app.get('/dashboard', (req, res) => {
    res.set('Cache-Control', 'no-store');

    if (req.session.username) {
        res.sendFile(path.join(__dirname,'logout.html'));
    } else {
        res.status(401).send('Please login first');
    }
});

// Logout route (destroy session)
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Could not log out');
        }
        res.redirect('/');
    });
});

app.listen(5000, () => console.log('Server running on port http://localhost:5000'));
