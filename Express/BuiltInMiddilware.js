const express = require('express');
const app = express();

// Built-in middleware for parsing JSON
app.use(express.json());

// Global middleware (runs on every request)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next middleware/route
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
