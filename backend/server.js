require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();
const port = Number(process.env.PORT) || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100kb' }));

// Health Check Endpoint
app.get('/api/health', (_request, response) => {
    response.json({
        status: 'ok',
        service: 'praniti-portfolio-backend',
    });
});

// Sample Portfolio Data Route
app.get('/api/portfolio', (_request, response) => {
    response.json({
        name: "Praniti",
        title: "Developer & Creator",
        projects: [
            { id: 1, title: "Praniti-Portfolio", description: "My personal portfolio website" }
        ],
        skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"]
    });
});

// Contact Form Route
app.post('/api/contact', (request, response) => {
    const { name, email, message } = request.body;
    
    if (!name || !email || !message) {
        return response.status(400).json({ success: false, message: "All fields are required!" });
    }

    console.log(`Received message from ${name} (${email}): ${message}`);
    response.status(200).json({ success: true, message: "Message received successfully!" });
});

// 404 Handler for unknown routes
app.use((request, response) => {
    response.status(404).json({
        error: `Route not found: ${request.method} ${request.originalUrl}`,
    });
});

// Error-Handling Middleware
app.use((error, _request, response, _next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return response.status(400).json({ error: 'Request body must contain valid JSON.' });
    }
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
```[cite: 6]

---

### 2. `package.json`
This manages your project dependencies and scripts. Make sure your `backend/package.json` looks like this:

```json
{
  "name": "praniti-portfolio-backend",
  "version": "1.0.0",
  "description": "Backend server for Praniti's portfolio",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Praniti",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  }
}