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