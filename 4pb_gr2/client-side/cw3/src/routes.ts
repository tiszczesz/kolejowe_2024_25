import { IncomingMessage, ServerResponse } from "http";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "path";
import { games } from "./data.js";


export const routes = (req: IncomingMessage, res: ServerResponse) => {
    //console.log(__dirname);
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World!');
        return res.end();
    } if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h3>About Us</h3>');
        return res.end();
    }
    if (req.url === '/games') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(games));
        return res.end();
    }
    if (req.url === '/index') {
        const html = fs.readFileSync('./public/index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        return res.end();
    }
    if (req.url?.startsWith('/public/')) {
        useStaticFiles(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        return res.end();
    }

}

function useStaticFiles(req: IncomingMessage, res: ServerResponse) {
    const _filename = fileURLToPath(import.meta.url);
   // console.log(_filename);
    const _dirname = path.dirname(_filename);
    const _path = path.join(_dirname, '..', req.url || '');
  //  console.log(_path);
    const ext = path.extname(_path);
    let contentType = 'text/plain';
    switch (ext) {
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
    }
    console.log(contentType);
    fs.readFile(_path, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Not Found');
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.write(data);
        return res.end();
    });
}