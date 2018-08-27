# Node.js

## День 5
5. Сессии в Node.js 
6. Аутентификация в Node.js с использованием Passport.js(chapter8)

### Аутентификация
Для большенсва приложений необходима аунтификация, существуют разные подходы, такие как OpenID и OAuth, но большинство коммерческих проектов предпочитают иметь свою собственную систему входа.

Обычно она реализуется с помощью сессий:

- Пользователь заполняет форму, указывая логин и пароль
- Пароль шифруется с помощью хэш-алгоритма
- Полученное значение сравнивается с тем, что хранится в БД
- Если они совпадают, то генерируется сессионный ключ, идентифицирующий пользователя

Для реализации пользовательских сессий нам нужно следующее:

- Пользователь в БД
- Сессии, в которых можно хранить идентификатор пользователя
- Шифрование пароля
- Возможность ограничения доступа к тем URL, для которых требуется залогиненный пользователь

### Сессии в Express
В основе сессий в Express лежит соответствующий средний слой (middleware) из Connect, который, в свою очередь, опирается на механизм хранения данных. Существует хранилище в памяти, а так же сторонние хранилища, включая connect-redis и connect-mongodb.

В качестве альтернативы так же можно рассматривать cookie-sessions, который хранит данные сессии в пользовательской куке (cookie).

Поддержка сессий может быть включена следующим образом:

```javascript
app.use(express.cookieDecoder());
app.use(express.session());
```
Размещение этого кода в разделе конфигурации приложения очень важно. В случае ошибки сессионная переменная не появится в объекте запроса. 

Теперь в HTTP-обработчиках будет доступна переменная req.session:

```javascript
app.get('/item', function(req, res) {
  req.session.message = 'Hello World';
});
```

### Сессии в MongoDB

Для поддержки сессий в MongoDB необходимо установить connect-mongodb:

```javascript
npm install connect-mongodb
```
Работает connect-mongodb так же как и любое другое хранилище сессий. Во время настройки приложения необходимо указать детали соединения:

```javascript
app.configure('development', function() {
  app.set('db-uri', 'mongodb://localhost/nodepad-development');
});

var db = mongoose.connect(app.set('db-uri'));

function mongoStoreConnectionArgs() {
  return { dbname: db.db.databaseName,
           host: db.db.serverConfig.host,
           port: db.db.serverConfig.port,
           username: db.uri.username,
           password: db.uri.password };
}

app.use(express.session({
  store: mongoStore(mongoStoreConnectionArgs())
}));
```

Большая часть этого кода не понадобилась бы, если бы авторы API реализовали стандартный формат настроек соединения. Я написал функцию, извлекающую настройки соединения из Mongoose. В этом примере, переменная db хранит экземпляр соединения Mongoose, который ждет настроек соединения в виде URI. Этот формат, кстати, мне более всего симпатичен из-за своей простоты и легкости для запоминания. Строку соединения я сохраняю с помощью app.set.

При работе с Express бывает полезно использовать app.set('name', 'value'). Так же следует запомнить, что для доступа к настройке следует использовать app.set('name'), а не app.get.

Теперь, запустив в консоли Mongo db.sessions.find(), можно увидеть все созданные сессии.


## Работа с Passport.js

### Аутентификация через социальные сети для приложений Node.js при помощи Passport 
- https://code.tutsplus.com/ru/articles/social-authentication-for-nodejs-apps-with-passport--cms-21618

### Node.js, Express.js, Mongoose.js and Passport.js Authentication
- https://www.djamware.com/post/58bd823080aca7585c808ebf/nodejs-expressjs-mongoosejs-and-passportjs-authentication

### Authentication using passport js Social auth with Node js
- https://medium.com/@tkssharma/authentication-using-passport-js-social-auth-with-node-js-1e1ec7086ded