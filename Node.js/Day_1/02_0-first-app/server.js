var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'}); //тех информация, заголовок
    response.write('Hello World'); //ответ
    response.end();
}

http.createServer(onRequest).listen(8000);