import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import { users } from "./data.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const __dirname = path.dirname(new URL(import.meta.url).pathname);
export const routes = (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`<h2>Hello, World!</h2>`);
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`<h2>About Us</h2>`);
    }
    if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(users));
    }
    if (req.url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/index.html', 'utf8');
        return res.end(html);
    }
    if (req.url === '/form') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/form.html', 'utf8');
        return res.end(html);
    }
    if (req.url === '/result' && req.method === 'POST') {
        const body: any[] = [];
        req.on('data', (chunk: any) => {
           // console.log(chunk.toString());
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
           // console.log(parsedBody);
            // const name = parsedBody.split('=')[1];
            // console.log(name);
            const result = parsedBody.split('&').map((item) => {
                return item.split('=')[1];
            });
            console.log(parsedBody);    
            console.log(result); 
            if(result.length<4 || result[0] === '' || result[1] === '' || result[2] === ''){
                res.writeHead(302, { 'Location': '/form' });
                return res.end();
            }
            const user = {
                firstname: result[0],
                lastname: result[1],
                age: result[2],
                data:result[3]
            } 
            fs.appendFileSync('./data.txt', JSON.stringify(user)+'\n');      
            res.writeHead(302, { 'Location': '/form' });
            return res.end();
        });
    }
    if (req.url?.startsWith('/public/')) {
        const filePath = path.join(__dirname, '..', req.url);
        const ext = path.extname(filePath);
        let contentType = 'text/plain';

        switch (ext) {
            case '.css':
                contentType = 'text/css';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            // Dodaj inne typy plików, jeśli potrzebujesz
        }
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('<h2>File Not Found</h2>');
            }
            res.writeHead(200, { 'Content-Type': contentType });
            return res.end(content);

        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end(`<h2>Page Not Found</h2>`);
    }

}