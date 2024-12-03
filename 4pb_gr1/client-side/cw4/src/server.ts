import http, { IncomingMessage, ServerResponse } from 'http';
import { routes } from './routes.js';
// Create a server
const server = http.createServer(routes);

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');

});