const { constants } = require('fs/promises');
const http = require('http');
const os = require("os");
const process = require("process");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Node.js Server - System Information displayed at CPU terminal\n');
});

server.listen(3000, 'localhost', () => {
    console.log('Node.js Server is running at http://localhost:3000/');
    console.log(`Node.js Version: ${process.version}`);
});

let config = {
    intervalSeconds: 5,
};

async function readConfigFile() {
    try {
        const configFile = await fs.promises.readFile('config.json', 'utf-8');
        config = JSON.parse(configFile);
    } catch (err) {
        console.log('Error reading configuration file:', err.message);
    }
}

readConfigFile();

function showSystemInfo() {
    console.log('--- System Information ---');
    console.log(`Platform: ${process.platform}`);
    console.log(`Architecture: ${process.arch}`);
    console.log(`Current Directory: ${process.cwd()}`);
    console.log(`PID: ${process.pid}`);
    console.log(`Node.js Version: ${process.version}`);
    console.log(`CPU Usage: ${os.cpus()[0].times.user / os.cpus()[0].times.sys}%`);
    console.log(`Memory Usage: ${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%`);
    console.log(`System Uptime: ${os.uptime()} seconds`);
    console.log(`Node.js Uptime: ${process.uptime()} seconds`);
}

setInterval(showSystemInfo, config.intervalSeconds * 1000);
