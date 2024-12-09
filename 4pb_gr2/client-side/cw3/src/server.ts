import http from 'http';
import { routes } from './routes.js';
import { IncomingMessage, ServerResponse } from 'http';

//const server = http.createServer(routes);

const enableCors = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return true;
    }
    return false;
};

const server = http.createServer((req, res) => {
    if (!enableCors(req, res)) {
        routes(req, res);
    }
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});