#!/usr/bin/env node

const { createServer } = require('http');
const { readFileSync } = require('fs');
const { join } = require('path');

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>AB Project</title>
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
                    .header { text-align: center; color: #333; }
                    .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0; }
                    .feature { padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
                    .footer { text-align: center; margin-top: 40px; color: #666; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🚀 Welcome to AB Project</h1>
                    <p>A versatile project workspace designed for rapid development and experimentation</p>
                </div>
                
                <div class="features">
                    <div class="feature">
                        <h3>🔧 Development Ready</h3>
                        <p>Ready-to-use development environment with Node.js server</p>
                    </div>
                    <div class="feature">
                        <h3>📁 Clean Structure</h3>
                        <p>Organized project structure for maintainable code</p>
                    </div>
                    <div class="feature">
                        <h3>🚀 Quick Deploy</h3>
                        <p>Quick setup and deployment ready infrastructure</p>
                    </div>
                </div>
                
                <div class="footer">
                    <p>Server running on port ${PORT} | Node.js ${process.version}</p>
                    <p><em>Happy coding!</em> ✨</p>
                </div>
            </body>
            </html>
        `);
    } else if (req.url === '/api/status') {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({
            status: 'ok',
            message: 'AB Project API is running',
            timestamp: new Date().toISOString(),
            version: '1.0.0'
        }));
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1><p>The requested resource was not found.</p>');
    }
});

server.listen(PORT, () => {
    console.log(`🚀 AB Project server running at http://localhost:${PORT}`);
    console.log(`📊 API status available at http://localhost:${PORT}/api/status`);
});

process.on('SIGTERM', () => {
    console.log('📴 Server shutting down gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});