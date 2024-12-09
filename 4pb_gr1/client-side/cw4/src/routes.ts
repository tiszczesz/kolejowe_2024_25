import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";

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
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Not Found\n');

}