import { IncomingMessage, ServerResponse } from "http";
import fs from 'fs';
import { books } from "./data.js";

export const routes = (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page</h1>');
        return res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
        return res.end();
    }else if(req.url === '/index'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/index.html');
        res.write(html);
        return res.end();
    }
    else if(req.url === '/books'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(books));
        return res.end();
    }
     else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        return res.end();
    }

}