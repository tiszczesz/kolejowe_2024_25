import http from 'http';
import { routes } from './routes.js';


const server = http.createServer(routes);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});