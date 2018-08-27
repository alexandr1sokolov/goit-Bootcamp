var http = require('http');


let date = Date.now();

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'}); //тех информация, заголовок
    response.write(`${date}`); //ответ
    response.end();
}

http.createServer(onRequest).listen(8000);