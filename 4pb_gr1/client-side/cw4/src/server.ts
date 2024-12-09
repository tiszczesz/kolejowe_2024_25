import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end('Hello World\n');
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Not Found\n');

    }
);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});