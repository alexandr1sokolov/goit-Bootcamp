const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const todoRoutes = require('./routes/todoRoutes');


const config = require('./config/config');
const DB = config.db_url;
const server_port = config.server_port;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/tasks', todoRoutes);

mongoose.connect(DB, {useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
    });


app.use((req, res, next) => {
    res
        .status(404)
        .json({err: '404'});
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res
        .status(500)
        .json({err: '500'});
});

app.listen(server_port, () => {
    console.log('Server is running on ', server_port);
});