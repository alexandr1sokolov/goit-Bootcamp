var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        //аргументы первый адрес файла, вторым флаги (например указание кодировки utf-8), третьим callback функция(певый параметр всегда ошибка, в data попадает содержимое читаемого файла(index.html)
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end(); // stop processing the script and return the current result
    });
}

http.createServer(onRequest).listen(8000);


// let http = require('http');
// let fs = require('fs');
//
// http.createServer(function (request,response) {
//     response.writeHead(200, {'Content-Type': 'aplication/json'});
//     let myObj ={
//         name: "Petya",
//         job: "Ninja",
//         age: 29
//     };
//     response.end(JSON.stringify(myObj))
// }).listen(8000);



// var http = require('http');
// var fs = require('fs');
//
// let server = http.createServer(function(req, res) {
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.readFile('./index.html', null, function(error, data) {
//             if (error) {
//                 res.writeHead(404);
//                 res.write('File not found!');
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         });
//     } else if(req.url === '/contact'){
//         fs.readFile('./contact.html', null, function(error, data) {
//             if (error) {
//                 res.writeHead(404, {'Content-Type': 'text/plan'});
//                 res.write('File not found!');
//             } else {
//                 res.writeHead(200, {'Content-Type': 'text/plan'});
//                 res.write(data);
//             }
//             res.end();
//         });
//
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plan'});
//         res.write('File not found!');
//     }
// });
//
// server.listen(8000);