// index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint
app.post('/send', (req, res) => {
  const { message } = req.body;

  console.log("Received message:", message);

  res.json({
    status: "Message received successfully",
    received: message
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

