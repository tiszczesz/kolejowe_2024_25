import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import { Book,books } from "./data.js";
import path from "path";

const _filename = new URL(import.meta.url).pathname;
const _dirname = path.dirname(_filename);
console.log(_dirname);
console.log(_filename);

export const routes =  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Hello World\n');
    }
    if(req.url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/index.html');
        return res.end(html);
    }
    if(req.url === '/api/books') {    
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(books));        
    }
    if(req.url === '/api/books/1') {    
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(books[0]));        
    }
    if(req.url?.startsWith('/public/')){

    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Not Found\n');

}