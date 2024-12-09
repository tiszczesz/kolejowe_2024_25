import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import { Book, books } from "./data.js";
import path from "path";
import { fileURLToPath } from "url";
import { url } from "inspector";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
console.log(import.meta.url);
console.log(_filename);
console.log(_dirname);



export const routes = (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Hello World\n');
    }
    if (req.url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/index.html');
        return res.end(html);
    }
    if (req.url === '/api/books') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(books));
    }
    if (req.url === '/api/books/1') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(books[0]));
    }
    if(req.url === '/form'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/form.html');
        return res.end(html);
    }
    if(req.url === '/result' && req.method === 'POST'){
        const body:any[] = [];
        req.on('data',(chunk:any)=>{
            body.push(chunk)
        });
        return req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            
        });
    }
    if (req.url?.startsWith('/public/')) {
        const filePath = path.join(_dirname, '..', req.url);
        console.log(filePath);
        let contentType = 'text/plain';
        let ext = path.extname(filePath); //rozszerzenia pobieranych plików statycznych
        switch (ext) {
            case '.css':
                contentType = 'text/css'; break;
            case '.jpg':
                contentType = 'image/jpeg'; break;
            case '.jpeg':
                contentType = 'image/jpeg'; break;
            case '.png':
                contentType = 'image/png'; break;
            case '.js':
                contentType = 'text/javascript'; break;
            //inne typy
        }
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { "content-type": 'text/html' });
                return res.end('File not found');
            }
            res.writeHead(200, { 'content-type': contentType });
            return res.end(content);
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Not Found\n');
    }


}