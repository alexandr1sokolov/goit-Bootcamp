##  Как работает Passport.js

**PassportJS** — это middleware для авторизации под node.js. Passport поддерживает авторизацию с помощью огромного количества сервисов, включая «ВКонтакте» и прочие твиттеры. Список сервисов можно просмотреть здесь. Я хочу немного рассказать о том, как работает этот middleware на примере самой обычной авторизации с помощью логина и пароля.

Зависимости:

    «express»: «3.3.7»,
    «passport»: "~0.1.17",
    «passport-local»: "~0.1.6",
    «mongoose»: "~3.8.0",


Так же я буду использовать для удобства несколько дополнительных утилит. Без них вполне можно обойтись:

    «jade»: "*"
    «bootable»: "~0.1.0"
    «nconf»: "~0.6.8"
    «require-tree»: "~0.3.2"
    «winston»: "~0.7.2"

#### Модель пользователя

Для начала, я думаю, можно создать модель пользователя:

```javascript
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});
mongoose.model('user', UserSchema);
```

Здесь можно было бы посолить пароль, и добавить немного магии безопасности для бога безопасности, но я оставляю это на вас =).

#### Стратегия авторизации

##### Верификация

Подключим и настроим стратегию авторизации.

```javascript
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(username, password,done){
  User.findOne({ username : username},function(err,user){
    return err 
      ? done(err)
      : user
        ? password === user.password
          ? done(null, user)
          : done(null, false, { message: 'Incorrect password.' })
        : done(null, false, { message: 'Incorrect username.' });
  });
}));
```

LocalStrategy принимает 2 параметра: объект с опциями и middleware для верификации пользователя.
По-умолчанию, если в `LocalStrategy` не передавать никаких опций — стратегия будет искать параметры для авторизации пользователя в формах с именами `username` и `password`. При желании, можно указать свои имена форм, как я, собственно, и сделал.
Второй аргумент — middleware — принимает параметры `username`, `passport` и `done`. В done, вторым аргументом, передаем объект пользователя, если такой есть.

#### Привязка авторизации к пользователю

В типичном веб-приложении, учетные данные, используемые для аутентификации пользователя будет передаваться только во время авторизации. Если все в порядке, и пользователь существует, то информация о нем сохраняется в сессию, а идентификатор сессии, в свою очередь, сохраняется в cookies браузера.

Каждый последующй запрос будет содержать cookies, с помощью которого passport сможет опознать пользователя, и достать его данные из сессии. Для того, чтобы сохранять или доставать пользовательские данные из сессии, паспорт использует функции `passport.serializeUser()` и `passport.deserializeUser()`.

```javascript
passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user){
    err 
      ? done(err)
      : done(null,user);
  });
});

```

#### Подключение Passport к Express

Окей, с этим разобрались, теперь нужно подключить Passport к Express:

```javascript
// Middlewares, которые должны быть определены до passport:
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'SECRET' }));
 
// Passport:
app.use(passport.initialize());
app.use(passport.session());
```

### Создание роутера и контроллеров

Настало время настройки роутера. Привяжем запросы к соответствующим контроллерам:

```javascript
// Auth system
app.post('/login',                  controllers.users.login);
app.post('/register',               controllers.users.register);
app.get('/logout',                  controllers.users.logout);
```

#### Теперь создадем сами контроллеры:
 ```javascript
// Здесь мы проверяем, передаем данные о пользователе в функцию верификации, котоую мы определили выше.

// Вообще, passport.authenticate() вызывает метод req.logIn автоматически, здесь же я указал это явно. Это добавляет удобство в отладке. Например, можно вставить сюда console.log(), чтобы посмотреть, что происходит...

// При удачной авторизации данные пользователя будут храниться в req.user

module.exports.login = function(req, res, next) {
  passport.authenticate('local',
    function(err, user, info) {
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/private');
            })
          : res.redirect('/');
    }
  )(req, res, next);
};

// Здесь все просто =)
module.exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

// Регистрация пользователя. Создаем его в базе данных, и тут же, после сохранения, вызываем метод `req.logIn`, авторизуя пользователя

module.exports.register = function(req, res, next) {
  var user = new User({ username: req.body.email, password: req.body.password});
  user.save(function(err) {
    return err
      ? next(err)
      : req.logIn(user, function(err) {
        return err
          ? next(err)
          : res.redirect('/private');
      });
  });
};

```

### Проверка авторизации

Проверку авторизации можно делать с помощью req.isAuthenticated(). Я вынесу проверку в middleware.

```javascript
exports.mustAuthenticatedMw = function (req, res, next){
  req.isAuthenticated()
    ? next()
    : res.redirect('/');
};

```

##### И добавлю в routes.

 ```javascript
 App.all('private', mustAuthenticatedMw);
  App.all('private/*', mustAuthenticatedMw);
```

##### HTML

Осталось создать форму регистрации, авторизации, и кнопку логаута.

Регистрация:

```javascript
form(action='/register' method='post')
  fieldset
    label(for='email') Email
    input(type='email' name='email' placeholder='Your Email')
    label(for='password') Password
    input(type='password' name='password' placeholder='Your Password')
    button(type='Register')

```

#### Логин

h4 Login to your account
```javascript
form(action='/login' method='post')
  fieldset
    label(for='email') Email
    input(type='email' name='email' placeholder='Your Email')
    label(for='password') Password
    input(type='password' name='password' placeholder='Your Password')
    button(type='Login')
```

#### Логаут

`a(href='/logout') logout`
