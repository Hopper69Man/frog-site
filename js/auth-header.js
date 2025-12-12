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