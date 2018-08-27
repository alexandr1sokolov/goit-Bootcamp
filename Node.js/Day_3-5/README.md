# Node.js

## День 3
3. Работа с базами данных Mongo (Mongoose)(chapter5)
4. Модуль Request(chapter6)
5. Файловая структура проекта(chapter7)
6. Аутентификация в Node.js с использованием Passport.js(chapter8) - добавить
- [Ссылка на теорию - день 2](http://# "Ссылка на теорию - день 2ы")
- [Ссылка на код - день 2](http://# "Ссылка на код - день 2")


## Postman
Запускаем Postman

Переходим по ссылке https://api.chucknorris.io/

Тут мы можем из готового API получить забавные ответы. 

Для того что бы воспользоваться расширенными возможностями Postman в параметры мы можем задать например - category  - "movie"


### Создание таблицы mongodb


**Теорема Брюера**

  эвристическое утверждение о том, что в любой реализации распределённых вычислений возможно обеспечить не более двух из трёх следующих свойств:
  
   согласованность данных (англ. consistency) — во всех вычислительных узлах в один момент времени данные не противоречат друг другу;
   
   доступность (англ. availability) — любой запрос к распределённой системе завершается корректным откликом;
   
   устойчивость к разделению (англ. partition tolerance) — расщепление распределённой системы на несколько изолированных секций не приводит к некорректности отклика от каждой из секций.
   

#### CAP-теорема

**MongoDB**

   humongous – огромный
   
   документо-ориентированное хранение данных (JSON-подобная схема)
   не требует описания схем данных
   
   JavaScript в качестве языка запросов к базе данных

```javascript
db.students.insert({
    name: 'Дарья',
    nickname: 'Пиратка',
    group: 'ПИ-401'
})
```

##### Выборка данных

```javascript
db.students.find(){
    "_id" : <mark>ObjectId("56cc30e2e52c943bf62fff72")</mark>,
    "name" : "Дарья",
    "nickname" : "Пиратка",
    "group" : "ПИ-401"
}
```

##### Любой процесс на любой машине сам отвечает за генерацию ID'шников и не вступает в конфликты с другими
```javascript
ObjectId("56cc30e2e52c943bf62fff72")
56cc30e2 – time
e52c94 – mid
3bf6 – pid
2fff72 – inc

```
56cc30e2 e52c94 3bf6 2fff72
56cc3503 e52c94 3bf6 2fff73</span>

```javascript
function insertStudent(name, nickname, group) {
    var year = group.split('-').pop().slice(0, 1);
    db.students.insert({
        name: name,
        nickname: nickname,
        group: group,
        year: year
    });
}
```
```javascript
insertStudent('Пётр', 'petr', 'МТ-204')
```
```javascript
db.students.find()
{
    "_id" : ObjectId("56cc30e2e52c943bf62fff72"),
    "name" : "Дарья",
    "nickname" : "Пиратка",
    "group" : "ПИ-401"
}
{
    "_id" : ObjectId("56cc3a2ae52c943bf62fff74"),
    "name" : "Пётр",
    "nickname" : "petr",
    "group" : "МТ-204",
    "year" : "2"
}
```

### Выборка данных
```javascript
db.students.find({
    group: 'ПИ-301'
}})

```
```javascript
db.students.find({
    course: { $lt : 3 }
})
```
Для примера ищем у всех студентов, у кого 9 оценка по ДС равна 1
```javascript
{
    name: 'Дарья',
    course : 4,
    group : 'ПИ-401',
    grades: {
        javascript: [1,0.5,1,1,1,0.5,1,1,0.5,1],
        verstka: [1,1,1,1,1,0.5,1,0.5,0.5,0.5]
    }
}
```
Для этого будет достаточно просто записать
```javascript
db.students.find({
    "grades.javascript.9": 1
})
```
```javascript
db.students.update({
    group: /3\d{2}/
}, {
    $set: {
        course: "3"
    }
}, {
    multi: true
})
```

#### Удаление
```javascript
db.students.remove({
    course: 1
})
```
### Репликация и шардирование

##### Range Based шардирование
##### Hash Based шардирование

###### Range Based vs Hash Based

    Range Based проще настроить, но возможно неравномерное распределение данных
    Hash Based «соседние данные скорее всего будут в разных шардах», зато распределение максимально равномерно

### JOIN
#### Нормализация и денормализация
#####     Транзакции и конкурентность
   Транзакции в MongoDB https://habrahabr.ru/post/153321/ 

####    MongoDriver
   MongoDB Native  -https://github.com/mongodb/node-mongodb-native
   
   Mongoose https://www.npmjs.com/package/mongoose
   
#### Для чего нужно и не нужно использовать?
       Сильные стороны MongoDB
            - Большие объемы данных
            - Гибкая модель данных (schemeless)
            - Простота
          
        Слабые стороны MongoDB
            Нормализация
            
		Так для чего нужно?
            	- Быстрые прототипы
                - Блоги
                - Эксперименты
                - проект на хакатоне
				

## Express mongodb

Простая разработка приложений на Node.js и MongoDB с помощью Mongoose
Node.js и MongoDB  -- это пара, каждый из которой создан друг для друга. Умение использовать JSON сверх меры и JavaScript делают разработку очень простой. 

CRUD это то, что необходимо для большинства разрабатываемых приложений. Ведь информацию нужно постоянно создавать, читать, редактировать и удалять.

Сегодня мы разберем примеры кода для обработки операций CRUD в приложении, использующем Node.js, ExpressJS и MongoDB. Воспользуемся популярным Node-пакетом, mongoose .

Эти примеры кода использовались для создания Node.js RESTful API , так как при создании API необходимо использование операций CRUD. Для того, чтобы увидеть эти команды в действии, прочитайте этот пост. Эта статья есть нечто большее, чем ссылка на различные команды и способы их использования.

#### Что такое Mongoose?

mongoose -- пакет объектного моделирования для Node, который в основном работает как ORM, которые вы можете встретить в других языках (вроде Eloquent for Laravel).

Mongoose позволяет нам обращаться к MongoDB с помощью команд CRUD просто и легко. Для использования mongoose добавьте ее в свой Node-проект следующей командой:

`$ npm install mongoose --save`

Теперь, когда пакет установлен, просто прикрепите его к проекту:

`var mongoose = require('mongoose');`

Также необходимо подключиться к MongoDB (локальной или внешней):

`mongoose.connect('mongodb://localhost/myappdatabase');`

Переходим к командам.

##### Определение модели

Перед тем, как работать с CRUD-операциями, нам необходима mongoose-модель. Эти модели -- это конструкторы, которые мы определяем. Они представляют (схематически) документы, которые могут быь сохранены и извлечены из БД. 

##### Mongoose схема.
mongoose схема -- это то, что используется для определения атрибутов для наших документов.

Mongoose методы. Методы могут также быть определены в mongoose схеме.

##### Пример модели для Users

```javascript
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
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
·         String
·         Number
·         Date
·         Buffer
·         Boolean
·         Mixed
·         ObjectId
·         Array

Затем создадим mongoose модель вызовом mongoose.model. Также можно создать специальные методы. Удобное, кстати, место для создания метода  хэширования пароля 

#### Пользовательский метод

```javascript
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema ...

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
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```

ПРИМЕР ИСПОЛЬЗОВАНИЯ

ТЕПЕРЬ У НАС ЕСТЬ ПОЛЬЗОВАТЕЛЬСКАЯ МОДЕЛЬ И МЕТОД, КОТОРЫЙ МОЖНО ВЫЗВАТЬ В КОДЕ:

```javascript
// if our user.js file is at app/models/user.js
var User = require('./app/models/user');
  
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

Выполнение функции перед сохранением

Допустим, мы хотим иметь переменную created_at для фиксации времени создания записи. Можно использовать схему Schema pre метод для того, чтобы некоторые операции были выполнены перед сохранением объекта.

Ниже приведен код, который необходимо добавить к нашей схеме для того, чтобы сохранялась дата в переменной created_at при первом сохранении, и в updated_at при каждом последующем:

```javascript
// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
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

### Создание

Мы будем использовать метод User, созданный ранее. Встроенный в модели mongoose save метод используется для создания user:

```javascript
// grab the user model
var User = require('./app/models/user');

// create a new user
var newUser = User({
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

```javascript
Find all (найти все)
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

**Можно также пользоваться синтаксисом MongoDB query** 

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

#### Редактирование (обновление)

Здесь мы будем находить отдельного пользователя, изменять некоторые атрибуты и затем сохранять.

Получить пользователя, затем обновить

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

**Найти и обновить**

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

**Найти по ID и обновить**

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

**Получить USER, потом удалить**

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

**Найти и удалить**

```javascript
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```
**Найти по ID и удалить**

```javascript
// find the user with id 4
User.findByIdAndRemove(4, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```






