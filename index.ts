/* 代码为饥人谷第86课静态服务器教学中跟着敲的。以此记录。
 */
import * as http from 'http';
import { IncomingMessage, ServerResponse }  from 'http';
import * as fs from 'fs';
import * as p from 'path';
import * as url from 'url';

const server = http.createServer()
const publicDir = p.resolve(__dirname, 'public')

server.on('request', (request: IncomingMessage, response: ServerResponse)=>{
    const {method, url: path, headers} = request;
    const {pathname, search} = url.parse(path); // 解析url参数
    switch (pathname){  // 对url的响应
        case '/index.html':
            fs.readFile(p.resolve(publicDir, 'index.html'), (error, data) =>{
                if(error) throw error;
                response.end(data.toString())
            })
            break;
        case '/style.css':
            response.setHeader('Content-Type', 'text/css; charset=utf-8')
            fs.readFile(p.resolve(publicDir, 'style.css'), (error, data) =>{
                if(error) throw error;
                response.end(data.toString())
            })
            break;
        case '/main.js':
            response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
            fs.readFile(p.resolve(publicDir, 'main.js'), (error, data) =>{
                if(error) throw error;
                response.end(data.toString())
            })
            break;

    }
})

server.listen(8888)
