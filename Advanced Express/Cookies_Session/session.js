const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30000 } // 1 minute
}));

app.get('/', (req, res) => {
    // Set a value in session
    req.session.username = 'Harsh';
    res.send('Session is set!');
});

app.get('/get', (req, res) => {
    // Access session value
    const username = req.session.username;
    res.send(`Username from session: ${username}`);
});

app.listen(5000, () => console.log('Server running on port http://localhost:5000'));
