import { IncomingMessage, ServerResponse } from "http";
import fs from 'fs';


export const routes =(req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Hello World\n');
    }
    if(req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<h3>About Page</h3><p>This is the about page</p>');
    }
    if(req.url === '/index'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('public/index.html', 'utf8');
        res.write(html);
        return res.end();
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Page Not Found\n');

}