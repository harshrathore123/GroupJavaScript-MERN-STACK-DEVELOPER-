const express = require('express');
const path = require('path');
const authRoutes = require('./route/auth');  //this work after auth

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the auth routes
app.use('/api/', authRoutes); //--this work after auth

app.get('/', (req, res) => {
    res.send("This is the Home Page Go to /api/login");
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
