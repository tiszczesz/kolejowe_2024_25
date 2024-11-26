import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import { users } from "./data.js";

export const routes = (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h2>Hello, World!</h2>`);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h2>About Us</h2>`);
    } else if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else if (req.url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/index.html', 'utf8');
        res.end(html);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h2>Page Not Found</h2>`);
    }

}