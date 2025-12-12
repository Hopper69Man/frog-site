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