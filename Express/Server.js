// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON (for POST requests)
app.use(express.json());

// Default Route
app.get('/', (req, res) => {
  res.send('🚀 Express Server is Running!');
});

// Example Route
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
