# 📂 Сборник исходного кода

*Сгенерировано автоматически 13 файлов*

---

## 📄 Файл: `shop.html`

**Путь:** `/home/hopper-main/frog-site/shop.html`

**Размер:** 2574 байт

**Изменен:** 1765565150.8762176

**Содержимое:**

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

## 📄 Файл: `register.html`

**Путь:** `/home/hopper-main/frog-site/register.html`

**Размер:** 3500 байт

**Изменен:** 1765565150.8762176

**Содержимое:**

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

## 📄 Файл: `login.html`

**Путь:** `/home/hopper-main/frog-site/login.html`

**Размер:** 3420 байт

**Изменен:** 1765565150.6313999

**Содержимое:**

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

## 📄 Файл: `index.html`

**Путь:** `/home/hopper-main/frog-site/index.html`

**Размер:** 4721 байт

**Изменен:** 1765565150.6303866

**Содержимое:**

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

## 📄 Файл: `basket.html`

**Путь:** `/home/hopper-main/frog-site/basket.html`

**Размер:** 6767 байт

**Изменен:** 1765565150.6303866

**Содержимое:**

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

## 📄 Файл: `404.html`

**Путь:** `/home/hopper-main/frog-site/404.html`

**Размер:** 205 байт

**Изменен:** 1765565150.6263866

**Содержимое:**

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


---

*Всего файлов: 13*  
*Сгенерировано: copy.py*





# 📂 Сборник исходного кода

*Сгенерировано автоматически 6 файлов*

---

## 📄 Файл: `auth-header.js`

**Путь:** `/home/hopper-main/frog-site/js/auth-header.js`

**Размер:** 4167 байт

**Изменен:** 1765565150.6303866

**Содержимое:**

```javascript
// auth-header.js - управление кнопкой Войти/Выйти
document.addEventListener('DOMContentLoaded', function() {
    updateLoginButton();
});

function updateLoginButton() {
    const loginLink = document.getElementById('login-logout-link');
    if (!loginLink) return;
    
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        // Пользователь вошел - меняем на "Выйти"
        loginLink.href = 'javascript:void(0)'; // Отменяем переход
        loginLink.onclick = logout; // Вешаем функцию выхода
        
        // Меняем текст и стиль кнопки
        const button = loginLink.querySelector('button');
        if (button) {
            button.innerHTML = '🚪 Выйти';
            button.className = 'header-button btn btn-outline-danger'; // Красный цвет
        }
        
        // Добавляем информацию о пользователе рядом
        const userInfo = document.createElement('span');
        userInfo.className = 'text-light ms-2';
        userInfo.innerHTML = `👋 ${user.login}`;
        loginLink.parentNode.insertBefore(userInfo, loginLink.nextSibling);
        
    } else {
        // Пользователь не вошел - оставляем "Войти"
        const button = loginLink.querySelector('button');
        if (button) {
            button.innerHTML = 'Войти';
            button.className = 'header-button btn btn-light text-success';
        }
    }
}

function logout() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        
        // Обновляем кнопку сразу
        updateLoginButton();
        
        // Если на странице входа - обновляем страницу
        if (window.location.pathname.includes('login.html')) {
            window.location.reload();
        } else {
            // Иначе показываем сообщение
            alert('Вы успешно вышли');
        }
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

// Вызываем при загрузке
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

function logout() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        // Получаем текущего пользователя
        const user = JSON.parse(localStorage.getItem('user'));
        
        // Сохраняем ID старой корзины (опционально)
        if (user) {
            const oldCart = localStorage.getItem('cart');
            if (oldCart) {
                // Можно сохранить в sessionStorage для временного хранения
                sessionStorage.setItem(`old_cart_${user.id}`, oldCart);
            }
        }
        
        // Очищаем ВСЁ
        localStorage.clear();
        
        alert('Вы успешно вышли');
        location.reload();
    }
}

function login() {
    // При входе проверяем, есть ли сохраненная корзина
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const oldCart = sessionStorage.getItem(`old_cart_${user.id}`);
        if (oldCart) {
            if (confirm('Восстановить предыдущую корзину?')) {
                localStorage.setItem('cart', oldCart);
                sessionStorage.removeItem(`old_cart_${user.id}`);
            }
        }
    }
}
```

---

## 📄 Файл: `backend.js`

**Путь:** `/home/hopper-main/frog-site/js/backend.js`

**Размер:** 13443 байт

**Изменен:** 1765565150.6313999

**Содержимое:**

```javascript
const express = require('express');     // 1. Библиотека для сервера
const cors = require('cors');           // 2. Библиотека для разрешения запросов
const app = express();                  // 3. Создаем приложение
app.use(cors());                        // 4. Разрешаем запросы с браузера
app.use(express.json());                // 5. Умеем читать JSON
const PORT = 3000;                      // 6. Будем слушать порт 3000


const Database = require('better-sqlite3');

const db = new Database('./database.db', {verbose: console.log});

const tables = db.prepare(`
    SELECT name FROM sqlite_master
    WHERE type = 'table'
    `).all()

function testDB(){

  console.log('\n=== ТАБЛИЦЫ В БАЗЕ ДАННЫХ ===');
  console.log(`Найдено таблиц: ${tables.length}`);

  tables.forEach((table, index) => {
    console.log(`${index + 1}. ${table.name}`);
  });

  console.log(` Всего таблиц: ${tables.length}`);

  // 2. Для каждой таблицы показываем структуру и данные
  tables.forEach((table, index) => {
    console.log(`\n${index + 1}. ТАБЛИЦА: ${table.name}, \n`);
    
    // Получаем информацию о колонках
    try {

      const columns = db.prepare(`PRAGMA table_info('${table.name}')`).all();
      console.log('\n   Структура:');
      columns.forEach(col => {
        console.log(`     - ${col.name} (${col.type}) ${col.pk ? 'PRIMARY KEY' : ''}`);
      });
      
      const data = db.prepare(`SELECT * FROM '${table.name}'`).all();
      if (data.length > 0) {
        console.log('\nзаписи:\n');

        data.forEach(row => {
          console.log('     ', row);
        });
        
        const count = db.prepare(`SELECT COUNT(*) as total FROM '${table.name}'`).get();
        console.log(`   Всего записей: ${count.total}, \n`);

      } else {
        console.log('   (таблица пустая)');
      }
      
    } catch (error) {
      console.log('   (ошибка чтения таблицы):', error.message);
    }
  });
}

// Авторизация пользователя
function autorithation(username, password){
  const user = db.prepare(`SELECT * FROM 'User' WHERE login = ? AND password = ?`)
    .get(username, password);
    return user;
}

// Получить игры пользователя
function checkUserGame(userId){

  try {
    // Сначала проверяем существует ли пользователь
    const user = db.prepare(`SELECT * FROM 'User' WHERE id = ?`).get(userId);
    
    if (!user) {
      console.log(`??? Пользователь с ID ${userId} не существует в таблице User`);
      return { success: false, error: 'User not found' };
    }
    
    console.log(`!!! Пользователь найден: ${user.login} (${user.role})`);
    
    // Ищем его игры
    const userGames = db.prepare(`
      SELECT * FROM 'game' 
      WHERE id_user = ? 
      ORDER BY cost DESC
    `).all(userId);
    
    if (userGames.length === 0) {
      console.log(`У пользователя ${user.login} (ID: ${userId}) нет игр`);
      return { success: true, games: [], message: 'No games found' };
    }
    
    console.log(`!!! Игры пользователя ${user.login}: ${userGames.length} шт.`);
    userGames.forEach(game => {
      console.log(`   - ${game.name}: ${game.cost} руб.`);
    });
    
    return { success: true, games: userGames };
    
  } catch (error) {
    console.log('ХХХ Ошибка:', error.message);
    return { success: false, error: error.message };
  }  
}

// API для входа (использует функцию autorithation)
app.post('/api/login', (req, res) => {
    console.log('🔐 Получен запрос на вход:', req.body);
    
    const { username, password } = req.body;
    const user = autorithation(username, password);
    
    if (user) {
        console.log('✅ Пользователь найден:', user.login);
        res.json({ 
            success: true, 
            user: { 
                id: user.id, 
                login: user.login, 
                role: user.role 
            }
        });
    } else {
        console.log('❌ Пользователь не найден');
        res.status(401).json({ 
            success: false, 
            error: 'Неверный логин или пароль' 
        });
    }
});

// API для регистрации (использует функцию addUser)
app.post('/api/register', (req, res) => {
    console.log('📝 Получен запрос на регистрацию:', req.body);
    
    const { username, password } = req.body;
    const result = addUser(username, password);
    
    if (result.success) {
        console.log('✅ Пользователь добавлен');
        res.json({ 
            success: true, 
            userId: result.userId,
            message: 'Регистрация успешна!' 
        });
    } else {
        console.log('❌ Ошибка при регистрации');
        res.status(400).json({ 
            success: false, 
            error: result.error 
        });
    }
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
    console.log(`Для входа: POST http://localhost:${PORT}/api/login`);
    console.log(`Для регистрации: POST http://localhost:${PORT}/api/register`);
});

testDB()
checkUserGame(userId)


db.close();







/*
██╗░░░██╗░██████╗███████╗██████╗░
██║░░░██║██╔════╝██╔════╝██╔══██╗
██║░░░██║╚█████╗░█████╗░░██████╔╝
██║░░░██║░╚═══██╗██╔══╝░░██╔══██╗
╚██████╔╝██████╔╝███████╗██║░░██║
░╚═════╝░╚═════╝░╚══════╝╚═╝░░╚═╝
*/

// ДОБАВИТЬ нового пользователя
function addUser(login, password, role = 'user') {
  try {
    const result = db.prepare(`
      INSERT INTO 'User' (login, password, role) 
      VALUES (?, ?, ?)
    `).run(login, password, role);
    
    console.log(`!!! Добавлен пользователь: ${login} (ID: ${result.lastInsertRowid})`);
    return { success: true, userId: result.lastInsertRowid };
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      console.log(`??? Ошибка: пользователь ${login} уже существует`);
    } else {
      console.log('ХХХ Ошибка добавления:', error.message);
    }
    return { success: false, error: error.message };
  }
}

// УДАЛИТЬ пользователя по ID
function deleteUser(userId) {
  try {
    // Сначала удаляем все игры пользователя
    db.prepare(`DELETE FROM 'game' WHERE id_user = ?`).run(userId);
    
    // Затем удаляем самого пользователя
    const result = db.prepare(`DELETE FROM 'User' WHERE id = ?`).run(userId);
    
    if (result.changes > 0) {
      console.log(`!!! Удален пользователь ID: ${userId}`);
      return { success: true, deletedCount: result.changes };
    } else {
      console.log(`??? Пользователь ID ${userId} не найден`);
      return { success: false, deletedCount: 0 };
    }
  } catch (error) {
    console.log('ХХХ Ошибка удаления:', error.message);
    return { success: false, error: error.message };
  }
}

// ИЗМЕНИТЬ данные пользователя
function updateUser(userId, updates) {
  try {
    // updates = { login: 'new_login', password: 'new_pass', role: 'new_role' }
    const fields = [];
    const values = [];
    
    if (updates.login !== undefined) {
      fields.push('login = ?');
      values.push(updates.login);
    }
    if (updates.password !== undefined) {
      fields.push('password = ?');
      values.push(updates.password);
    }
    if (updates.role !== undefined) {
      fields.push('role = ?');
      values.push(updates.role);
    }
    
    if (fields.length === 0) {
      console.log('??? Нечего обновлять');
      return { success: false };
    }
    
    values.push(userId); // добавляем userId в конец для WHERE
    
    const sql = `UPDATE 'User' SET ${fields.join(', ')} WHERE id = ?`;
    const result = db.prepare(sql).run(...values);
    
    if (result.changes > 0) {
      console.log(`!!! Обновлен пользователь ID: ${userId}`);
      return { success: true, updatedCount: result.changes };
    } else {
      console.log(`??? Пользователь ID ${userId} не найден`);
      return { success: false, updatedCount: 0 };
    }
  } catch (error) {
    console.log('ХХХ Ошибка обновления:', error.message);
    return { success: false, error: error.message };
  }
}






/*
░██████╗░░█████╗░███╗░░░███╗███████╗
██╔════╝░██╔══██╗████╗░████║██╔════╝
██║░░██╗░███████║██╔████╔██║█████╗░░
██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░
╚██████╔╝██║░░██║██║░╚═╝░██║███████╗
░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝
*/

// ДОБАВИТЬ новую игру
function addGame(userId, name, cost, picture = '') {
  try {
    // Проверяем, существует ли пользователь
    const user = db.prepare(`SELECT * FROM 'User' WHERE id = ?`).get(userId);
    if (!user) {
      console.log(`??? Пользователь ID ${userId} не существует`);
      return { success: false, error: '??? Пользователь не найден' };
    }
    
    const result = db.prepare(`
      INSERT INTO 'game' (id_user, name, cost, picture) 
      VALUES (?, ?, ?, ?)
    `).run(userId, name, cost, picture);
    
    console.log(`!!! Добавлена игрушка: ${name} (ID: ${result.lastInsertRowid})`);
    return { success: true, gameId: result.lastInsertRowid };
  } catch (error) {
    console.log('ХХХ Ошибка добавления игры:', error.message);
    return { success: false, error: error.message };
  }
}

// УДАЛИТЬ игру по ID
function deleteGame(gameId) {
  try {
    const result = db.prepare(`DELETE FROM 'game' WHERE id = ?`).run(gameId);
    
    if (result.changes > 0) {
      console.log(`!!! Удалена игра ID: ${gameId}`);
      return { success: true, deletedCount: result.changes };
    } else {
      console.log(`??? Игра ID ${gameId} не найдена`);
      return { success: false, deletedCount: 0 };
    }
  } catch (error) {
    console.log('ХХХ Ошибка удаления игры:', error.message);
    return { success: false, error: error.message };
  }
}

// ИЗМЕНИТЬ данные игры
function updateGame(gameId, updates) {
  try {
    // updates = { name: 'new_name', cost: 999, picture: 'new.png' }
    const fields = [];
    const values = [];
    
    if (updates.name !== undefined) {
      fields.push('name = ?');
      values.push(updates.name);
    }
    if (updates.cost !== undefined) {
      fields.push('cost = ?');
      values.push(updates.cost);
    }
    if (updates.picture !== undefined) {
      fields.push('picture = ?');
      values.push(updates.picture);
    }
    if (updates.id_user !== undefined) {
      // Проверяем нового владельца
      const user = db.prepare(`SELECT * FROM 'User' WHERE id = ?`).get(updates.id_user);
      if (!user) {
        console.log(`??? Пользователь ID ${updates.id_user} не существует`);
        return { success: false, error: '??? User not found' };
      }
      fields.push('id_user = ?');
      values.push(updates.id_user);
    }
    
    if (fields.length === 0) {
      console.log('??? Нечего обновлять');
      return { success: false };
    }
    
    values.push(gameId); // добавляем gameId в конец для WHERE
    
    const sql = `UPDATE 'game' SET ${fields.join(', ')} WHERE id = ?`;
    const result = db.prepare(sql).run(...values);
    
    if (result.changes > 0) {
      console.log(`!!! Обновлена игра ID: ${gameId}`);
      return { success: true, updatedCount: result.changes };
    } else {
      console.log(`??? Игра ID ${gameId} не найдена`);
      return { success: false, updatedCount: 0 };
    }
  } catch (error) {
    console.log('ХХХ Ошибка обновления игры:', error.message);
    return { success: false, error: error.message };
  }
}
```

---

## 📄 Файл: `basket.js`

**Путь:** `/home/hopper-main/frog-site/js/basket.js`

**Размер:** 16627 байт

**Изменен:** 1765565150.6313999

**Содержимое:**

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

## 📄 Файл: `log-reg.js`

**Путь:** `/home/hopper-main/frog-site/js/log-reg.js`

**Размер:** 4553 байт

**Изменен:** 1765565150.6313999

**Содержимое:**

```javascript
let mailBox = document.getElementById("inputMail");
let passwordBox = document.getElementById("inputPassword");

console.log(mailBox.value);
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

## 📄 Файл: `server.js`

**Путь:** `/home/hopper-main/frog-site/js/server.js`

**Размер:** 9112 байт

**Изменен:** 1765565150.6313999

**Содержимое:**

```javascript
// ==================== ПОДКЛЮЧАЕМ БИБЛИОТЕКИ ====================
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// ==================== СОЗДАЕМ СЕРВЕР ====================
const app = express();
app.use(cors());                        // Разрешаем запросы из браузера
app.use(express.json());                // Умеем читать JSON
const PORT = 3000;

// ==================== ПОДКЛЮЧАЕМ БАЗУ ДАННЫХ ====================
const db = new Database('./database.db');

console.log('Подключаюсь к базе данных...');
try {
    // Проверяем подключение
    const test = db.prepare('SELECT 1 as test').get();
    console.log('База данных подключена успешно!');
    
    // Показываем таблицы (твоя функция testDB немного изменена)
    const tables = db.prepare(`SELECT name FROM sqlite_master WHERE type = 'table'`).all();
    console.log(`Найдено таблиц: ${tables.length}`);
    tables.forEach(table => {
        console.log(`   - ${table.name}`);
    });
} catch (error) {
    console.error('Ошибка подключения к БД:', error.message);
    process.exit(1);
}

// ==================== ТВОИ ФУНКЦИИ ИЗ backend.js ====================

// Авторизация пользователя
function autorithation(username, password) {
    const user = db.prepare(`SELECT * FROM 'User' WHERE login = ? AND password = ?`)
        .get(username, password);
    return user;
}

// Добавить нового пользователя
function addUser(login, password, role = 'user') {
    try {
        const result = db.prepare(`
            INSERT INTO 'User' (login, password, role) 
            VALUES (?, ?, ?)
        `).run(login, password, role);
        
        console.log(`Добавлен пользователь: ${login} (ID: ${result.lastInsertRowid})`);
        return { success: true, userId: result.lastInsertRowid };
    } catch (error) {
        console.log('Ошибка добавления:', error.message);
        return { success: false, error: error.message };
    }
}

// Получить игры пользователя (твоя функция)
function checkUserGame(userId) {
    try {
        const user = db.prepare(`SELECT * FROM 'User' WHERE id = ?`).get(userId);
        
        if (!user) {
            return { success: false, error: 'User not found' };
        }
        
        const userGames = db.prepare(`
            SELECT * FROM 'game' 
            WHERE id_user = ? 
            ORDER BY cost DESC
        `).all(userId);
        
        return { success: true, games: userGames };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Остальные твои функции тоже можно добавить позже...

// ==================== API ДЛЯ БРАУЗЕРА ====================

// 1. Проверка, что сервер работает
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'Сервер магазина лягушек работает! 🐸',
        time: new Date().toLocaleString('ru-RU')
    });
});

// 2. Вход пользователя
app.post('/api/login', (req, res) => {
    console.log('Запрос на вход от:', req.body.username);
    
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Логин и пароль обязательны' 
            });
        }
        
        // Используем твою функцию autorithation
        const user = autorithation(username, password);
        
        if (user) {
            // Успешный вход
            res.json({ 
                success: true, 
                user: {
                    id: user.id,
                    login: user.login,
                    role: user.role
                },
                message: 'Вход выполнен успешно!'
            });
        } else {
            // Неверные данные
            res.status(401).json({ 
                success: false, 
                error: 'Неверный логин или пароль' 
            });
        }
    } catch (error) {
        console.error('Ошибка при входе:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Внутренняя ошибка сервера' 
        });
    }
});

// 3. Регистрация пользователя
app.post('/api/register', (req, res) => {
    console.log('Запрос на регистрацию:', req.body.username);
    
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Логин и пароль обязательны' 
            });
        }
        
        // Используем твою функцию addUser
        const result = addUser(username, password);
        
        if (result.success) {
            res.json({ 
                success: true, 
                userId: result.userId,
                message: 'Регистрация успешна! Теперь войдите.'
            });
        } else {
            res.status(400).json({ 
                success: false, 
                error: result.error 
            });
        }
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Внутренняя ошибка сервера' 
        });
    }
});

// 4. Получить игры пользователя
app.get('/api/user/:id/games', (req, res) => {
    const userId = parseInt(req.params.id);
    
    try {
        // Используем твою функцию checkUserGame
        const result = checkUserGame(userId);
        
        if (result.success) {
            res.json({ 
                success: true, 
                games: result.games 
            });
        } else {
            res.status(404).json({ 
                success: false, 
                error: result.error 
            });
        }
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// 5. Получить ВСЕ игры для магазина
app.get('/api/games', (req, res) => {
    try {
        console.log('Запрос всех игр для магазина');
        
        // Получаем игры с информацией о владельце
        const games = db.prepare(`
            SELECT g.*, u.login as owner_login 
            FROM 'game' g
            LEFT JOIN 'User' u ON g.id_user = u.id
            ORDER BY g.cost DESC
        `).all();
        
        console.log(`Найдено игр: ${games.length}`);
        res.json({ 
            success: true, 
            games: games,
            count: games.length
        });
        
    } catch (error) {
        console.error('Ошибка получения игр:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Внутренняя ошибка сервера' 
        });
    }
});

// 6. Получить ОДНУ игру по ID
app.get('/api/games/:id', (req, res) => {
    try {
        const gameId = parseInt(req.params.id);
        
        const game = db.prepare(`
            SELECT g.*, u.login as owner_login 
            FROM 'game' g
            LEFT JOIN 'User' u ON g.id_user = u.id
            WHERE g.id = ?
        `).get(gameId);
        
        if (!game) {
            return res.status(404).json({ 
                success: false, 
                error: 'Игра не найдена' 
            });
        }
        
        res.json({ 
            success: true, 
            game: game 
        });
        
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});


// ==================== ЗАПУСК СЕРВЕРА ====================
app.listen(PORT, () => {
    console.log('\n==========================================');
    console.log('Сервер запущен!');
    console.log(`Адрес: http://localhost:${PORT}`);
    console.log('\nДоступные API:');
    console.log(`   GET  http://localhost:${PORT}/api/test`);
    console.log(`   POST http://localhost:${PORT}/api/login`);
    console.log(`   POST http://localhost:${PORT}/api/register`);
    console.log(`   GET  http://localhost:${PORT}/api/user/1/games`);
    console.log('==========================================\n');
});
```

---

shop.js

// shop.js - динамическая загрузка карточек с структурой
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница магазина загружена');
    
    const cardsContainer = document.getElementById('cards-net');
    const API_URL = 'http://localhost:3000/api';
    const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    
    // Загружаем игры
    loadGames();
    
    // Функция загрузки игр
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
            
            // Делаем запрос к серверу
            const response = await fetch(`${API_URL}/games`);
            
            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                console.log(`✅ Загружено ${data.games.length} игр`);
                displayGames(data.games);
            } else {
                throw new Error(data.error || 'Ошибка загрузки игр');
            }
            
        } catch (error) {
            console.error('Ошибка загрузки игр:', error);
            
            // Показываем сообщение об ошибке
            cardsContainer.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Ошибка загрузки!</h4>
                    <p>Не удалось загрузить игры. Попробуйте обновить страницу.</p>
                    <p class="mb-0 small">${error.message}</p>
                </div>
            `;
        }
    }
    
    // Функция отображения игр
    function displayGames(games) {
        if (games.length === 0) {
            cardsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h3 class="text-muted">😔 Пока нет игрушек в магазине</h3>
                    <p>Будьте первым, кто добавит свою лягушку!</p>
                </div>
            `;
            return;
        }
        
        // Очищаем контейнер
        cardsContainer.innerHTML = '';
        
        // Создаем карточки для каждой игры
        games.forEach(game => {
            const card = createGameCard(game);
            cardsContainer.appendChild(card);
        });
        
        // Добавляем обработчики после создания карточек
        setupEventListeners();
    }
    
    // Функция создания карточки по шаблону
    function createGameCard(game) {
        // Создаем div для карточки
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-4';
        cardDiv.style.width = '18rem';
        cardDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        cardDiv.style.transition = 'all 0.3s ease';
        cardDiv.dataset.gameId = game.id;
        
        // Эффект при наведении
        cardDiv.addEventListener('mouseenter', () => {
            cardDiv.style.transform = 'scale(1.02)';
            cardDiv.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });
        
        cardDiv.addEventListener('mouseleave', () => {
            cardDiv.style.transform = 'scale(1)';
            cardDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
        
        // Форматируем цену
        const formattedPrice = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(game.cost);
        
        // Проверяем картинку
        let imageSrc = './assets/images/cards/';
        if (game.picture && game.picture.trim() !== '') {
            imageSrc += game.picture;
        } else {
            imageSrc += 'aassets/images/default-frog.jpgult-frog.jpg'; // картинка по умолчанию
        }
        
        // Создаем карточку по шаблону
        cardDiv.innerHTML = `
            <img src="${imageSrc}" 
                 class="card-img-top" 
                 alt="${game.name}"
                 style="height: 200px; object-fit: cover;"
                 onerror="this.onerror=null; this.src='./assets/images/cards/default-frog.jpg'">
            
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title mb-0">${game.name}</h5>
                    ${game.id_user === (currentUser?.id || 0) 
                        ? '<span class="badge bg-info ms-2">Ваша</span>' 
                        : ''}
                </div>
                
                <div class="mb-3">
                    <span class="badge bg-success">В наличии</span>
                    <span class="badge bg-secondary ms-1">ID: ${game.id}</span>
                </div>
                
                <p class="card-text">
                    ${game.description || 'Мягкая игрушка лягушка. Отличный подарок!'}
                </p>
                
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <h5 class="text-success mb-0">${formattedPrice}</h5>
                    <button class="btn btn-primary add-to-cart-btn" 
                            data-game-id="${game.id}">
                        🛒 В корзину
                    </button>
                </div>
                
                <div class="mt-2 text-end">
                    <small class="text-muted">
                        Владелец: ${game.owner_login || 'Неизвестно'}
                    </small>
                </div>
            </div>
        `;
        
        return cardDiv;
    }
    
    // Настройка обработчиков событий
    function setupEventListeners() {
        // Обработчик для кнопок "В корзину"
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const gameId = this.getAttribute('data-game-id');
                addToCart(gameId, this);
            });
        });
    }
    
    // Функция добавления в корзину
    function addToCart(gameId, button) {
        if (!currentUser) {
            alert('❌ Сначала войдите в систему!');
            window.location.href = './login.html';
            return;
        }
        
        // Проверяем, если это наша игра
        const gameCard = document.querySelector(`[data-game-id="${gameId}"]`);
        if (gameCard.querySelector('.badge.bg-info')) {
            if (!confirm('Это ваша собственная игра. Вы уверены, что хотите купить её у себя?')) {
                return;
            }
        }
        
        // Сохраняем оригинальный текст
        const originalText = button.innerHTML;
        const originalClass = button.className;
        
        // Показываем загрузку
        button.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
        button.className = 'btn btn-secondary';
        button.disabled = true;
        
        // Имитация добавления в корзину
        setTimeout(() => {
            // Получаем текущую корзину
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            
            // Проверяем, не добавлена ли уже игра
            if (cart.includes(gameId)) {
                button.innerHTML = '✅ Уже в корзине';
            } else {
                // Добавляем игру в корзину
                cart.push(gameId);
                localStorage.setItem('cart', JSON.stringify(cart));
                button.innerHTML = '✅ Добавлено!';
                
                // Обновляем счетчик в заголовке если есть
                updateCartCount();
            }
            
            // Возвращаем кнопку в исходное состояние через 1.5 секунды
            setTimeout(() => {
                button.innerHTML = originalText;
                button.className = originalClass;
                button.disabled = false;
            }, 1500);
            
            console.log(`🛒 Игра ${gameId} добавлена в корзину`);
        }, 800);
    }
    
    // Функция обновления счетчика корзины
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartCount = document.querySelector('#cart-count');
        
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
        
        // Если нет элемента счетчика, можно создать его
        const cartButton = document.querySelector('a[href="./basket.html"]');
        if (cartButton && !cartButton.querySelector('.badge')) {
            const badge = document.createElement('span');
            badge.className = 'badge bg-danger ms-1';
            badge.id = 'cart-count';
            badge.textContent = cart.length;
            cartButton.appendChild(badge);
        }
    }
    
    // Инициализация счетчика корзины
    updateCartCount();
});


---

*Всего файлов: 6*  
*Сгенерировано: copy.py*



css/style.css


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
    justify-content: center;
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
    display: flex;
    flex-wrap: wrap; /* Это главное - позволяет переносу строк */
    width: 100%;
    justify-content: center; /* Центрируем карточки */
    gap: 1em; /* Отступы между карточками */
}

.card{
    margin: 0.35em;
    min-width: 20em; /* Уменьшаем немного */
    max-width: 25em;
    min-height: 18em; /* Увеличиваем высоту для контента */
    max-height: none; /* Убираем максимальную высоту */
    flex-shrink: 0; /* Не даем сжиматься */ 
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
  color: #333; /* Меняет синий цвет (например, на темно-серый) */
}