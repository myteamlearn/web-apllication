const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            return res.status(400).json({ error: 'Invalid operator' });
    }

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Calculator backend running at http://localhost:${PORT}`);
});

