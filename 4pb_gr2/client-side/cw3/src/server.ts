import http, { IncomingMessage, ServerResponse } from 'http';


const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World!');
        return res.end();
    } if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h3>About Us</h3>');
        return res.end();
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not Found');
    return res.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});