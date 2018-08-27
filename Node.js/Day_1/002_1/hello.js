const fs = require('fs');  // The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

// let y= fs.readFileSync('hello.txt');
// console.log(y);

// let txt = fs.readFileSync('hello.txt', 'utf-8');
// console.log(txt);

// fs.readFile('hello.txt', 'utf8', (error, content) =>  // readFile асинхронно
//   content
//     .split('\n')
//     .filter(line => line.includes('dog'))
//     .forEach(line => console.log(line))
// );


// fs.readFile('hello.txt', 'utf-8', function (err, content) {
//     if (err) {
//         return console.log(err)
//     }
//
//     console.log(content)
// });



// let txt = fs.readFileSync('hello.txt', 'utf-8'){
//     console.log('file is reading')
// }
// console.log(content);

// let txt = fs.readFileSync('hello.txt', 'utf-8');
// // console.log(txt);
//
// let txt_write = 'Hello world!!'+'\n' + txt;
// fs.writeFile('some_new_file.txt', txt_write);