import http, { IncomingMessage, ServerResponse } from 'http';
// import { users } from './data.js';
import { routes } from './routes.js';
const server = http.createServer(routes);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});