const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
