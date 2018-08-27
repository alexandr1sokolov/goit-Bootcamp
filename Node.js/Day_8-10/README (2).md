# Node.js


##### День 2
1. Работа с Express - добавить
2. Routing - добавить
1. MVC рассказать. - создать 
3. Работа с базами данных Mongo (Mongoose)(chapter5)
4. Модуль Request(chapter6)
5. Файловая структура проекта(chapter7)
6. Аутентификация в Node.js с использованием Passport.js(chapter8) - добавить
[Ссылка на теорию - день 2](http://# "Ссылка на теорию - день 2ы")
[Ссылка на код - день 2](http://# "Ссылка на код - день 2")

###### Работа с базами данных
###### Модуль Request
###### Файловая структура проекта
###### Аутентификация в Node.js с использованием Passport.js
###### Модульное тестирование
###### Отладка
###### Безопасность
###### Деплой вашего приложения
###### Мониторинг Node.js-приложений


Задание соответствия между разными HTTP-запросами и разными частями нашего кода называется «маршрутизация» («routing», роутинг). Давайте тогда создадим модуль под названием router.

###### Предварительная подготовка

В качестве фреймворка мы планируем использовать **Express**. Системой управления базами данных будет **MongoDB**. Кроме того, в качестве вспомогательного средства для работы с JSON, используем пакет body-parser. Установим всё это:

`npm install express mongodb body-parser`

Ещё, я очень рекомендую установить Nodemon как dev-зависимость. Это простой маленький пакет, который, при изменении файлов, автоматически перезапускает сервер.

Для установки этого пакета выполните команду:

`npm install --save-dev nodemon`

Затем можно добавить следующий скрипт в файл package.json:

// package.json
  "scripts": {
    "dev": "nodemon server.js"
  },

Готовый package.json будет выглядеть примерно так:

// package.json
{
  "name": "notable",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "mongodb": "^2.2.16"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

Теперь создадим файл server.js и приступим к работе над API.


Простая разработка приложений на Node.js и MongoDB с помощью Mongoose
Node.js и MongoDB  -- это пара, каждый из которой создан друг для друга. 

Умение использовать JSON сверх меры и JavaScript делают разработку очень простой. 

CRUD это то, что необходимо для большинства разрабатываемых приложений. Ведь информацию нужно постоянно создавать, читать, редактировать и удалять.

Сегодня мы разберем примеры кода для обработки операций CRUD в приложении, использующем Node.js, ExpressJS и MongoDB. Воспользуемся популярным Node-пакетом, mongoose .

Эти примеры кода использовались для создания Node.js RESTful API , так как при создании API необходимо использование операций CRUD. 

###### Что такое Mongoose?
**mongoose** -- пакет объектного моделирования для Node, который в основном работает как ORM, которые вы можете встретить в других языках (вроде Eloquent for Laravel).

Mongoose позволяет нам обращаться к MongoDB с помощью команд CRUD просто и легко. Для использования mongoose добавьте ее в свой Node-проект следующей командой:
`$ npm install mongoose --save`

Теперь, когда пакет установлен, просто прикрепите его к проекту:
`const mongoose = require('mongoose');`

Также необходимо подключиться к MongoDB (локальной или внешней):
mongoose.connect('mongodb://localhost/myappdatabase');

###### Переходим к командам.

**Определение модели**
Перед тем, как работать с CRUD-операциями, нам необходима mongoose-модель. Эти модели -- это конструкторы, которые мы определяем. Они представляют (схематически) документы, которые могут быь сохранены и извлечены из БД. 

Mongoose схема.  mongoose схема -- это то, что используется для определения атрибутов для наших документов.

Mongoose методы. Методы могут также быть определены в mongoose схеме.
Пример модели для Users

```javascript
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```

Здесь рассмотрено, как схема определяется. Надо сначала прикрутить  mongoose и mongoose.Schema. Затем мы можем определить атрибуты в нашей userSchema для всего, что необходимо в профиле нашего юзера  user. Также заметьте, как можно определить вложенные объекты как в атрибуте meta.

Разрешенные типы данных SchemaTypes:
- ·         String
- ·         Number
- ·         Date
- ·         Buffer
- ·         Boolean
- ·         Mixed
- ·         ObjectId
- ·         Array


Затем создадим mongoose модель вызовом mongoose.model. Также можно создать специальные методы. Удобное, кстати, место для создания метода  хэширования пароля 

Пользовательский метод
```javascript
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema ...

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 

  return this.name;
};

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```
**ПРИМЕР ИСПОЛЬЗОВАНИЯ
ТЕПЕРЬ У НАС ЕСТЬ ПОЛЬЗОВАТЕЛЬСКАЯ МОДЕЛЬ И МЕТОД, КОТОРЫЙ МОЖНО ВЫЗВАТЬ В КОДЕ:**

```javascript
// if our user.js file is at app/models/user.js
const User = require('./app/models/user');

  
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
```

Это бесполезный пользовательский метод, но мысль в том, чтобы научиться создавать пользовательские методы и использовать их. Эту методику можно использовать для того, чтобы убедиться, что пароль hashed перед сохранением, для сравнения паролей, найти пользователей со сходными атрибутами и т. д.

##### Выполнение функции перед сохранением

Допустим, мы хотим иметь переменную created_at для фиксации времени создания записи. Можно использовать схему Schema pre метод для того, чтобы некоторые операции были выполнены перед сохранением объекта.

Ниже приведен код, который необходимо добавить к нашей схеме для того, чтобы сохранялась дата в переменной created_at при первом сохранении, и в updated_at при каждом последующем:

```javascript
// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  const currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
```
Теперь при каждом сохранении будет добавляться дата. Также это отличное место для хэширования паролей и проверки, не введен ли простой текст.
Мы также можем определить еще некоторые вещи в схемах и моделях, такие как статика и индексы. Для дополнительной информации -- mongoose docs.
Создание

Мы будем использовать метод User, созданный ранее. Встроенный в модели mongoose save метод используется для создания user:// grab the user model
```javascript
const User = require('./app/models/user');

// create a new user
const newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});
```



### Чтение
Может быть много причин для запроса базы данных пользователей (users). Может понадобиться отдельный пользователь, группа похожих пользователей, все пользователи и другие разные сценарии. Ниже несколько примеров:
##### Find all (найти все)
```javascript
// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});
Find one (найти один)
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

Find by ID (Найти по ID)
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});
```

### Запросы

Можно также пользоваться синтаксисом MongoDB query 
```javascript
// get any admin that was created in the past month

// get the date 1 month ago
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past month
  console.log(users);
});
```

### Редактирование (обновление)

Здесь мы будем находить отдельного пользователя, изменять некоторые атрибуты и затем сохранять.

##### Получить пользователя, затем обновить
```javascript
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});
```
Следует помнить, что мы создали функцию для изменения updated_at даты, это будет также происходить при сохранении save.
Найти и обновить
Есть более простой метод, в котором нет необходимости извлекать пользователя, модифицировать и затем сохранять. Можно простоприменить mongodb команду findAndModify.
```javascript
// find the user starlord55
// update him to starlord 88
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
```

##### Найти по ID и обновить
```javascript
// find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate(4, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
```


### Удаление

##### Получить USER, потом удалить
```javascript
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});
```

##### Найти и удалить
```javascript
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
Найти по ID и удалить
// find the user with id 4
User.findByIdAndRemove(4, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```


