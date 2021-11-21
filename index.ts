const http = require('http');
const { IncomingMessage, ServerResponse } =require('http');;
const fs = require('fs')
const p = require('path')

const server = http.createServer()
const publicDir = p.resolve(__dirname, 'public')

// 通过指定参数类型IncomingMessage，ts才知道有哪些属性可用
// server.on('request', (request: IncomingMessage, response: ServerResponse) => {
//     const array = [];
//     request.on('data', (chunk) =>{ // data事件：数据会被分割成极小的包传输，通过此事件接收数据
//         array.push(chunk)
//     })

//     request.on('end', ()=>{ // end:所有数据传输完成时触发
//         const body = Buffer.concat(array).toString()
//         console.log(body);
//         response.statusCode = 400
//         response.end('hi')
//     })

// })

server.on('request', (request, response)=>{
    const {method, url, headers} = request;
    switch (url){
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
