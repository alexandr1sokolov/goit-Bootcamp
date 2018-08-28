let ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/', function (req, res) {
        res.send('Hello API');
    });

    app.post('/users', function (req, res) {
        let user = {
            name: req.body.name
        };

        db.collection('users').insert(user, function (err) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(user);
        })
    });

    app.get('/users', function (req, res) {
        db.collection('users').find().toArray(function (err, data) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(data);
        })
    });

    app.get('/users/:id', function (req, res) {
        db.collection('users').findOne({ _id: ObjectID(req.params.id) }, function (err, data) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(data);
        })
    });

    app.put('/users/:id', function (req, res) {
        db.collection('users').updateOne({ _id: ObjectID(req.params.id) },{ $set: {name:`${req.body.name}` } },function(err, data) {
                if (err) throw err;
                console.log("1 document updated",data.result);
                res.send(data.result);
              })
    });

    app.delete('/users/:id', (req, res) => {
        let id = {_id: ObjectID(req.params.id)};
        db.collection('users').deleteOne(id, function(err, data) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(data);
        })
    });
};

// /users/::index – DELETE – удаляем пользователя
// 3) /users/::index/books – POST – добавить книгу в библиотеку, параметры: автор и название
// 4) /users/::index/books/::title – GET – получить информацию по одной книге, по имени
// 5) /users/::index/books/::title – DELETE – удалить книгу из библиотеки пользователя
// 6) /users/::index/books/::title – PUT – Изменить информацию о книге