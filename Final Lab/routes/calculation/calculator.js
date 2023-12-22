const express = require('express');
const router = express.Router();

// Initialize an empty array to store calculations in session
let calculations = [];

// GET route to render the form
router.get('/calculator', (req, res) => {
    // Render the form and pass previous calculations
    res.render('calculator', { calculations });
});

// POST route to handle form submission
router.post('/calculate', (req, res) => {
    const { operand1, operand2, operation } = req.body;

    // Perform the calculation based on the operation
    let result;
    switch (operation) {
        case 'add':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case 'subtract':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case 'multiply':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case 'divide':
            if (parseFloat(operand2) !== 0) {
                result = parseFloat(operand1) / parseFloat(operand2);
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Select a valid operation';
            break;
    }

    // Store calculation in session
    calculations.push({ operand1, operand2, operation, result });
    req.session.calculations = calculations;

    // Redirect back to the form
    res.redirect('/calculator');
});

module.exports = router;
