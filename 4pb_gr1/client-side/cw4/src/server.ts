import http, { IncomingMessage, ServerResponse } from 'http';

// Create a server
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');

});