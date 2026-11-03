import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { extname, resolve, sep } from 'node:path';
const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT || 4173);
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json', '.webp':'image/webp', '.png':'image/png', '.ttf':'font/ttf', '.svg':'image/svg+xml' };
createServer(async (req,res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + path);
    if (file !== root && !file.startsWith(root.endsWith(sep)?root:root+sep)) { res.writeHead(403).end(); return; }
    let target=file;
    try { if ((await stat(target)).isDirectory()) target=resolve(target,'index.html'); }
    catch { if (!extname(path)) target=resolve(root,'index.html'); else {res.writeHead(404).end('Not found');return;} }
    const bytes=await readFile(target);
    res.writeHead(200, {'Content-Type':mime[extname(target)]||'application/octet-stream','Cache-Control':'no-store'}).end(req.method==='HEAD'?undefined:bytes);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(port,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+port));
