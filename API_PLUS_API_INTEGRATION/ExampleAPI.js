const express = require('express');
const app = express();
const PORT = 5000;

// Sample API route
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Harsh', role: 'Developer' },
    { id: 2, name: 'Amit', role: 'Designer' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
