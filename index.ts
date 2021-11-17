import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http'

const server = http.createServer()

// 通过指定参数类型IncomingMessage，ts才知道有哪些属性可用
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    console.log(request.httpVersion);
    console.log(request.url);
    response.end('hi');

})

server.listen(8888)