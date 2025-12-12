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