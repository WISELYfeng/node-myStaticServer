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
    const {pathname, search} = url.parse(path); // 解析url参数,TODO 待换用新版API
    let filename = pathname.substr(1)
    if(filename === ''){
        filename = 'index.html'
    }
    fs.readFile(p.resolve(publicDir, filename), (error, data) =>{
        if(error){
            if(error.errno === -4058){
                response.statusCode = 404
                fs.readFile(p.resolve(publicDir, '404.html'), (error, data) => {
                    response.end(data)
                })
            }else if(error.errno === -4068){
                response.statusCode = 403
                response.end('无权查看目录内容')
                
            }
            else{
                response.statusCode = 500
                response.end('服务器繁忙，请稍后重试')
            }
        }else{
            response.end(data)
        }
    })
})

server.listen(8888)
