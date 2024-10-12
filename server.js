const express = require('express');
const path = require('path'); // Import path module
const app = express();
const port = 3000; // You can choose any port

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Basic route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Use path.join for better path handling
});

// Endpoint to handle button click
app.post('/send-true', (req, res) => {
    res.json({ response: true }); // Send 'true' in JSON format
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
