const Koa = require('koa');
const app = new Koa();

app.use(async data => {
    console.log("test :", data);
    data.body = 'Hello World';
});

app.listen(3001);