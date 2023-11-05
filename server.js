const http = require('http');
const os = require('os');
const process = require('process');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Node.js Server</h1>');
    res.write('<h2>System Information:</h2>');
    res.write('<div id="system-info"></div>');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Node.js server is running at http://localhost:3000');
  console.log(`Node.js version: ${process.version}`);
  
  setInterval(() => {
    const systemInfo = {
      cpuUsage: (os.cpus()[0].times.user / os.cpus()[0].times.sys).toFixed(2),
      memoryUsage: ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2),
      systemUptime: os.uptime(),
      nodeUptime: process.uptime(),
    };
    
    const systemInfoString = JSON.stringify(systemInfo);
    
    // Send system info to the client
    server.getConnections((err, count) => {
      if (count > 0) {
        server.clients.forEach(client => {
          client.send(`data: ${systemInfoString}\n\n`);
        });
      }
    });
  }, 5000); // Send system info every 5 seconds
});
