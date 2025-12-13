# 🐸 Frog Site - Полная документация проекта

*Документация создана: 13.12.2025 10:33:34*
*Путь к проекту: `/home/hopper-main/frog-site`*

## 📋 Оглавление
1. [HTML файлы](#html-файлы)
2. [CSS файлы](#css-файлы)
3. [JavaScript файлы](#javascript-файлы)
4. [База данных](#база-данных)
5. [Структура проекта](#структура-проекта)
6. [Статистика](#статистика)

---

## 📄 HTML файлы

### 1. `404.html`
**Расположение:** `404.html`

**Назначение:** Страница ошибки 404 (не найдено)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

---

### 2. `basket.html`
**Расположение:** `basket.html`

**Назначение:** Страница корзины покупок

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ЛИ: Магазин2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/png" href="./assets/favicon.ico">
</head>
  <body>
    <header>

        <!-- кнопка лягушки игрушки -->
            <div id="header-logo">
                <a href="./index.html" id="logo-link">
                    <img id="header-frog" src="./assets/images/header-frog.svg" width="50"; height="50";>
                    <p id="header-text-frog">Лягушки<br>игрушки</p>
                </a>
            </div>
 
        <!-- кнопки сайтов -->
        <div id="header-buttons">
           <a href="./shop.html"><button class = "header-button btn btn-outline-light border-2"> Магазин </button></a>
            <a href=""><button class = "header-button btn btn-outline-light border-2" disabled> Контакты </button></a>
           <a href="./basket.html" class="position-relative">
    <button class="header-button btn btn-outline-light border-2">
        🛒 Корзина
        <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none">
            0
        </span>
    </button>
</a>
            <a href="./login.html" id="login-logout-link"><button class="header-button btn btn-light text-success"> Войти </button></a>
        </div>
  
    </header>

<!-- ОСНОВНОЕ СОДЕРЖАНИЕ -->
  <div class="main-container">
  <div class="container py-4">
    
    <!-- Заголовок -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="text-success">
        🛒 Корзина покупок
      </h1>
      <div>
        <span id="cart-total-items" class="badge bg-primary fs-6">0 товаров</span>
      </div>
    </div>
    
    <!-- Проверка авторизации -->
    <div id="auth-warning" class="alert alert-warning d-none">
      <strong>⚠️ Внимание!</strong> Вы не авторизованы. 
      <a href="./login.html" class="alert-link">Войдите</a>, чтобы сохранить корзину.
    </div>
    
    <!-- Контейнер корзины -->
    <div class="row">
      <!-- Список товаров -->
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0">Выбранные товары</h5>
          </div>
          <div class="card-body">
            <div id="cart-items-container">
              <!-- Товары будут загружены сюда -->
              <div class="text-center py-5">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Загрузка...</span>
                </div>
                <p class="mt-2">Загружаем корзину...</p>
              </div>
            </div>
            
            <!-- Пустая корзина -->
            <div id="empty-cart" class="text-center py-5 d-none">
              <div class="mb-3">
                <img src="./assets/images/header-frog.svg" width="80" height="80" class="opacity-50">
              </div>
              <h4 class="text-muted">Корзина пуста</h4>
              <p class="text-muted">Добавьте товары из магазина</p>
              <a href="./shop.html" class="btn btn-success">🛍️ Перейти в магазин</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Итого и оформление -->
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0">Итого</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-2">
                <span>Товары:</span>
                <span id="cart-items-price">0 ₽</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Доставка:</span>
                <span id="cart-delivery">Бесплатно</span>
              </div>
              <hr>
              <div class="d-flex justify-content-between fw-bold fs-5">
                <span>К оплате:</span>
                <span id="cart-total-price" class="text-success">0 ₽</span>
              </div>
            </div>
            
            <div class="d-grid gap-2">
              <button id="checkout-btn" class="btn btn-success btn-lg" disabled>
                💳 Оформить заказ
              </button>
              <button id="clear-cart-btn" class="btn btn-outline-danger">
                🗑️ Очистить корзину
              </button>
              <a href="./shop.html" class="btn btn-outline-secondary">
                ← Продолжить покупки
              </a>
            </div>
          </div>
        </div>
        
        <!-- Информация о доставке -->
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">📦 Информация о доставке</h6>
            <ul class="small text-muted mb-0">
              <li>Бесплатная доставка от 3000 ₽</li>
              <li>Срок доставки: 3-5 дней</li>
              <li>Оплата при получении</li>
              <li>Возврат в течение 14 дней</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<footer>
  <div id="footer_content">
    <h3> Контакты</h3>
    <h6> Почта: 
      <a id="text_none_style" href="mailto:email@example.com">
        photiclickbruh@vk.com</a></h6>
    <h6> Группа: 
      <a id="text_none_style" href="https://npi-tu.ru/schedule/schedule.html?for=student&faculty=2&year=3&group=%D0%98%D0%A1%D0%A2%D0%B0">
        090302-ИСТа-о23</a></h6>
  </div>
</footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="/js/auth-header.js"></script>
    <script src="/js/basket.js"></script>
  </body>
</html>

```

---

### 3. `index.html`
**Расположение:** `index.html`

**Назначение:** Главная страница сайта

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ЛИ: Главная</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/png" href="./assets/favicon.ico">
</head>

  <body>

    <!-- ШАПКА -->
    <header>
        <!-- кнопка лягушки игрушки -->
            <div id="header-logo">
                <a href="./index.html" id="logo-link">
                    <img id="header-frog" src="./assets/images/header-frog.svg" width="50"; height="50";>
                    <p id="header-text-frog">Лягушки<br>игрушки</p>
                </a>
            </div>
        
        <!-- кнопки сайтов -->
        <div id="header-buttons">
           <a href="./shop.html"><button class = "header-button btn btn-outline-light border-2"> Магазин </button></a>
            <a href=""><button class = "header-button btn btn-outline-light border-2" disabled> Контакты </button></a>
           <a href="./basket.html" class="position-relative">
    <button class="header-button btn btn-outline-light border-2">
        🛒 Корзина
        <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none">
            0
        </span>
    </button>
</a>
             <a href="./login.html" id="login-logout-link"><button class="header-button btn btn-light text-success"> Войти </button></a>
        </div>
    </header>


<!-- ОСНОВНОЕ СОДЕРЖАНИЕ -->
<div class="main-container">

    <!-- КАРУСЕЛЬ - ПРЕЗЕНТАЦИЯ -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
            <!-- Элемент 1 -->
        <div class="carousel-item active">
        <img src="./assets/images/HomeImg" class="d-block w-100" alt="Добро пожаловать">
        <div class="carousel-caption d-none d-md-block">
            <h5>Первый слайд</h5>
            <p>Мелкое описание.</p>
        </div>
        </div>
            <!-- Элемент 2 -->
        <div class="carousel-item">
        <img src="./assets/images/HomeImg" class="d-block w-100" alt="Мы крутые как наши игры">
        <div class="carousel-caption d-none d-md-block">
            <h5>Второй слайд</h5>
            <p>Мелкое описание.</p>
        </div>
        </div>
            <!-- Элемент 3 -->
        <div class="carousel-item">
        <img src="./assets/images/HomeImg" class="d-block w-100" alt="Зарегистрируйтесь и начните играть сейчас">
        <div class="carousel-caption d-none d-md-block">
            <h5>Третий слайд</h5>
            <p>Мелкое описание.</p>
        </div>
        </div>
    </div>

    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
    </div>

</div>


<footer>
  <div id="footer_content">
    <h3> Контакты</h3>
    <h6> Почта: 
      <a id="text_none_style" href="mailto:email@example.com">
        photiclickbruh@vk.com</a></h6>
    <h6> Группа: 
      <a id="text_none_style" href="https://npi-tu.ru/schedule/schedule.html?for=student&faculty=2&year=3&group=%D0%98%D0%A1%D0%A2%D0%B0">
        090302-ИСТа-о23</a></h6>
  </div>
</footer>


    <script src="/js/backend.js"></script> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="/js/auth-header.js"></script>
  </body>
</html>

```

---

### 4. `login.html`
**Расположение:** `login.html`

**Назначение:** Страница входа в аккаунт

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ЛИ: Войти</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/png" href="./assets/favicon.ico">
  
</head>
  <body>
    <header>
        <!-- кнопка лягушки игрушки -->
            <div id="header-logo">
                <a href="./index.html" id="logo-link">
                    <img id="header-frog" src="./assets/images/header-frog.svg" width="50"; height="50";>
                    <p id="header-text-frog">Лягушки<br>игрушки</p>
                </a>
            </div>
        
        <!-- кнопки сайтов -->
        <div id="header-buttons">
            <a href="./shop.html"><button class = "header-button btn btn-outline-light border-2"> Магазин </button></a>
            <a href=""><button class = "header-button btn btn-outline-light border-2" disabled> Контакты </button></a>
           <a href="./basket.html" class="position-relative">
    <button class="header-button btn btn-outline-light border-2">
        🛒 Корзина
        <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none">
            0
        </span>
    </button>
</a>
            <a href="./login.html" id="login-logout-link"><button class="header-button btn btn-light text-success"> Войти </button></a>
        </div>
    </header>

  <!-- ОСНОВНОЕ СОДЕРЖАНИЕ -->  
  <div class="main-container">
  
    <!-- ФОРМА ВХОДА -->
    <div id="login-container">

      <div>
        <h1 style="margin-bottom: 1em">Вход</h1>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Почта</label>
        <input type="email" class="form-control" id="inputMail" placeholder="your-name@mail.com">
      </div>
      
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="*Сложный пароль*">
        <a href="./register.html">Зарегистрироваться</a>
      </div>
      
      <div>
        <button type="button" class="btn btn-primary" id="doLoginButton">Вход</button>
      </div>

    </div>

  </div>

<footer>
  <div id="footer_content">
    <h3> Контакты</h3>
    <h6> Почта: 
      <a id="text_none_style" href="mailto:email@example.com">
        photiclickbruh@vk.com</a></h6>
    <h6> Группа: 
      <a id="text_none_style" href="https://npi-tu.ru/schedule/schedule.html?for=student&faculty=2&year=3&group=%D0%98%D0%A1%D0%A2%D0%B0">
        090302-ИСТа-о23</a></h6>
  </div>
</footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    
    <script src="/js/log-reg.js"></script>
    <script src="/js/auth-header.js"></script>
  </body>
</html>
```

---

### 5. `register.html`
**Расположение:** `register.html`

**Назначение:** Страница регистрации нового пользователя

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ЛИ: Войти</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/png" href="./assets/favicon.ico">
</head>
  <body>
    <header>
        <!-- кнопка лягушки игрушки -->
            <div id="header-logo">
                <a href="./index.html" id="logo-link">
                    <img id="header-frog" src="./assets/images/header-frog.svg" width="50"; height="50";>
                    <p id="header-text-frog">Лягушки<br>игрушки</p>
                </a>
            </div>
        
        <!-- кнопки сайтов -->
        <div id="header-buttons">
            <a href="./shop.html"><button class = "header-button btn btn-outline-light border-2"> Магазин </button></a>
            <a href=""><button class = "header-button btn btn-outline-light border-2" disabled> Контакты </button></a>
           <a href="./basket.html" class="position-relative">
    <button class="header-button btn btn-outline-light border-2">
        🛒 Корзина
        <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none">
            0
        </span>
    </button>
</a>
            <a href="./login.html" id="login-logout-link"><button class="header-button btn btn-light text-success"> Войти </button></a>
        </div>
    </header>

  <!-- ОСНОВНОЕ СОДЕРЖАНИЕ -->  
  <div class="main-container">
  
    <!-- ФОРМА ВХОДА -->
    <div id="login-container">

      <div>
        <h1 style="margin-bottom: 1em">Регистрация</h1>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Почта</label>
        <input type="email" class="form-control" id="inputMail" placeholder="your-name@mail.com">
      </div>
      
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="*Сложный пароль*">
        <input type="password" class="form-control" id="checkPassword" placeholder="Подтвердите пароль">
      </div>
      
      <div>
        <button type="button" class="btn btn-success" id="doRegButton">Зарегистрироваться</button>
      </div>


    </div>

  </div>

<footer>
  <div id="footer_content">
    <h3> Контакты</h3>
    <h6> Почта: 
      <a id="text_none_style" href="mailto:email@example.com">
        photiclickbruh@vk.com</a></h6>
    <h6> Группа: 
      <a id="text_none_style" href="https://npi-tu.ru/schedule/schedule.html?for=student&faculty=2&year=3&group=%D0%98%D0%A1%D0%A2%D0%B0">
        090302-ИСТа-о23</a></h6>
  </div>
</footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="/js/log-reg.js"></script>
    <script src="/js/auth-header.js"></script>
  </body>
</html>
```

---

### 6. `shop.html`
**Расположение:** `shop.html`

**Назначение:** Страница магазина с товарами

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ЛИ: Магазин</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/png" href="./assets/favicon.ico">
</head>
 
<body>

    <header>
        <!-- кнопка лягушки игрушки -->
    <div id="header-logo">
    <a href="./index.html" id="logo-link">
        <img id="header-frog" src="./assets/images/header-frog.svg" width="50"; height="50";>
        <p id="header-text-frog">Лягушки<br>игрушки</p>
    </a>
    </div>
        
        <!-- кнопки сайтов -->
    <div id="header-buttons">
        <a href="./shop.html"><button class = "header-button btn btn-outline-light border-2"> Магазин </button></a>
        <a href=""><button class = "header-button btn btn-outline-light border-2" disabled> Контакты </button></a>
       <a href="./basket.html" class="position-relative">
    <button class="header-button btn btn-outline-light border-2">
        🛒 Корзина
        <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none">
            0
        </span>
    </button>
</a>
        <a href="./login.html" id="login-logout-link"><button class="header-button btn btn-light text-success"> Войти </button></a>
    </div>
    
  </header>



<!-- ОСНОВНОЕ СОДЕРЖАНИЕ -->
<div class="main-container">
  <!-- СЕТКА КАРТОЧЕК -->
  <div id="cards-net">
  </div>
  
</div>


<footer>
  <div id="footer_content">
    <h3> Контакты</h3>
    <h6> Почта: 
      <a id="text_none_style" href="mailto:email@example.com">
        photiclickbruh@vk.com</a></h6>
    <h6> Группа: 
      <a id="text_none_style" href="https://npi-tu.ru/schedule/schedule.html?for=student&faculty=2&year=3&group=%D0%98%D0%A1%D0%A2%D0%B0">
        090302-ИСТа-о23</a></h6>
  </div>
</footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="/js/shop.js"></script>
    <script src="/js/auth-header.js"></script>
  </body>
</html>

```

---

## 🎨 CSS файлы

### 1. `style.css`
**Расположение:** `css/style.css`

**Назначение:** Основные стили всего сайта

```css
header{
  height: 80px;
  width: 100%;
  background-color: #69893C;

  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
}

.main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
    width: 100%;
    min-height: 48em;
}

footer{
  display: flex;
  justify-content: center;

  height: 120px;
  width: 100%;
  background-color: #69893C;
  padding-top: 1em, 1em, 1em;
}

#footer_content{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#header-logo{
 float: left;
 display: flex;
 flex-direction: row;
}

#logo-link {
    display: flex;
}

#header-frog{
    alt: "Лягушка";
}
#header-text-frog{
    display: flex;
    color: rgb(255, 255, 255);
    text-decoration: none;
    width: 4em; 
}

#header-buttons{
    float: right;
}

.header-button{
    height: auto;
    width: auto;
    border-radius: 50px;
}


#cards-net{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-items: center; /* Центрируем карточки в ячейках */
    gap: 1.5rem;
    width: 100%;
    max-width: 1200px; /* Ограничиваем максимальную ширину */
    margin: 0 auto; /* Центрируем всю сетку */
    padding: 1rem;
}

.card{
    width: 100%;
    max-width: 280px; /* Максимальная ширина карточки */
    height: auto;
    transition: all 0.3s ease;
}

.btn-primary{
    margin-top: 2em;
    background-color: #69893C;
    border-color: #69893C;
}

/* Все активные состояния */
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
    background-color: #5a7733;
    border-color: #5a7733;
}

/* Заблокированное состояние (опционально) */
.btn-primary:disabled {
    background-color: #69893C;
    border-color: #69893C;
    opacity: 0.65;
}

#login-container{
    background-color: #CCCCCC;
    height: 40em;
    width: 35em;
    border-radius: 15%;
    padding: 1em;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#text_none_style{
  text-decoration: none; /* Убирает подчеркивание */
  color: #333; /* 
  Меняет синий цвет (например, на темно-серый) */
}


/* Пагинация */
.pagination-container {
    width: 100%;
    text-align: center;
    margin: 2rem 0;
}

.pagination .page-item.active .page-link {
    background-color: #69893C;
    border-color: #69893C;
    color: white;
}

.pagination .page-link {
    color: #69893C;
    cursor: pointer;
}

.pagination .page-link:hover {
    background-color: #e9ecef;
    color: #5a7733;
}

/* Панель админа */
.admin-panel {
    max-width: 1200px;
    margin: 0 auto 2rem auto;
    width: 100%;
}

.admin-panel:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Модальные окна */
.modal-content {
    border: none;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Карточки товаров */
.card {
    flex: 0 0 auto; /* Не даем растягиваться */
    width: 280px; /* Фиксированная ширина */
    margin: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

/* Кнопки управления */
.btn-group .btn {
    border-radius: 5px !important;
}

.btn-outline-warning {
    color: #ffc107;
    border-color: #ffc107;
}

.btn-outline-warning:hover {
    background-color: #ffc107;
    color: #000;
}

.btn-outline-danger {
    color: #dc3545;
    border-color: #dc3545;
}

.btn-outline-danger:hover {
    background-color: #dc3545;
    color: #fff;
}
```

---

## ⚡ JavaScript файлы

### 1. `auth-header.js`
**Расположение:** `js/auth-header.js`

**Назначение:** Логика авторизации в шапке сайта

```javascript
// auth-header.js - управление кнопкой Войти/Выйти
document.addEventListener('DOMContentLoaded', function() {
    updateLoginButton();
    updateCartCount();
});

function updateLoginButton() {
    const loginLink = document.getElementById('login-logout-link');
    if (!loginLink) return;
    
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        // Пользователь вошел - меняем на "Выйти"
        loginLink.href = 'javascript:void(0)';
        loginLink.onclick = logout;
        
        const button = loginLink.querySelector('button');
        if (button) {
            button.innerHTML = '🚪 Выйти';
            button.className = 'header-button btn btn-outline-danger';
        }
        
        // Добавляем информацию о пользователе рядом
        const userInfo = document.createElement('span');
        userInfo.className = 'text-light ms-2';
        userInfo.innerHTML = `👋 ${user.login}`;
        loginLink.parentNode.insertBefore(userInfo, loginLink.nextSibling);
        
    } else {
        const button = loginLink.querySelector('button');
        if (button) {
            button.innerHTML = 'Войти';
            button.className = 'header-button btn btn-light text-success';
        }
    }
}

function logout() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            const oldCart = localStorage.getItem('cart');
            if (oldCart) {
                sessionStorage.setItem(`old_cart_${user.id}`, oldCart);
            }
        }
        
        localStorage.clear();
        
        alert('Вы успешно вышли');
        location.reload();
    }
}

// Функция обновления счетчика корзины
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCountElement = document.querySelector('#cart-count');
    
    if (cartCountElement && cart.length > 0) {
        cartCountElement.textContent = cart.length;
        cartCountElement.classList.remove('d-none');
    } else if (cartCountElement) {
        cartCountElement.classList.add('d-none');
    }
}
```

---

### 2. `basket.js`
**Расположение:** `js/basket.js`

**Назначение:** Логика работы корзины покупок

```javascript
// basket.js - логика корзины
document.addEventListener('DOMContentLoaded', function() {
    console.log('🛒 Страница корзины загружена');
    
    const API_URL = 'http://localhost:3000/api';
    const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    
    // Элементы DOM
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyCartElement = document.getElementById('empty-cart');
    const authWarning = document.getElementById('auth-warning');
    const cartTotalItems = document.getElementById('cart-total-items');
    const cartItemsPrice = document.getElementById('cart-items-price');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    
    // Показываем предупреждение если не авторизован
    if (!currentUser && authWarning) {
        authWarning.classList.remove('d-none');
    }
    
    // Загружаем корзину
    loadCart();
    
    // Обработчики кнопок
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // Функция загрузки корзины
    async function loadCart() {
        try {
            // Получаем ID игр из корзины
            const cart = getCart();
            
            if (cart.length === 0) {
                showEmptyCart();
                updateCartSummary(0, 0);
                return;
            }
            
            console.log(`📥 Загружаю ${cart.length} игр из корзины...`);
            
            // Показываем загрузку
            cartItemsContainer.innerHTML = `
                <div class="text-center py-4">
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Загрузка...</span>
                    </div>
                    <p class="mt-2">Загружаем товары...</p>
                </div>
            `;
            
            // Загружаем информацию о каждой игре
            const gamesPromises = cart.map(gameId => getGameInfo(gameId));
            const gamesResults = await Promise.allSettled(gamesPromises);
            
            // Фильтруем успешно загруженные игры
            const games = gamesResults
                .filter(result => result.status === 'fulfilled' && result.value)
                .map(result => result.value);
            
            console.log(`✅ Успешно загружено ${games.length} игр`);
            
            // Если все игры не найдены
            if (games.length === 0) {
                showEmptyCart();
                updateCartSummary(0, 0);
                return;
            }
            
            // Показываем игры
            displayCartItems(games);
            
            // Обновляем итоги
            const totalPrice = calculateTotalPrice(games);
            updateCartSummary(games.length, totalPrice);
            
        } catch (error) {
            console.error('❌ Ошибка загрузки корзины:', error);
            cartItemsContainer.innerHTML = `
                <div class="alert alert-danger">
                    <h5>Ошибка загрузки корзины</h5>
                    <p>${error.message}</p>
                    <button onclick="location.reload()" class="btn btn-sm btn-outline-danger">
                        Обновить страницу
                    </button>
                </div>
            `;
        }
    }
    
    // Функция получения информации об игре
    async function getGameInfo(gameId) {
        try {
            const response = await fetch(`${API_URL}/games/${gameId}`);
            
            if (!response.ok) {
                if (response.status === 404) {
                    console.warn(`⚠️ Игра ID ${gameId} не найдена, удаляю из корзины`);
                    removeFromCart(gameId);
                }
                return null;
            }
            
            const data = await response.json();
            return data.game;
            
        } catch (error) {
            console.error(`❌ Ошибка загрузки игры ${gameId}:`, error);
            return null;
        }
    }
    
    // Функция отображения товаров в корзине
    function displayCartItems(games) {
        if (games.length === 0) {
            showEmptyCart();
            return;
        }
        
        // Очищаем контейнер
        cartItemsContainer.innerHTML = '';
        
        // Скрываем сообщение о пустой корзине
        emptyCartElement.classList.add('d-none');
        
        // Создаем карточки для каждой игры
        games.forEach(game => {
            const cartItem = createCartItemElement(game);
            cartItemsContainer.appendChild(cartItem);
        });
    }
    
    // Функция создания элемента товара в корзине
    function createCartItemElement(game) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item border-bottom pb-3 mb-3';
        itemDiv.dataset.gameId = game.id;
        
        // Форматируем цену
        const formattedPrice = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(game.cost);
        
        itemDiv.innerHTML = `
            <div class="row align-items-center">
                <!-- Изображение -->
                <div class="col-3 col-md-2">
                    <img src="./assets/images/cards/${game.picture || 'default-frog.jpg'}" 
                         class="img-fluid rounded" 
                         alt="${game.name}"
                         style="height: 80px; object-fit: cover;"
                         onerror="this.src='./assets/images/cards/default-frog.jpg'">
                </div>
                
                <!-- Информация -->
                <div class="col-6 col-md-7">
                    <h6 class="mb-1">${game.name}</h6>
                    <p class="text-muted small mb-1">
                        ${game.description || 'Мягкая игрушка лягушка'}
                    </p>
                    <div class="d-flex align-items-center">
                        <span class="badge bg-secondary me-2">ID: ${game.id}</span>
                        <small class="text-muted">Владелец: ${game.owner_login || 'Неизвестно'}</small>
                    </div>
                </div>
                
                <!-- Цена и управление -->
                <div class="col-3 col-md-3 text-end">
                    <div class="mb-2">
                        <span class="fw-bold text-success">${formattedPrice}</span>
                    </div>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-danger remove-item-btn" 
                                data-game-id="${game.id}"
                                title="Удалить">
                            ✕
                        </button>
                        <button class="btn btn-outline-secondary view-item-btn"
                                onclick="window.open('./shop.html#game-${game.id}', '_blank')"
                                title="Посмотреть">
                            👁
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Добавляем обработчик для кнопки удаления
        const removeBtn = itemDiv.querySelector('.remove-item-btn');
        if (removeBtn) {
            removeBtn.addEventListener('click', function() {
                const gameId = this.getAttribute('data-game-id');
                removeCartItem(gameId, itemDiv);
            });
        }
        
        return itemDiv;
    }
    
    // Функция удаления товара из корзины
    function removeCartItem(gameId, element) {
        if (!confirm('Удалить этот товар из корзины?')) {
            return;
        }
        
        // Удаляем из localStorage
        removeFromCart(gameId);
        
        // Анимация удаления
        if (element) {
            element.style.opacity = '0.5';
            element.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                element.remove();
                
                // Перезагружаем корзину
                loadCart();
                
                // Показываем уведомление
                showNotification('Товар удален из корзины', 'warning');
                
            }, 300);
        }
    }
    
    // Функция очистки всей корзины
    function clearCart() {
        const cart = getCart();
        
        if (cart.length === 0) {
            alert('Корзина уже пуста!');
            return;
        }
        
        if (confirm(`Очистить всю корзину (${cart.length} товаров)?`)) {
            localStorage.removeItem('cart');
            
            // Показываем пустую корзину
            showEmptyCart();
            updateCartSummary(0, 0);
            
            // Показываем уведомление
            showNotification('Корзина очищена', 'success');
            
            // Обновляем счетчик в шапке
            updateHeaderCartCount();
        }
    }
    
    // Функция оформления заказа
    function checkout() {
        const cart = getCart();
        const currentUser = JSON.parse(localStorage.getItem('user'));
        
        if (cart.length === 0) {
            alert('Корзина пуста!');
            return;
        }
        
        if (!currentUser) {
            alert('Для оформления заказа необходимо войти в систему!');
            window.location.href = './login.html';
            return;
        }
        
        // Здесь будет логика оформления заказа
        const totalPrice = calculateTotalPriceFromCart();
        
        if (confirm(`Оформить заказ на сумму ${totalPrice} ₽?`)) {
            // Имитация оформления заказа
            checkoutBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Оформляем...';
            checkoutBtn.disabled = true;
            
            setTimeout(() => {
                // В реальном приложении здесь будет запрос к API
                alert(`✅ Заказ оформлен!\nСумма: ${totalPrice} ₽\nТоваров: ${cart.length}\n\nС вами свяжутся для подтверждения.`);
                
                // Очищаем корзину после успешного оформления
                localStorage.removeItem('cart');
                showEmptyCart();
                updateCartSummary(0, 0);
                updateHeaderCartCount();
                
                // Возвращаем кнопку в исходное состояние
                checkoutBtn.innerHTML = '💳 Оформить заказ';
                checkoutBtn.disabled = false;
                
            }, 2000);
        }
    }
    
    // Функция показа пустой корзины
    function showEmptyCart() {
        cartItemsContainer.innerHTML = '';
        emptyCartElement.classList.remove('d-none');
        checkoutBtn.disabled = true;
    }
    
    // Функция обновления итогов
    function updateCartSummary(itemCount, totalPrice) {
        const formattedPrice = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(totalPrice);
        
        if (cartTotalItems) {
            cartTotalItems.textContent = `${itemCount} ${getWordForm(itemCount, ['товар', 'товара', 'товаров'])}`;
        }
        
        if (cartItemsPrice) {
            cartItemsPrice.textContent = `${formattedPrice}`;
        }
        
        if (cartTotalPrice) {
            cartTotalPrice.textContent = `${formattedPrice}`;
        }
        
        // Активируем кнопку оформления если есть товары
        if (checkoutBtn) {
            checkoutBtn.disabled = itemCount === 0;
        }
    }
    
    // ================ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ================
    
    // Получить корзину из localStorage
    function getCart() {
        try {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            return Array.isArray(cart) ? cart : [];
        } catch (error) {
            console.error('Ошибка чтения корзины:', error);
            return [];
        }
    }
    
    // Удалить товар из корзины
    function removeFromCart(gameId) {
        const cart = getCart();
        const newCart = cart.filter(id => id.toString() !== gameId.toString());
        localStorage.setItem('cart', JSON.stringify(newCart));
        
        // Обновляем счетчик в шапке
        updateHeaderCartCount();
    }
    
    // Рассчитать общую стоимость
    function calculateTotalPrice(games) {
        return games.reduce((total, game) => total + (game.cost || 0), 0);
    }
    
    // Рассчитать стоимость из текущей корзины
    function calculateTotalPriceFromCart() {
        const cart = getCart();
        // В реальном приложении здесь нужно загрузить игры и посчитать
        // Сейчас вернем примерную сумму
        return cart.length * 1000; // Пример: 1000 руб за товар
    }
    
    // Обновить счетчик в шапке
    function updateHeaderCartCount() {
        const cart = getCart();
        const cartCountElement = document.querySelector('#cart-count');
        
        if (cartCountElement) {
            if (cart.length > 0) {
                cartCountElement.textContent = cart.length;
                cartCountElement.classList.remove('d-none');
            } else {
                cartCountElement.classList.add('d-none');
            }
        }
    }
    
    // Показать уведомление
    function showNotification(message, type = 'info') {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible position-fixed`;
        alert.style.top = '20px';
        alert.style.right = '20px';
        alert.style.zIndex = '9999';
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alert);
        
        // Автоматически закрыть через 3 секунды
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 3000);
    }
    
    // Получить правильную форму слова
    function getWordForm(number, forms) {
        number = Math.abs(number) % 100;
        const n1 = number % 10;
        
        if (number > 10 && number < 20) return forms[2];
        if (n1 > 1 && n1 < 5) return forms[1];
        if (n1 === 1) return forms[0];
        return forms[2];
    }
    
    // Инициализация счетчика в шапке
    updateHeaderCartCount();
});
```

---

### 3. `log-reg.js`
**Расположение:** `js/log-reg.js`

**Назначение:** Логика входа и регистрации пользователей

```javascript
let mailBox = document.getElementById("inputMail");
let passwordBox = document.getElementById("inputPassword");

mailBox.addEventListener('input', ()=>{
    console.log(mailBox.value)
})

console.log(passwordBox.value);
passwordBox.addEventListener('input', ()=>{
    console.log(passwordBox.value)
});




if (document.getElementById("doLoginButton")){

    //ДЛЯ АВТОРИЗАЦИИ

    let doLogin = document.getElementById("doLoginButton");

    doLogin.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = mailBox.value.trim();
        const password = passwordBox.value;
        
        // Валидация
        if (!email || !password) {
            alert('Заполните все поля!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Введите корректный email!');
            return;
        }

        doLogin.textContent = 'Вход...';
        doLogin.disabled = true;
        


        // Отправляем запрос к серверу

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Сохраняем пользователя
                localStorage.setItem('user', JSON.stringify(data.user));
                alert(`Добро пожаловать, ${data.user.login}!`);
                
                // Переходим на главную
                window.location.href = './index.html';
            } else {
                alert(data.error || 'Ошибка входа');
                // Возвращаем кнопку
                doLogin.textContent = 'Вход';
                doLogin.disabled = false;
            }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Сервер не отвечает');
        doLogin.textContent = 'Вход';
        doLogin.disabled = false;
    });

    });}


if (document.getElementById("doRegButton")){
    // ДЛЯ РЕГИСТРАЦИИ

    let checkPassword = document.getElementById("checkPassword");

    console.log(checkPassword.value);
    checkPassword.addEventListener('input', ()=>{
        console.log(checkPassword.value)
    });


    let doRegister = document.getElementById("doRegButton");

    doRegister.addEventListener('click',  (e) => {
        e.preventDefault();

        const email = mailBox.value.trim();
        const password = passwordBox.value;
        const check_Password = checkPassword.value;
        
        // Валидация
        if (!email || !password) {
            alert('Заполните все поля!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Введите корректный email!');
            return;
        }
        if (password != check_Password){
            alert('Пароли не совпадают!!');
            return;
        }

        doRegister.textContent = 'Регистрация...';
        doRegister.disabled = true;
        

        // ⬇⬇⬇ ДОБАВЬ ЭТО ⬇⬇⬇
        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Регистрация успешна! Теперь войдите.');
                window.location.href = './login.html';
            } else {
                alert(data.error || 'Ошибка регистрации');
                doRegister.textContent = 'Зарегистрироваться';
                doRegister.disabled = false;
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Сервер не отвечает');
            doRegister.textContent = 'Зарегистрироваться';
            doRegister.disabled = false;
        });

    });}
```

---

### 4. `server.js`
**Расположение:** `js/server.js`

**Назначение:** Серверная часть (API) - обработка запросов

```javascript
// ==================== ПОДКЛЮЧАЕМ БИБЛИОТЕКИ ====================
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

// ==================== СОЗДАЕМ СЕРВЕР ====================
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

// Логирование запросов
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Обработчик ошибок JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('❌ Ошибка парсинга JSON:', err.message);
        return res.status(400).json({ 
            success: false, 
            error: 'Неверный формат JSON в теле запроса' 
        });
    }
    next();
});

// ==================== ПОДКЛЮЧАЕМ БАЗУ ДАННЫХ ====================
console.log('🔍 Проверяю наличие файла базы данных...');
try {
    if (fs.existsSync('./database.db')) {
        console.log('✅ Файл database.db существует');
    } else {
        console.log('❌ Файл database.db НЕ найден! Создаю новый...');
        fs.writeFileSync('./database.db', '');
    }
} catch (error) {
    console.log('⚠️ Ошибка проверки файла:', error.message);
}

let db;
try {
    db = new Database('./database.db');
    console.log('✅ База данных подключена');
} catch (error) {
    console.error('❌ Ошибка подключения к БД:', error.message);
    process.exit(1);
}

// ==================== СОЗДАЕМ ТАБЛИЦЫ ЕСЛИ ИХ НЕТ ====================

function initializeDatabase() {
    try {
        console.log('🔧 Инициализация базы данных...');
        
        // Создаем таблицу User если её нет
        db.prepare(`
            CREATE TABLE IF NOT EXISTS User (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                login TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                role TEXT DEFAULT 'user'
            )
        `).run();
        console.log('✅ Таблица User создана/проверена');
        
        // Создаем таблицу game если её нет
        db.prepare(`
            CREATE TABLE IF NOT EXISTS game (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_user INTEGER NOT NULL,
                name TEXT NOT NULL,
                cost REAL NOT NULL DEFAULT 0,
                picture TEXT DEFAULT 'default-frog.jpg',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `).run();
        console.log('✅ Таблица game создана/проверена');
        
        // Добавляем тестового пользователя если его нет
        const testUser = db.prepare('SELECT * FROM User WHERE login = ?').get('test@test.com');
        if (!testUser) {
            db.prepare(`
                INSERT INTO User (login, password, role) 
                VALUES (?, ?, ?)
            `).run('test@test.com', '123456', 'user');
            console.log('✅ Тестовый пользователь создан');
        }
        
        // Добавляем админа если его нет
        const adminUser = db.prepare('SELECT * FROM User WHERE login = ?').get('admin@admin.com');
        if (!adminUser) {
            db.prepare(`
                INSERT INTO User (login, password, role) 
                VALUES (?, ?, ?)
            `).run('admin@admin.com', 'admin123', 'admin');
            console.log('✅ Администратор создан');
        }
        
        // Проверяем наличие игр
        const gamesCount = db.prepare('SELECT COUNT(*) as count FROM game').get().count;
        console.log(`✅ В базе уже есть ${gamesCount} игр`);
        
    } catch (error) {
        console.error('❌ Ошибка инициализации БД:', error.message);
        console.error('Стек ошибки:', error.stack);
    }
}

// Вызываем инициализацию
initializeDatabase();

// ==================== API ДЛЯ АВТОРИЗАЦИИ ====================

// Регистрация
app.post('/api/register', (req, res) => {
    console.log('📝 Запрос на регистрацию:', req.body.username);
    
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Требуется логин и пароль' 
            });
        }
        
        if (!username.includes('@')) {
            return res.status(400).json({ 
                success: false, 
                error: 'Email должен содержать @' 
            });
        }
        
        // Проверяем, нет ли уже такого пользователя
        const existingUser = db.prepare('SELECT * FROM User WHERE login = ?').get(username);
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                error: 'Пользователь с таким email уже существует' 
            });
        }
        
        // Добавляем пользователя
        const result = db.prepare(`
            INSERT INTO User (login, password, role) 
            VALUES (?, ?, 'user')
        `).run(username, password);
        
        const newUser = db.prepare('SELECT * FROM User WHERE id = ?').get(result.lastInsertRowid);
        
        res.json({ 
            success: true, 
            user: { 
                id: newUser.id, 
                login: newUser.login, 
                role: newUser.role 
            },
            message: 'Регистрация успешна!'
        });
        
    } catch (error) {
        console.error('❌ Ошибка регистрации:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка сервера при регистрации' 
        });
    }
});

// Вход
app.post('/api/login', (req, res) => {
    console.log('🔐 Запрос на вход:', req.body.username);
    
    try {
        const { username, password } = req.body;
        
        const user = db.prepare('SELECT * FROM User WHERE login = ? AND password = ?')
            .get(username, password);
        
        if (user) {
            res.json({ 
                success: true, 
                user: { 
                    id: user.id, 
                    login: user.login, 
                    role: user.role 
                },
                message: 'Вход выполнен'
            });
        } else {
            res.status(401).json({ 
                success: false, 
                error: 'Неверный логин или пароль' 
            });
        }
        
    } catch (error) {
        console.error('❌ Ошибка входа:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка сервера при входе' 
        });
    }
});

// ==================== CRUD API ДЛЯ ИГР ====================

// Получить все игры
app.get('/api/games', (req, res) => {
    console.log('🛍️ Запрос списка игр');
    
    try {
        const games = db.prepare(`
            SELECT g.*, u.login as owner_login 
            FROM game g
            LEFT JOIN User u ON g.id_user = u.id
            ORDER BY g.id DESC
        `).all();
        
        console.log(`✅ Найдено игр: ${games.length}`);
        res.json({ 
            success: true, 
            games: games,
            count: games.length
        });
    } catch (error) {
        console.error('❌ Ошибка получения игр:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка получения списка игр' 
        });
    }
});

// Получить конкретную игру по ID
app.get('/api/games/:id', (req, res) => {
    const gameId = req.params.id;
    console.log(`📋 Запрос игры ID: ${gameId}`);
    
    try {
        const game = db.prepare(`
            SELECT g.*, u.login as owner_login 
            FROM game g
            LEFT JOIN User u ON g.id_user = u.id
            WHERE g.id = ?
        `).get(gameId);
        
        if (game) {
            res.json({ 
                success: true, 
                game: game
            });
        } else {
            res.status(404).json({ 
                success: false, 
                error: 'Игра не найдена' 
            });
        }
    } catch (error) {
        console.error('❌ Ошибка получения игры:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка сервера при получении игры' 
        });
    }
});

// Добавить новую игру
app.post('/api/games', (req, res) => {
    console.log('➕ Запрос на добавление игры:', req.body);
    
    try {
        const { name, cost, picture, userId } = req.body;
        
        // Валидация
        if (!name || !cost) {
            return res.status(400).json({ 
                success: false, 
                error: 'Требуется название и цена' 
            });
        }
        
        if (isNaN(cost) || cost < 0) {
            return res.status(400).json({ 
                success: false, 
                error: 'Цена должна быть положительным числом' 
            });
        }
        
        // Проверяем пользователя
        const user = db.prepare('SELECT * FROM User WHERE id = ?').get(userId);
        if (!user) {
            return res.status(400).json({ 
                success: false, 
                error: 'Пользователь не найден' 
            });
        }
        
        // Добавляем игру (БЕЗ description)
        const result = db.prepare(`
            INSERT INTO game (id_user, name, cost, picture) 
            VALUES (?, ?, ?, ?)
        `).run(userId, name, parseFloat(cost), picture || 'default-frog.jpg');
        
        // Получаем добавленную игру
        const newGame = db.prepare(`
            SELECT g.*, u.login as owner_login 
            FROM game g
            LEFT JOIN User u ON g.id_user = u.id
            WHERE g.id = ?
        `).get(result.lastInsertRowid);
        
        console.log(`✅ Игра добавлена, ID: ${result.lastInsertRowid}`);
        
        res.json({ 
            success: true, 
            game: newGame,
            message: 'Игра успешно добавлена!'
        });
        
    } catch (error) {
        console.error('❌ Ошибка добавления игры:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка сервера при добавлении игры' 
        });
    }
});

// Обновить игру
app.put('/api/games/:id', (req, res) => {
    const gameId = req.params.id;
    console.log(`✏️ Обновление игры ID: ${gameId}`, req.body);
    
    try {
        const { name, cost, userId } = req.body; // БЕЗ description
        
        // Проверяем обязательные поля
        if (!userId) {
            return res.status(400).json({ 
                success: false, 
                error: 'Требуется userId для обновления игры' 
            });
        }
        
        // Проверяем существование игры
        const game = db.prepare('SELECT * FROM game WHERE id = ?').get(gameId);
        if (!game) {
            console.log(`❌ Игра ID ${gameId} не найдена в базе`);
            return res.status(404).json({ 
                success: false, 
                error: 'Игра не найдена' 
            });
        }
        
        console.log(`📊 Найдена игра:`, game);
        
        // Проверяем пользователя
        const user = db.prepare('SELECT * FROM User WHERE id = ?').get(userId);
        if (!user) {
            console.log(`❌ Пользователь ID ${userId} не найден`);
            return res.status(401).json({ 
                success: false, 
                error: 'Пользователь не найден' 
            });
        }
        
        console.log(`👤 Найден пользователь:`, { id: user.id, login: user.login, role: user.role });
        
        // Проверяем права: владелец или админ
        const isOwner = game.id_user == userId;
        const isAdmin = user.role === 'admin';
        
        console.log(`🔐 Права доступа: isOwner=${isOwner}, isAdmin=${isAdmin}`);
        
        if (!isOwner && !isAdmin) {
            console.log(`❌ Нет прав доступа. Владелец игры: ${game.id_user}, запрос от: ${userId}`);
            return res.status(403).json({ 
                success: false, 
                error: 'Нет прав на редактирование этой игры' 
            });
        }
        
        // Подготавливаем данные для обновления (БЕЗ description)
        const updateData = {
            name: name || game.name,
            cost: cost !== undefined ? parseFloat(cost) : game.cost
        };
        
        console.log(`📝 Данные для обновления:`, updateData);
        
        // Обновляем игру (БЕЗ description)
        const stmt = db.prepare(`
            UPDATE game 
            SET name = ?, cost = ? 
            WHERE id = ?
        `);
        
        const result = stmt.run(
            updateData.name,
            updateData.cost,
            gameId
        );
        
        console.log(`✅ Игра обновлена. Изменено строк: ${result.changes}`);
        
        // Получаем обновленную игру
        const updatedGame = db.prepare(`
            SELECT g.*, u.login as owner_login 
            FROM game g
            LEFT JOIN User u ON g.id_user = u.id
            WHERE g.id = ?
        `).get(gameId);
        
        console.log(`🎮 Обновленная игра:`, updatedGame);
        
        res.json({ 
            success: true, 
            game: updatedGame,
            message: 'Игра успешно обновлена'
        });
        
    } catch (error) {
        console.error('❌ КРИТИЧЕСКАЯ ОШИБКА при обновлении игры:');
        console.error('Сообщение:', error.message);
        console.error('Стек ошибки:', error.stack);
        
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка сервера при обновлении игры',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Удалить игру
app.delete('/api/games/:id', (req, res) => {
    const gameId = req.params.id;
    console.log(`🗑️ Удаление игры ID: ${gameId}`, req.body);
    
    try {
        const { userId, isAdmin = false } = req.body;
        
        // Проверяем существование игры
        const game = db.prepare('SELECT * FROM game WHERE id = ?').get(gameId);
        if (!game) {
            return res.status(404).json({ 
                success: false, 
                error: 'Игра не найдена' 
            });
        }
        
        // Проверяем пользователя
        const user = db.prepare('SELECT * FROM User WHERE id = ?').get(userId);
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                error: 'Пользователь не найден' 
            });
        }
        
        // Проверяем права: владелец или админ
        const canDelete = (game.id_user === userId) || (isAdmin && user.role === 'admin');
        
        if (!canDelete) {
            return res.status(403).json({ 
                success: false, 
                error: 'Нет прав на удаление этой игры' 
            });
        }
        
        // Удаляем игру
        db.prepare('DELETE FROM game WHERE id = ?').run(gameId);
        
        console.log(`✅ Игра ID: ${gameId} удалена`);
        
        res.json({ 
            success: true,
            message: 'Игра успешно удалена'
        });
        
    } catch (error) {
        console.error('❌ Ошибка удаления игры:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка сервера при удалении игры' 
        });
    }
});

// Получить игры пользователя
app.get('/api/user/:id/games', (req, res) => {
    const userId = req.params.id;
    console.log(`👤 Запрос игр пользователя ID: ${userId}`);
    
    try {
        const games = db.prepare(`
            SELECT g.*, u.login as owner_login 
            FROM game g
            LEFT JOIN User u ON g.id_user = u.id
            WHERE g.id_user = ?
            ORDER BY g.id DESC
        `).all(userId);
        
        res.json({ 
            success: true, 
            games: games,
            count: games.length
        });
        
    } catch (error) {
        console.error('❌ Ошибка получения игр пользователя:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Ошибка сервера при получении игр пользователя' 
        });
    }
});

// Endpoint для проверки конкретной игры
app.get('/api/debug/game/:id', (req, res) => {
    const gameId = req.params.id;
    
    try {
        const game = db.prepare('SELECT * FROM game WHERE id = ?').get(gameId);
        const user = game ? db.prepare('SELECT * FROM User WHERE id = ?').get(game.id_user) : null;
        
        res.json({
            game: game,
            owner: user,
            allGames: db.prepare('SELECT id, name, id_user FROM game ORDER BY id').all(),
            allUsers: db.prepare('SELECT id, login, role FROM User ORDER BY id').all()
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Тестовый endpoint
app.get('/api/test', (req, res) => {
    console.log('✅ Запрос /api/test получен');
    res.json({ 
        success: true,
        message: 'Сервер работает! 🐸',
        time: new Date().toLocaleString('ru-RU'),
        endpoints: [
            'POST /api/register - регистрация',
            'POST /api/login - вход',
            'GET  /api/games - все игры',
            'POST /api/games - добавить игру',
            'PUT  /api/games/:id - обновить игру',
            'DELETE /api/games/:id - удалить игру',
            'GET  /api/user/:id/games - игры пользователя'
        ]
    });
});

// ==================== ЗАПУСК СЕРВЕРА ====================
app.listen(PORT, () => {
    console.log('\n' + '='.repeat(50));
    console.log('🚀 Сервер запущен!');
    console.log(`🌐 Адрес: http://localhost:${PORT}`);
    console.log('\n📋 Доступные API:');
    console.log(`   GET  http://localhost:${PORT}/api/test`);
    console.log(`   POST http://localhost:${PORT}/api/register`);
    console.log(`   POST http://localhost:${PORT}/api/login`);
    console.log(`   GET  http://localhost:${PORT}/api/games`);
    console.log(`   POST http://localhost:${PORT}/api/games (добавить игру)`);
    console.log(`   PUT  http://localhost:${PORT}/api/games/:id (обновить игру)`);
    console.log(`   DELETE http://localhost:${PORT}/api/games/:id (удалить игру)`);
    console.log('='.repeat(50) + '\n');
    
    // Проверяем базу данных
    console.log('🔍 Проверка базы данных:');
    try {
        const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
        console.log('📊 Таблицы в БД:', tables.map(t => t.name).join(', '));
        
        tables.forEach(table => {
            try {
                const count = db.prepare(`SELECT COUNT(*) as count FROM "${table.name}"`).get().count;
                console.log(`   ${table.name}: ${count} записей`);
            } catch (countError) {
                console.log(`   ${table.name}: ошибка при подсчете - ${countError.message}`);
            }
        });
        
        // Проверяем пользователей
        console.log('\n👥 Пользователи в системе:');
        try {
            const users = db.prepare('SELECT id, login, role FROM User ORDER BY id').all();
            users.forEach(user => {
                console.log(`   ${user.login} (ID: ${user.id}, роль: ${user.role})`);
            });
        } catch (userError) {
            console.log('   Ошибка при получении пользователей:', userError.message);
        }
        
        // Проверяем игры
        console.log('\n🛍️ Игры в магазине:');
        try {
            const games = db.prepare('SELECT COUNT(*) as count FROM game').get();
            console.log(`   Всего игр: ${games.count}`);
            
            if (games.count > 0) {
                const sampleGames = db.prepare('SELECT id, name, cost, id_user FROM game LIMIT 3').all();
                sampleGames.forEach(game => {
                    console.log(`   - ${game.name} (ID: ${game.id}, цена: ${game.cost} ₽, владелец: ${game.id_user})`);
                });
                if (games.count > 3) console.log(`   ... и еще ${games.count - 3} игр`);
            }
        } catch (gameError) {
            console.log('   Ошибка при получении игр:', gameError.message);
        }
        
    } catch (error) {
        console.log('❌ Ошибка проверки БД:', error.message);
        console.log('Стек ошибки:', error.stack);
    }
});
```

---

### 5. `shop.js`
**Расположение:** `js/shop.js`

**Назначение:** Динамическая загрузка товаров в магазине

```javascript
// shop.js - динамическая загрузка карточек с пагинацией и CRUD
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница магазина загружена');
    
    const cardsContainer = document.getElementById('cards-net');
    const API_URL = 'http://localhost:3000/api';
    const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    
    // Пагинация - делаем переменные доступными глобально
    window.currentPage = 1;
    const itemsPerPage = 6;
    window.totalGames = 0;
    window.allGames = [];
    
    // Создаем контейнер для пагинации
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container mt-4';
    cardsContainer.parentNode.appendChild(paginationContainer);
    
    // Создаем панель админа
    const adminPanel = createAdminPanel();
    cardsContainer.parentNode.insertBefore(adminPanel, cardsContainer);
    
    // Загружаем игры
    loadGames();
    
    // =============== ОСНОВНЫЕ ФУНКЦИИ ===============
    
    async function loadGames() {
        try {
            console.log('Загружаю игры с сервера...');
            
            // Показываем загрузку
            cardsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Загрузка...</span>
                    </div>
                    <p class="mt-2">Загружаем игрушки...</p>
                </div>
            `;
            
            const response = await fetch(`${API_URL}/games`);
            
            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                console.log(`✅ Загружено ${data.games.length} игр`);
                window.allGames = data.games;
                window.totalGames = data.games.length;
                
                // Обновляем панель админа
                updateAdminPanel();
                
                // Отображаем первую страницу
                displayCurrentPage();
                renderPagination();
            } else {
                throw new Error(data.error || 'Ошибка загрузки игр');
            }
            
        } catch (error) {
            console.error('Ошибка загрузки игр:', error);
            
            cardsContainer.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Ошибка загрузки!</h4>
                    <p>Не удалось загрузить игры. Попробуйте обновить страницу.</p>
                    <p class="mb-0 small">${error.message}</p>
                </div>
            `;
        }
    }
    
    function displayCurrentPage() {
        if (window.allGames.length === 0) {
            cardsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h3 class="text-muted">😔 Пока нет игрушек в магазине</h3>
                    <p>Будьте первым, кто добавит свою лягушку!</p>
                </div>
            `;
            return;
        }
        
        // Вычисляем какие игры показывать
        const startIndex = (window.currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const gamesToShow = window.allGames.slice(startIndex, endIndex);
        
        // Очищаем контейнер
        cardsContainer.innerHTML = '';
        
        // Создаем карточки
        gamesToShow.forEach(game => {
            const card = createGameCard(game);
            cardsContainer.appendChild(card);
        });
        
        // Добавляем обработчики
        setupEventListeners();
    }
    
    function renderPagination() {
        const totalPages = Math.ceil(window.totalGames / itemsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }
        
        let paginationHTML = `
            <nav aria-label="Навигация по страницам">
                <ul class="pagination justify-content-center">
        `;
        
        // Кнопка "Назад"
        paginationHTML += `
            <li class="page-item ${window.currentPage === 1 ? 'disabled' : ''}">
                <button class="page-link" onclick="window.changePage(${window.currentPage - 1})">
                    &laquo; Назад
                </button>
            </li>
        `;
        
        // Номера страниц
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= window.currentPage - 1 && i <= window.currentPage + 1)) {
                paginationHTML += `
                    <li class="page-item ${i === window.currentPage ? 'active' : ''}">
                        <button class="page-link" onclick="window.changePage(${i})">
                            ${i}
                        </button>
                    </li>
                `;
            } else if (i === window.currentPage - 2 || i === window.currentPage + 2) {
                paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
            }
        }
        
        // Кнопка "Вперед"
        paginationHTML += `
            <li class="page-item ${window.currentPage === totalPages ? 'disabled' : ''}">
                <button class="page-link" onclick="window.changePage(${window.currentPage + 1})">
                    Вперед &raquo;
                </button>
            </li>
        `;
        
        paginationHTML += `
                </ul>
            </nav>
            <div class="text-center text-muted mt-2">
                Страница ${window.currentPage} из ${totalPages} • ${window.totalGames} товаров
            </div>
        `;
        
        paginationContainer.innerHTML = paginationHTML;
    }
    
    // =============== CRUD ФУНКЦИИ ===============
    
    function createGameCard(game) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-4';
        cardDiv.style.width = '280px';
        cardDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        cardDiv.style.transition = 'all 0.3s ease';
        cardDiv.dataset.gameId = game.id;
        
        const isOwner = currentUser && game.id_user === currentUser.id;
        const isAdmin = currentUser && currentUser.role === 'admin';
        
        cardDiv.addEventListener('mouseenter', () => {
            cardDiv.style.transform = 'translateY(-5px)';
            cardDiv.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        cardDiv.addEventListener('mouseleave', () => {
            cardDiv.style.transform = 'translateY(0)';
            cardDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
        
        // Форматируем цену
        const formattedPrice = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(game.cost);
        
        let imageSrc = './assets/images/cards/';
        if (game.picture && game.picture.trim() !== '') {
            imageSrc += game.picture;
        } else {
            imageSrc += 'default-frog.jpg';
        }
        
        // Создаем карточку (БЕЗ description)
        cardDiv.innerHTML = `
            <div class="position-relative">
                <img src="${imageSrc}" 
                     class="card-img-top" 
                     alt="${game.name}"
                     style="height: 200px; object-fit: cover;"
                     onerror="this.onerror=null; this.src='./assets/images/cards/default-frog.jpg'">
                
                ${isOwner ? 
                    '<span class="position-absolute top-0 start-0 badge bg-info m-2">Ваша</span>' : 
                    ''}
                ${isAdmin ? 
                    '<span class="position-absolute top-0 end-0 badge bg-warning text-dark m-2">Админ</span>' : 
                    ''}
            </div>
            
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title mb-0" style="max-width: 70%;">${game.name}</h5>
                    <span class="badge bg-secondary">ID: ${game.id}</span>
                </div>
                
                <div class="mb-2">
                    <span class="badge bg-success">В наличии</span>
                    <small class="text-muted ms-2">Владелец: ${game.owner_login || 'Неизвестно'}</small>
                </div>
                
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <h5 class="text-success mb-0">${formattedPrice}</h5>
                    <button class="btn btn-primary add-to-cart-btn" 
                            data-game-id="${game.id}">
                        🛒 В корзину
                    </button>
                </div>
                
                ${isOwner || isAdmin ? `
                <div class="btn-group w-100 mt-3">
                    ${isOwner ? `
                    <button class="btn btn-sm btn-outline-warning edit-game-btn" 
                            data-game-id="${game.id}">
                        ✏️ Редактировать
                    </button>
                    <button class="btn btn-sm btn-outline-danger delete-game-btn" 
                            data-game-id="${game.id}">
                        🗑️ Удалить
                    </button>
                    ` : ''}
                    ${isAdmin && !isOwner ? `
                    <button class="btn btn-sm btn-outline-danger delete-game-btn" 
                            data-game-id="${game.id}">
                        🗑️ Удалить (админ)
                    </button>
                    ` : ''}
                </div>
                ` : ''}
            </div>
        `;
        
        return cardDiv;
    }
    
    function setupEventListeners() {
        // Кнопки "В корзину"
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const gameId = this.getAttribute('data-game-id');
                addToCart(gameId, this);
            });
        });
        
        // Кнопки редактирования
        document.querySelectorAll('.edit-game-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const gameId = this.getAttribute('data-game-id');
                editGame(gameId);
            });
        });
        
        // Кнопки удаления
        document.querySelectorAll('.delete-game-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const gameId = this.getAttribute('data-game-id');
                const isAdmin = this.textContent.includes('админ');
                deleteGame(gameId, isAdmin);
            });
        });
    }
    
    // =============== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===============
    
    function createAdminPanel() {
        const panel = document.createElement('div');
        panel.id = 'admin-panel';
        panel.className = 'admin-panel mb-4 p-3 border rounded bg-light';
        panel.style.display = 'none';
        
        panel.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">⚙️ Управление товарами</h5>
                <button id="toggle-admin-panel" class="btn btn-sm btn-outline-secondary">
                    Скрыть
                </button>
            </div>
            <div id="admin-panel-content" class="mt-3">
                <button id="add-game-btn" class="btn btn-success btn-sm">
                    ➕ Добавить новый товар
                </button>
                <div class="mt-2">
                    <small class="text-muted">
                        Вы можете редактировать и удалять свои товары. Админ может удалять любые.
                    </small>
                </div>
            </div>
        `;
        
        return panel;
    }
    
    function updateAdminPanel() {
        const adminPanel = document.getElementById('admin-panel');
        if (!currentUser) {
            adminPanel.style.display = 'none';
            return;
        }
        
        adminPanel.style.display = 'block';
        
        document.getElementById('toggle-admin-panel').onclick = function() {
            const content = document.getElementById('admin-panel-content');
            const isHidden = content.style.display === 'none';
            content.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Скрыть' : 'Показать';
        };
        
        document.getElementById('add-game-btn').onclick = showAddGameModal;
    }
    
    // =============== МОДАЛЬНОЕ ОКНО ДОБАВЛЕНИЯ ===============
    
    function showAddGameModal() {
        const modalHTML = `
            <div class="modal fade" id="addGameModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">➕ Добавить новый товар</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="add-game-form">
                                <div class="mb-3">
                                    <label class="form-label">Название товара *</label>
                                    <input type="text" class="form-control" id="game-name" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Цена (₽) *</label>
                                    <input type="number" class="form-control" id="game-price" 
                                           min="0" step="0.01" value="1000" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Имя файла картинки</label>
                                    <input type="text" class="form-control" id="game-image" 
                                           placeholder="frog1.jpg">
                                    <small class="text-muted">
                                        Файл должен находиться в папке /assets/images/cards/
                                    </small>
                                </div>
                                <div class="form-text">
                                    * - обязательные поля
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Отмена
                            </button>
                            <button type="button" class="btn btn-success" id="submit-add-game">
                                Добавить товар
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Удаляем старую модалку если есть
        const oldModal = document.getElementById('addGameModal');
        if (oldModal) oldModal.remove();
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modalElement = document.getElementById('addGameModal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
        
        // Обработчик отправки формы
        document.getElementById('submit-add-game').onclick = async function() {
            const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
            if (!currentUser) {
                alert('❌ Сначала войдите в систему!');
                return;
            }
            
            const gameData = {
                name: document.getElementById('game-name').value.trim(),
                cost: parseFloat(document.getElementById('game-price').value),
                picture: document.getElementById('game-image').value.trim() || 'default-frog.jpg',
                userId: currentUser.id
            };
            
            // Валидация
            if (!gameData.name) {
                alert('Введите название товара!');
                return;
            }
            
            if (isNaN(gameData.cost) || gameData.cost < 0) {
                alert('Введите корректную цену!');
                return;
            }
            
            // Блокируем кнопку
            this.disabled = true;
            this.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Добавляем...';
            
            try {
                const response = await fetch(`${API_URL}/games`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(gameData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    alert('✅ Товар успешно добавлен!');
                    modal.hide();
                    
                    // Удаляем модалку из DOM
                    modalElement.remove();
                    
                    // Перезагружаем список товаров
                    loadGames();
                } else {
                    alert(`❌ Ошибка: ${result.error}`);
                    this.disabled = false;
                    this.textContent = 'Добавить товар';
                }
            } catch (error) {
                alert('❌ Ошибка при добавлении товара');
                console.error('Детали ошибки:', error);
                this.disabled = false;
                this.textContent = 'Добавить товар';
            }
        };
        
        // Закрытие модалки при клике на backdrop
        modalElement.addEventListener('hidden.bs.modal', function() {
            modalElement.remove();
        });
    }
    
    // =============== КОРЗИНА И CRUD ===============
    
    function addToCart(gameId, button) {
        const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
        
        if (!currentUser) {
            alert('❌ Сначала войдите в систему!');
            window.location.href = './login.html';
            return;
        }
        
        const gameCard = document.querySelector(`[data-game-id="${gameId}"]`);
        if (gameCard && gameCard.querySelector('.badge.bg-info')) {
            if (!confirm('Это ваша собственная игра. Вы уверены, что хотите купить её у себя?')) {
                return;
            }
        }
        
        const originalText = button.innerHTML;
        const originalClass = button.className;
        
        button.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
        button.className = 'btn btn-secondary';
        button.disabled = true;
        
        setTimeout(() => {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            
            if (cart.includes(gameId.toString())) {
                button.innerHTML = '✅ Уже в корзине';
            } else {
                cart.push(gameId.toString());
                localStorage.setItem('cart', JSON.stringify(cart));
                button.innerHTML = '✅ Добавлено!';
                updateCartCount();
            }
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.className = originalClass;
                button.disabled = false;
            }, 1500);
            
            console.log(`🛒 Игра ${gameId} добавлена в корзину`);
        }, 800);
    }
    
    async function editGame(gameId) {
        const game = window.allGames.find(g => g.id == gameId);
        if (!game) return;
        
        const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
        if (!currentUser) {
            alert('❌ Сначала войдите в систему!');
            window.location.href = './login.html';
            return;
        }
        
        console.log('🔄 Редактирование игры:', { gameId, currentUser });
        
        const newName = prompt('Введите новое название:', game.name);
        if (!newName) return;
        
        const newPrice = prompt('Введите новую цену:', game.cost);
        
        if (!newPrice || isNaN(newPrice) || newPrice < 0) {
            alert('Цена должна быть числом больше 0!');
            return;
        }
        
        const requestData = {
            name: newName,
            cost: parseFloat(newPrice),
            userId: currentUser.id
        };
        
        console.log('📤 Отправляемые данные:', requestData);
        
        try {
            const response = await fetch(`${API_URL}/games/${gameId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            
            console.log('📥 Ответ сервера:', response.status, response.statusText);
            
            const result = await response.json();
            console.log('📋 Данные ответа:', result);
            
            if (result.success) {
                alert('✅ Товар обновлен!');
                loadGames();
            } else {
                alert(`❌ Ошибка: ${result.error}`);
            }
        } catch (error) {
            console.error('❌ Ошибка при обновлении товара:', error);
            alert('❌ Ошибка при обновлении товара. Проверьте консоль для деталей.');
        }
    }
    
    async function deleteGame(gameId, isAdmin = false) {
        const game = window.allGames.find(g => g.id == gameId);
        if (!game) return;
        
        const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
        if (!currentUser) {
            alert('❌ Сначала войдите в систему!');
            window.location.href = './login.html';
            return;
        }
        
        const confirmMessage = isAdmin 
            ? `Вы администратор. Удалить товар "${game.name}" (ID: ${gameId})?`
            : `Удалить ваш товар "${game.name}"?`;
        
        if (!confirm(confirmMessage)) return;
        
        try {
            const response = await fetch(`${API_URL}/games/${gameId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: currentUser.id,
                    isAdmin: isAdmin
                })
            });
            
            const result = await response.json();
            
            if (result.success) {
                alert('✅ Товар удален!');
                loadGames();
            } else {
                alert(`❌ Ошибка: ${result.error}`);
            }
        } catch (error) {
            console.error('❌ Ошибка при удалении товара:', error);
            alert('❌ Ошибка при удалении товара. Проверьте консоль для деталей.');
        }
    }
    
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartCount = document.querySelector('#cart-count');
        
        if (cartCount) {
            cartCount.textContent = cart.length;
            cartCount.classList.toggle('d-none', cart.length === 0);
        }
    }
    
    // Инициализация счетчика корзины
    updateCartCount();
});

// Глобальная функция для пагинации
window.changePage = function(page) {
    console.log('🔄 changePage вызвана:', page);
    
    // Получаем контейнеры
    const cardsContainer = document.getElementById('cards-net');
    const paginationContainer = document.querySelector('.pagination-container');
    
    if (!cardsContainer || !paginationContainer) {
        console.error('❌ Не найдены элементы пагинации');
        return;
    }
    
    // Получаем данные
    const allGames = window.allGames || [];
    const itemsPerPage = 6;
    const totalGames = allGames.length;
    const totalPages = Math.ceil(totalGames / itemsPerPage);
    
    // Проверяем валидность страницы
    if (page < 1 || page > totalPages) {
        console.warn(`⚠️ Страница ${page} вне диапазона (1-${totalPages})`);
        return;
    }
    
    // Обновляем текущую страницу
    window.currentPage = page;
    
    // Вычисляем какие игры показывать
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const gamesToShow = allGames.slice(startIndex, endIndex);
    
    // Очищаем контейнер
    cardsContainer.innerHTML = '';
    
    // Создаем карточки
    gamesToShow.forEach(game => {
        const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
        const isOwner = currentUser && game.id_user === currentUser.id;
        const isAdmin = currentUser && currentUser.role === 'admin';
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-4';
        cardDiv.style.width = '280px';
        cardDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        cardDiv.style.transition = 'all 0.3s ease';
        cardDiv.dataset.gameId = game.id;
        
        cardDiv.addEventListener('mouseenter', () => {
            cardDiv.style.transform = 'translateY(-5px)';
            cardDiv.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        cardDiv.addEventListener('mouseleave', () => {
            cardDiv.style.transform = 'translateY(0)';
            cardDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
        
        // Форматируем цену
        const formattedPrice = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(game.cost);
        
        let imageSrc = './assets/images/cards/';
        if (game.picture && game.picture.trim() !== '') {
            imageSrc += game.picture;
        } else {
            imageSrc += 'default-frog.jpg';
        }
        
        // Создаем карточку
        cardDiv.innerHTML = `
            <div class="position-relative">
                <img src="${imageSrc}" 
                     class="card-img-top" 
                     alt="${game.name}"
                     style="height: 200px; object-fit: cover;"
                     onerror="this.onerror=null; this.src='./assets/images/cards/default-frog.jpg'">
                
                ${isOwner ? 
                    '<span class="position-absolute top-0 start-0 badge bg-info m-2">Ваша</span>' : 
                    ''}
                ${isAdmin ? 
                    '<span class="position-absolute top-0 end-0 badge bg-warning text-dark m-2">Админ</span>' : 
                    ''}
            </div>
            
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title mb-0" style="max-width: 70%;">${game.name}</h5>
                    <span class="badge bg-secondary">ID: ${game.id}</span>
                </div>
                
                <div class="mb-2">
                    <span class="badge bg-success">В наличии</span>
                    <small class="text-muted ms-2">Владелец: ${game.owner_login || 'Неизвестно'}</small>
                </div>
                
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <h5 class="text-success mb-0">${formattedPrice}</h5>
                    <button class="btn btn-primary add-to-cart-btn" 
                            data-game-id="${game.id}">
                        🛒 В корзину
                    </button>
                </div>
                
                ${isOwner || isAdmin ? `
                <div class="btn-group w-100 mt-3">
                    ${isOwner ? `
                    <button class="btn btn-sm btn-outline-warning edit-game-btn" 
                            data-game-id="${game.id}">
                        ✏️ Редактировать
                    </button>
                    <button class="btn btn-sm btn-outline-danger delete-game-btn" 
                            data-game-id="${game.id}">
                        🗑️ Удалить
                    </button>
                    ` : ''}
                    ${isAdmin && !isOwner ? `
                    <button class="btn btn-sm btn-outline-danger delete-game-btn" 
                            data-game-id="${game.id}">
                        🗑️ Удалить (админ)
                    </button>
                    ` : ''}
                </div>
                ` : ''}
            </div>
        `;
        
        // Добавляем обработчики для кнопок в новой карточке
        const addToCartBtn = cardDiv.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const gameId = this.getAttribute('data-game-id');
                const button = this;
                
                const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
                if (!currentUser) {
                    alert('❌ Сначала войдите в систему!');
                    window.location.href = './login.html';
                    return;
                }
                
                const originalText = button.innerHTML;
                const originalClass = button.className;
                
                button.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
                button.className = 'btn btn-secondary';
                button.disabled = true;
                
                setTimeout(() => {
                    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    
                    if (cart.includes(gameId.toString())) {
                        button.innerHTML = '✅ Уже в корзине';
                    } else {
                        cart.push(gameId.toString());
                        localStorage.setItem('cart', JSON.stringify(cart));
                        button.innerHTML = '✅ Добавлено!';
                        
                        // Обновляем счетчик корзины
                        const cartCount = document.querySelector('#cart-count');
                        if (cartCount) {
                            cartCount.textContent = cart.length;
                            cartCount.classList.toggle('d-none', cart.length === 0);
                        }
                    }
                    
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.className = originalClass;
                        button.disabled = false;
                    }, 1500);
                }, 800);
            });
        }
        
        // Обработчики для кнопок редактирования/удаления
        const editBtn = cardDiv.querySelector('.edit-game-btn');
        if (editBtn) {
            editBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const gameId = this.getAttribute('data-game-id');
                window.editGame(gameId);
            });
        }
        
        const deleteBtn = cardDiv.querySelector('.delete-game-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const gameId = this.getAttribute('data-game-id');
                const isAdmin = this.textContent.includes('админ');
                window.deleteGame(gameId, isAdmin);
            });
        }
        
        cardsContainer.appendChild(cardDiv);
    });
    
    // Обновляем пагинацию
    let paginationHTML = `
        <nav aria-label="Навигация по страницам">
            <ul class="pagination justify-content-center">
    `;
    
    // Кнопка "Назад"
    paginationHTML += `
        <li class="page-item ${page === 1 ? 'disabled' : ''}">
            <button class="page-link" onclick="window.changePage(${page - 1})">
                &laquo; Назад
            </button>
        </li>
    `;
    
    // Номера страниц
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
            paginationHTML += `
                <li class="page-item ${i === page ? 'active' : ''}">
                    <button class="page-link" onclick="window.changePage(${i})">
                        ${i}
                    </button>
                </li>
            `;
        } else if (i === page - 2 || i === page + 2) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }
    
    // Кнопка "Вперед"
    paginationHTML += `
        <li class="page-item ${page === totalPages ? 'disabled' : ''}">
            <button class="page-link" onclick="window.changePage(${page + 1})">
                Вперед &raquo;
            </button>
        </li>
    `;
    
    paginationHTML += `
            </ul>
        </nav>
        <div class="text-center text-muted mt-2">
            Страница ${page} из ${totalPages} • ${totalGames} товаров
        </div>
    `;
    
    paginationContainer.innerHTML = paginationHTML;
    
    console.log(`✅ Страница ${page} загружена, показано ${gamesToShow.length} игр`);
};

// Делаем функции доступными глобально для пагинации
window.editGame = async function(gameId) {
    const allGames = window.allGames || [];
    const game = allGames.find(g => g.id == gameId);
    if (!game) return;
    
    const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!currentUser) {
        alert('❌ Сначала войдите в систему!');
        window.location.href = './login.html';
        return;
    }
    
    console.log('🔄 Редактирование игры (глобальная):', { gameId, currentUser });
    
    const newName = prompt('Введите новое название:', game.name);
    if (!newName) return;
    
    const newPrice = prompt('Введите новую цену:', game.cost);
    
    if (!newPrice || isNaN(newPrice) || newPrice < 0) {
        alert('Цена должна быть числом больше 0!');
        return;
    }
    
    const requestData = {
        name: newName,
        cost: parseFloat(newPrice),
        userId: currentUser.id
    };
    
    console.log('📤 Отправляемые данные:', requestData);
    
    try {
        const response = await fetch('http://localhost:3000/api/games/' + gameId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        
        console.log('📥 Ответ сервера:', response.status, response.statusText);
        
        const result = await response.json();
        console.log('📋 Данные ответа:', result);
        
        if (result.success) {
            alert('✅ Товар обновлен!');
            // Перезагружаем страницу для обновления списка
            location.reload();
        } else {
            alert(`❌ Ошибка: ${result.error}`);
        }
    } catch (error) {
        console.error('❌ Ошибка при обновлении товара:', error);
        alert('❌ Ошибка при обновлении товара. Проверьте консоль для деталей.');
    }
};

window.deleteGame = async function(gameId, isAdmin = false) {
    const allGames = window.allGames || [];
    const game = allGames.find(g => g.id == gameId);
    if (!game) return;
    
    const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!currentUser) {
        alert('❌ Сначала войдите в систему!');
        window.location.href = './login.html';
        return;
    }
    
    const confirmMessage = isAdmin 
        ? `Вы администратор. Удалить товар "${game.name}" (ID: ${gameId})?`
        : `Удалить ваш товар "${game.name}"?`;
    
    if (!confirm(confirmMessage)) return;
    
    try {
        const response = await fetch('http://localhost:3000/api/games/' + gameId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: currentUser.id,
                isAdmin: isAdmin
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('✅ Товар удален!');
            // Перезагружаем страницу для обновления списка
            location.reload();
        } else {
            alert(`❌ Ошибка: ${result.error}`);
        }
    } catch (error) {
        console.error('❌ Ошибка при удалении товара:', error);
        alert('❌ Ошибка при удалении товара. Проверьте консоль для деталей.');
    }
};
```

---

## 🗃️ База данных

**Файл:** `database.db`

**Тип:** SQLite база данных

**Размер:** 20.00 КБ

**Содержимое:** *Бинарный файл SQLite*

---

## 📁 Структура проекта

```
frog-site/
│
├── 📄 index.html                 (Главная страница)
├── 📄 shop.html                  (Страница магазина)
├── 📄 basket.html                (Страница корзины)
├── 📄 login.html                 (Страница входа)
├── 📄 register.html              (Страница регистрации)
├── 📄 404.html                   (Страница 404)
│
├── 📂 css/
│   └── 📄 style.css              (Основные стили)
│
├── 📂 js/
│   ├── 📄 auth-header.js         (Логика авторизации в шапке)
│   ├── 📄 backend.js             (Функции для работы с БД)
│   ├── 📄 basket.js              (Логика корзины)
│   ├── 📄 log-reg.js             (Логика входа/регистрации)
│   ├── 📄 server.js              (Серверная часть - API)
│   └── 📄 shop.js                (Динамическая загрузка товаров)
│
├── 📂 assets/
│   ├── 📄 favicon.ico
│   ├── 📂 images/
│   │   ├── 📄 header-frog.svg
│   │   ├── 📂 cards/
│   │   │   ├── 📄 default-frog.jpg
│   │   │   └── ... (другие изображения товаров)
│   │   └── 📂 HomeImg/           (Изображения для карусели)
│   └── ... (другие ресурсы)
│
├── 📄 database.db                (SQLite база данных)
└── 📄 server.js                  (точка входа сервера - в папке js)
```

## 📊 Статистика

### Количество файлов по типам:
| Тип файла | Количество | Строк кода |
|-----------|------------|------------|
| CSS | 1 | 206 |
| HTML | 6 | 521 |
| JavaScript | 5 | 2,255 |
| **Итого** | **12** | **2,982** |

### Общий размер кода:
- **99.7 КБ**
- **+ база данных SQLite**

### Детали по файлам:
| Файл | Тип | Размер | Строк |
|------|-----|--------|-------|
| 404.html | HTML | 0.2 КБ | 11 |
| auth-header.js | JavaScript | 2.1 КБ | 68 |
| basket.html | HTML | 6.0 КБ | 165 |
| basket.js | JavaScript | 14.4 КБ | 421 |
| index.html | HTML | 4.3 КБ | 111 |
| log-reg.js | JavaScript | 4.0 КБ | 150 |
| login.html | HTML | 3.2 КБ | 83 |
| register.html | HTML | 3.2 КБ | 82 |
| server.js | JavaScript | 19.8 КБ | 626 |
| shop.html | HTML | 2.4 КБ | 69 |
| shop.js | JavaScript | 36.6 КБ | 990 |
| style.css | CSS | 3.5 КБ | 206 |

---

*Документация создана автоматически.*
