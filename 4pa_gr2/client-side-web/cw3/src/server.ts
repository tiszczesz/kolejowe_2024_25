import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.end('<h1>Hello World</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>About Page</h1>');
    } else {
        res.end('<h1>Page Not Found</h1>');
    }

});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});