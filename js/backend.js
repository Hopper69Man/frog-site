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