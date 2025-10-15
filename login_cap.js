// server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Hardcoded user for demo
const USER = { username: "sne", password: "123" };

// Capgemini India info to send
const CAPGEMINI_INFO = {
  company: "Capgemini India",
  description: "Capgemini is a global leader in consulting, technology services and digital transformation. The India branch provides innovative solutions and services to clients worldwide.",
  headquarters: "Mumbai, India",
  employees: "Over 200,000",
  website: "https://www.capgemini.com/in-en/"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.json({
      success: true,
      message: "Login successful",
      info: CAPGEMINI_INFO
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid username or password"
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

