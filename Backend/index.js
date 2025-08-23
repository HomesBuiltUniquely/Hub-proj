const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/hello', (_req, res) => {
    res.send('Welcome to the Backend of my-app!');
});

app.get('/api/test', (_req, res) => {
    res.json({ message: 'Backend is working!', timestamp: new Date().toISOString() });
    
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📍 Test endpoint: http://localhost:${PORT}/hello`);
});

module.exports = app;