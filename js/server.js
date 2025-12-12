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