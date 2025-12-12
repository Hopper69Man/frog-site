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