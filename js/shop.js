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