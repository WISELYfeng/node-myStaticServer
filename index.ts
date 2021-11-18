import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http'

const server = http.createServer()

// 通过指定参数类型IncomingMessage，ts才知道有哪些属性可用
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    const array = [];
    request.on('data', (chunk) =>{ // data事件：数据会被分割成极小的包传输，通过此事件接收数据
        array.push(chunk)
    })

    request.on('end', ()=>{ // end:所有数据传输完成时触发
        const body = Buffer.concat(array).toString()
        console.log(body);
        response.statusCode = 400
        response.end('hi')
    })

})

server.listen(8888)